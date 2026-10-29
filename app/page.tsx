import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Cars Tracker",
    description:
      "A JavaScript pipeline that takes YouTube car-review links from Telegram, extracts structured car details, and stores one row per video in Google Sheets.",
    technologies: ["JavaScript", "n8n", "Telegram", "Google Sheets"],
    link: "https://github.com/diegogranados-10/cars-tracker",
  },
  {
    title: "React Todo List",
    description:
      "A React app for adding, completing, and deleting todos, with the list saved in the browser using localStorage.",
    technologies: ["React", "JavaScript", "Vite", "CSS"],
    link: "https://github.com/diegogranados-10/react-todo-list",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16">
      <section className="mb-12 max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight text-stone-950">
          My Portfolio
        </h1>
        <p className="mt-4 text-lg leading-8 text-stone-600">
          I am a full-stack developer learning Next.js and React. Here are some
          of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
