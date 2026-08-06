import Link from "next/link";

export default function NotFound() {
  return (
    <main className="simple-page">
      <p className="eyebrow">404</p>
      <h1>Página não encontrada.</h1>
      <Link className="text-link" href="/galeria">
        Voltar para a galeria
      </Link>
    </main>
  );
}
