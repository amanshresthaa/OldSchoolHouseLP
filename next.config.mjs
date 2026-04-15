/** @type {import('next').NextConfig} */
const legacyRedirects = [
  { source: "/book-a-table", destination: "/book" },
  { source: "/watch-rugby-world-cup", destination: "/live-sports" },
  { source: "/watch-euro-2024-in-mk", destination: "/live-sports" },
  { source: "/watch-womens-euros-2025", destination: "/live-sports" },
  { source: "/watch-six-nations", destination: "/live-sports" },
  { source: "/watch-the-world-cup", destination: "/live-sports" },
  { source: "/may-finals", destination: "/live-sports" },
  { source: "/loyalty-matchday-club", destination: "/live-sports" },
  { source: "/summer-drinks-deals", destination: "/whats-on" },
  { source: "/black-friday-pub-deals", destination: "/whats-on" },
  { source: "/kids-eat-for-one-pound", destination: "/whats-on" },
  { source: "/christmas", destination: "/whats-on" },
  { source: "/fathers-day-milton-keynes", destination: "/whats-on" },
  { source: "/mothers-day", destination: "/whats-on" },
  { source: "/super-saver-menu", destination: "/our-menus" },
  { source: "/back-soon", destination: "/" },
]

const nextConfig = {
  async redirects() {
    return legacyRedirects.map(({ source, destination }) => ({
      source,
      destination,
      permanent: true,
    }))
  },
}

export default nextConfig
