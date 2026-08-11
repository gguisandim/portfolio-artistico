"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useMemo, useRef } from "react";
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

  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, index) => ({
        id: index,
        left: `${12 + ((index * 37) % 76)}%`,
        top: `${10 + ((index * 29) % 74)}%`,
        size: 2 + (index % 4),
        delay: (index % 7) * 0.35,
        duration: 4.5 + (index % 6) * 0.7
      })),
    []
  );

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
          stagger: 0.1,
          delay: 0.35,
          ease: "power2.out"
        }
      );

      gsap.to(imageRef.current, {
        yPercent: 7,
        scale: 1.025,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.to(".featured-hero__brush-line", {
        xPercent: 3,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2
        }
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="featured-hero">
      <div className="featured-hero__ambient" aria-hidden="true" />
      <div className="featured-hero__grain" aria-hidden="true" />
      <div className="featured-hero__brush-line" aria-hidden="true" />
      <div className="featured-hero__scribble" aria-hidden="true" />

      <div className="featured-hero__particles" aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="featured-hero__particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      <div ref={contentRef} className="featured-hero__copy">
        <div className="featured-hero__topline">
          <p className="featured-hero__eyebrow">Obra em destaque</p>
          <span>01 / 01</span>
        </div>

        <h1>{artwork.title}</h1>

        <Link className="featured-hero__details" href="#autorretratos">
          Ver autorretratos <span aria-hidden="true">↘</span>
        </Link>

        <div className="featured-hero__scroll">
          <span />
          <p>Role para explorar</p>
        </div>
      </div>

      <div ref={imageRef} className="featured-hero__art">
        <Image
          src={artwork.coverImage}
          alt="Autorretrato de Bruno Castelo em tons amarelos, azuis e verdes"
          fill
          priority
          className="featured-hero__single-image"
          sizes="(max-width: 900px) 100vw, 86vw"
        />
      </div>

      <div className="featured-hero__art-credit">
        <span>Autorretrato I</span>
        <span>{artwork.year}</span>
      </div>
    </section>
  );
}
