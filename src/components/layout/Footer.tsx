import Link from "next/link";
import { artist } from "@/data/artist";

const footerLinks = [
  { href: "/#obras-coloridas", label: "Obras" },
  { href: "/#autorretratos", label: "Autorretratos" },
  { href: "/#hq", label: "Ainda Sou Eu" },
  { href: "/#arte-digital", label: "Arte digital" },
  { href: "/galeria", label: "Galeria" },
  { href: "/sobre", label: "Sobre" }
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__panel">
        <div className="site-footer__contact">
          <span className="site-footer__index">BRUNO CASTELO · 2026</span>
          <span className="site-footer__label">Contato</span>

          <a
            className="site-footer__instagram"
            href={artist.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Instagram <span aria-hidden="true">↗</span>
          </a>

          <p className="site-footer__location">Belém · Pará</p>
        </div>

        <nav className="site-footer__nav" aria-label="Navegação do rodapé">
          <span className="site-footer__label">Explorar</span>
          {footerLinks.map((link, index) => (
            <Link key={link.href} href={link.href}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="site-footer__bottom">
          <span>© 2026 Bruno Castelo</span>
          <a href="#top" aria-label="Voltar ao início da página">
            Voltar ao topo ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
