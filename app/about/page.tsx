import SkillCard from "@/components/SkillCard";

const skills = [
  {
    name: "JavaScript",
    description:
      "Used to parse YouTube links, build sheet rows, and test the Cars Tracker pipeline.",
  },
  {
    name: "React",
    description:
      "Used to build the todo list, including add, complete, and delete actions saved in localStorage.",
  },
  {
    name: "HTML and CSS",
    description:
      "Used for the WDD 131 and WDD 231 course sites, including page structure and responsive layout.",
  },
];

export default function About() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16">
      <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
        About Me
      </h2>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-600">
        I am Diego Granados, a student in the Web and Computer Programming
        certificate at BYU-Idaho. I am interested in front-end engineering and
        web development.
      </p>
      <section className="mt-8" aria-labelledby="skills-heading">
        <h3
          id="skills-heading"
          className="mb-4 text-2xl font-semibold tracking-tight text-stone-950"
        >
          Skills
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              description={skill.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
