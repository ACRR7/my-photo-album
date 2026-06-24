import { createFileRoute } from "@tanstack/react-router";
import AppShell from "../components/AppShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MangaPremium — Bosh sahifa" },
      { name: "description", content: "Yuqori sifatli manga mutolaa platformasi." },
    ],
  }),
  component: () => <AppShell screen={2} />,
});
