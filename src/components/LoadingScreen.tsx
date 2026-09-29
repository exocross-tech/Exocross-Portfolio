"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { sound } from "@/lib/sound";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isFinishing, setIsFinishing] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.floor(Math.random() * 8) + 4;
        const nextVal = Math.min(prev + increment, 100);

        if (nextVal >= 100) {
          clearInterval(interval);
          setIsReady(true);
          setTimeout(() => {
            handleEnter();
          }, 400);
        }
        return nextVal;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    setIsFinishing(true);
    sound.playPowerOn();
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#05070c] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isFinishing
          ? "opacity-0 scale-105 pointer-events-none filter blur-sm"
          : "opacity-100 scale-100"
      }`}
    >
      {/* Background Subtle Ambient Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-blue-600/15 blur-[90px]" />
        <div className="absolute inset-0 bg-cyber-grid opacity-20" />
      </div>

      {/* Center Compact Container */}
      <div className="relative z-10 flex flex-col items-center px-4 max-w-xs w-full">
        {/* Compact Spinning Animated Logo Frame */}
        <div className="relative mb-5 flex items-center justify-center">
          {/* Outer Rapid Spinning Gradient Ring */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-cyan-400 via-transparent to-blue-600 animate-spin [animation-duration:2.5s] opacity-75 blur-[1px]" />
          
          {/* Secondary Reverse Orbiting Glow Ring */}
          <div className="absolute -inset-3.5 rounded-full border border-cyan-500/20 border-t-cyan-400/80 animate-spin [animation-duration:5s] [animation-direction:reverse]" />

          {/* Compact Logo Container (Reduced Size) */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-black/90 border border-white/20 p-2 shadow-[0_0_30px_rgba(6,182,212,0.3)] flex items-center justify-center backdrop-blur-xl overflow-hidden">
            {/* Inner subtle glow pulse */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 animate-pulse" />

            <div className="relative w-full h-full">
              <Image
                src="/logo.png"
                alt="Exocross Logo"
                fill
                sizes="80px"
                className="object-contain p-1"
                priority
              />
            </div>
          </div>
        </div>

        {/* Brand Text */}
        <div className="text-center mb-4">
          <h1 className="text-lg sm:text-xl font-extrabold tracking-[0.25em] text-white uppercase drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
            EXOCROSS
          </h1>
        </div>

        {/* Minimal Progress Bar & Percentage */}
        <div className="w-44 sm:w-52 flex flex-col gap-1.5">
          <div className="relative w-full h-1 rounded-full bg-white/10 overflow-hidden border border-white/5">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_10px_#38bdf8] transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-gray-400">
            <span className="text-cyan-400/90 font-medium">LOADING</span>
            <span className="text-white font-bold">{progress}%</span>
          </div>
        </div>

        {/* Skip Action */}
        <button
          onClick={handleEnter}
          data-cursor="ENTER"
          className="mt-4 text-[11px] text-gray-500 hover:text-cyan-300 transition-colors tracking-widest font-mono uppercase"
        >
          {isReady ? "ENTER →" : "SKIP"}
        </button>
      </div>
    </div>
  );
}
