export type Chapter = {
  id: string;
  order: number;
  title_en: string;
  title_zh: string;
  category: string;
  difficulty: string;
  estimated_minutes: number;
  completed: boolean;
  progress: number;
  summary: string;
  key_points: string[];
  content: string;
};

export type Quiz = {
  chapter_id: string;
  title: string;
  score: number | null;
  questions: {
    id: string;
    question: string;
    options: { id: string; text: string }[];
    answer: string;
    explanation: string;
  }[];
};

export type GlossaryTerm = {
  id: string;
  term_en: string;
  term_zh: string;
  definition: string;
  related_chapters: string[];
};

export type SearchResult = {
  type: string;
  id: string;
  title: string;
  snippet: string;
};
