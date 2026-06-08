import { fallbackChapters, fallbackGlossary, fallbackQuiz } from "./fallback-data";
import type { Chapter, GlossaryTerm, Quiz, SearchResult } from "./types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000";

async function fetchJson<T>(path: string, fallback: T): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${path}`, { cache: "no-store" });
    if (!response.ok) return fallback;
    return response.json();
  } catch {
    return fallback;
  }
}

export function getChapters() {
  return fetchJson<Chapter[]>("/api/chapters", fallbackChapters);
}

export async function getChapter(id: string) {
  const chapters = await getChapters();
  return chapters.find((chapter) => chapter.id === id) ?? chapters[0];
}

export function getQuiz(id: string) {
  return fetchJson<Quiz>(`/api/quiz/${id}`, { ...fallbackQuiz, chapter_id: id });
}

export function getGlossary() {
  return fetchJson<GlossaryTerm[]>("/api/glossary", fallbackGlossary);
}

export function searchLearningContent(query: string) {
  return fetchJson<SearchResult[]>(
    `/api/search?q=${encodeURIComponent(query)}`,
    []
  );
}
