import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About this portfolio.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-4 px-6 py-12">
      <h1 className="text-4xl font-semibold tracking-tight">About</h1>
      <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        This portfolio introduces the projects on the home page. Navigation
        lives in the header, and the footer stays on every page.
      </p>
    </main>
  );
}
