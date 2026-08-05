"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Artwork } from "@/types/artwork";

type ArtworkCardProps = {
  artwork: Artwork;
  index: number;
  onSelect: () => void;
};

export default function ArtworkCard({
  artwork,
  index,
  onSelect
}: ArtworkCardProps) {
  return (
    <motion.button
      type="button"
      className="featured-card"
      onClick={onSelect}
      initial={{ opacity: 0, y: 38 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      aria-label={`Abrir detalhes da obra ${artwork.title}`}
    >
      <motion.div
        className="featured-card__image"
        layoutId={`artwork-${artwork.id}`}
      >
        <Image
          src={artwork.coverImage}
          alt={artwork.title}
          fill
          sizes="(max-width: 700px) 78vw, 20vw"
        />
      </motion.div>

      <div className="featured-card__caption">
        <span>{artwork.title}</span>
        <span>{artwork.year}</span>
      </div>
    </motion.button>
  );
}
