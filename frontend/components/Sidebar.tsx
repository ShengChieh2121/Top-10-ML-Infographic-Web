import Link from "next/link";
import { BookOpen, FileText, Home, LayoutDashboard, Search, Sparkles } from "lucide-react";

const navItems = [
  { href: "/", label: "首頁", icon: Home },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/chapters", label: "章節", icon: BookOpen },
  { href: "/glossary", label: "Glossary", icon: Sparkles },
  { href: "/pdf", label: "PDF Viewer", icon: FileText },
  { href: "/search", label: "搜尋", icon: Search },
];

export function Sidebar() {
  return (
    <aside className="border-b border-slate-200 bg-white lg:fixed lg:inset-y-0 lg:left-0 lg:w-72 lg:border-b-0 lg:border-r">
      <div className="flex h-full flex-col gap-6 px-5 py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded bg-navy text-white">
            ML
          </div>
          <div>
            <p className="text-sm font-bold text-ink">ML Top 10</p>
            <p className="text-xs text-slate-500">互動研讀平台</p>
          </div>
        </Link>
        <nav className="grid grid-cols-2 gap-2 lg:grid-cols-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-mist hover:text-tech"
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
