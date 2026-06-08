"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import { searchLearningContent } from "@/lib/api";
import type { SearchResult } from "@/lib/types";

export function SearchPanel() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    setLoading(true);
    setResults(await searchLearningContent(query));
    setLoading(false);
  }

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="flex min-h-11 flex-1 items-center gap-3 rounded border border-slate-200 bg-slate-50 px-3">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜尋演算法、名詞或章節重點"
            className="w-full bg-transparent text-sm outline-none"
          />
        </label>
        <button
          onClick={handleSearch}
          className="min-h-11 rounded bg-tech px-5 text-sm font-semibold text-white transition hover:bg-navy"
        >
          搜尋
        </button>
      </div>
      <div className="mt-5 space-y-3">
        {loading && <p className="text-sm text-slate-500">搜尋中...</p>}
        {!loading && results.length === 0 && (
          <p className="text-sm text-slate-500">先輸入關鍵字，之後可接上全文索引與 PDF 內容搜尋。</p>
        )}
        {results.map((result) => (
          <div key={`${result.type}-${result.id}`} className="rounded border border-slate-200 p-4">
            <p className="text-xs font-semibold uppercase text-violet">{result.type}</p>
            <h3 className="mt-1 font-semibold text-ink">{result.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{result.snippet}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
