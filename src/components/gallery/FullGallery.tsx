"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { galleryProjects, type GalleryImage } from "@/data/gallery";

export default function FullGallery() {
  const allImages = useMemo(() => galleryProjects.flatMap((project) => project.images), []);
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  const move = useCallback((amount: number) => {
    if (!selected) return;
    const currentIndex = allImages.findIndex((image) => image.id === selected.id);
    setSelected(allImages[(currentIndex + amount + allImages.length) % allImages.length]);
  }, [allImages, selected]);

  useEffect(() => {
    if (!selected) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [move, selected]);

  return (
    <>
      <nav className="gallery-index" aria-label="Projetos da galeria">
        {galleryProjects.map((project) => (
          <a key={project.id} href={`#${project.id}`}>
            <span>{project.number}</span>
            {project.title}
          </a>
        ))}
      </nav>

      <div className="gallery-projects">
        {galleryProjects.map((project) => (
          <section
            key={project.id}
            id={project.id}
            className={`gallery-project gallery-project--${project.tone}`}
          >
            <header className="gallery-project__header">
              <p>{project.number} · Projeto</p>
              <h2>{project.title}</h2>
              <span>{project.subtitle}</span>
              <p>{project.description}</p>
            </header>

            <div className="gallery-project__grid">
              {project.images.map((image, index) => (
                <motion.button
                  key={image.id}
                  id={image.id}
                  type="button"
                  className="gallery-tile"
                  onClick={() => setSelected(image)}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-7%" }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.2) }}
                  aria-label={`Ampliar ${image.title}`}
                >
                  <span className={`gallery-tile__image ${image.fit === "contain" ? "is-contain" : ""}`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 700px) 86vw, (max-width: 1100px) 42vw, 28vw"
                    />
                    <i aria-hidden="true">↗</i>
                  </span>
                  <span className="gallery-tile__caption">
                    <strong>{image.title}</strong>
                    <small>{image.detail}</small>
                  </span>
                </motion.button>
              ))}
            </div>
          </section>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="gallery-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`Visualização ampliada de ${selected.title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="gallery-lightbox__backdrop"
              onClick={() => setSelected(null)}
              aria-label="Fechar imagem"
            />

            <button type="button" className="gallery-lightbox__close" onClick={() => setSelected(null)}>
              Fechar
            </button>

            <button type="button" className="gallery-lightbox__arrow is-previous" onClick={() => move(-1)} aria-label="Imagem anterior">
              ←
            </button>

            <motion.figure
              key={selected.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
            >
              <div className={selected.fit === "contain" ? "is-contain" : ""}>
                <Image src={selected.src} alt={selected.alt} fill sizes="90vw" priority />
              </div>
              <figcaption>
                <strong>{selected.title}</strong>
                <span>{selected.detail}</span>
              </figcaption>
            </motion.figure>

            <button type="button" className="gallery-lightbox__arrow is-next" onClick={() => move(1)} aria-label="Próxima imagem">
              →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
