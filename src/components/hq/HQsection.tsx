"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const hqImages = {
  cover: {
    src: "/artworks/hq/hq-destaque.png",
    alt: "Capa da história em quadrinhos Ainda Sou Eu"
  },

  pages: [
    {
      id: "page-01",
      src: "/artworks/hq/hq-01.png",
      alt: "Página da HQ Ainda Sou Eu",
      className: "hq-paper--page-one",
      rotation: -3,
      baseX: 0
    },
    {
      id: "page-02",
      src: "/artworks/hq/hq-02.png",
      alt: "Cena da HQ Ainda Sou Eu",
      className: "hq-paper--page-two",
      rotation: 2.5,
      baseX: 0
    },
    {
      id: "page-03",
      src: "/artworks/hq/hq-03.png",
      alt: "Recorte da HQ Ainda Sou Eu",
      className: "hq-paper--page-three",
      rotation: 1,
      baseX: "-50%"
    },
    {
      id: "page-04",
      src: "/artworks/hq/hq-04.png",
      alt: "Cena final da seleção da HQ Ainda Sou Eu",
      className: "hq-paper--page-four",
      rotation: -1.5,
      baseX: 0
    }
  ]
};

export default function HQSection() {
  const [canDrag, setCanDrag] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 701px)");

    const updateDrag = () => {
      setCanDrag(mediaQuery.matches);
    };

    updateDrag();

    mediaQuery.addEventListener("change", updateDrag);

    return () => {
      mediaQuery.removeEventListener("change", updateDrag);
    };
  }, []);

  return (
    <section id="hq" className="hq-table">
      <div className="hq-table__light" aria-hidden="true" />
      <div className="hq-table__grain" aria-hidden="true" />

      <div className="hq-table__content">
        <motion.header
          className="hq-table__intro"
          initial={{
            opacity: 0,
            x: -40
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={{
            once: true,
            margin: "-15%"
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          <p className="hq-table__eyebrow">
            História em quadrinhos
          </p>

          <h2>
            Ainda
            <br />
            sou eu
          </h2>

          <p className="hq-table__description">
            Uma narrativa visual construída por meio de traços,
            silêncios e fragmentos de identidade.
          </p>

          <span className="hq-table__line" />
        </motion.header>

        <motion.figure
          className="hq-paper hq-paper--cover"
          initial={{
            opacity: 0,
            y: 60,
            rotate: -4
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotate: -2
          }}
          whileHover={{
            y: -10,
            rotate: -1,
            scale: 1.01
          }}
          viewport={{
            once: true,
            margin: "-12%"
          }}
          transition={{
            duration: 1,
            ease: "easeOut"
          }}
        >
          <div className="hq-paper__image hq-paper__image--cover">
            <Image
              src={hqImages.cover.src}
              alt={hqImages.cover.alt}
              fill
              priority
              draggable={false}
              sizes="(max-width: 760px) 88vw, 42vw"
            />
          </div>

          <figcaption>
            Capa — Ainda Sou Eu
          </figcaption>
        </motion.figure>

        <div className="hq-table__pages">
          <span className="hq-table__drag-hint">
            Arraste as páginas
          </span>

          {hqImages.pages.map((page, index) => (
            <motion.figure
              key={page.id}
              className={`hq-paper ${page.className}`}
              drag={canDrag}
              dragMomentum={false}
              dragElastic={0.08}
              initial={{
                opacity: 0,
                y: 70,
                x: page.baseX,
                rotate: page.rotation
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                x: page.baseX,
                rotate: page.rotation
              }}
              whileHover={
                canDrag
                  ? {
                      y: -8,
                      scale: 1.01,
                      rotate: page.rotation * 0.5,
                      zIndex: 10
                    }
                  : undefined
              }
              whileDrag={{
                scale: 1.045,
                rotate: 0,
                zIndex: 30,
                boxShadow:
                  "0 35px 80px rgba(0, 0, 0, 0.65)"
              }}
              viewport={{
                once: true,
                margin: "-10%"
              }}
              transition={{
                duration: 0.85,
                delay: index * 0.08,
                ease: "easeOut"
              }}
            >
              <div className="hq-paper__image">
                <Image
                  src={page.src}
                  alt={page.alt}
                  fill
                  draggable={false}
                  sizes="(max-width: 760px) 90vw, 44vw"
                />
              </div>
            </motion.figure>
          ))}
        </div>

        <motion.div
          className="hq-table__ending"
          initial={{
            opacity: 0,
            y: 35
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.7
          }}
        >
          <span
            className="hq-table__tape"
            aria-hidden="true"
          />

          <p>Gostou ?</p>

          <a
            href="/artworks/hq/ainda-sou-eu.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Ler HQ completa
          </a>
        </motion.div>
      </div>
    </section>
  );
}