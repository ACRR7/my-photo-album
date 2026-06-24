import { createFileRoute } from "@tanstack/react-router";
import AppShell from "../components/AppShell";

export const Route = createFileRoute("/manga")({
  head: () => ({ meta: [{ title: "MangaPremium — Manga tafsilotlari" }] }),
  component: () => <AppShell screen={9} />,
});
