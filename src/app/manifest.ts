import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jisr Tech, جسر تك",
    short_name: "Jisr Tech",
    description:
      "Bridging businesses to the digital world, نجسر أعمالك إلى العالم الرقمي",
    start_url: "/",
    display: "browser",
    background_color: "#f6f5f9",
    theme_color: "#6023c0",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
