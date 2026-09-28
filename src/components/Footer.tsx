"use client";

import React from "react";
import Image from "next/image";
import { sound } from "@/lib/sound";
import { ArrowUp, Heart, Terminal, Shield } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    sound.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#040609] border-t border-white/10 pt-14 sm:pt-20 pb-8 sm:pb-12 overflow-hidden z-10">
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-32 bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 pb-10 sm:pb-16 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-black border border-white/20 p-1">
                <Image
                  src="/logo.png"
                  alt="Exocross"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-extrabold text-white tracking-widest uppercase">
                EXOCROSS
              </span>
            </div>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed mb-6">
              Software, built for how your business actually works. A dual-model engineering
              studio delivering custom IT services and proprietary commercial products.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational // 99.98% SLA</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4">
              NAVIGATION DIRECTORY
            </h4>
            <ul className="grid grid-cols-2 gap-2.5 text-sm text-gray-400 font-mono">
              {[
                { label: "01 // Who We Are", id: "who-we-are" },
                { label: "02 // What We Do", id: "what-we-do" },
                { label: "03 // What We Made", id: "what-we-made" },
                { label: "04 // How We Work", id: "how-we-work" },
                { label: "05 // What's New", id: "whats-new" },
                { label: "06 // Get In Touch", id: "get-in-touch" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="hover:text-cyan-300 transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-4">
              COMMUNICATIONS
            </h4>
            <div className="space-y-2 text-sm font-mono text-gray-400">
              <div>
                <span className="text-[11px] text-gray-500 block">INQUIRIES</span>
                <a
                  href="mailto:contact@exocross.com"
                  className="text-white hover:text-cyan-400 transition-colors"
                >
                  contact@exocross.com
                </a>
              </div>
              <div>
                <span className="text-[11px] text-gray-500 block">WEB DOMAIN</span>
                <span className="text-white">www.exocross.com</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={scrollToTop}
                  data-cursor="TOP"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/10 text-xs font-mono text-gray-300 transition-colors border border-white/10"
                >
                  <span>Return to Top</span>
                  <ArrowUp className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Massive Stylized Typographic Watermark (Like Lusion / Outcrowd) */}
        <div className="pt-12 pb-6 text-center select-none overflow-hidden">
          <span className="text-[14vw] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/10 via-white/5 to-transparent block leading-none pointer-events-none">
            EXOCROSS
          </span>
        </div>

        {/* Copyright and Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Exocross. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Next.js • Three.js • WebGL</span>
            <span>Security & Privacy Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
