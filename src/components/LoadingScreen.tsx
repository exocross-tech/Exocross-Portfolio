"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { sound } from "@/lib/sound";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING EXOCROSS ENGINE...");
  const [isFinishing, setIsFinishing] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const statuses = [
      { p: 15, text: "INITIALIZING THREE.JS WEBGL ENGINE..." },
      { p: 35, text: "SYNCHRONIZING 3D SPATIAL PARTICLES..." },
      { p: 60, text: "COMPILING SHADERS & LIGHTING GEOMETRY..." },
      { p: 85, text: "STRUCTURING EXOCROSS SERVICES & LABS..." },
      { p: 100, text: "SYSTEM READY // WELCOME TO EXOCROSS" },
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.floor(Math.random() * 8) + 4;
        const nextVal = Math.min(prev + increment, 100);

        for (let i = statuses.length - 1; i >= 0; i--) {
          if (nextVal >= statuses[i].p) {
            setStatusText(statuses[i].text);
            break;
          }
        }

        if (nextVal >= 100) {
          clearInterval(interval);
          setIsReady(true);
          setTimeout(() => {
            handleEnter();
          }, 600);
        }
        return nextVal;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    setIsFinishing(true);
    sound.playPowerOn();
    setTimeout(() => {
      onComplete();
    }, 850);
  };

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#05070c] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isFinishing
          ? "opacity-0 scale-110 pointer-events-none filter blur-sm"
          : "opacity-100 scale-100"
      }`}
    >
      {/* Background Animated Cyber Ambient Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-600/20 via-cyan-500/10 to-indigo-600/15 blur-[120px] animate-pulse-glow" />
        <div className="absolute inset-0 bg-cyber-grid opacity-30" />
      </div>

      {/* Center Container */}
      <div className="relative z-10 flex flex-col items-center px-6 max-w-md w-full">
        {/* Holographic Logo Card with Multi-layer Glow */}
        <div className="relative group mb-8">
          {/* Outer Pulsing Aura */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 opacity-30 blur-xl group-hover:opacity-50 transition duration-700 animate-pulse" />

          {/* Logo Frame */}
          <div className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-b from-white/20 via-blue-500/20 to-white/5 border border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.25)] flex items-center justify-center overflow-hidden backdrop-blur-2xl">
            {/* Scanline Sweep Effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent -translate-y-full animate-[scan_2.5s_ease-in-out_infinite]" />

            {/* Logo Image */}
            <div className="relative w-full h-full rounded-[18px] sm:rounded-[22px] overflow-hidden flex items-center justify-center bg-black/80">
              <Image
                src="/logo.png"
                alt="Exocross Logo"
                fill
                sizes="(max-width: 768px) 120px, 160px"
                className="object-contain p-3 sm:p-4 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Orbiting Quantum Light Dots */}
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-ping" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
        </div>

        {/* Brand Text */}
        <div className="text-center mb-5 sm:mb-6">
          <h1 className="text-xl sm:text-3xl font-extrabold tracking-[0.2em] sm:tracking-[0.25em] text-white uppercase drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
            EXOCROSS
          </h1>
          <p className="mt-1 text-[10px] sm:text-xs md:text-sm text-cyan-400/80 font-mono tracking-wider uppercase">
            SOFTWARE, BUILT FOR HOW YOUR BUSINESS ACTUALLY WORKS.
          </p>
        </div>

        {/* Progress Bar & Counter */}
        <div className="w-full max-w-xs flex flex-col gap-2">
          <div className="flex justify-between items-center text-xs font-mono text-gray-400">
            <span className="truncate pr-2 text-[11px] text-cyan-300">
              {statusText}
            </span>
            <span className="text-white font-bold tracking-wider">
              {progress}%
            </span>
          </div>

          {/* Futuristic Progress Track */}
          <div className="relative w-full h-1.5 rounded-full bg-white/10 overflow-hidden border border-white/5">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 shadow-[0_0_12px_#38bdf8] transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Skip / Enter Action */}
        <button
          onClick={handleEnter}
          data-cursor="ENTER"
          className="mt-6 text-xs text-gray-400 hover:text-white transition-colors duration-200 tracking-widest font-mono uppercase underline underline-offset-4 decoration-white/20 hover:decoration-cyan-400"
        >
          {isReady ? "Click to Enter →" : "Skip Intro"}
        </button>
      </div>

      {/* Bottom Telemetry Info */}
      <div className="absolute bottom-6 flex items-center justify-between w-full max-w-5xl px-8 text-[11px] font-mono text-gray-400 tracking-wider">
        <span>EXOCROSS // PORTFOLIO EXPERIENCE</span>
        <span className="hidden sm:inline">NEXT.JS • THREE.JS • WEBGL</span>
        <span className="text-emerald-400/80">● ONLINE</span>
      </div>
    </div>
  );
}
