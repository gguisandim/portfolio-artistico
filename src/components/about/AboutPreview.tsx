"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { artist } from "@/data/artist";

export default function AboutPreview() {
  return (
    <section id="sobre-artista" className="artist-about artist-about--home">
      <div className="artist-about__content">
        <motion.figure
          className="artist-about__portrait-card"
          initial={{ opacity: 0, y: 28, rotate: -1.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: -0.7 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.72, ease: "easeOut" }}
        >
          <div className="artist-about__portrait-image">
            <Image
              src="/artist/bruno-castelo.png"
              alt="Bruno Castelo"
              fill
              sizes="(max-width: 800px) 78vw, 430px"
              priority={false}
            />
          </div>
          <figcaption>Bruno Castelo · Belém, PA</figcaption>
        </motion.figure>

        <motion.div
          className="artist-about__copy artist-about__copy--paper"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
        >
          <p className="artist-about__eyebrow">Sobre o artista</p>
          <h2>{artist.name}</h2>
          <p className="artist-about__role">{artist.role}</p>
          <p className="artist-about__bio">{artist.bio}</p>

          <a
            className="artist-about__instagram"
            href={artist.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Instagram <span aria-hidden="true">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
