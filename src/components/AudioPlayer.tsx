"use client";

import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import { Volume2, VolumeX, Music, Play, Pause, RotateCcw } from "lucide-react";

export interface AudioPlayerHandle {
  startAudio: () => void;
  stopAudio: () => void;
  isPlaying: boolean;
}

const AudioPlayer = forwardRef<AudioPlayerHandle, { autoStart?: boolean }>(({ autoStart = false }, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create and configure HTMLAudioElement
    const audio = new Audio("/sub_clair-happy-birthday-592177.mp3");
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = isMuted ? 0 : volume;

    audio.onplay = () => setIsPlaying(true);
    audio.onpause = () => setIsPlaying(false);
    audio.onended = () => {
      // Safety loop fallback
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };

    audioRef.current = audio;

    // Mobile gesture unlock listener for iOS Safari and Chrome
    const unlockAudio = () => {
      if (audioRef.current) {
        // Just prepare and load
        audioRef.current.load();
      }
    };

    window.addEventListener("touchstart", unlockAudio, { passive: true, once: true });
    window.addEventListener("click", unlockAudio, { passive: true, once: true });

    return () => {
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("click", unlockAudio);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }
    };
  }, []);

  // Update volume & mute states dynamically on active audio
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  const startPlaying = async () => {
    if (!audioRef.current) return;
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (err) {
      console.warn("Audio play prevented:", err);
    }
  };

  const stopPlaying = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const restartSong = async () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      // ignore
    }
  };

  useImperativeHandle(ref, () => ({
    startAudio: () => {
      startPlaying();
    },
    stopAudio: () => {
      stopPlaying();
    },
    isPlaying,
  }));

  const togglePlay = () => {
    if (isPlaying) {
      stopPlaying();
    } else {
      startPlaying();
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <aside
      aria-label="Birthday Party Song Controller"
      className="fixed top-3 sm:top-5 right-3 sm:right-5 z-40 flex items-center gap-1.5 sm:gap-2"
    >
      <div className="bg-white/95 rounded-full px-3 py-2 flex items-center gap-2.5 border border-amber-300 shadow-xl shadow-amber-950/10 backdrop-blur-2xl transition-all">
        {/* Play / Pause Toggle Button */}
        <button
          onClick={togglePlay}
          className="relative p-2.5 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-white shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
          title={isPlaying ? "Pause Birthday Song" : "Play Birthday Song"}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4 translate-x-0.5 fill-current" />
          )}
          {isPlaying && (
            <span className="absolute -inset-1 rounded-full bg-rose-400/35 animate-ping -z-10" />
          )}
        </button>

        {/* Track Title and Equalizer Animation */}
        <div className="flex flex-col pr-1 cursor-pointer" onClick={togglePlay}>
          <div className="flex items-center gap-1.5">
            <span className="text-sm animate-bounce">🎂</span>
            <span className="text-[11px] sm:text-xs font-black text-stone-900 tracking-wide">
              Birthday Party Song 🎉
            </span>
            {isPlaying && (
              <span className="flex gap-0.5 items-end h-3 pl-0.5">
                <span className="w-0.5 h-3.5 bg-rose-500 rounded-full animate-pulse" />
                <span className="w-0.5 h-2 bg-amber-500 rounded-full animate-pulse delay-75" />
                <span className="w-0.5 h-4 bg-pink-500 rounded-full animate-pulse delay-150" />
                <span className="w-0.5 h-2.5 bg-emerald-500 rounded-full animate-pulse delay-100" />
              </span>
            )}
          </div>
          <span className="text-[9px] sm:text-[10px] text-stone-500 flex items-center gap-1 font-semibold">
            {isPlaying ? (
              <span className="text-rose-600 font-bold">🎵 Looping Celebration Music • On</span>
            ) : (
              <span>Tap to Play Song 🌻</span>
            )}
          </span>
        </div>

        {/* Replay button */}
        {isPlaying && (
          <button
            onClick={restartSong}
            className="text-stone-400 hover:text-stone-800 transition-colors p-1"
            title="Restart Song"
            aria-label="Restart song"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        )}

        {/* Volume & Mute */}
        <div className="relative flex items-center">
          <button
            onClick={toggleMute}
            onMouseEnter={() => setShowVolumeSlider(true)}
            className="text-stone-500 hover:text-stone-900 transition-colors p-1"
            title={isMuted ? "Unmute" : "Mute"}
            aria-label={isMuted ? "Unmute sound" : "Mute sound"}
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-3.5 h-3.5 text-rose-400" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 text-amber-600" />
            )}
          </button>

          {/* Volume Slider Popup */}
          {showVolumeSlider && (
            <div
              onMouseLeave={() => setShowVolumeSlider(false)}
              className="absolute right-0 top-9 bg-white/95 rounded-xl p-2.5 shadow-xl border border-amber-200/90 backdrop-blur-md flex items-center gap-2 z-50 w-28"
            >
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(parseFloat(e.target.value));
                  if (isMuted) setIsMuted(false);
                }}
                className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
            </div>
          )}
        </div>
      </div>
    </aside>
  );
});

AudioPlayer.displayName = "AudioPlayer";
export default AudioPlayer;
