interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-stone-400 hover:shadow-lg">
      <h3 className="text-xl font-semibold tracking-tight text-stone-950">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
          >
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <p className="mt-3 flex-1 leading-relaxed text-stone-600">{description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-600"
          >
            {technology}
          </li>
        ))}
      </ul>
      {link && (
        <p className="mt-6 text-sm font-medium text-stone-950">
          <span className="border-b border-stone-300 pb-0.5 transition group-hover:border-stone-950">
            View project
          </span>
        </p>
      )}
    </article>
  );
}
