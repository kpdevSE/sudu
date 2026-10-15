import React from "react";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import AudioPlayer from "@/components/AudioPlayer";
import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection";
import BoyfriendWishSection from "@/components/BoyfriendWishSection";
import DadWishSection from "@/components/DadWishSection";
import GrandparentsWishSection from "@/components/GrandparentsWishSection";
import PhotoGallerySection from "@/components/PhotoGallerySection";
import WishbookSection from "@/components/WishbookSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#070611] text-zinc-100 overflow-x-hidden selection:bg-pink-500 selection:text-white">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Floating Ambient Music Chime Synthesizer */}
      <AudioPlayer />

      {/* Floating Navigation Dock */}
      <FloatingNav />

      {/* Main / Hero Section */}
      <HeroSection />

      {/* My Wish (Boyfriend's Wish) Section */}
      <BoyfriendWishSection />

      {/* Dad's Wish Section */}
      <DadWishSection />

      {/* Grandmother & Grandfather's Wishes Section */}
      <GrandparentsWishSection />

      {/* Interactive Photo Gallery Section */}
      <PhotoGallerySection />

      {/* Interactive Wishbook & Guest Wall */}
      <WishbookSection />

      {/* Romantic Finale Footer */}
      <FooterSection />
    </main>
  );
}
