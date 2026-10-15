"use client";

import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import { Volume2, VolumeX, Music, Play, Pause } from "lucide-react";

export interface AudioPlayerHandle {
  startAudio: () => void;
}

const AudioPlayer = forwardRef<AudioPlayerHandle, { autoStart?: boolean }>(({ autoStart = false }, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.65);
  const [isMuted, setIsMuted] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isPlayingRef = useRef(false);
  const loopTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Notes frequencies in Hz
  const NOTES: Record<string, number> = {
    C4: 261.63,
    D4: 293.66,
    E4: 329.63,
    F4: 349.23,
    G4: 392.0,
    A4: 440.0,
    Bb4: 466.16,
    B4: 493.88,
    C5: 523.25,
    D5: 587.33,
    E5: 659.25,
    F5: 698.46,
  };

  // Melody: [Note, duration in beats]
  const MELODY: [string, number][] = [
    ["C4", 0.75],
    ["C4", 0.25],
    ["D4", 1],
    ["C4", 1],
    ["F4", 1],
    ["E4", 2],

    ["C4", 0.75],
    ["C4", 0.25],
    ["D4", 1],
    ["C4", 1],
    ["G4", 1],
    ["F4", 2],

    ["C4", 0.75],
    ["C4", 0.25],
    ["C5", 1],
    ["A4", 1],
    ["F4", 1],
    ["E4", 1],
    ["D4", 1],

    ["Bb4", 0.75],
    ["Bb4", 0.25],
    ["A4", 1],
    ["F4", 1],
    ["G4", 1],
    ["F4", 2.5],
  ];

  const playNote = (ctx: AudioContext, freq: number, startTime: number, duration: number, gainVal: number) => {
    const osc = ctx.createOscillator();
    const oscHarmonic = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, startTime);

    // Warm bell/chime harmonic
    oscHarmonic.type = "triangle";
    oscHarmonic.frequency.setValueAtTime(freq * 2, startTime);

    const actualVol = isMuted ? 0 : gainVal * 0.25;

    // Bell-like music box envelope
    gainNode.gain.setValueAtTime(0.001, startTime);
    gainNode.gain.exponentialRampToValueAtTime(actualVol, startTime + 0.04);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration * 0.95);

    osc.connect(gainNode);
    oscHarmonic.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(startTime);
    oscHarmonic.start(startTime);

    osc.stop(startTime + duration);
    oscHarmonic.stop(startTime + duration);
  };

  const scheduleMelody = () => {
    if (!isPlayingRef.current) return;

    if (!audioCtxRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    const ctx = audioCtxRef.current;
    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }

    const beatDuration = 0.55; // tempo
    let currentTime = ctx.currentTime + 0.1;

    MELODY.forEach(([note, beats]) => {
      const freq = NOTES[note];
      const duration = beats * beatDuration;
      if (freq) {
        playNote(ctx, freq, currentTime, duration, volume);
      }
      currentTime += duration;
    });

    const totalDuration = (currentTime - ctx.currentTime) * 1000;

    loopTimeoutRef.current = setTimeout(() => {
      if (isPlayingRef.current) {
        scheduleMelody();
      }
    }, totalDuration + 1200);
  };

  const startPlaying = () => {
    if (!isPlayingRef.current) {
      isPlayingRef.current = true;
      setIsPlaying(true);
      scheduleMelody();
    }
  };

  const stopPlaying = () => {
    isPlayingRef.current = false;
    setIsPlaying(false);
    if (loopTimeoutRef.current) clearTimeout(loopTimeoutRef.current);
    if (audioCtxRef.current && audioCtxRef.current.state === "running") {
      audioCtxRef.current.suspend().catch(() => {});
    }
  };

  useImperativeHandle(ref, () => ({
    startAudio: () => {
      startPlaying();
    },
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

  useEffect(() => {
    if (autoStart) {
      startPlaying();
    }

    // Also auto-start on first user interaction if blocked initially
    const handleFirstTouch = () => {
      if (!isPlayingRef.current) {
        startPlaying();
      }
      window.removeEventListener("click", handleFirstTouch);
      window.removeEventListener("touchstart", handleFirstTouch);
    };

    window.addEventListener("click", handleFirstTouch, { once: true });
    window.addEventListener("touchstart", handleFirstTouch, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstTouch);
      window.removeEventListener("touchstart", handleFirstTouch);
      stopPlaying();
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, [autoStart]);

  return (
    <div className="fixed top-3 sm:top-5 right-3 sm:right-5 z-40 flex items-center gap-1.5 sm:gap-2">
      <div className="glass-panel rounded-full px-2.5 sm:px-3 py-1.5 flex items-center gap-2 border border-pink-500/30 shadow-lg shadow-pink-500/10">
        <button
          onClick={togglePlay}
          className="p-1.5 sm:p-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md hover:scale-105 active:scale-95 transition-all"
          title={isPlaying ? "Pause Song" : "Play Birthday Song"}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5" />
          ) : (
            <Play className="w-3.5 h-3.5 translate-x-0.5" />
          )}
        </button>

        <div className="flex flex-col pr-1">
          <div className="flex items-center gap-1.5">
            <Music className={`w-3 h-3 text-pink-400 ${isPlaying ? "animate-bounce" : ""}`} />
            <span className="text-[11px] sm:text-xs font-semibold text-pink-200 tracking-wide">
              Birthday Chime
            </span>
            {isPlaying && (
              <span className="flex gap-0.5 items-end h-2.5">
                <span className="w-0.5 h-2.5 bg-pink-400 rounded-full animate-pulse" />
                <span className="w-0.5 h-1.5 bg-rose-400 rounded-full animate-pulse delay-75" />
                <span className="w-0.5 h-3 bg-amber-400 rounded-full animate-pulse delay-150" />
              </span>
            )}
          </div>
          <span className="text-[9px] sm:text-[10px] text-zinc-400">
            {isPlaying ? "Playing Birthday Song 🎵" : "Click to Play"}
          </span>
        </div>

        <button
          onClick={toggleMute}
          className="text-zinc-400 hover:text-white transition-colors p-1"
          title={isMuted ? "Unmute" : "Mute"}
          aria-label={isMuted ? "Unmute sound" : "Mute sound"}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
});

AudioPlayer.displayName = "AudioPlayer";
export default AudioPlayer;
