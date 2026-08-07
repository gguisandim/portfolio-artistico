import type { Metadata } from "next";
import FullGallery from "@/components/gallery/FullGallery";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Galeria — Bruno Castelo",
  description: "Todas as obras do portfólio de Bruno Castelo, organizadas por projeto."
};

export default function GaleriaPage() {
  return (
    <>
      <Header />
      <main className="gallery-page">
        <header className="gallery-hero">
          <p>Arquivo visual</p>
          <h1>Galeria</h1>
          <span>19 imagens · 3 projetos</span>
          <p>
            Uma visão completa das pinturas, páginas de HQ e ilustrações digitais presentes no portfólio.
          </p>
        </header>
        <FullGallery />
      </main>
      <Footer />
    </>
  );
}
