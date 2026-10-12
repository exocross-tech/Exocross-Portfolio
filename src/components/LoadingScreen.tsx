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

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const nextVal = Math.min(prev + 12, 100);
        if (nextVal >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            handleEnter();
          }, 250);
        }
        return nextVal;
      });
    }, 35);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    setIsFinishing(true);
    sound.playPowerOn();
    setTimeout(() => {
      onComplete();
    }, 400);
  };

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-white transition-opacity duration-400 ${
        isFinishing ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center max-w-xs w-full px-4">
        {/* Crisp Logo Frame */}
        <div className="relative w-12 h-12 rounded-xl border border-[#E4E7EC] bg-[#F7F8FA] p-2 flex items-center justify-center mb-4">
          <Image
            src="/logo.png"
            alt="Exocross"
            fill
            sizes="48px"
            className="object-contain p-1"
            priority
          />
        </div>

        <span className="text-xs font-bold tracking-widest text-[#151A23] uppercase mb-4">
          EXOCROSS
        </span>

        {/* Minimal Progress Line */}
        <div className="w-36 h-1 rounded-full bg-[#F2F4F7] overflow-hidden border border-[#E4E7EC]">
          <div
            className="h-full bg-[#245BDB] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
