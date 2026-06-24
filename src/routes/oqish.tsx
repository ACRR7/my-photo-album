import { createFileRoute } from "@tanstack/react-router";
import AppShell from "../components/AppShell";

export const Route = createFileRoute("/oqish")({
  head: () => ({ meta: [{ title: "MangaPremium — O'qish" }] }),
  component: () => <AppShell screen={16} />,
});
