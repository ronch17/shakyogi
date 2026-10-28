"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { navLinks } from "./nav-links";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "סגירת התפריט" : "פתיחת התפריט"}
        className="flex flex-col justify-center items-center gap-1.5 w-11 h-11 text-primary"
      >
        <span
          className={clsx(
            "block h-0.5 w-6 bg-current rounded transition-transform duration-300",
            open && "translate-y-2 rotate-45"
          )}
        />
        <span
          className={clsx(
            "block h-0.5 w-6 bg-current rounded transition-opacity duration-300",
            open && "opacity-0"
          )}
        />
        <span
          className={clsx(
            "block h-0.5 w-6 bg-current rounded transition-transform duration-300",
            open && "-translate-y-2 -rotate-45"
          )}
        />
      </button>

      <nav
        id="mobile-menu"
        aria-label="ניווט ראשי"
        hidden={!open}
        className="absolute top-full left-0 w-full bg-[#FEF8F5] shadow-md flex flex-col items-stretch px-6 pb-6 pt-2 animate-fade-up"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="py-3 text-lg border-b border-border hover:text-primary-light transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-4 bg-primary text-white py-3 text-center rounded-tl-2xl rounded-br-2xl hover:bg-primary-light transition-colors"
        >
          דברו איתי
        </a>
      </nav>
    </div>
  );
}
