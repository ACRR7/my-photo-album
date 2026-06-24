import { createFileRoute } from "@tanstack/react-router";
import AppShell from "../components/AppShell";

export const Route = createFileRoute("/avtorizatsiya")({
  head: () => ({ meta: [{ title: "MangaPremium — Avtorizatsiya" }] }),
  component: () => <AppShell screen={12} />,
});
