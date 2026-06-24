import { createFileRoute } from "@tanstack/react-router";
import AppShell from "../components/AppShell";

export const Route = createFileRoute("/yangi")({
  head: () => ({
    meta: [
      { title: "MangaPremium — Yangiliklar" },
      { name: "description", content: "Yangi boblar va yangilanishlar." },
    ],
  }),
  component: () => <AppShell screen={4} />,
});
