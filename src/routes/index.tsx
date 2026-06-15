import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MangaPremium — Manga Reader" },
      {
        name: "description",
        content:
          "Premium manga reading experience: catalog, reader, bookmarks and more.",
      },
    ],
  }),
  component: HomePage,
});

const screens: { id: number; title: string; subtitle: string }[] = [
  { id: 2, title: "Bosh sahifa", subtitle: "MangaPremium — Yuqori sifatli mutolaa" },
  { id: 3, title: "Katalog", subtitle: "Manga kutubxonasi" },
  { id: 4, title: "Yangilanishlar", subtitle: "Senkuro feed" },
  { id: 5, title: "Yangilanishlar (v2)", subtitle: "Senkuro alt" },
  { id: 6, title: "Manga sahifasi", subtitle: "Obsidian Cinema" },
  { id: 7, title: "Qidiruv", subtitle: "Senkuro qidiruv" },
  { id: 16, title: "Manga tafsilotlari", subtitle: "Neo-Kyoto Soyalari" },
  { id: 1, title: "Boblar ro'yxati", subtitle: "Chapter list (mobile)" },
  { id: 13, title: "Xatchoplar", subtitle: "Obsidian Cinema bookmarks" },
  { id: 14, title: "Xatchoplar (v2)", subtitle: "MANGA_DRIVE bookmarks" },
  { id: 10, title: "Profil", subtitle: "MangaHub profile" },
  { id: 12, title: "Avtorizatsiya", subtitle: "MangaHub auth" },
  { id: 8, title: "O'qish", subtitle: "Reader screen" },
  { id: 9, title: "O'qish (v2)", subtitle: "Reader alt" },
  { id: 11, title: "Sozlamalar", subtitle: "Settings" },
  { id: 15, title: "Qo'shimcha", subtitle: "Extra screen" },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-extrabold tracking-tighter">MANGA</span>
            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              Premium
            </span>
          </div>
          <span className="hidden text-xs uppercase tracking-[0.25em] text-white/50 md:block">
            {screens.length} ekran
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-14">
        <div className="mb-12 max-w-3xl">
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Manga o'qish uchun yangi avlod platformasi.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/60 md:text-lg">
            Quyidagi ekranlar — katalog, o'qish, profil, xatchoplar va boshqa
            barcha sahifalar. Ko'rish uchun har qanday kartani bosing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {screens.map((s) => (
            <a
              key={s.id}
              href={`/screens/${s.id}.html`}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0e0e0e] transition-all hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              <div className="relative h-72 overflow-hidden border-b border-white/10 bg-black">
                <iframe
                  src={`/screens/${s.id}.html`}
                  title={s.title}
                  className="pointer-events-none absolute left-0 top-0 origin-top-left"
                  style={{
                    width: "1440px",
                    height: "1440px",
                    transform: "scale(0.32)",
                  }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-tight">
                    {s.title}
                  </div>
                  <div className="mt-0.5 text-xs text-white/50">{s.subtitle}</div>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-white/40 transition-colors group-hover:text-white">
                  Ochish →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-xs uppercase tracking-[0.25em] text-white/30">
        MangaPremium · Design preview
      </footer>
    </div>
  );
}
