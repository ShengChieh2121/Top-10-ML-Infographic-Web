import { SearchPanel } from "@/components/SearchPanel";

export default function SearchPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-ink">搜尋</h1>
        <p className="mt-2 text-slate-500">先建立搜尋介面，後端已提供基本章節與名詞查詢 API。</p>
      </div>
      <SearchPanel />
    </div>
  );
}
