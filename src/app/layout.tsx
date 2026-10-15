import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Great_Vibes } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-great-vibes",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Happy Birthday Sudu! 💖 | A Supreme Birthday Celebration",
  description:
    "A magical, vibrant, and deeply heartfelt birthday surprise celebration filled with memories, family wishes, and endless love.",
  keywords: ["Birthday", "Celebration", "Surprise", "Love", "Memories"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} ${greatVibes.variable} scroll-smooth`}
    >
      <body className="font-sans bg-[#080711] text-zinc-100 antialiased overflow-x-hidden selection:bg-pink-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
