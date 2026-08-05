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
      <div className="featured-collection__heading">
        <h2>{collection.title}</h2>
        <span aria-hidden="true" />
      </div>

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

      <ArtworkModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </section>
  );
}
