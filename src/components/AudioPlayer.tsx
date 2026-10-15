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
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const isPlayingRef = useRef(false);
  const loopTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const activeNodesRef = useRef<OscillatorNode[]>([]);
  const volumeRef = useRef(volume);
  const isMutedRef = useRef(isMuted);

  // Keep refs in sync for Web Audio callbacks
  useEffect(() => {
    volumeRef.current = volume;
  }, [volume]);

  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  // Notes frequencies in Hz
  const NOTES: Record<string, number> = {
    C3: 130.81,
    F3: 174.61,
    G3: 196.0,
    A3: 220.0,
    Bb3: 233.08,
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

  // Melody: [Note, duration in beats, bassNote (optional)]
  const MELODY: { note: string; beats: number; bass?: string }[] = [
    // Phrase 1: "Happy Birthday to you"
    { note: "C4", beats: 0.75, bass: "C3" },
    { note: "C4", beats: 0.25 },
    { note: "D4", beats: 1 },
    { note: "C4", beats: 1 },
    { note: "F4", beats: 1 },
    { note: "E4", beats: 2, bass: "C3" },

    // Phrase 2: "Happy Birthday to you"
    { note: "C4", beats: 0.75, bass: "G3" },
    { note: "C4", beats: 0.25 },
    { note: "D4", beats: 1 },
    { note: "C4", beats: 1 },
    { note: "G4", beats: 1 },
    { note: "F4", beats: 2, bass: "C3" },

    // Phrase 3: "Happy Birthday dear Sudu"
    { note: "C4", beats: 0.75, bass: "C3" },
    { note: "C4", beats: 0.25 },
    { note: "C5", beats: 1, bass: "F3" },
    { note: "A4", beats: 1 },
    { note: "F4", beats: 1 },
    { note: "E4", beats: 1 },
    { note: "D4", beats: 1.5, bass: "G3" },

    // Phrase 4: "Happy Birthday to you"
    { note: "Bb4", beats: 0.75, bass: "Bb3" },
    { note: "Bb4", beats: 0.25 },
    { note: "A4", beats: 1, bass: "F3" },
    { note: "F4", beats: 1 },
    { note: "G4", beats: 1, bass: "C3" },
    { note: "F4", beats: 2.5, bass: "F3" },
  ];

  // Helper to safely play a music box chime note
  const playChimeNote = (
    ctx: AudioContext,
    freq: number,
    startTime: number,
    duration: number,
    vol: number
  ) => {
    const t = Math.max(startTime, ctx.currentTime + 0.02);
    const actualVol = isMutedRef.current ? 0.0001 : Math.max(0.0001, vol * volumeRef.current * 0.28);

    const osc = ctx.createOscillator();
    const oscHarmonic = ctx.createOscillator();
    const oscChime = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, t);

    // Warm wooden chime overtone
    oscHarmonic.type = "triangle";
    oscHarmonic.frequency.setValueAtTime(freq * 2, t);

    // Sparkle chime ping
    oscChime.type = "sine";
    oscChime.frequency.setValueAtTime(freq * 3, t);

    // Envelope
    gainNode.gain.setValueAtTime(0.0001, t);
    gainNode.gain.linearRampToValueAtTime(actualVol, t + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(Math.max(0.0001, actualVol * 0.35), t + 0.15);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, t + duration * 0.96);

    const harmonicGain = ctx.createGain();
    harmonicGain.gain.setValueAtTime(0.28, t);

    const chimeGain = ctx.createGain();
    chimeGain.gain.setValueAtTime(0.12, t);
    chimeGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.1);

    osc.connect(gainNode);
    oscHarmonic.connect(harmonicGain);
    harmonicGain.connect(gainNode);
    oscChime.connect(chimeGain);
    chimeGain.connect(gainNode);

    gainNode.connect(ctx.destination);

    osc.start(t);
    oscHarmonic.start(t);
    oscChime.start(t);

    const stopTime = t + duration;
    osc.stop(stopTime);
    oscHarmonic.stop(stopTime);
    oscChime.stop(stopTime);

    activeNodesRef.current.push(osc, oscHarmonic, oscChime);
  };

  // Helper to play soft acoustic bass accompaniment
  const playBassNote = (
    ctx: AudioContext,
    freq: number,
    startTime: number,
    duration: number,
    vol: number
  ) => {
    const t = Math.max(startTime, ctx.currentTime + 0.02);
    const actualVol = isMutedRef.current ? 0.0001 : Math.max(0.0001, vol * volumeRef.current * 0.16);

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, t);

    gainNode.gain.setValueAtTime(0.0001, t);
    gainNode.gain.linearRampToValueAtTime(actualVol, t + 0.04);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, t + duration * 0.92);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(t);
    const stopTime = t + duration;
    osc.stop(stopTime);

    activeNodesRef.current.push(osc);
  };

  const getAudioContext = (): AudioContext => {
    if (!audioCtxRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    return audioCtxRef.current;
  };

  const scheduleMelody = () => {
    if (!isPlayingRef.current) return;

    const ctx = getAudioContext();
    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }

    // Clean up expired nodes from active array
    activeNodesRef.current = [];

    const beatDuration = 0.54; // Gentle warm tempo
    let currentTime = ctx.currentTime + 0.08;

    MELODY.forEach((item) => {
      const melodyFreq = NOTES[item.note];
      const duration = item.beats * beatDuration;

      if (melodyFreq) {
        playChimeNote(ctx, melodyFreq, currentTime, duration, 1.0);
      }

      if (item.bass) {
        const bassFreq = NOTES[item.bass];
        if (bassFreq) {
          playBassNote(ctx, bassFreq, currentTime, duration * 1.4, 1.0);
        }
      }

      currentTime += duration;
    });

    const loopDelayMs = (currentTime - ctx.currentTime) * 1000 + 1400;

    loopTimeoutRef.current = setTimeout(() => {
      if (isPlayingRef.current) {
        scheduleMelody();
      }
    }, Math.max(1000, loopDelayMs));
  };

  const startPlaying = async () => {
    try {
      const ctx = getAudioContext();
      if (ctx.state === "suspended") {
        await ctx.resume();
      }

      if (loopTimeoutRef.current) {
        clearTimeout(loopTimeoutRef.current);
        loopTimeoutRef.current = null;
      }

      isPlayingRef.current = true;
      setIsPlaying(true);
      scheduleMelody();
    } catch (err) {
      console.warn("Failed to start audio:", err);
    }
  };

  const stopPlaying = () => {
    isPlayingRef.current = false;
    setIsPlaying(false);

    if (loopTimeoutRef.current) {
      clearTimeout(loopTimeoutRef.current);
      loopTimeoutRef.current = null;
    }

    // Immediately stop active oscillators
    activeNodesRef.current.forEach((node) => {
      try {
        node.stop();
        node.disconnect();
      } catch {
        // already stopped
      }
    });
    activeNodesRef.current = [];

    if (audioCtxRef.current && audioCtxRef.current.state === "running") {
      audioCtxRef.current.suspend().catch(() => {});
    }
  };

  const restartSong = async () => {
    stopPlaying();
    setTimeout(() => {
      startPlaying();
    }, 100);
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

  useEffect(() => {
    // If autoStart was requested, try unlocking on first user interaction
    const handleFirstGesture = () => {
      if (autoStart && !isPlayingRef.current) {
        startPlaying();
      }
      window.removeEventListener("click", handleFirstGesture);
      window.removeEventListener("touchstart", handleFirstGesture);
    };

    window.addEventListener("click", handleFirstGesture, { once: true });
    window.addEventListener("touchstart", handleFirstGesture, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstGesture);
      window.removeEventListener("touchstart", handleFirstGesture);
      stopPlaying();
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, [autoStart]);

  return (
    <aside aria-label="Birthday Song Controller" className="fixed top-3 sm:top-5 right-3 sm:right-5 z-40 flex items-center gap-1.5 sm:gap-2">
      <div className="bg-white/95 rounded-full px-3 py-2 flex items-center gap-2.5 border border-amber-200/90 shadow-xl shadow-amber-950/8 backdrop-blur-2xl transition-all">
        {/* Play / Pause Toggle Button */}
        <button
          onClick={togglePlay}
          className="relative p-2 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-white shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
          title={isPlaying ? "Pause Birthday Song" : "Play Birthday Song"}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5" />
          ) : (
            <Play className="w-3.5 h-3.5 translate-x-0.5 fill-current" />
          )}
          {isPlaying && (
            <span className="absolute -inset-0.5 rounded-full bg-rose-400/30 animate-ping -z-10" />
          )}
        </button>

        {/* Track Title and Equalizer Animation */}
        <div className="flex flex-col pr-1 cursor-pointer" onClick={togglePlay}>
          <div className="flex items-center gap-1.5">
            <Music className={`w-3.5 h-3.5 text-rose-500 ${isPlaying ? "animate-bounce" : ""}`} />
            <span className="text-[11px] sm:text-xs font-bold text-stone-900 tracking-wide">
              Birthday Chime Box
            </span>
            {isPlaying && (
              <span className="flex gap-0.5 items-end h-3 pl-0.5">
                <span className="w-0.5 h-3 bg-rose-500 rounded-full animate-pulse" />
                <span className="w-0.5 h-2 bg-amber-500 rounded-full animate-pulse delay-75" />
                <span className="w-0.5 h-3.5 bg-pink-500 rounded-full animate-pulse delay-150" />
              </span>
            )}
          </div>
          <span className="text-[9px] sm:text-[10px] text-stone-500 flex items-center gap-1">
            {isPlaying ? (
              <span className="text-amber-700 font-medium">🎵 Playing for Sudu</span>
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
            <RotateCcw className="w-3 h-3" />
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

          {/* Quick Slider Popup on hover/focus */}
          {showVolumeSlider && (
            <div
              onMouseLeave={() => setShowVolumeSlider(false)}
              className="absolute right-0 top-8 bg-white/95 rounded-xl p-2 shadow-xl border border-amber-200/80 backdrop-blur-md flex items-center gap-2 z-50 w-28"
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
                className="w-full h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-rose-500"
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
