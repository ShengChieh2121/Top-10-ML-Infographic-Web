import { FileText } from "lucide-react";

export default function PdfPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-ink">PDF Viewer</h1>
        <p className="mt-2 text-slate-500">預留給之後嵌入研讀教材 PDF、頁碼定位與段落標註。</p>
      </div>
      <section className="flex min-h-[520px] items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-white p-8 text-center shadow-soft">
        <div>
          <FileText className="mx-auto h-14 w-14 text-tech" />
          <h2 className="mt-4 text-xl font-bold text-ink">PDF 嵌入區</h2>
          <p className="mt-2 max-w-lg text-sm leading-7 text-slate-500">
            下一階段可使用 PDF.js 或後端解析服務，將教材頁面、章節與生成內容串接起來。
          </p>
        </div>
      </section>
    </div>
  );
}
