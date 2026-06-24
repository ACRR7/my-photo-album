import { createFileRoute } from "@tanstack/react-router";
import AppShell from "../components/AppShell";

export const Route = createFileRoute("/katalog")({
  head: () => ({
    meta: [
      { title: "MangaPremium — Katalog" },
      { name: "description", content: "Manga kutubxonasi va katalog." },
    ],
  }),
  component: () => <AppShell screen={3} />,
});
