import ArtworkCollection from "@/components/gallery/ArtworkCollection";
import ColorHero from "@/components/hero/ColorHero";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutPreview from "@/components/about/AboutPreview";
import SelfPortraitSection from "@/components/selfportrait/SelfPortraitSection";
import HQSection from "@/components/hq/HQsection";
import DigitalArtSection from "@/components/digital/DigitalArtSection";
import { colorCollection } from "@/data/collections";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="home-page">
        <ColorHero artwork={colorCollection.featuredArtwork} />
        <AboutPreview />
        <ArtworkCollection collection={colorCollection} />
        <SelfPortraitSection />
        <HQSection />
        <DigitalArtSection />
      </main>
      <Footer />
    </>
  );
}
