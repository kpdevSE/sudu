"use client";

import React, { useRef } from "react";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import AudioPlayer, { AudioPlayerHandle } from "@/components/AudioPlayer";
import SurpriseModal from "@/components/SurpriseModal";
import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection";
import BoyfriendWishSection from "@/components/BoyfriendWishSection";
import DadWishSection from "@/components/DadWishSection";
import GrandparentsWishSection from "@/components/GrandparentsWishSection";
import PhotoGallerySection from "@/components/PhotoGallerySection";
import WishbookSection from "@/components/WishbookSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  const audioPlayerRef = useRef<AudioPlayerHandle>(null);

  const handleSurpriseOpen = () => {
    // Triggers music play on user tap / modal reveal directly inside the user click gesture
    audioPlayerRef.current?.startAudio();
  };

  return (
    <main className="relative min-h-screen bg-white text-stone-900 overflow-x-hidden selection:bg-rose-400 selection:text-white">
      {/* Surprise Opening Overlay (Light Theme) that Launches Confetti & Starts Birthday Chime */}
      <SurpriseModal onOpen={handleSurpriseOpen} />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Ambient Birthday Song Synthesizer & Controller */}
      <AudioPlayer ref={audioPlayerRef} autoStart={false} />

      {/* Floating Mobile-Responsive Navigation Dock */}
      <FloatingNav />

      {/* Main / Hero Celebration Section with Sunflower & Rose Garden */}
      <HeroSection />

      {/* Boyfriend's Heartfelt Wish & Polaroid Memory */}
      <BoyfriendWishSection />

      {/* Dad's Wish Section (Interactive 3D Flip Card + Catholic Blessing) */}
      <DadWishSection />

      {/* Grandmother & Grandfather's Wishes Section (Opposite Slide-In + Catholic Prayers) */}
      <GrandparentsWishSection />

      {/* Interactive Photo Gallery Section (Masonry + Lightbox) */}
      <PhotoGallerySection />

      {/* Interactive Wishbook & Guest Wall */}
      <WishbookSection />

      {/* Finale Footer with Sunflower & Rose Blessing */}
      <FooterSection />
    </main>
  );
}
