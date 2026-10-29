import ProjectCard, { type Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    id: "portfolio",
    title: "Portfolio site",
    description:
      "A Next.js portfolio with a home page, an about page, and a small API route.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "components",
    title: "Reusable project cards",
    description:
      "Project data is rendered through a shared card so each project uses the same layout.",
    tags: ["React", "Components"],
  },
];

export default function ProjectList() {
  return (
    <section aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="text-2xl font-semibold tracking-tight">
        Projects
      </h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
