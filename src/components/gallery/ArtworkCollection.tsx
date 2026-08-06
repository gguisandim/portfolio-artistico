"use client";

import { useState } from "react";
import type { ArtworkCollection as Collection } from "@/types/collection";
import type { Artwork } from "@/types/artwork";
import ArtworkCard from "./ArtworkCard";
import ArtworkModal from "./ArtworkModal";

type ArtworkCollectionProps = {
  collection: Collection;
};

export default function ArtworkCollection({
  collection
}: ArtworkCollectionProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  return (
    <section id="obras-coloridas" className="featured-collection">
      <div className="featured-collection__texture" aria-hidden="true" />
      <div className="featured-collection__paint" aria-hidden="true" />

      <div className="featured-collection__layout">
        <header className="featured-collection__intro">
          <p className="featured-collection__eyebrow">Coleção 01</p>
          <h2>{collection.title}</h2>
          <p className="featured-collection__subtitle">{collection.subtitle}</p>
          <p className="featured-collection__description">
            {collection.description}
          </p>

          <a className="featured-collection__link" href="/galeria#rostos-familiares">
            Ver coleção completa <span aria-hidden="true">→</span>
          </a>
        </header>

        <div className="featured-collection__grid">
          {collection.artworks.map((artwork, index) => (
            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
              index={index}
              onSelect={() => setSelectedArtwork(artwork)}
            />
          ))}
        </div>
      </div>

      <div className="featured-collection__transition" aria-hidden="true">
        <span>Rostos Familiares</span>
        <i />
        <span>Ainda sou Eu</span>
      </div>

      <ArtworkModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </section>
  );
}
