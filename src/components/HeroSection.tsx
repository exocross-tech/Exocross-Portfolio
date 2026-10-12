"use client";

import React, { useRef } from "react";
import { sound } from "@/lib/sound";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollTo = (id: string) => {
    sound.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10">
      {/* Editorial Split Hero Composition: Balanced Two-Column Structure */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Clear Narrative Typography */}
        <div className="lg:col-span-7 flex flex-col items-start text-left justify-center animate-fade-in-up">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F0F5FF] border border-[#E5E7EB] text-[#245BDB] text-xs font-mono font-medium tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#245BDB]" />
            <span>EXOCROSS SOFTWARE & IT</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#161B26] leading-[1.1] mb-6">
            We consult, We build, We renovate, We reduce.
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-[#515B6B] max-w-xl font-normal leading-relaxed mb-8 sm:mb-10">
            Exocross helps companies to utilize technology.
          </p>

          {/* Structured Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => scrollTo("what-we-made")}
              onMouseEnter={() => sound.playHover()}
              data-cursor="WORK"
              className="px-6 py-3.5 rounded-lg text-sm font-semibold tracking-wide text-white bg-[#245BDB] hover:bg-[#1948B8] transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Explore What We Made</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo("get-in-touch")}
              onMouseEnter={() => sound.playHover()}
              data-cursor="DISCUSS"
              className="px-6 py-3.5 rounded-lg text-sm font-semibold tracking-wide text-[#161B26] bg-white hover:bg-[#F7F8FA] border border-[#E5E7EB] hover:border-[#D1D5DB] transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Consult Our Team</span>
            </button>
          </div>
        </div>

        {/* Right Column: Clean Media Showcase Frame with Autoplaying Video */}
        <div className="lg:col-span-5 w-full animate-fade-in-up [animation-delay:150ms]">
          <div className="relative rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] p-2.5 shadow-[0_12px_32px_-4px_rgba(15,23,42,0.06)]">
            {/* Embedded Video Container - Pure Autoplay Video */}
            <div className="relative w-full aspect-video sm:aspect-4/3 rounded-xl overflow-hidden bg-[#161B26] border border-[#E5E7EB] select-none">
              <video
                ref={videoRef}
                src="/1.mp4"
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                disableRemotePlayback
                controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
                onContextMenu={(e) => e.preventDefault()}
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>

            {/* Media Metadata bar */}
            <div className="px-2 pt-2.5 pb-1 flex items-center justify-between text-[11px] font-mono text-[#737D8C]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>ACTIVE SHOWCASE</span>
              </span>
              <span>1080P // STREAM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Integrated Editorial Metrics Banner */}
      <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-[#E5E7EB]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="flex flex-col">
            <span className="text-xs font-mono text-[#737D8C] uppercase tracking-wider mb-1">
              RAPID SPRINT
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-[#161B26] font-mono">
              2
            </div>
            <span className="text-xs text-[#515B6B] mt-1">
              Months
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-mono text-[#737D8C] uppercase tracking-wider mb-1">
              DELIVERED
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-[#245BDB] font-mono">
              10+
            </div>
            <span className="text-xs text-[#515B6B] mt-1">
              Client Projects
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-mono text-[#737D8C] uppercase tracking-wider mb-1">
              PARTNERS
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-[#161B26] font-mono">
              10+
            </div>
            <span className="text-xs text-[#515B6B] mt-1">
              Clients
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-mono text-[#737D8C] uppercase tracking-wider mb-1">
              IN-HOUSE LABS
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-[#161B26] font-mono">
              5
            </div>
            <span className="text-xs text-[#515B6B] mt-1">
              Products
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
