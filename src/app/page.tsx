import ArtworkCollection from "@/components/gallery/ArtworkCollection";
import ColorHero from "@/components/hero/ColorHero";
import Header from "@/components/layout/Header";
import AboutPreview from "@/components/about/AboutPreview";
import HQSection from "@/components/hq/HQsection";
import { colorCollection } from "@/data/collections";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="home-page">
        <ColorHero artwork={colorCollection.featuredArtwork} />
        <ArtworkCollection collection={colorCollection} />
        <HQSection />
        <AboutPreview />
      </main>
    </>
  );
}