export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  title: string;
  detail: string;
  fit?: "cover" | "contain";
};

export type GalleryProject = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tone: "color" | "hq" | "digital";
  images: GalleryImage[];
};

export const galleryProjects: GalleryProject[] = [
  {
    id: "rostos-familiares",
    number: "01",
    title: "Rostos Familiares",
    subtitle: "Giz pastel oleoso sobre papel · 2026",
    description: "Retratos desenvolvidos a partir da observação, da memória e dos vínculos afetivos.",
    tone: "color",
    images: [
      {
        id: "autorretrato-bruno-castelo",
        src: "/artworks/featured/autorretrato.jpg",
        alt: "Autorretrato de Bruno Castelo",
        title: "Autorretrato",
        detail: "Bruno Castelo · 29,7 × 42 cm"
      },
      {
        id: "leticia-guedes",
        src: "/artworks/featured/retrato-01.jpg",
        alt: "Retrato de Letícia Guedes",
        title: "Letícia Guedes",
        detail: "14,8 × 21 cm"
      },
      {
        id: "giovana",
        src: "/artworks/featured/retrato-02.jpg",
        alt: "Retrato de Giovana",
        title: "Giovana",
        detail: "14,8 × 21 cm"
      },
      {
        id: "brenda",
        src: "/artworks/featured/retrato-04.jpg",
        alt: "Retrato de Brenda",
        title: "Brenda",
        detail: "14,8 × 21 cm"
      },
      {
        id: "durval",
        src: "/artworks/featured/retrato-05.jpg",
        alt: "Retrato de Durval",
        title: "Durval",
        detail: "14,8 × 21 cm"
      },
      {
        id: "geovana",
        src: "/artworks/featured/retrato-03.jpg",
        alt: "Retrato de Geovana",
        title: "Geovana",
        detail: "14,8 × 21 cm"
      }
    ]
  },
  {
    id: "ainda-sou-eu",
    number: "02",
    title: "Ainda Sou Eu",
    subtitle: "História em quadrinhos · 2026",
    description: "Detalhes da HQ, capa e traços",
    tone: "hq",
    images: [
      {
        id: "ainda-sou-eu-capa",
        src: "/artworks/hq/hq-destaque.png",
        alt: "Capa da HQ Ainda Sou Eu",
        title: "Capa",
        detail: "Ainda Sou Eu",
        fit: "contain"
      },
      ...Array.from({ length: 9 }, (_, index) => {
        const number = String(index + 1).padStart(2, "0");
        return {
          id: `ainda-sou-eu-${number}`,
          src: `/artworks/hq/hq-${number}.png`,
          alt: `Página ${number} da HQ Ainda Sou Eu`,
          title: `Página ${number}`,
          detail: "Ainda Sou Eu",
          fit: "contain" as const
        };
      })
    ]
  },
  {
    id: "arte-digital",
    number: "03",
    title: "Arte Digital",
    subtitle: "Ilustrações autorais e fanarts",
    description: "Personagens, cor e fanarts reunidos nos experimentos digitais do portfólio.",
    tone: "digital",
    images: [
      {
        id: "deusa-da-agua",
        src: "/artworks/digital/presenca-em-movimento.jpeg",
        alt: "Personagem azul de cabelos lilás sob uma auréola dourada",
        title: "Deusa da Água",
        detail: "Experimento 2.5D"
      },
      {
        id: "rebecca-sugar",
        src: "/artworks/digital/estudo-de-personagem.png",
        alt: "Personagem de cabelos escuros, óculos, blazer e calça azul",
        title: "Rebecca Sugar",
        detail: "Experimento 2.5D",
        fit: "contain"
      },
      {
        id: "rubi-e-safira",
        src: "/artworks/digital/entre-rubi-e-azul.png",
        alt: "Duas personagens sentadas, uma em tons rubi e outra em tons azuis",
        title: "Rubi e Safira",
        detail: "Experimento 2.5D",
        fit: "contain"
      }
    ]
  }
];
