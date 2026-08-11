"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const portraits = [
  {
    id: "01",
    title: "Autorretrato I",
    src: "/artworks/featured/autorretrato.jpg",
    alt: "Autorretrato de Bruno Castelo em tons amarelos, azuis e verdes",
    className: "self-portrait__work--landscape",
    detail: "Giz pastel oleoso sobre papel · 2026"
  },
  {
    id: "02",
    title: "Autorretrato II",
    src: "/artworks/featured/retrato-06.jpg",
    alt: "Autorretrato de Bruno Castelo em tons azuis sobre fundo amarelo",
    className: "self-portrait__work--portrait",
    detail: "Giz pastel oleoso sobre papel · 2026"
  }
];

export default function SelfPortraitSection() {
  return (
    <section id="autorretratos" className="self-portrait">
      <div className="self-portrait__texture" aria-hidden="true" />
      <div className="self-portrait__ghost" aria-hidden="true">
        Autorretrato
      </div>

      <div className="self-portrait__layout">
        <motion.header
          className="self-portrait__intro"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="self-portrait__eyebrow">Arquivo de autorretratos · 2026</p>
          <h2>Autorretratos</h2>
          <p>
            A definir
          </p>

          <Link href="/galeria#autorretratos" className="self-portrait__link">
            Ver na galeria <span aria-hidden="true">↗</span>
          </Link>
        </motion.header>

        <div className="self-portrait__works">
          {portraits.map((portrait, index) => (
            <motion.figure
              key={portrait.id}
              className={`self-portrait__work ${portrait.className}`}
              initial={{ opacity: 0, y: 36, rotate: index === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: index === 0 ? -0.35 : 0.5 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.75, delay: index * 0.1, ease: "easeOut" }}
            >
              <span className="self-portrait__number">{portrait.id}</span>
              <div className="self-portrait__frame">
                <Image
                  src={portrait.src}
                  alt={portrait.alt}
                  fill
                  sizes={index === 0 ? "(max-width: 800px) 92vw, 760px" : "(max-width: 800px) 72vw, 430px"}
                />
              </div>
              <figcaption>
                <strong>{portrait.title}</strong>
                <small>{portrait.detail}</small>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <div className="self-portrait__transition" aria-hidden="true">
        <span>Autorretratos</span>
        <i />
        <span>Ainda Sou Eu</span>
      </div>
    </section>
  );
}
