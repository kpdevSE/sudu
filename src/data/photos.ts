export interface PhotoItem {
  id: string;
  src: string;
  title: string;
  category: "all" | "beauty" | "dates" | "fun" | "family";
  caption: string;
  tag: string;
  featured?: boolean;
  aspect?: string;
  rotation?: string;
  accentColor?: string;
}

// Base directory for WhatsApp photos
const WA_BASE = "/birthday/photogallery/WhatsApp Unknown 2026-10-16 at 10.47.39";

export const ALL_PHOTOS: PhotoItem[] = [
  // WhatsApp Photo 1: Close-up in black dress with golden necklace
  {
    id: "wa-1",
    src: `${WA_BASE}/WhatsApp Image 2026-10-16 at 10.46.15.jpeg`,
    title: "Sunlit Elegance",
    category: "beauty",
    caption: "A vision of gentle grace and quiet beauty. Your warmth shines brighter than any morning sun.",
    tag: "Pure Elegance ✨",
    featured: true,
    aspect: "aspect-[3/4]",
    rotation: "-rotate-1",
    accentColor: "from-rose-500/20 via-pink-400/10 to-amber-300/20",
  },
  // WhatsApp Photo 2: Couple selfie under palm trees
  {
    id: "wa-2",
    src: `${WA_BASE}/WhatsApp Image 2026-10-16 at 10.46.16 (1).jpeg`,
    title: "Sunny Palm Breezes",
    category: "dates",
    caption: "Under the shade of tropical palms, your presence makes every single afternoon a paradise.",
    tag: "Sweet Moments 🌴",
    aspect: "aspect-[3/4]",
    rotation: "rotate-1",
    accentColor: "from-emerald-400/20 via-teal-300/10 to-amber-300/20",
  },
  // WhatsApp Photo 3: Balcony panoramic view of long hair over green fields
  {
    id: "wa-3",
    src: `${WA_BASE}/WhatsApp Image 2026-10-16 at 10.46.16 (2).jpeg`,
    title: "Endless Horizons & Golden Light",
    category: "beauty",
    caption: "Gazing over lush green paddy fields and sun-drenched clouds. Your beautiful hair flowing like poetry in the wind.",
    tag: "Breathtaking 🌅",
    featured: true,
    aspect: "aspect-[3/4]",
    rotation: "rotate-0",
    accentColor: "from-sky-400/20 via-blue-300/10 to-amber-300/20",
  },
  // WhatsApp Photo 4: Playful freckles selfie
  {
    id: "wa-4",
    src: `${WA_BASE}/WhatsApp Image 2026-10-16 at 10.46.16.jpeg`,
    title: "Sun-Kissed & Playful",
    category: "fun",
    caption: "Those sweet freckles and soft smile that can instantly melt away every sorrow in the world.",
    tag: "Sunshine Girl 🌻",
    aspect: "aspect-[3/4]",
    rotation: "-rotate-1",
    accentColor: "from-amber-400/20 via-yellow-300/10 to-rose-300/20",
  },
  // WhatsApp Photo 5: Balcony sunset view
  {
    id: "wa-5",
    src: `${WA_BASE}/WhatsApp Image 2026-10-16 at 10.46.33.jpeg`,
    title: "Chasing the Golden Sun",
    category: "beauty",
    caption: "When the sky fills with golden light and the rays dance in your hair. A truly magical sight.",
    tag: "Golden Hour ☀️",
    aspect: "aspect-[3/4]",
    rotation: "rotate-1",
    accentColor: "from-amber-500/20 via-orange-400/10 to-rose-400/20",
  },
  // WhatsApp Photo 6: Mirror selfie in striped shirt
  {
    id: "wa-6",
    src: `${WA_BASE}/WhatsApp Image 2026-10-16 at 10.46.45 (1).jpeg`,
    title: "Casual & Chic",
    category: "beauty",
    caption: "Effortlessly stylish, stunning without even trying. You look gorgeous in every single frame.",
    tag: "Casual Glow 💖",
    aspect: "aspect-[9/16]",
    rotation: "-rotate-1",
    accentColor: "from-purple-400/20 via-pink-300/10 to-rose-300/20",
  },
  // WhatsApp Photo 7: Balcony sunset portrait full body
  {
    id: "wa-7",
    src: `${WA_BASE}/WhatsApp Image 2026-10-16 at 10.46.45.jpeg`,
    title: "Golden Hour Queen",
    category: "beauty",
    caption: "Leaning back into the sunset glow with the countryside breeze. Pure radiance and grace.",
    tag: "Golden Sunset 🌇",
    featured: true,
    aspect: "aspect-[3/4]",
    rotation: "rotate-0",
    accentColor: "from-amber-500/20 via-rose-400/10 to-pink-300/20",
  },
  // WhatsApp Photo 8: Couple selfie in white shirts on road
  {
    id: "wa-8",
    src: `${WA_BASE}/WhatsApp Image 2026-10-16 at 10.46.46.jpeg`,
    title: "Walking Hand in Hand",
    category: "dates",
    caption: "Matching white outfits, peaceful roads, and the happiest smiles together. My favorite companion forever.",
    tag: "Soulmates 💑",
    aspect: "aspect-[3/4]",
    rotation: "rotate-1",
    accentColor: "from-rose-400/20 via-pink-300/10 to-amber-200/20",
  },
  // WhatsApp Photo 9: Leaning against the car in the forest
  {
    id: "wa-9",
    src: `${WA_BASE}/WhatsApp Image 2026-10-16 at 10.46.47.jpeg`,
    title: "Forest Road Trip",
    category: "dates",
    caption: "Lost among the tall green trees, pausing by the car just to laugh and enjoy being together.",
    tag: "Adventure Time 🌲",
    featured: true,
    aspect: "aspect-[3/4]",
    rotation: "-rotate-1",
    accentColor: "from-emerald-500/20 via-green-400/10 to-amber-300/20",
  },
  // WhatsApp Photo 10: Dinner date with hand on shoulder
  {
    id: "wa-10",
    src: `${WA_BASE}/WhatsApp Image 2026-10-16 at 10.46.48 (1).jpeg`,
    title: "Candlelit Whispers",
    category: "dates",
    caption: "In the cozy glow of the restaurant, gently holding you close while the night unwinds softly.",
    tag: "Romantic Dinner 🍷",
    aspect: "aspect-[3/4]",
    rotation: "rotate-1",
    accentColor: "from-rose-500/20 via-purple-400/10 to-amber-300/20",
  },
  // WhatsApp Photo 11: Goofy cartoon filter
  {
    id: "wa-11",
    src: `${WA_BASE}/WhatsApp Image 2026-10-16 at 10.46.48.jpeg`,
    title: "Pure Silliness & Laughter",
    category: "fun",
    caption: "The goofy face filters and non-stop giggles. You make life so overwhelmingly fun and joyful!",
    tag: "Our Silly Side 🤪",
    aspect: "aspect-[9/16]",
    rotation: "-rotate-2",
    accentColor: "from-yellow-400/25 via-amber-300/15 to-orange-400/20",
  },
  // WhatsApp Photo 12: Cozy cafe burger & smoothies date
  {
    id: "wa-12",
    src: `${WA_BASE}/WhatsApp Image 2026-10-16 at 10.46.49.jpeg`,
    title: "Cozy Café Afternoon",
    category: "dates",
    caption: "Juicy burgers, crispy fries, mango smoothies, watching movies on the laptop together with a church view in the background.",
    tag: "Foodie Dates 🍔",
    aspect: "aspect-[3/4]",
    rotation: "rotate-1",
    accentColor: "from-amber-400/20 via-orange-300/10 to-yellow-200/20",
  },
  // Original Photos from photogallery folder
  {
    id: "orig-main",
    src: "/birthday/home/birthday_main.jpg",
    title: "The Lady in Red",
    category: "beauty",
    caption: "The breathtaking queen of the day. A vision of beauty, grace, and confidence.",
    tag: "Queen Energy 👑",
    featured: true,
    aspect: "aspect-[16/10]",
    rotation: "rotate-0",
    accentColor: "from-rose-600/25 via-red-500/15 to-amber-400/20",
  },
  {
    id: "orig-1",
    src: "/birthday/photogallery/imageone.jpg",
    title: "Café Sunshine Glow",
    category: "beauty",
    caption: "Sitting across from you, mesmerized by how effortlessly you light up the whole room.",
    tag: "Radiant Smile ✨",
    aspect: "aspect-[3/4]",
    rotation: "-rotate-1",
  },
  {
    id: "orig-dad",
    src: "/birthday/dad/dads_photo.jpg",
    title: "Daddy's Pride & Joy",
    category: "family",
    caption: "Feeding birthday cake to Dad—a moment of pure love, fatherly pride, and sacred blessings.",
    tag: "Family Love ✝️",
    featured: true,
    aspect: "aspect-[16/10]",
    rotation: "rotate-0",
    accentColor: "from-amber-500/20 via-yellow-400/10 to-orange-300/20",
  },
  {
    id: "orig-2",
    src: "/birthday/photogallery/IMG-20230616-WA0067.jpg",
    title: "Sweet Summer Wind",
    category: "fun",
    caption: "The wind catching your hair and your sweet laughter turning the whole day into pure magic.",
    tag: "Sweet Vibes 🌻",
    aspect: "aspect-[3/4]",
    rotation: "rotate-1",
  },
  {
    id: "orig-4",
    src: "/birthday/photogallery/IMG-20230616-WA0068.jpg",
    title: "Radiant & Unfiltered",
    category: "beauty",
    caption: "Your natural, genuine smile that can instantly melt away any worry in the universe.",
    tag: "Heart Melter 🌹",
    aspect: "aspect-[4/5]",
    rotation: "-rotate-1",
  },
  {
    id: "orig-5",
    src: "/birthday/photogallery/IMG-20230616-WA0070.jpg",
    title: "Warm Golden Glow",
    category: "beauty",
    caption: "When the evening light kissed your face and highlighted that gentle, gorgeous glow.",
    tag: "Sunset Radiance 🌅",
    aspect: "aspect-[4/5]",
    rotation: "rotate-1",
  },
  {
    id: "orig-6",
    src: "/birthday/photogallery/IMG-20230616-WA0071.jpg",
    title: "Daydreaming Thoughts",
    category: "beauty",
    caption: "Lost in whimsical thoughts, effortlessly looking like a timeless work of art.",
    tag: "Dreamer 💭",
    aspect: "aspect-[3/4]",
    rotation: "-rotate-1",
  },
  {
    id: "orig-7",
    src: "/birthday/photogallery/IMG-20230616-WA0072.jpg",
    title: "Starry Gentle Gaze",
    category: "beauty",
    caption: "Eyes filled with constellations, warmth, and boundless tenderness.",
    tag: "Starry Eyes ⭐",
    aspect: "aspect-[3/4]",
    rotation: "rotate-1",
  },
];
