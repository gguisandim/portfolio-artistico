import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <Link className="site-header__brand" href="/">
        Bruno Gabriel
      </Link>

      <nav className="site-header__nav" aria-label="Navegação principal">
        <Link className="is-active" href="/#obras-coloridas">Obras</Link>
        <Link href="/#arte-digital">Arte digital</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/contato">Contato</Link>
        <button className="site-header__menu" type="button" aria-label="Abrir menu">
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
