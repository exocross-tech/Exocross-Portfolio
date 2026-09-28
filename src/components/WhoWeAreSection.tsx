"use client";

import React, { useState } from "react";
import { sound } from "@/lib/sound";
import { Cpu, Box, Target, Compass, CheckCircle2 } from "lucide-react";

export default function WhoWeAreSection() {
  const [activeTab, setActiveTab] = useState<"services" | "products">("services");

  return (
    <section
      id="who-we-are"
      className="relative py-16 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12 sm:mb-16">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs tracking-widest uppercase mb-4">
          <span>01 // WHO WE ARE</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl">
          Engineered for transparency. Built for real business results.
        </h2>
        <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl leading-relaxed">
          Exocross is a software and IT company. We design and build web and mobile
          applications, put AI to practical use, and help businesses get more from the
          technology they already pay for.
        </p>
      </div>

      {/* Philosophy Callout: Two Ways We Work */}
      <div className="mb-10 sm:mb-14 p-5 sm:p-8 rounded-2xl sm:rounded-3xl glass-panel relative overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 sm:gap-3 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>The Exocross Dual Engine</span>
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
            Two ways we work: We build for clients, and we build our own software.
          </h3>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed mb-6 sm:mb-8">
            Running both keeps our work honest. We know what it takes to ship, maintain, and
            support a product because we do it ourselves every single day.
          </p>

          {/* Interactive Dual-Card Switcher */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Pillar 1: IT Services */}
            <div
              onClick={() => {
                sound.playClick();
                setActiveTab("services");
              }}
              onMouseEnter={() => {
                sound.playHover();
                setActiveTab("services");
              }}
              data-cursor="SERVICES"
              className={`p-5 sm:p-6 rounded-2xl transition-all duration-300 border cursor-pointer ${
                activeTab === "services"
                  ? "bg-gradient-to-b from-blue-900/30 via-slate-900/40 to-slate-950/60 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                  : "bg-white/[0.02] border-white/5 hover:border-white/20"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white">IT Services</h4>
                  <span className="text-[10px] sm:text-[11px] font-mono text-cyan-400 block">
                    FOR BUSINESSES & ENTERPRISES
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                Custom software, websites, cloud and consulting work for businesses that need a
                capable technical partner without building a full in-house team.
              </p>
              <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-gray-400 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>On-demand engineering capacity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Architecture, cloud & security best practices</span>
                </div>
              </div>
            </div>

            {/* Pillar 2: Exocross Products */}
            <div
              onClick={() => {
                sound.playClick();
                setActiveTab("products");
              }}
              onMouseEnter={() => {
                sound.playHover();
                setActiveTab("products");
              }}
              data-cursor="PRODUCTS"
              className={`p-5 sm:p-6 rounded-2xl transition-all duration-300 border cursor-pointer ${
                activeTab === "products"
                  ? "bg-gradient-to-b from-cyan-900/30 via-slate-900/40 to-slate-950/60 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.2)]"
                  : "bg-white/[0.02] border-white/5 hover:border-white/20"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Box className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white">Exocross Products</h4>
                  <span className="text-[10px] sm:text-[11px] font-mono text-cyan-400 block">
                    IN-HOUSE SOFTWARE & TOOLS
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                Software we design, own and sell ourselves, built to solve problems we see
                repeatedly across the businesses we work with.
              </p>
              <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-gray-400 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Tested at real production scale</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Supported directly by the creators</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Mission */}
        <div
          onMouseEnter={() => sound.playHover()}
          className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass-card flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-4 text-cyan-400">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 shrink-0">
                <Target className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-gray-400">
                  OUR PURPOSE
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white">Mission</h4>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              &ldquo;To make good technology accessible and affordable for businesses of every
              size, and to deliver it in a way that is clear, dependable and built to last.&rdquo;
            </p>
          </div>
          <div className="mt-6 sm:mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
            <span>RELIABILITY • ACCESSIBILITY</span>
            <span className="text-cyan-400">BUILT TO LAST</span>
          </div>
        </div>

        {/* Vision */}
        <div
          onMouseEnter={() => sound.playHover()}
          className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass-card flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-4 text-blue-400">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 shrink-0">
                <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-gray-400">
                  OUR HORIZON
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white">Vision</h4>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              &ldquo;To be a trusted name in software, known both for the quality of the work
              we do for clients and for the products we bring to market.&rdquo;
            </p>
          </div>
          <div className="mt-6 sm:mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
            <span>INDUSTRY REPUTATION</span>
            <span className="text-blue-400">PROVEN INTEGRITY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
