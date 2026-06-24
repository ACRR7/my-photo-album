import { createFileRoute } from "@tanstack/react-router";
import AppShell from "../components/AppShell";

export const Route = createFileRoute("/profil")({
  head: () => ({ meta: [{ title: "MangaPremium — Profil" }] }),
  component: () => <AppShell screen={10} />,
});
