"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Artwork } from "@/types/artwork";

gsap.registerPlugin(ScrollTrigger);

type ColorHeroProps = {
  artwork: Artwork;
};

export default function ColorHero({ artwork }: ColorHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          scale: 1.08,
          clipPath: "inset(12% 8% 12% 8%)"
        },
        {
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          ease: "power3.out"
        }
      );

      gsap.fromTo(
        contentRef.current?.children ?? [],
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          delay: 0.35,
          ease: "power2.out"
        }
      );

      gsap.to(imageRef.current, {
        yPercent: 8,
        scale: 1.035,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="featured-hero">
      <div ref={contentRef} className="featured-hero__copy">
        <p className="featured-hero__eyebrow">Obra em destaque</p>
        <h1>{artwork.title}</h1>
        <p className="featured-hero__description">{artwork.description}</p>

        <button className="featured-hero__details" type="button">
          Ver detalhes
        </button>

        <div className="featured-hero__scroll">
          <span />
          <p>Role para explorar</p>
        </div>
      </div>

      <div ref={imageRef} className="featured-hero__art">
        <Image
          src={artwork.coverImage}
          alt={artwork.title}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 78vw"
        />
      </div>

      <p className="featured-hero__aside">
        Cores intensas, memórias vivas e formas que se transformam.
      </p>
    </section>
  );
}
