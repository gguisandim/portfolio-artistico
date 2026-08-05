"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Artwork } from "@/types/artwork";

type MonochromeHeroProps = {
  artwork: Artwork;
};

export default function MonochromeHero({
  artwork
}: MonochromeHeroProps) {
  return (
    <section
      id="preto-e-branco"
      className="gray-environment"
    >
      <motion.div
        className="gray-environment__copy"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
      >
        <p className="gray-environment__eyebrow">
          História em quadrinhos
        </p>

        <h2>{artwork.title}</h2>

        <p className="gray-environment__description">
          {artwork.description}
        </p>

        <div className="gray-environment__metadata">
          <span>{artwork.technique}</span>
          <span>{artwork.year}</span>
        </div>
      </motion.div>

      <motion.div
        className="gray-environment__art"
        initial={{
          opacity: 0,
          y: 40,
          scale: 1.03
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1
        }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{
          duration: 1,
          ease: "easeOut"
        }}
      >
        <Image
          src={artwork.coverImage}
          alt={artwork.title}
          fill
          sizes="(max-width: 700px) 100vw, 65vw"
          className="gray-environment__image"
        />
      </motion.div>

      <motion.a
        href="#hq-gallery"
        className="gray-environment__link"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        Explorar HQ
      </motion.a>
    </section>
  );
}