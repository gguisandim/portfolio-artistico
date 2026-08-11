"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  type PointerEvent,
  useEffect,
  useRef,
  useState
} from "react";
import styles from "./DigitalArtSection.module.css";

const artworks = [
  {
    src: "/artworks/digital/presenca-em-movimento.jpeg",
    alt: "Personagem azul de cabelos lilás sob uma auréola dourada",
    title: "Deusa da Água",
    detail: "Arte digital · experimento 2.5D",
    palette: "violet",
    width: 1086,
    height: 1536,
    imageClass: "cover"
  },
  {
    src: "/artworks/digital/estudo-de-personagem.png",
    alt: "Personagem de cabelos escuros, óculos, blazer e calça azul",
    title: "Rebecca Sugar",
    detail: "Arte digital · experimento 2.5D",
    palette: "peach",
    width: 1536,
    height: 2048,
    imageClass: "contain"
  },
  {
    src: "/artworks/digital/entre-rubi-e-azul.png",
    alt: "Duas personagens sentadas, uma em tons rubi e outra em tons azuis",
    title: "Rubi e Safira",
    detail: "Arte digital · experimento 2.5D",
    palette: "sand",
    width: 1536,
    height: 2048,
    imageClass: "contain"
  }
] as const;

export default function DigitalArtSection() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const animationFrame = useRef<number | null>(null);
  const dragStart = useRef<number | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const reducedMotion = useReducedMotion();
  const artwork = artworks[activeIndex];

  useEffect(() => {
    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.09;
      current.current.y += (target.current.y - current.current.y) * 0.09;

      const scene = sceneRef.current;
      if (scene) {
        scene.style.setProperty("--rx", `${-current.current.y * 7}deg`);
        scene.style.setProperty("--ry", `${current.current.x * 7}deg`);
        scene.style.setProperty("--px", `${current.current.x}`);
        scene.style.setProperty("--py", `${current.current.y}`);
      }

      animationFrame.current = requestAnimationFrame(animate);
    };

    animationFrame.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrame.current !== null) cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  const showArtwork = (nextIndex: number, nextDirection: number) => {
    setDirection(nextDirection);
    setActiveIndex((nextIndex + artworks.length) % artworks.length);
    target.current = { x: 0, y: 0 };
  };

  const step = (amount: number) => showArtwork(activeIndex + amount, amount);

  const updatePosition = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    target.current = {
      x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 2,
      y: ((event.clientY - bounds.top) / bounds.height - 0.5) * 2
    };
  };

  const finishDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStart.current !== null) {
      const distance = event.clientX - dragStart.current;
      if (Math.abs(distance) > 55) step(distance < 0 ? 1 : -1);
    }
    dragStart.current = null;
    target.current = { x: 0, y: 0 };
    setIsDragging(false);
  };

  return (
    <section id="arte-digital" className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />

      <header className={styles.intro}>
        <p className={styles.eyebrow}>Sessão 03 · Design</p>
        <h2>Arte Digital</h2>
        <p className={styles.description}>
           Ilustrações autorais e fanarts.
        </p>
      </header>

      <div className={styles.carousel}>
        <button
          type="button"
          className={`${styles.arrow} ${styles.previous}`}
          onClick={() => step(-1)}
          aria-label="Ver arte anterior"
        >
          <span aria-hidden="true">←</span>
        </button>

        <div
          ref={sceneRef}
          className={`${styles.scene} ${styles[artwork.palette]} ${isDragging ? styles.dragging : ""}`}
          onPointerDown={(event) => {
            event.currentTarget.setPointerCapture(event.pointerId);
            dragStart.current = event.clientX;
            setIsDragging(true);
            updatePosition(event);
          }}
          onPointerMove={(event) => {
            if (event.pointerType === "mouse" || isDragging) updatePosition(event);
          }}
          onPointerUp={finishDrag}
          onPointerCancel={finishDrag}
          onPointerLeave={() => {
            if (!isDragging) target.current = { x: 0, y: 0 };
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") step(-1);
            if (event.key === "ArrowRight") step(1);
          }}
          tabIndex={0}
          role="group"
          aria-roledescription="carrossel"
          aria-label={`Arte ${activeIndex + 1} de ${artworks.length}: ${artwork.title}`}
        >
          <div className={styles.deckBackOne} aria-hidden="true" />
          <div className={styles.deckBackTwo} aria-hidden="true" />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={artwork.src}
              className={styles.cardMotion}
              custom={direction}
              initial={reducedMotion ? false : { x: direction * 150, rotate: direction * 7, opacity: 0 }}
              animate={{ x: 0, rotate: 0, opacity: 1 }}
              exit={reducedMotion ? { opacity: 0 } : { x: direction * -150, rotate: direction * -7, opacity: 0 }}
              transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 240, damping: 25 }}
            >
              <div className={styles.stage}>
                <div className={styles.aura} aria-hidden="true" />
                <div className={`${styles.orbit} ${styles.orbitOne}`} aria-hidden="true" />
                <div className={`${styles.orbit} ${styles.orbitTwo}`} aria-hidden="true" />

                <div className={styles.imagePlane}>
                  <Image
                    src={artwork.src}
                    alt={artwork.alt}
                    width={artwork.width}
                    height={artwork.height}
                    className={styles[artwork.imageClass]}
                    priority={activeIndex === 0}
                    draggable={false}
                    sizes="(max-width: 700px) 82vw, 440px"
                  />
                  <div className={styles.sheen} aria-hidden="true" />
                </div>

                <span className={`${styles.particle} ${styles.particleOne}`} aria-hidden="true" />
                <span className={`${styles.particle} ${styles.particleTwo}`} aria-hidden="true" />
                <span className={`${styles.particle} ${styles.particleThree}`} aria-hidden="true" />
                <div className={styles.shadow} aria-hidden="true" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          className={`${styles.arrow} ${styles.next}`}
          onClick={() => step(1)}
          aria-label="Ver próxima arte"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className={styles.caption} aria-live="polite">
        <div>
          <strong>{artwork.title}</strong>
          <span>{artwork.detail}</span>
        </div>
        <span className={styles.counter}>0{activeIndex + 1} / 0{artworks.length}</span>
      </div>

      <div className={styles.pagination} aria-label="Escolher uma arte">
        {artworks.map((item, index) => (
          <button
            key={item.src}
            type="button"
            className={index === activeIndex ? styles.activeDot : ""}
            onClick={() => showArtwork(index, index > activeIndex ? 1 : -1)}
            aria-label={`Ver ${item.title}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>

      <p className={styles.hint}>Mova o cursor · deslize ou use as setas</p>
    </section>
  );
}
