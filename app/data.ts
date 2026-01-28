export type MediaType = 'local' | 'youtube' | 'instagram';

export interface MediaItem {
  type: MediaType;
  url: string; // URL for local, or ID/EmbedURL for others
  thumbnail?: string; // Optional custom thumbnail
}

export const projects = [
  {
    id: 1,
    title: "Motion Graphics",
    category: "Video Editing",
    slug: "motion-graphics",
    color: "bg-blue-100 dark:bg-blue-900/20",
    colSpan: "md:col-span-2",
    description: "A collection of high-energy motion graphics work including kinetic typography, logo animations, and explainers.",
    media: [
      { type: "instagram", url: "DNYDHhxRWSD" },
      { type: "instagram", url: "DLIIjigR-ko" },
      { type: "instagram", url: "DKyqX6hTIy9" },
      { type: "instagram", url: "C7omk07vLQp" }, // Example: Rick Roll (Replace with real ID)
      { type: "local", url: "/videos/motion1.mp4" },
      { type: "youtube", url: "M7fi_IBh06w" }, // Example: Sintel
    ] as MediaItem[]
  },
  {
    id: 2,
    title: "Wedding Shoots",
    category: "Cinematography",
    slug: "wedding-shoots",
    color: "bg-purple-100 dark:bg-purple-900/20",
    colSpan: "md:col-span-1",
    description: "Capturing the magic of special moments. Cinematic wedding highlights tailored to tell the couple's unique love story.",
    media: [
      { type: "instagram", url: "" }, // Example Post ID
      { type: "local", url: "/videos/wedding1.mp4" },
    ] as MediaItem[]
  },
  {
    id: 3,
    title: "Gaming Content",
    category: "Content Creation",
    slug: "gaming-content",
    color: "bg-emerald-100 dark:bg-emerald-900/20",
    colSpan: "md:col-span-1",
    description: "Fast-paced, engaging edits for gaming creators. enhancing gameplay with memes, sound effects, and dynamic cuts.",
    media: [
      { type: "instagram", url: "DRg99CHkRuR" },
      { type: "instagram", url: "DLo7_IhxQoC" },
      { type: "instagram", url: "C0JwDcbxH5Z" },
      { type: "instagram", url: "Czf8h55xzEB" },
      { type: "instagram", url: "CzPRDLGh0e6" },
      { type: "instagram", url: "CxdUrA0x4Uf" }, // YouTube Short? use ID
      { type: "local", url: "/videos/gaming1.mp4" },
    ] as MediaItem[]
  },
  {
    id: 4,
    title: "Color Grading",
    category: "Color Grading",
    slug: "color-grading",
    color: "bg-orange-100 dark:bg-orange-900/20",
    colSpan: "md:col-span-2",
    description: "Before and after showcases of color grading work using DaVinci Resolve. Setting the mood and tone for every scene.",
    media: [
      { type: "youtube", url: "dQw4w9WgXcQ" },
      { type: "instagram", url: "DTQXNy5jHsg" },
    ] as MediaItem[]
  },
];
