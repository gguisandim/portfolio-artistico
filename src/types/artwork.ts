export type ArtworkTheme = "color" | "monochrome";

export type Artwork = {
  id: string;
  slug: string;
  title: string;
  year: number;
  technique: string;
  description: string;
  coverImage: string;
  images?: string[];
  dimensions?: string;
  theme: ArtworkTheme;
  featured?: boolean;
  animationLayers?: {
    background?: string;
    subject?: string;
    texture?: string;
    foreground?: string;
  };
};
