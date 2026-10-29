import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-stone-200 bg-stone-50">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <div
          id="header-title"
          className="text-lg font-medium tracking-tight text-stone-950"
        >
          Diego Granados
        </div>
        <nav>
          <ul className="flex gap-8 text-sm">
            <li>
              <Link
                href="/"
                className="text-stone-600 transition-colors hover:text-stone-950"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-stone-600 transition-colors hover:text-stone-950"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
