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
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const isPlayingRef = useRef(false);
  const loopTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const activeNodesRef = useRef<OscillatorNode[]>([]);
  const volumeRef = useRef(volume);
  const isMutedRef = useRef(isMuted);

  useEffect(() => {
    volumeRef.current = volume;
  }, [volume]);

  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  // Transposed to C5-C6 (523Hz - 1046Hz) so it sounds crystalline, rich, and loud on iPhone mobile speakers!
  const NOTES: Record<string, number> = {
    C4: 261.63,
    F4: 349.23,
    G4: 392.0,
    A4: 440.0,
    Bb4: 466.16,
    C5: 523.25,
    D5: 587.33,
    E5: 659.25,
    F5: 698.46,
    G5: 783.99,
    A5: 880.0,
    Bb5: 932.33,
    B5: 987.77,
    C6: 1046.5,
    D6: 1174.66,
  };

  // Melody: [Note, duration in beats, bassNote (optional)]
  const MELODY: { note: string; beats: number; bass?: string }[] = [
    // Phrase 1: "Happy Birthday to you"
    { note: "C5", beats: 0.75, bass: "C4" },
    { note: "C5", beats: 0.25 },
    { note: "D5", beats: 1 },
    { note: "C5", beats: 1 },
    { note: "F5", beats: 1 },
    { note: "E5", beats: 2, bass: "C4" },

    // Phrase 2: "Happy Birthday to you"
    { note: "C5", beats: 0.75, bass: "G4" },
    { note: "C5", beats: 0.25 },
    { note: "D5", beats: 1 },
    { note: "C5", beats: 1 },
    { note: "G5", beats: 1 },
    { note: "F5", beats: 2, bass: "C4" },

    // Phrase 3: "Happy Birthday dear Sudu"
    { note: "C5", beats: 0.75, bass: "C4" },
    { note: "C5", beats: 0.25 },
    { note: "C6", beats: 1, bass: "F4" },
    { note: "A5", beats: 1 },
    { note: "F5", beats: 1 },
    { note: "E5", beats: 1 },
    { note: "D5", beats: 1.5, bass: "G4" },

    // Phrase 4: "Happy Birthday to you"
    { note: "Bb5", beats: 0.75, bass: "Bb4" },
    { note: "Bb5", beats: 0.25 },
    { note: "A5", beats: 1, bass: "F4" },
    { note: "F5", beats: 1 },
    { note: "G5", beats: 1, bass: "C4" },
    { note: "F5", beats: 2.5, bass: "F4" },
  ];

  // Robust AudioContext initialization with iOS WebKit unlock
  const getAudioContext = (): AudioContext => {
    if (!audioCtxRef.current || audioCtxRef.current.state === "closed") {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    const ctx = audioCtxRef.current;

    // Wake up iOS audio hardware route
    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }

    try {
      const buffer = ctx.createBuffer(1, 1, 22050);
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.connect(ctx.destination);
      source.start(0);
    } catch {
      // ignore
    }

    return ctx;
  };

  // Play Celesta / Music Box chime note
  const playChimeNote = (
    ctx: AudioContext,
    freq: number,
    startTime: number,
    duration: number,
    vol: number
  ) => {
    const t = Math.max(startTime, ctx.currentTime + 0.02);
    const actualVol = isMutedRef.current ? 0.0001 : Math.max(0.0001, vol * volumeRef.current * 0.32);

    const osc = ctx.createOscillator();
    const oscHarmonic = ctx.createOscillator();
    const oscShimmer = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, t);

    // Warm overtone
    oscHarmonic.type = "triangle";
    oscHarmonic.frequency.setValueAtTime(freq * 2, t);

    // Sparkle chime ping
    oscShimmer.type = "sine";
    oscShimmer.frequency.setValueAtTime(freq * 3, t);

    gainNode.gain.setValueAtTime(0.0001, t);
    gainNode.gain.linearRampToValueAtTime(actualVol, t + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(Math.max(0.0001, actualVol * 0.4), t + 0.16);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, t + duration * 0.96);

    const harmonicGain = ctx.createGain();
    harmonicGain.gain.setValueAtTime(0.3, t);

    const shimmerGain = ctx.createGain();
    shimmerGain.gain.setValueAtTime(0.18, t);
    shimmerGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);

    osc.connect(gainNode);
    oscHarmonic.connect(harmonicGain);
    harmonicGain.connect(gainNode);
    oscShimmer.connect(shimmerGain);
    shimmerGain.connect(gainNode);

    gainNode.connect(ctx.destination);

    osc.start(t);
    oscHarmonic.start(t);
    oscShimmer.start(t);

    const stopTime = t + duration;
    osc.stop(stopTime);
    oscHarmonic.stop(stopTime);
    oscShimmer.stop(stopTime);

    activeNodesRef.current.push(osc, oscHarmonic, oscShimmer);
  };

  // Play soft bass accompaniment
  const playBassNote = (
    ctx: AudioContext,
    freq: number,
    startTime: number,
    duration: number,
    vol: number
  ) => {
    const t = Math.max(startTime, ctx.currentTime + 0.02);
    const actualVol = isMutedRef.current ? 0.0001 : Math.max(0.0001, vol * volumeRef.current * 0.2);

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

  const scheduleMelody = () => {
    if (!isPlayingRef.current) return;

    const ctx = getAudioContext();
    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }

    activeNodesRef.current = [];

    const beatDuration = 0.52;
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
          playBassNote(ctx, bassFreq, currentTime, duration * 1.3, 1.0);
        }
      }

      currentTime += duration;
    });

    const loopDelayMs = (currentTime - ctx.currentTime) * 1000 + 1200;

    loopTimeoutRef.current = setTimeout(() => {
      if (isPlayingRef.current) {
        scheduleMelody();
      }
    }, Math.max(1000, loopDelayMs));
  };

  const startPlaying = async () => {
    try {
      if (isPlayingRef.current) return;

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
      console.warn("Failed to start audio on iOS Chrome:", err);
    }
  };

  const stopPlaying = () => {
    isPlayingRef.current = false;
    setIsPlaying(false);

    if (loopTimeoutRef.current) {
      clearTimeout(loopTimeoutRef.current);
      loopTimeoutRef.current = null;
    }

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
    // Global user-gesture audio unlocker specifically engineered for iOS Chrome & Safari
    const unlockOnGesture = () => {
      try {
        const ctx = getAudioContext();
        if (ctx.state === "suspended") {
          ctx.resume().catch(() => {});
        }
      } catch {
        // ignore
      }
    };

    window.addEventListener("touchstart", unlockOnGesture, { passive: true, once: true });
    window.addEventListener("pointerdown", unlockOnGesture, { passive: true, once: true });
    window.addEventListener("click", unlockOnGesture, { passive: true, once: true });

    return () => {
      window.removeEventListener("touchstart", unlockOnGesture);
      window.removeEventListener("pointerdown", unlockOnGesture);
      window.removeEventListener("click", unlockOnGesture);
      stopPlaying();
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <aside aria-label="Birthday Song Controller" className="fixed top-3 sm:top-5 right-3 sm:right-5 z-40 flex items-center gap-1.5 sm:gap-2">
      <div className="bg-white/95 rounded-full px-3 py-2 flex items-center gap-2.5 border border-amber-200/90 shadow-xl shadow-amber-950/8 backdrop-blur-2xl transition-all">
        {/* Play / Pause Toggle Button with direct touchstart listener for iOS */}
        <button
          onClick={togglePlay}
          onTouchStart={getAudioContext}
          onPointerDown={getAudioContext}
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
              <span className="text-amber-700 font-medium">🎵 Playing (Silent switch off 🔔)</span>
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

          {/* Quick Slider Popup on hover */}
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
