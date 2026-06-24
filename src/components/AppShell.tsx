import { Link, useRouterState } from "@tanstack/react-router";
import { Home, BookOpen, Sparkles, Bookmark, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const nav = [
  { to: "/", label: "Asosiy", icon: Home },
  { to: "/katalog", label: "Katalog", icon: BookOpen },
  { to: "/yangi", label: "Yangi", icon: Sparkles },
] as const;

export default function AppShell({ screen }: { screen: number }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [srcDoc, setSrcDoc] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    let cancelled = false;
    setSrcDoc(null);
    fetch(`/screens/${screen}.html`)
      .then((r) => r.text())
      .then((html) => {
        if (cancelled) return;
        // Hide the embedded sidebars from the source HTML so our React
        // sidebar is the single source of navigation.
        const hideCss = `
          <style>
            aside#sidebar, aside.fixed.left-0.top-0 { display: none !important; }
            body > * { margin-left: 0 !important; }
            main, .main-content { margin-left: 0 !important; padding-left: 24px !important; }
          </style>
        `;
        const patched = html.replace(/<\/head>/i, `${hideCss}</head>`);
        setSrcDoc(patched);
      });
    return () => {
      cancelled = true;
    };
  }, [screen]);

  return (
    <div className="flex min-h-screen w-full bg-black text-white">
      {/* Persistent React sidebar */}
      <aside className="group fixed left-0 top-0 z-50 flex h-screen w-16 flex-col border-r border-white/10 bg-[#0a0a0a] py-4 transition-all duration-300 hover:w-56">
        <div className="mb-6 flex h-12 items-center justify-center">
          <span className="text-lg font-extrabold tracking-tighter text-white">M</span>
        </div>
        <nav className="flex flex-col">
          {nav.map((item) => {
            const active =
              item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex h-12 items-center px-5 transition-colors ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span className="ml-6 whitespace-nowrap text-sm font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto flex flex-col">
          <a
            href="#"
            className="flex h-12 items-center px-5 text-white/60 hover:bg-white/5 hover:text-white"
          >
            <Bookmark className="h-5 w-5 shrink-0" />
            <span className="ml-6 whitespace-nowrap text-sm opacity-0 transition-opacity group-hover:opacity-100">
              Xatchoplar
            </span>
          </a>
          <a
            href="#"
            className="flex h-12 items-center px-5 text-white/60 hover:bg-white/5 hover:text-white"
          >
            <User className="h-5 w-5 shrink-0" />
            <span className="ml-6 whitespace-nowrap text-sm opacity-0 transition-opacity group-hover:opacity-100">
              Profil
            </span>
          </a>
        </div>
      </aside>

      {/* Main content area — embedded screen */}
      <main className="ml-16 w-[calc(100%-4rem)] min-h-screen">
        {srcDoc ? (
          <iframe
            ref={iframeRef}
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
