import { connection } from "next/server";

export default async function Footer() {
  await connection();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-stone-50 py-8">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm text-stone-500">
          Copyright &copy; {year} | Diego Granados | All rights reserved
        </p>
      </div>
    </footer>
  );
}
