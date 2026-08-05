import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { artist } from "@/data/artist";

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main className="simple-page">
        <p className="eyebrow">Contato</p>
        <h1>Vamos conversar.</h1>
        <p className="simple-page__lead">
          Comissões, exposições, colaborações e projetos editoriais.
        </p>

        <div className="contact-list">
          <a href={`mailto:${artist.email}`}>{artist.email}</a>
          <a href={artist.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={artist.behance} target="_blank" rel="noreferrer">
            Behance
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
