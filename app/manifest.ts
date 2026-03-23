import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Old School House",
    short_name: "Old School House",
    description:
      "Pub favourites, Nepalese cooking, live sport, and a warm welcome in the heart of Stony Stratford.",
    start_url: "/",
    display: "standalone",
    background_color: "#f9f6f1",
    theme_color: "#061b0e",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
