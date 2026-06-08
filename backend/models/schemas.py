from pydantic import BaseModel


class Chapter(BaseModel):
    id: str
    order: int
    title_en: str
    title_zh: str
    category: str
    difficulty: str
    estimated_minutes: int
    completed: bool
    progress: int
    summary: str
    key_points: list[str]
    content: str


class QuizOption(BaseModel):
    id: str
    text: str


class QuizQuestion(BaseModel):
    id: str
    question: str
    options: list[QuizOption]
    answer: str
    explanation: str


class Quiz(BaseModel):
    chapter_id: str
    title: str
    score: int | None = None
    questions: list[QuizQuestion]


class GlossaryTerm(BaseModel):
    id: str
    term_en: str
    term_zh: str
    definition: str
    related_chapters: list[str]


class SearchResult(BaseModel):
    type: str
    id: str
    title: str
    snippet: str
