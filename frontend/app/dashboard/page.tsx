import Link from "next/link";
import { Award, CheckCircle2, Compass } from "lucide-react";

import { ProgressBar } from "@/components/ProgressBar";
import { getChapters } from "@/lib/api";

export default async function DashboardPage() {
  const chapters = await getChapters();
  const completed = chapters.filter((chapter) => chapter.completed).length;
  const averageProgress = Math.round(
    chapters.reduce((sum, chapter) => sum + chapter.progress, 0) / chapters.length
  );
  const nextChapter =
    chapters.find((chapter) => !chapter.completed && chapter.progress > 0) ??
    chapters.find((chapter) => !chapter.completed) ??
    chapters[0];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-ink">學習進度總覽</h1>
        <p className="mt-2 text-slate-500">追蹤章節完成狀態、測驗摘要與下一步推薦。</p>
      </div>
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg bg-white p-5 shadow-soft">
          <CheckCircle2 className="h-6 w-6 text-aqua" />
          <p className="mt-4 text-3xl font-bold">{completed} / {chapters.length}</p>
          <p className="text-sm text-slate-500">已完成章節數</p>
        </div>
        <div className="rounded-lg bg-white p-5 shadow-soft">
          <Award className="h-6 w-6 text-violet" />
          <p className="mt-4 text-3xl font-bold">85</p>
          <p className="text-sm text-slate-500">測驗成績摘要</p>
        </div>
        <div className="rounded-lg bg-white p-5 shadow-soft">
          <Compass className="h-6 w-6 text-tech" />
          <p className="mt-4 text-lg font-bold">{nextChapter.title_zh}</p>
          <p className="text-sm text-slate-500">推薦下一章</p>
        </div>
      </section>
      <section className="rounded-lg bg-white p-6 shadow-soft">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-ink">整體進度</h2>
          <span className="text-sm font-semibold text-tech">{averageProgress}%</span>
        </div>
        <div className="mt-4">
          <ProgressBar value={averageProgress} />
        </div>
        <Link
          href={`/chapters/${nextChapter.id}`}
          className="mt-6 inline-flex rounded bg-navy px-4 py-2 text-sm font-semibold text-white hover:bg-tech"
        >
          繼續學習
        </Link>
      </section>
    </div>
  );
}
