import Link from "next/link";
import { CheckCircle2, Clock, PlayCircle } from "lucide-react";

import { ProgressBar } from "./ProgressBar";
import type { Chapter } from "@/lib/types";

type ChapterCardProps = {
  chapter: Chapter;
};

export function ChapterCard({ chapter }: ChapterCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-tech">Chapter {chapter.order}</p>
          <h3 className="mt-1 text-lg font-bold text-ink">{chapter.title_zh}</h3>
          <p className="text-sm text-slate-500">{chapter.title_en}</p>
        </div>
        {chapter.completed ? (
          <CheckCircle2 className="h-6 w-6 shrink-0 text-aqua" aria-label="已完成" />
        ) : (
          <PlayCircle className="h-6 w-6 shrink-0 text-violet" aria-label="未完成" />
        )}
      </div>
      <p className="mt-4 min-h-12 text-sm leading-6 text-slate-600">{chapter.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <span className="rounded bg-slate-100 px-2 py-1 text-slate-700">{chapter.category}</span>
        <span className="rounded bg-blue-50 px-2 py-1 text-tech">{chapter.difficulty}</span>
        <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-1 text-aqua">
          <Clock className="h-3.5 w-3.5" />
          {chapter.estimated_minutes} 分鐘
        </span>
      </div>
      <div className="mt-5">
        <div className="mb-2 flex justify-between text-xs text-slate-500">
          <span>完成進度</span>
          <span>{chapter.progress}%</span>
        </div>
        <ProgressBar value={chapter.progress} />
      </div>
      <div className="mt-5 flex gap-3">
        <Link
          href={`/chapters/${chapter.id}`}
          className="rounded bg-navy px-3 py-2 text-sm font-semibold text-white transition hover:bg-tech"
        >
          開始學習
        </Link>
        <Link
          href={`/quiz/${chapter.id}`}
          className="rounded border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-tech hover:text-tech"
        >
          小測驗
        </Link>
      </div>
    </article>
  );
}
