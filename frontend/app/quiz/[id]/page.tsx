import Link from "next/link";

import { getQuiz } from "@/lib/api";

type QuizPageProps = {
  params: Promise<{ id: string }>;
};

export default async function QuizPage({ params }: QuizPageProps) {
  const { id } = await params;
  const quiz = await getQuiz(id);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-ink">{quiz.title}</h1>
        <p className="mt-2 text-slate-500">MVP 先顯示選擇題 UI，之後可加入作答狀態、計分與解析。</p>
      </div>
      <section className="space-y-4">
        {quiz.questions.map((question, index) => (
          <article key={question.id} className="rounded-lg bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold text-tech">Question {index + 1}</p>
            <h2 className="mt-2 text-xl font-bold text-ink">{question.question}</h2>
            <div className="mt-5 grid gap-3">
              {question.options.map((option) => (
                <label key={option.id} className="flex cursor-pointer items-center gap-3 rounded border border-slate-200 p-3 hover:border-tech hover:bg-blue-50">
                  <input type="radio" name={question.id} className="h-4 w-4 accent-tech" />
                  <span className="text-sm text-slate-700">{option.text}</span>
                </label>
              ))}
            </div>
            <p className="mt-5 rounded bg-slate-50 p-3 text-sm leading-6 text-slate-600">
              答案解析預留：{question.explanation}
            </p>
          </article>
        ))}
      </section>
      <Link href={`/chapters/${id}`} className="inline-flex rounded bg-navy px-4 py-2 text-sm font-semibold text-white hover:bg-tech">
        返回章節
      </Link>
    </div>
  );
}
