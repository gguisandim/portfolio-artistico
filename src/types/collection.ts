import type { Artwork, ArtworkTheme } from "./artwork";

export type ArtworkCollection = {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  theme: ArtworkTheme;
  featuredArtwork: Artwork;
  artworks: Artwork[];
};
