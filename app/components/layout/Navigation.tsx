import { navLinks } from "./nav-links";

export default function Navigation() {
  return (
    <nav
      aria-label="ניווט ראשי"
      className="hidden lg:flex justify-between items-center gap-4 text-lg"
    >
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="hover:text-primary-light transition-all duration-300"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
