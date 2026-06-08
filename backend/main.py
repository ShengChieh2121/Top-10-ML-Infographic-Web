import json
from pathlib import Path

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware

from models.schemas import Chapter, GlossaryTerm, Quiz, SearchResult


BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"

app = FastAPI(
    title="ML Top 10 Learning Platform API",
    description="MVP API for an interactive machine learning learning platform.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def load_json(filename: str):
    with (DATA_DIR / filename).open("r", encoding="utf-8") as file:
        return json.load(file)


@app.get("/api/health")
def health():
    return {"status": "ok", "service": "ml-top10-learning-api"}


@app.get("/api/chapters", response_model=list[Chapter])
def get_chapters():
    return load_json("chapters.json")


@app.get("/api/chapters/{chapter_id}", response_model=Chapter)
def get_chapter(chapter_id: str):
    chapters = load_json("chapters.json")
    for chapter in chapters:
        if chapter["id"] == chapter_id:
            return chapter
    raise HTTPException(status_code=404, detail="Chapter not found")


@app.get("/api/quiz/{chapter_id}", response_model=Quiz)
def get_quiz(chapter_id: str):
    quizzes = load_json("quizzes.json")
    if chapter_id in quizzes:
        return quizzes[chapter_id]

    chapters = load_json("chapters.json")
    chapter = next((item for item in chapters if item["id"] == chapter_id), None)
    if chapter is None:
        raise HTTPException(status_code=404, detail="Chapter not found")

    return {
        "chapter_id": chapter_id,
        "title": f'{chapter["title_zh"]}小測驗',
        "score": None,
        "questions": [
            {
                "id": "q1",
                "question": f'{chapter["title_zh"]}最適合先理解哪個面向？',
                "options": [
                    {"id": "a", "text": "任務類型與資料型態"},
                    {"id": "b", "text": "網頁排版技巧"},
                    {"id": "c", "text": "資料夾命名規則"},
                    {"id": "d", "text": "伺服器硬體品牌"},
                ],
                "answer": "a",
                "explanation": "學習演算法時，先掌握適合的任務、輸入資料與輸出目標最重要。",
            }
        ],
    }


@app.get("/api/glossary", response_model=list[GlossaryTerm])
def get_glossary():
    return load_json("glossary.json")


@app.get("/api/search", response_model=list[SearchResult])
def search(q: str = Query(default="", description="Search keyword")):
    query = q.strip().lower()
    if not query:
        return []

    chapters = load_json("chapters.json")
    glossary = load_json("glossary.json")
    results: list[dict] = []

    for chapter in chapters:
        haystack = " ".join(
            [
                chapter["title_en"],
                chapter["title_zh"],
                chapter["summary"],
                chapter["content"],
            ]
        ).lower()
        if query in haystack:
            results.append(
                {
                    "type": "chapter",
                    "id": chapter["id"],
                    "title": f'{chapter["title_en"]} {chapter["title_zh"]}',
                    "snippet": chapter["summary"],
                }
            )

    for term in glossary:
        haystack = " ".join(
            [term["term_en"], term["term_zh"], term["definition"]]
        ).lower()
        if query in haystack:
            results.append(
                {
                    "type": "glossary",
                    "id": term["id"],
                    "title": f'{term["term_en"]} {term["term_zh"]}',
                    "snippet": term["definition"],
                }
            )

    return results
