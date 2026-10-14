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
    <>
      {/* 
        ========================================================================
        SECTION 1: HERO BANNER
        - Mobile: Full-width, immersive ~100svh video hero banner with dark gradient
                  overlay & content (eyebrow, headline, description, CTAs).
                  NO statistics cards inside.
        - Desktop: Two-column split layout with embedded video card on right and
                   integrated stats banner along the bottom intact.
        ========================================================================
      */}
      <section className="hero-section relative w-full z-10 overflow-hidden lg:overflow-visible">
        {/* Full-bleed mobile background video (< 1024px) */}
        <div
          aria-hidden="true"
          className="block lg:hidden absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/hero-poster.jpg"
            disablePictureInPicture
            disableRemotePlayback
            controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
            onContextMenu={(e) => e.preventDefault()}
            className="hero-bg-video absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          >
            <source src="/1.mp4" type="video/mp4" />
          </video>

          {/* Cinematic Dark Navy Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(5, 12, 25, 0.48) 0%, rgba(5, 12, 25, 0.68) 45%, rgba(5, 12, 25, 0.88) 100%)",
            }}
          />

          {/* Subtle technical micro-grid accent */}
          <div className="absolute inset-0 bg-enterprise-grid opacity-10" />
        </div>

        {/* Hero Content Container: 50% height on mobile (~50svh / 350-430px), clean padding on desktop */}
        <div className="relative z-10 w-full h-full flex flex-col justify-center pt-16 sm:pt-20 lg:pt-36 pb-3 sm:pb-6 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto lg:justify-between">
          {/* Main Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center flex-1 my-auto lg:my-0">
            {/* Narrative Typography: Clean vertical flow */}
            <div className="lg:col-span-7 flex flex-col items-start text-left justify-center">
              {/* Eyebrow Label */}
              <div className="animate-fade-in inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-full bg-[#245BDB]/20 lg:bg-[#F0F5FF] border border-[#245BDB]/40 lg:border-[#E5E7EB] mb-1.5 sm:mb-2.5 lg:mb-5 backdrop-blur-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#245BDB] shadow-[0_0_8px_#245BDB]" />
                <span className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-blue-200 lg:text-[#245BDB]">
                  EXOCROSS SOFTWARE & IT
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="animate-fade-in-up text-[26px] min-[375px]:text-[28px] min-[410px]:text-[30px] sm:text-4xl md:text-5xl lg:text-6xl font-[800] tracking-[-0.03em] text-white lg:text-[#161B26] leading-[1.12] sm:leading-[1.1] mb-1.5 sm:mb-2.5 lg:mb-5 max-w-2xl">
                We consult, We build, We renovate, We reduce.
              </h1>

              {/* Description */}
              <p className="animate-fade-in-up [animation-delay:100ms] text-[13px] min-[375px]:text-[14px] sm:text-base lg:text-lg text-slate-200 lg:text-[#515B6B] max-w-lg font-normal leading-snug sm:leading-[1.6] mb-3 sm:mb-4 lg:mb-8">
                Exocross helps companies to utilize technology.
              </p>

              {/* CTA Buttons */}
              <div className="animate-fade-in-up [animation-delay:180ms] flex flex-wrap min-[360px]:flex-nowrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
                <button
                  onClick={() => scrollTo("what-we-made")}
                  onMouseEnter={() => sound.playHover()}
                  data-cursor="WORK"
                  className="h-[44px] sm:h-[48px] lg:h-[52px] px-3.5 min-[375px]:px-4 sm:px-6 rounded-xl sm:rounded-[13px] text-xs sm:text-sm font-semibold tracking-wide text-white bg-[#245BDB] hover:bg-[#1948B8] active:bg-[#153e9f] transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2 shadow-[0_4px_16px_rgba(36,91,219,0.35)] lg:shadow-xs active:scale-[0.98] shrink-0 min-[360px]:shrink"
                >
                  <span className="whitespace-nowrap">Explore What We Made</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                </button>

                <button
                  onClick={() => scrollTo("get-in-touch")}
                  onMouseEnter={() => sound.playHover()}
                  data-cursor="DISCUSS"
                  className="h-[44px] sm:h-[48px] lg:h-[52px] px-3.5 min-[375px]:px-4 sm:px-6 rounded-xl sm:rounded-[13px] text-xs sm:text-sm font-semibold tracking-wide text-white lg:text-[#161B26] bg-white/[0.08] lg:bg-white hover:bg-white/[0.14] lg:hover:bg-[#F7F8FA] active:bg-white/[0.12] lg:active:bg-[#F0F2F5] border border-white/25 lg:border-[#E5E7EB] hover:border-white/40 lg:hover:border-[#D1D5DB] backdrop-blur-sm lg:backdrop-blur-none transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2 shadow-xs active:scale-[0.98] shrink-0 min-[360px]:shrink"
                >
                  <span className="whitespace-nowrap">Consult Our Team</span>
                </button>
              </div>
            </div>

            {/* Right Column: Desktop Media Showcase Frame (Intact on desktop, hidden on mobile) */}
            <div className="hidden lg:block lg:col-span-5 w-full animate-fade-in-up [animation-delay:150ms]">
              <div className="relative rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] p-2.5 shadow-[0_8px_24px_-4px_rgba(15,23,42,0.06)]">
                <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-[#161B26] border border-[#E5E7EB] select-none">
                  <video
                    ref={videoRef}
                    src="/1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    poster="/hero-poster.jpg"
                    disablePictureInPicture
                    disableRemotePlayback
                    controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
                    onContextMenu={(e) => e.preventDefault()}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>

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

          {/* Desktop-only metrics row (Preserved intact inside desktop hero) */}
          <div className="hidden lg:block mt-20 pt-10 border-t border-[#E5E7EB] animate-fade-in-up [animation-delay:250ms]">
            <div className="grid grid-cols-4 gap-8">
              <div className="flex flex-col">
                <span className="text-xs font-mono text-[#737D8C] uppercase tracking-wider mb-1">
                  RAPID SPRINT
                </span>
                <div className="text-4xl font-bold text-[#161B26] font-mono">
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
                <div className="text-4xl font-bold text-[#245BDB] font-mono">
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
                <div className="text-4xl font-bold text-[#161B26] font-mono">
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
                <div className="text-4xl font-bold text-[#161B26] font-mono">
                  5
                </div>
                <span className="text-xs text-[#515B6B] mt-1">
                  Products
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 2: DEDICATED SEPARATE STATISTICS SECTION (Mobile Only < 1024px)
        - Placed immediately below the video hero banner
        - Clean, premium light-theme design (#FFFFFF / #F7F8FA)
        - Subtle light borders, crisp dark text, restrained brand blue
        - Balanced 2-column, 2-row grid on mobile screens
        ========================================================================
      */}
      <section className="block lg:hidden relative z-10 w-full bg-[#FFFFFF] border-b border-[#E5E7EB] py-5 sm:py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* Card 1: Rapid Sprint */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_2px_8px_-2px_rgba(16,24,40,0.04)] flex flex-col justify-between">
              <span className="text-[10px] sm:text-[11px] font-mono text-[#737D8C] uppercase tracking-wider font-semibold truncate">
                RAPID SPRINT
              </span>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#161B26] leading-tight my-1">
                2
              </div>
              <span className="text-xs text-[#515B6B] truncate">
                Months
              </span>
            </div>

            {/* Card 2: Delivered */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_2px_8px_-2px_rgba(16,24,40,0.04)] flex flex-col justify-between">
              <span className="text-[10px] sm:text-[11px] font-mono text-[#737D8C] uppercase tracking-wider font-semibold truncate">
                DELIVERED
              </span>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#245BDB] leading-tight my-1">
                10+
              </div>
              <span className="text-xs text-[#515B6B] truncate">
                Client Projects
              </span>
            </div>

            {/* Card 3: Partners */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_2px_8px_-2px_rgba(16,24,40,0.04)] flex flex-col justify-between">
              <span className="text-[10px] sm:text-[11px] font-mono text-[#737D8C] uppercase tracking-wider font-semibold truncate">
                PARTNERS
              </span>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#161B26] leading-tight my-1">
                10+
              </div>
              <span className="text-xs text-[#515B6B] truncate">
                Clients
              </span>
            </div>

            {/* Card 4: In-House Labs */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_2px_8px_-2px_rgba(16,24,40,0.04)] flex flex-col justify-between">
              <span className="text-[10px] sm:text-[11px] font-mono text-[#737D8C] uppercase tracking-wider font-semibold truncate">
                IN-HOUSE LABS
              </span>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#161B26] leading-tight my-1">
                5
              </div>
              <span className="text-xs text-[#515B6B] truncate">
                Products
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
