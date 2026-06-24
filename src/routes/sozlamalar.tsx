import { createFileRoute } from "@tanstack/react-router";
import AppShell from "../components/AppShell";

export const Route = createFileRoute("/sozlamalar")({
  head: () => ({ meta: [{ title: "MangaPremium — Sozlamalar" }] }),
  component: () => <AppShell screen={11} />,
});
