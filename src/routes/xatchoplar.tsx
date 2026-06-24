import { createFileRoute } from "@tanstack/react-router";
import AppShell from "../components/AppShell";

export const Route = createFileRoute("/xatchoplar")({
  head: () => ({ meta: [{ title: "MangaPremium — Xatchoplar" }] }),
  component: () => <AppShell screen={14} />,
});
