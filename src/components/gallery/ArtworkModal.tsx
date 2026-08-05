"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import type { Artwork } from "@/types/artwork";

type ArtworkModalProps = {
  artwork: Artwork | null;
  onClose: () => void;
};

export default function ArtworkModal({
  artwork,
  onClose
}: ArtworkModalProps) {
  useEffect(() => {
    if (!artwork) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [artwork, onClose]);

  return (
    <AnimatePresence>
      {artwork && (
        <motion.div
          className="artwork-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`Detalhes da obra ${artwork.title}`}
        >
          <button
            type="button"
            className="artwork-modal__backdrop"
            onClick={onClose}
            aria-label="Fechar detalhes da obra"
          />

          <motion.article
            className="artwork-modal__content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 35 }}
            transition={{ duration: 0.35 }}
          >
            <motion.div
              className="artwork-modal__image"
              layoutId={`artwork-${artwork.id}`}
            >
              <Image
                src={artwork.coverImage}
                alt={artwork.title}
                fill
                sizes="80vw"
              />
            </motion.div>

            <div className="artwork-modal__details">
              <button
                type="button"
                className="artwork-modal__close"
                onClick={onClose}
              >
                Fechar
              </button>

              <p className="eyebrow">{artwork.year}</p>
              <h2>{artwork.title}</h2>

              <dl>
                <div>
                  <dt>Técnica</dt>
                  <dd>{artwork.technique}</dd>
                </div>

                {artwork.dimensions && (
                  <div>
                    <dt>Dimensões</dt>
                    <dd>{artwork.dimensions}</dd>
                  </div>
                )}
              </dl>

              <p className="artwork-modal__description">
                {artwork.description}
              </p>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
