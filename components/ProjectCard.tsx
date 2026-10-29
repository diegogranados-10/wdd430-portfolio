export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-2xl border border-black/10 bg-white p-6 dark:border-white/15 dark:bg-zinc-950">
      <h2 className="text-xl font-semibold tracking-tight">{project.title}</h2>
      <p className="text-zinc-600 dark:text-zinc-400">{project.description}</p>
      <ul className="mt-auto flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
