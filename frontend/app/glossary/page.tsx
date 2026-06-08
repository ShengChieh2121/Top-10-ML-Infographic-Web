import { getGlossary } from "@/lib/api";

export default async function GlossaryPage() {
  const terms = await getGlossary();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-ink">名詞解釋</h1>
        <p className="mt-2 text-slate-500">整理機器學習常見名詞，之後可連回 PDF 段落與章節。</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {terms.map((term) => (
          <article key={term.id} className="rounded-lg bg-white p-5 shadow-soft">
            <p className="text-sm font-semibold text-violet">{term.term_en}</p>
            <h2 className="mt-1 text-xl font-bold text-ink">{term.term_zh}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{term.definition}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
