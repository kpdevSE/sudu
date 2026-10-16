"use client";

import React, { useRef } from "react";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import AudioPlayer, { AudioPlayerHandle } from "@/components/AudioPlayer";
import SurpriseModal from "@/components/SurpriseModal";
import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection";
import MagicalAmbientAtmosphere from "@/components/MagicalAmbientAtmosphere";
import MagicalWishesMarquee from "@/components/MagicalWishesMarquee";
import MagicalBirthdayWishes from "@/components/MagicalBirthdayWishes";
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
    <main className="relative min-h-screen bg-white text-stone-900 overflow-x-hidden selection:bg-rose-400 selection:text-white pb-24 sm:pb-28">
      {/* Continuous Magical Ambient Particle Atmosphere (Golden Sparkles & Touch Trail) */}
      <MagicalAmbientAtmosphere />

      {/* Surprise Opening Overlay (Light Theme) that Starts Birthday Chime */}
      <SurpriseModal onOpen={handleSurpriseOpen} />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Ambient Birthday Song Synthesizer & Controller */}
      <AudioPlayer ref={audioPlayerRef} autoStart={false} />

      {/* Floating Mobile-Responsive Navigation Dock */}
      <FloatingNav />

      {/* Main / Hero Celebration Section with Sunflower & Rose Garden + WhatsApp Polaroids */}
      <HeroSection />

      {/* Continuous Magical Birthday Wishes Marquee Ribbon (Infinite Flow with WhatsApp Avatars) */}
      <MagicalWishesMarquee />

      {/* Enchanted Birthday Wishes with WhatsApp Memories & Animations (No Buttons Needed) */}
      <MagicalBirthdayWishes />

      {/* Boyfriend's Heartfelt Wish & Multi-Photo Romantic Filmstrip */}
      <BoyfriendWishSection />

      {/* Dad's Wish Section (Interactive 3D Flip Card + Catholic Blessing) */}
      <DadWishSection />

      {/* Grandmother & Grandfather's Wishes Section (Opposite Slide-In + Catholic Prayers) */}
      <GrandparentsWishSection />

      {/* Interactive Photo Gallery Section (Full 20 Photos including All 12 WhatsApp Images) */}
      <PhotoGallerySection />

      {/* Interactive Wishbook & Guest Wall */}
      <WishbookSection />

      {/* Finale Footer with Sunflower & Rose Blessing + WhatsApp Garland */}
      <FooterSection />
    </main>
  );
}
