import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
] as const;

export default function Header() {
  return (
    <header className="border-b border-black/10 dark:border-white/15">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Portfolio
        </Link>
        <nav aria-label="Main">
          <ul className="flex items-center gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
