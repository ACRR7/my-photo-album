import { Link, useRouterState } from "@tanstack/react-router";
import {
  Home,
  BookOpen,
  Sparkles,
  Bookmark,
  User,
  Search,
  LogIn,
  Settings,
  BookMarked,
} from "lucide-react";
import { useEffect, useState } from "react";

const primaryNav = [
  { to: "/", label: "Asosiy", icon: Home },
  { to: "/katalog", label: "Katalog", icon: BookOpen },
  { to: "/yangi", label: "Yangi", icon: Sparkles },
  { to: "/xatchoplar", label: "Xatchoplar", icon: Bookmark },
  { to: "/profil", label: "Profil", icon: User },
] as const;

const secondaryNav = [
  { to: "/oqish", label: "O'qish", icon: BookMarked },
  { to: "/qidiruv", label: "Qidiruv", icon: Search },
  { to: "/avtorizatsiya", label: "Avtorizatsiya", icon: LogIn },
  { to: "/sozlamalar", label: "Sozlamalar", icon: Settings },
] as const;

export default function AppShell({ screen }: { screen: number }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [srcDoc, setSrcDoc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setSrcDoc(null);
    fetch(`/screens/${screen}.html`)
      .then((r) => r.text())
      .then((html) => {
        if (cancelled) return;
        // Safety: ensure no embedded sidebar leaks through and main has no left margin.
        const hideCss = `
          <style>
            html, body { background: #000 !important; }
            aside[id="sidebar"], aside.fixed.left-0 { display: none !important; }
            main { margin-left: 0 !important; }
            body::-webkit-scrollbar { width: 0; }
          </style>
        `;
        const patched = html.replace(/<\/head>/i, `${hideCss}</head>`);
        setSrcDoc(patched);
      });
    return () => {
      cancelled = true;
    };
  }, [screen]);

  const renderItem = (item: { to: string; label: string; icon: typeof Home }) => {
    const active =
      item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
    const Icon = item.icon;
    return (
      <Link
        key={item.to}
        to={item.to}
        className={`relative flex h-11 items-center px-4 transition-colors ${
          active
            ? "bg-white/10 text-white"
            : "text-white/55 hover:bg-white/5 hover:text-white"
        }`}
      >
        {active && (
          <span className="absolute left-0 top-1/2 h-6 w-[3px] -translate-y-1/2 rounded-r bg-white" />
        )}
        <Icon className="h-5 w-5 shrink-0" />
        <span className="ml-5 whitespace-nowrap text-sm font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          {item.label}
        </span>
      </Link>
    );
  };

  return (
    <div className="flex min-h-screen w-full bg-black text-white">
      <aside className="group fixed left-0 top-0 z-50 flex h-screen w-14 flex-col border-r border-white/10 bg-[#0a0a0a] py-3 transition-all duration-300 hover:w-56">
        <Link
          to="/"
          className="mb-6 flex h-11 items-center px-4 text-white"
          aria-label="MangaPremium"
        >
          <span className="text-lg font-extrabold tracking-tighter">M</span>
          <span className="ml-5 whitespace-nowrap text-sm font-bold tracking-wide opacity-0 transition-opacity group-hover:opacity-100">
            MangaPremium
          </span>
        </Link>

        <nav className="flex flex-col">{primaryNav.map(renderItem)}</nav>

        <div className="mx-4 my-4 h-px bg-white/10" />

        <nav className="flex flex-col">{secondaryNav.map(renderItem)}</nav>
      </aside>

      <main className="ml-14 w-[calc(100%-3.5rem)] min-h-screen">
        {srcDoc ? (
          <iframe
            key={screen}
            srcDoc={srcDoc}
            title="screen"
            className="block h-screen w-full border-0"
          />
        ) : (
          <div className="flex h-screen items-center justify-center text-white/40">
            Yuklanmoqda…
          </div>
        )}
      </main>
    </div>
  );
}
