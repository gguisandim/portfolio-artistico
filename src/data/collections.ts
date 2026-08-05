import type { ArtworkCollection } from "@/types/collection";

const rostosFamiliaresDescription =
  "A série de obras “Rostos Familiares” surge a partir da experimentação dos processos de pintura da disciplina “Laboratório de Pintura”, ministrada pela docente Waléria Américo. O objetivo central era experimentar, a partir das técnicas de pintura, conceitos que poderiam ser aprofundados durante o percurso da disciplina e, posteriormente, transformados em uma série de obras para sua avaliação, servindo também como possível eixo para a poética futura do artista.";

const rostosTechnique =
  "Giz pastel oleoso sobre papel";

const rostosDimensions =
  "14,8 × 21 cm";

export const colorCollection: ArtworkCollection = {
  id: "coloridas",
  title: "Rostos Familiares",
  subtitle: "Memorial Descritivo",
  description: rostosFamiliaresDescription,
  theme: "color",

  /*
   * Obra isolada usada na tela inicial.
   * Não faz parte da série Rostos Familiares.
   */
  featuredArtwork: {
    id: "color-featured",
    slug: "autorretrato-bruno-castelo",
    title: "Autorretrato",
    year: 2026,
    technique: "Giz pastel oleoso sobre papel",
    description: "Bruno Castelo · 29,7 × 42 cm",
    coverImage: "/artworks/featured/autorretrato.jpg",
    theme: "color",
    featured: true
  },

  /*
   * Série Rostos Familiares.
   */
  artworks: [
  {
    id: "color-01",
    slug: "leticia-guedes",
    title: "Letícia Guedes",
    year: 2026,
    technique: "Giz pastel oleoso sobre papel",
    description: "14,8 × 21 cm",
    coverImage: "/artworks/featured/retrato-01.jpg",
    theme: "color"
  },
  {
    id: "color-02",
    slug: "giovana",
    title: "Giovana",
    year: 2026,
    technique: "Giz pastel oleoso sobre papel",
    description: "14,8 × 21 cm",
    coverImage: "/artworks/featured/retrato-02.jpg",
    theme: "color"
  },
  {
    id: "color-03",
    slug: "brenda",
    title: "Brenda",
    year: 2026,
    technique: "Giz pastel oleoso sobre papel",
    description: "14,8 × 21 cm",
    coverImage: "/artworks/featured/retrato-04.jpg",
    theme: "color"
  },
  {
    id: "color-04",
    slug: "durval",
    title: "Durval",
    year: 2026,
    technique: "Giz pastel oleoso sobre papel",
    description: "14,8 × 21 cm",
    coverImage: "/artworks/featured/retrato-05.jpg",
    theme: "color"
  },
  {
    id: "color-05",
    slug: "geovana",
    title: "Geovana",
    year: 2026,
    technique: "Giz pastel oleoso sobre papel",
    description: "14,8 × 21 cm",
    coverImage: "/artworks/featured/retrato-03.jpg",
    theme: "color"
  }
]
};

export const monochromeCollection: ArtworkCollection = {
  id: "preto-e-branco",
  title: "Ainda Sou Eu",
  subtitle: "História em quadrinhos",
  description: "A definir",
  theme: "monochrome",

  featuredArtwork: {
    id: "mono-featured",
    slug: "ainda-sou-eu",
    title: "Ainda Sou Eu",
    year: 2026,
    technique: "A definir",
    description: "A definir",
    coverImage: "/artworks/hq/hq-destaque.png",
    theme: "monochrome",
    featured: true
  },

  artworks: [
    {
      id: "mono-01",
      slug: "hq-01",
      title: "A definir",
      year: 2026,
      technique: "A definir",
      description: "A definir",
      coverImage: "/artworks/hq/hq-01.png",
      theme: "monochrome"
    },
    {
      id: "mono-02",
      slug: "hq-02",
      title: "A definir",
      year: 2026,
      technique: "A definir",
      description: "A definir",
      coverImage: "/artworks/hq/hq-02.png",
      theme: "monochrome"
    },
    {
      id: "mono-03",
      slug: "hq-03",
      title: "A definir",
      year: 2026,
      technique: "A definir",
      description: "A definir",
      coverImage: "/artworks/hq/hq-03.png",
      theme: "monochrome"
    },
    {
      id: "mono-04",
      slug: "hq-04",
      title: "A definir",
      year: 2026,
      technique: "A definir",
      description: "A definir",
      coverImage: "/artworks/hq/hq-04.png",
      theme: "monochrome"
    },
    {
      id: "mono-05",
      slug: "hq-05",
      title: "A definir",
      year: 2026,
      technique: "A definir",
      description: "A definir",
      coverImage: "/artworks/hq/hq-05.png",
      theme: "monochrome"
    }
  ]
};