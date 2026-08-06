import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://seu-dominio.com";

  return [
    { url: baseUrl, priority: 1 },
    { url: `${baseUrl}/galeria`, priority: 0.9 },
    { url: `${baseUrl}/sobre`, priority: 0.7 },
    { url: `${baseUrl}/contato`, priority: 0.7 }
  ];
}
