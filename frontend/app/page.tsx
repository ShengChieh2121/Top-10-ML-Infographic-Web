import Link from "next/link";
import { ArrowRight, BookOpen, BrainCircuit } from "lucide-react";

import { ChapterCard } from "@/components/ChapterCard";
import { getChapters } from "@/lib/api";

export default async function HomePage() {
  const chapters = await getChapters();

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-lg bg-navy text-white shadow-soft">
        <div className="grid gap-8 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-10">
          <div className="flex flex-col justify-center">
            <p className="inline-flex w-fit items-center gap-2 rounded bg-white/10 px-3 py-1 text-sm text-cyan-100">
              <BrainCircuit className="h-4 w-4" />
              AI 教材研讀 MVP
            </p>
            <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
              機器學習十大演算法互動研讀平台
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">
              以 PDF 研讀教材為基礎，逐步擴充成可追蹤進度、練習測驗、查詢名詞與瀏覽原始文件的自學平台。
            </p>
            <Link
              href="/chapters"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded bg-aqua px-5 py-3 text-sm font-bold text-white transition hover:bg-tech"
            >
              開始學習
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/10 p-5">
            <BookOpen className="h-10 w-10 text-cyan-200" />
            <p className="mt-5 text-sm leading-7 text-slate-100">
              下一階段可加入 PDF 解析、章節內容生成、互動圖表、測驗紀錄與語意搜尋。此版本先建立乾淨的全端基礎。
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded bg-white/10 p-3">
                <p className="text-2xl font-bold">10</p>
                <p className="text-xs text-slate-300">章節</p>
              </div>
              <div className="rounded bg-white/10 p-3">
                <p className="text-2xl font-bold">6</p>
                <p className="text-xs text-slate-300">API</p>
              </div>
              <div className="rounded bg-white/10 p-3">
                <p className="text-2xl font-bold">MVP</p>
                <p className="text-xs text-slate-300">架構</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-ink">十大演算法</h2>
            <p className="mt-1 text-sm text-slate-500">從基礎模型到深度學習，依序建立完整地圖。</p>
          </div>
          <Link href="/dashboard" className="text-sm font-semibold text-tech hover:text-navy">
            查看進度
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {chapters.map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter} />
          ))}
        </div>
      </section>
    </div>
  );
}
