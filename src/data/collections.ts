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

  featuredArtwork: {
    id: "color-featured",
    slug: "autorretrato-bruno-castelo",
    title: "Autorretrato",
    year: 2026,
    technique: rostosTechnique,
    description: "Bruno Castelo · 29,7 × 42 cm",
    coverImage: "/artworks/featured/autorretrato.jpg",
    theme: "color",
    featured: true
  },

  artworks: [
    {
      id: "color-01",
      slug: "leticia-guedes",
      title: "Letícia Guedes",
      year: 2026,
      technique: rostosTechnique,
      description: rostosDimensions,
      coverImage: "/artworks/featured/retrato-01.jpg",
      theme: "color"
    },
    {
      id: "color-02",
      slug: "giovana",
      title: "Giovana",
      year: 2026,
      technique: rostosTechnique,
      description: rostosDimensions,
      coverImage: "/artworks/featured/retrato-02.jpg",
      theme: "color"
    },
    {
      id: "color-03",
      slug: "brenda",
      title: "Brenda",
      year: 2026,
      technique: rostosTechnique,
      description: rostosDimensions,
      coverImage: "/artworks/featured/retrato-04.jpg",
      theme: "color"
    },
    {
      id: "color-04",
      slug: "durval",
      title: "Durval",
      year: 2026,
      technique: rostosTechnique,
      description: rostosDimensions,
      coverImage: "/artworks/featured/retrato-05.jpg",
      theme: "color"
    },
    {
      id: "color-05",
      slug: "geovana",
      title: "Geovana",
      year: 2026,
      technique: rostosTechnique,
      description: rostosDimensions,
      coverImage: "/artworks/featured/retrato-03.jpg",
      theme: "color"
    }
  ]
};

export const monochromeCollection: ArtworkCollection = {
  id: "preto-e-branco",
  title: "Ainda Sou Eu",
  subtitle: "História em quadrinhos",
  description: "A HQ autobiográfica ‘Ainda Sou Eu’ originou-se a partir do percurso da disciplina ‘Laboratório de Narrativas Gráficas: HQ e Animação’, ministrada pela docente Aylana Canto, no ano de 2026. Perpassando por temas como infância, melancolia e sexualidade, a HQ ‘Ainda Sou Eu’ busca, a partir da arte sequencial, compartilhar pensamentos íntimos do autor acerca do seu crescimento e do seu próprio indivíduo.‘Ainda Sou Eu’ surge em uma perspectiva mais poética, se distanciando das histórias clássicas em quadrinho, em uma tentativa de auto reflexão do artista.",
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
    },
    {
      id: "mono-06",
      slug: "hq-06",
      title: "A definir",
      year: 2026,
      technique: "A definir",
      description: "A definir",
      coverImage: "/artworks/hq/hq-06.png",
      theme: "monochrome"
    },
    {
      id: "mono-07",
      slug: "hq-07",
      title: "A definir",
      year: 2026,
      technique: "A definir",
      description: "A definir",
      coverImage: "/artworks/hq/hq-07.png",
      theme: "monochrome"
    },
    {
      id: "mono-08",
      slug: "hq-08",
      title: "A definir",
      year: 2026,
      technique: "A definir",
      description: "A definir",
      coverImage: "/artworks/hq/hq-08.png",
      theme: "monochrome"
    },
    {
      id: "mono-09",
      slug: "hq-09",
      title: "A definir",
      year: 2026,
      technique: "A definir",
      description: "A definir",
      coverImage: "/artworks/hq/hq-09.png",
      theme: "monochrome"
    }
  ]
};