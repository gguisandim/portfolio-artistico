"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

type HQPage = {
  id: string;
  src: string;
  alt: string;
  className: string;
  rotation: number;
};

const hqImages: {
  cover: {
    src: string;
    alt: string;
  };
  pages: HQPage[];
} = {
  cover: {
    src: "/artworks/hq/hq-destaque.png",
    alt: "Capa da história em quadrinhos Ainda Sou Eu"
  },

  pages: [
    {
      id: "page-01",
      src: "/artworks/hq/hq-01.png",
      alt: "Página 01 da HQ Ainda Sou Eu",
      className: "hq-paper--page-one",
      rotation: -3
    },
    {
      id: "page-02",
      src: "/artworks/hq/hq-02.png",
      alt: "Página 02 da HQ Ainda Sou Eu",
      className: "hq-paper--page-two",
      rotation: 2
    },
    {
      id: "page-03",
      src: "/artworks/hq/hq-03.png",
      alt: "Página 03 da HQ Ainda Sou Eu",
      className: "hq-paper--page-three",
      rotation: -1
    },
    {
      id: "page-04",
      src: "/artworks/hq/hq-04.png",
      alt: "Página 04 da HQ Ainda Sou Eu",
      className: "hq-paper--page-four",
      rotation: 1.5
    },
    {
      id: "page-05",
      src: "/artworks/hq/hq-05.png",
      alt: "Página 05 da HQ Ainda Sou Eu",
      className: "hq-paper--page-five",
      rotation: -2
    },
    {
      id: "page-06",
      src: "/artworks/hq/hq-06.png",
      alt: "Página 06 da HQ Ainda Sou Eu",
      className: "hq-paper--page-six",
      rotation: 2.5
    },
    {
      id: "page-07",
      src: "/artworks/hq/hq-07.png",
      alt: "Página 07 da HQ Ainda Sou Eu",
      className: "hq-paper--page-seven",
      rotation: -1.5
    },
    {
      id: "page-08",
      src: "/artworks/hq/hq-08.png",
      alt: "Página 08 da HQ Ainda Sou Eu",
      className: "hq-paper--page-eight",
      rotation: 1
    },
    {
      id: "page-09",
      src: "/artworks/hq/hq-09.png",
      alt: "Página 09 da HQ Ainda Sou Eu",
      className: "hq-paper--page-nine",
      rotation: -2.5
    }
  ]
};

export default function HQSection() {
  const [canDrag, setCanDrag] = useState(false);
  const [boardKey, setBoardKey] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 901px)");

    const updateDrag = () => {
      setCanDrag(mediaQuery.matches);
    };

    updateDrag();
    mediaQuery.addEventListener("change", updateDrag);

    return () => {
      mediaQuery.removeEventListener("change", updateDrag);
    };
  }, []);

  const resetBoard = () => {
    setBoardKey((currentValue) => currentValue + 1);
  };

  return (
    <section id="hq" className="hq-table">
      <div
        className="hq-table__light"
        aria-hidden="true"
      />

      <div
        className="hq-table__grain"
        aria-hidden="true"
      />

      <div
        className="hq-table__desk-lines"
        aria-hidden="true"
      />

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
            A definir
          </p>

          <span
            className="hq-table__line"
            aria-hidden="true"
          />

          <div className="hq-table__controls">
            <span>
              Arraste as páginas pela mesa
            </span>

            <button
              type="button"
              onClick={resetBoard}
            >
              Reorganizar mesa
            </button>
          </div>
        </motion.header>

        <motion.figure
          key={`cover-${boardKey}`}
          className="hq-paper hq-paper--cover"
          drag={canDrag}
          dragMomentum={false}
          dragElastic={0.06}
          initial={{
            opacity: 0,
            y: 60,
            rotate: -3
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotate: -2
          }}
          whileHover={
            canDrag
              ? {
                  y: -8,
                  scale: 1.01,
                  zIndex: 20
                }
              : undefined
          }
          whileDrag={{
            scale: 1.035,
            rotate: 0,
            zIndex: 50,
            boxShadow:
              "0 38px 90px rgba(0, 0, 0, 0.72)"
          }}
          viewport={{
            once: true,
            margin: "-12%"
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut"
          }}
        >
          <span
            className="hq-paper__tape hq-paper__tape--cover"
            aria-hidden="true"
          />

          <div className="hq-paper__image hq-paper__image--cover">
            <Image
              src={hqImages.cover.src}
              alt={hqImages.cover.alt}
              fill
              priority
              draggable={false}
              sizes="(max-width: 900px) 80vw, 38vw"
            />
          </div>

          <figcaption>
            Capa — Ainda Sou Eu
          </figcaption>
        </motion.figure>

        <div
          key={`board-${boardKey}`}
          className="hq-table__pages"
        >
          <span className="hq-table__drag-hint">
            Segure e arraste
          </span>

          <span
            className="hq-table__paperclip"
            aria-hidden="true"
          />

          <span
            className="hq-table__pencil-mark"
            aria-hidden="true"
          >
            {"╱╱╱╱╱"}
          </span>

          {hqImages.pages.map((page, index) => {
            const hasTape =
              index === 0 ||
              index === 4 ||
              index === 7;

            return (
              <motion.figure
                key={`${page.id}-${boardKey}`}
                className={`hq-paper ${page.className}`}
                drag={canDrag}
                dragMomentum={false}
                dragElastic={0.06}
                initial={{
                  opacity: 0,
                  y: 65,
                  rotate: page.rotation
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: page.rotation
                }}
                whileHover={
                  canDrag
                    ? {
                        y: -7,
                        scale: 1.012,
                        rotate: page.rotation * 0.5,
                        zIndex: 25
                      }
                    : undefined
                }
                whileDrag={{
                  scale: 1.04,
                  rotate: 0,
                  zIndex: 60,
                  boxShadow:
                    "0 40px 95px rgba(0, 0, 0, 0.75)"
                }}
                viewport={{
                  once: true,
                  margin: "-8%"
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.045,
                  ease: "easeOut"
                }}
              >
                {hasTape && (
                  <span
                    className="hq-paper__tape"
                    aria-hidden="true"
                  />
                )}

                <span className="hq-paper__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="hq-paper__image">
                  <Image
                    src={page.src}
                    alt={page.alt}
                    fill
                    draggable={false}
                    sizes="(max-width: 900px) 76vw, 34vw"
                  />
                </div>
              </motion.figure>
            );
          })}
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

          <p>Gostou?</p>

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