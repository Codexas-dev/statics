import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Codexas",
    short_name: "Codexas",
    description: "Studio software untuk website, landing page, aplikasi full stack, dan sistem workflow.",
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#060B1C",
    theme_color: "#060B1C",
    lang: "id",
    categories: ["business", "productivity"],
    icons: [
      { src: "/icons/icon-192.webp", sizes: "192x192", type: "image/webp", purpose: "any" },
      { src: "/icons/icon-512.webp", sizes: "512x512", type: "image/webp", purpose: "any" },
      { src: "/icons/icon-maskable-512.webp", sizes: "512x512", type: "image/webp", purpose: "maskable" },
    ],
  };
}
