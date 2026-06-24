import { createFileRoute } from "@tanstack/react-router";
import AppShell from "../components/AppShell";

export const Route = createFileRoute("/qidiruv")({
  head: () => ({ meta: [{ title: "MangaPremium — Qidiruv" }] }),
  component: () => <AppShell screen={7} />,
});
