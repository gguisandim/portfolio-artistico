import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { artist } from "@/data/artist";

export default function SobrePage() {
  return (
    <>
      <Header />
      <main className="simple-page">
        <p className="eyebrow">Sobre</p>
        <h1>{artist.name}</h1>
        <p className="simple-page__lead">{artist.bio}</p>

        <div className="simple-page__details">
          <div>
            <span>Atuação</span>
            <strong>{artist.role}</strong>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
