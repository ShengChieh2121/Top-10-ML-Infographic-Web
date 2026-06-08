import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import { ProgressBar } from "@/components/ProgressBar";
import { getChapter } from "@/lib/api";

type ChapterPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { id } = await params;
  const chapter = await getChapter(id);

  return (
    <div className="space-y-6">
      <Link href="/chapters" className="inline-flex items-center gap-2 text-sm font-semibold text-tech">
        <ArrowLeft className="h-4 w-4" />
        返回章節列表
      </Link>
      <article className="rounded-lg bg-white p-6 shadow-soft">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
          <div>
            <p className="text-sm font-semibold text-tech">Chapter {chapter.order}</p>
            <h1 className="mt-2 text-3xl font-bold text-ink">{chapter.title_zh}</h1>
            <p className="mt-1 text-slate-500">{chapter.title_en}</p>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded bg-emerald-50 px-3 py-2 text-sm font-semibold text-aqua">
            <CheckCircle2 className="h-4 w-4" />
            {chapter.completed ? "已完成" : "研讀中"}
          </span>
        </div>
        <div className="mt-6">
          <div className="mb-2 flex justify-between text-sm text-slate-500">
            <span>章節完成狀態</span>
            <span>{chapter.progress}%</span>
          </div>
          <ProgressBar value={chapter.progress} />
        </div>
        <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_280px]">
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-bold text-ink">章節內容</h2>
              <p className="mt-3 leading-8 text-slate-600">{chapter.content}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-ink">研讀重點</h2>
              <ul className="mt-3 grid gap-2">
                {chapter.key_points.map((point) => (
                  <li key={point} className="rounded border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="rounded-lg border border-slate-200 bg-mist p-4">
            <h2 className="font-bold text-ink">下一步</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              完成本章後可進入小測驗，之後會串接學習紀錄與推薦引擎。
            </p>
            <Link
              href={`/quiz/${chapter.id}`}
              className="mt-4 inline-flex rounded bg-violet px-4 py-2 text-sm font-semibold text-white hover:bg-navy"
            >
              前往小測驗
            </Link>
          </aside>
        </section>
      </article>
    </div>
  );
}
