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
  const order = String(index + 1).padStart(2, "0");

  return (
    <motion.button
      type="button"
      className="featured-card"
      onClick={onSelect}
      initial={{ opacity: 0, y: 38 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
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

        <span className="featured-card__order">{order}</span>
        <span className="featured-card__view">Ver obra ↗</span>
      </motion.div>

      <div className="featured-card__caption">
        <div>
          <strong>{artwork.title}</strong>
          <small>{artwork.technique}</small>
        </div>
        <span>{artwork.year}</span>
      </div>
    </motion.button>
  );
}
