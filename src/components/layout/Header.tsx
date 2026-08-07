"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const primaryLinks = [
  { href: "/#obras-coloridas", label: "Obras", homeSection: true },
  { href: "/galeria", label: "Galeria" },
  { href: "/#arte-digital", label: "Arte digital", homeSection: true },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" }
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const isActive = (href: string, homeSection?: boolean) =>
    homeSection ? pathname === "/" && href.includes("obras-coloridas") : pathname === href;

  return (
    <>
      <header className="site-header">
        <Link className="site-header__brand" href="/" aria-label="Bruno Gabriel — página inicial">
          Bruno Castelo
        </Link>

        <nav className="site-header__nav" aria-label="Navegação principal">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              className={isActive(link.href, link.homeSection) ? "is-active" : undefined}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}

          <button
            className={`site-header__menu ${isOpen ? "is-open" : ""}`}
            type="button"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="site-drawer"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      <button
        className={`site-drawer__backdrop ${isOpen ? "is-visible" : ""}`}
        type="button"
        aria-label="Fechar menu"
        tabIndex={isOpen ? 0 : -1}
        onClick={() => setIsOpen(false)}
      />

      <aside
        id="site-drawer"
        className={`site-drawer ${isOpen ? "is-open" : ""}`}
        aria-hidden={!isOpen}
        inert={!isOpen}
        aria-label="Menu lateral"
      >
        <div className="site-drawer__topline">
          <span>Explorar</span>
          <button type="button" onClick={() => setIsOpen(false)} aria-label="Fechar menu" tabIndex={isOpen ? 0 : -1}>
            Fechar
          </button>
        </div>

        <nav aria-label="Navegação do menu lateral">
          {primaryLinks.map((link, index) => (
            <Link key={link.href} href={link.href} tabIndex={isOpen ? 0 : -1}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        <p>Portfólio de artes visuais · 2026</p>
      </aside>
    </>
  );
}
