import type { Metadata } from "next";
import FullGallery from "@/components/gallery/FullGallery";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { galleryProjects } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Galeria — Bruno Castelo",
  description: "Todas as obras do portfólio de Bruno Castelo, organizadas por projeto."
};

export default function GaleriaPage() {
  const totalImages = galleryProjects.reduce((total, project) => total + project.images.length, 0);

  return (
    <>
      <Header />
      <main className="gallery-page">
        <header className="gallery-hero">
          <p>Arquivo visual</p>
          <h1>Galeria</h1>
          <span>{totalImages} imagens · {galleryProjects.length} núcleos</span>
          <p>
            Autorretratos, pinturas, recortes de HQ e ilustrações digitais reunidos em um único arquivo visual.
          </p>
        </header>
        <FullGallery />
      </main>
      <Footer />
    </>
  );
}
