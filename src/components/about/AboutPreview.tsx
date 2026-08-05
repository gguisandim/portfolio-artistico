import Link from "next/link";
import { artist } from "@/data/artist";

export default function AboutPreview() {
  return (
    <section className="about-preview">
      <p className="eyebrow">Sobre o artista</p>
      <h2>{artist.bio}</h2>
      <Link className="text-link" href="/sobre">
        Conhecer trajetória
      </Link>
    </section>
  );
}
