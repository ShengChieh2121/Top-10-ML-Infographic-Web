import { ChapterCard } from "@/components/ChapterCard";
import { getChapters } from "@/lib/api";

export default async function ChaptersPage() {
  const chapters = await getChapters();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-ink">章節列表</h1>
        <p className="mt-2 text-slate-500">十大機器學習演算法以卡片呈現，方便依序研讀與測驗。</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {chapters.map((chapter) => (
          <ChapterCard key={chapter.id} chapter={chapter} />
        ))}
      </div>
    </div>
  );
}
