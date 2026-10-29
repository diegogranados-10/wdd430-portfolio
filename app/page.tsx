import ProjectList from "@/components/ProjectList";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-12">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight">Portfolio</h1>
        <p className="mt-3 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          A home page for projects, with shared cards and a layout that stays
          in place across routes.
        </p>
      </div>
      <ProjectList />
    </main>
  );
}
