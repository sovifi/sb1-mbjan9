export const chartData = [
  { date: "2024-03-01", spotify: 400, youtube: 320, instagram: 240, tiktok: 180, x: 150, threads: 120 },
  { date: "2024-03-02", spotify: 300, youtube: 280, instagram: 139, tiktok: 221, x: 180, threads: 140 },
  { date: "2024-03-03", spotify: 520, youtube: 450, instagram: 980, tiktok: 389, x: 420, threads: 380 },
  { date: "2024-03-04", spotify: 270, youtube: 310, instagram: 390, tiktok: 480, x: 320, threads: 290 },
  { date: "2024-03-05", spotify: 850, youtube: 780, instagram: 720, tiktok: 550, x: 580, threads: 520 },
  { date: "2024-03-06", spotify: 920, youtube: 850, instagram: 830, tiktok: 648, x: 620, threads: 580 },
  { date: "2024-03-07", spotify: 600, youtube: 580, instagram: 500, tiktok: 468, x: 420, threads: 380 },
];

export const hotspots = [
  {
    date: "2024-03-03",
    platform: "instagram",
    value: 980,
    insight: "Viral Reel Impact",
    description: "Your behind-the-scenes studio session Reel went viral, leading to a 312% increase in profile visits.",
  },
  {
    date: "2024-03-05",
    platform: "spotify",
    value: 850,
    insight: "Playlist Feature",
    description: "Your track was featured in 'New Music Friday', resulting in a significant streaming boost.",
  },
  {
    date: "2024-03-05",
    platform: "youtube",
    value: 780,
    insight: "YouTube Shorts Success",
    description: "Your music clip gained traction on YouTube Shorts, driving new subscribers and views.",
  },
  {
    date: "2024-03-06",
    platform: "x",
    value: 620,
    insight: "Twitter Space Impact",
    description: "Your Twitter Space about music production reached over 5K listeners, boosting engagement.",
  },
  {
    date: "2024-03-06",
    platform: "spotify",
    value: 920,
    insight: "Cross-Platform Success",
    description: "Your social media momentum translated into major streaming numbers.",
  },
  {
    date: "2024-03-07",
    platform: "spotify",
    value: 600,
    insight: "Playlist Boost",
    description: "Your track was added to three influential playlists, resulting in a 54% streaming increase.",
  },
];

export const platformColors = {
  spotify: "var(--chart-1)",
  youtube: "var(--chart-2)",
  instagram: "var(--chart-3)",
  tiktok: "var(--chart-4)",
  x: "var(--chart-5)",
  threads: "220 70% 50%",
} as const;