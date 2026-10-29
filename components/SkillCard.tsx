interface SkillCardProps {
  name: string;
  description: string;
}

export default function SkillCard({ name, description }: SkillCardProps) {
  return (
    <article className="h-full rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-stone-400 hover:shadow-lg">
      <h3 className="text-lg font-semibold tracking-tight text-stone-950">
        {name}
      </h3>
      <p className="mt-2 leading-relaxed text-stone-600">{description}</p>
    </article>
  );
}
