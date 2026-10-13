"use client";

import React, { useState } from "react";
import { sound } from "@/lib/sound";
import { Cpu, Box, Target, Compass, CheckCircle2 } from "lucide-react";

export default function WhoWeAreSection() {
  const [activeTab, setActiveTab] = useState<"services" | "products">("services");

  return (
    <section
      id="who-we-are"
      className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10 border-t border-[#E5E7EB]"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-10 sm:mb-14 lg:mb-16">
        <span className="text-xs font-mono text-[#245BDB] uppercase tracking-wider mb-2 font-semibold">
          01 // ABOUT EXOCROSS
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#161B26] tracking-tight leading-tight max-w-3xl">
          Who we are
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#515B6B] max-w-2xl leading-relaxed">
          Exocross is a software and IT company. We design and build web and mobile
          applications, put AI to practical use, and help businesses get more from the
          technology they already pay for.
        </p>
      </div>

      {/* Dual Engine Framework Block */}
      <div className="mb-10 sm:mb-14 lg:mb-16 p-5 sm:p-8 lg:p-10 rounded-2xl bg-[#F7F8FA] border border-[#E5E7EB]">
        <div className="max-w-3xl mb-6 sm:mb-8">
          <span className="text-[11px] sm:text-xs font-mono text-[#245BDB] uppercase tracking-wider mb-2 block font-semibold">
            THE EXOCROSS DUAL ENGINE
          </span>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#161B26] mb-2 sm:mb-3 leading-snug">
            Two ways we work: We build for clients, and we build our own software.
          </h3>
          <p className="text-xs sm:text-sm lg:text-base text-[#515B6B] leading-relaxed">
            Running both keeps our work honest. We know what it takes to ship, maintain, and
            support a product because we do it ourselves every single day.
          </p>
        </div>

        {/* Structured Dual-Pillar Grid */}
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
            className={`p-5 sm:p-7 lg:p-8 rounded-xl border transition-all cursor-pointer ${
              activeTab === "services"
                ? "bg-white border-[#245BDB] shadow-[0_4px_16px_rgba(36,91,219,0.08)]"
                : "bg-white/70 border-[#E5E7EB] hover:border-[#D1D5DB] hover:bg-white"
            }`}
          >
            <div className="flex items-center gap-3 sm:gap-3.5 mb-3 sm:mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#F0F5FF] border border-[#E5E7EB] flex items-center justify-center text-[#245BDB] shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#161B26]">IT Services</h4>
                <span className="text-[10px] sm:text-[11px] font-mono text-[#737D8C] block">
                  FOR BUSINESSES & ENTERPRISES
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#515B6B] leading-relaxed mb-5">
              Custom software, websites, cloud and consulting work for businesses that need a
              capable technical partner without building a full in-house team.
            </p>
            <div className="space-y-2 pt-3.5 border-t border-[#E5E7EB]/60 text-xs text-[#515B6B]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#245BDB] shrink-0" />
                <span>On-demand engineering capacity</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#245BDB] shrink-0" />
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
            className={`p-5 sm:p-7 lg:p-8 rounded-xl border transition-all cursor-pointer ${
              activeTab === "products"
                ? "bg-white border-[#245BDB] shadow-[0_4px_16px_rgba(36,91,219,0.08)]"
                : "bg-white/70 border-[#E5E7EB] hover:border-[#D1D5DB] hover:bg-white"
            }`}
          >
            <div className="flex items-center gap-3 sm:gap-3.5 mb-3 sm:mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#F0F5FF] border border-[#E5E7EB] flex items-center justify-center text-[#245BDB] shrink-0">
                <Box className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#161B26]">Exocross Products</h4>
                <span className="text-[10px] sm:text-[11px] font-mono text-[#737D8C] block">
                  IN-HOUSE SOFTWARE & TOOLS
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#515B6B] leading-relaxed mb-5">
              Software we design, own and sell ourselves, built to solve problems we see
              repeatedly across the businesses we work with.
            </p>
            <div className="space-y-2 pt-3.5 border-t border-[#E5E7EB]/60 text-xs text-[#515B6B]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#245BDB] shrink-0" />
                <span>Tested at real production scale</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#245BDB] shrink-0" />
                <span>Supported directly by the creators</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Purpose & Direction: Mission and Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {/* Mission */}
        <div className="p-5 sm:p-7 lg:p-8 rounded-xl bg-white border border-[#E5E7EB] shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="p-2 rounded-lg bg-[#F7F8FA] border border-[#E5E7EB] text-[#245BDB]">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#737D8C]">
                  OUR PURPOSE
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#161B26]">Mission</h4>
              </div>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-[#515B6B] leading-relaxed">
              &ldquo;To make good technology accessible and affordable for businesses of every
              size, and to deliver it in a way that is clear, dependable and built to last.&rdquo;
            </p>
          </div>
          <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-[#E5E7EB]/60 flex items-center justify-between text-[11px] sm:text-xs font-mono text-[#737D8C]">
            <span>RELIABILITY • ACCESSIBILITY</span>
            <span className="text-[#245BDB] font-medium">BUILT TO LAST</span>
          </div>
        </div>

        {/* Vision */}
        <div className="p-5 sm:p-7 lg:p-8 rounded-xl bg-white border border-[#E5E7EB] shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="p-2 rounded-lg bg-[#F7F8FA] border border-[#E5E7EB] text-[#245BDB]">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#737D8C]">
                  OUR HORIZON
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#161B26]">Vision</h4>
              </div>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-[#515B6B] leading-relaxed">
              &ldquo;To be a trusted name in software, known both for the quality of the work
              we do for clients and for the products we bring to market.&rdquo;
            </p>
          </div>
          <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-[#E5E7EB]/60 flex items-center justify-between text-[11px] sm:text-xs font-mono text-[#737D8C]">
            <span>INDUSTRY REPUTATION</span>
            <span className="text-[#245BDB] font-medium">PROVEN INTEGRITY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
