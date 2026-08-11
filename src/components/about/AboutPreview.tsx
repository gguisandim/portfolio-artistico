"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { artist } from "@/data/artist";

export default function AboutPreview() {
  return (
    <section id="sobre-artista" className="artist-about">
      <div className="artist-about__content">
        <motion.div
          className="artist-about__copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
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

        <div className="artist-about__visuals">
          <motion.figure
            className="artist-about__photo artist-about__photo--artwork artist-about__photo--single"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
          >
            <div className="artist-about__image">
              <Image
                src="/artist/autorretrato-azul.jpeg"
                alt="Autorretrato de Bruno Castelo em tons azuis sobre fundo amarelo"
                fill
                sizes="(max-width: 700px) 58vw, 280px"
              />
            </div>
            <figcaption>Autorretrato II · 2026</figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
