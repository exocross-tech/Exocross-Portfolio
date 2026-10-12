"use client";

import React from "react";
import Image from "next/image";
import { sound } from "@/lib/sound";
import { ArrowUp } from "lucide-react";

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
    <footer className="relative bg-[#F7F8FA] border-t border-[#E4E7EC] pt-16 sm:pt-20 pb-10 sm:pb-14 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 pb-12 sm:pb-16 border-b border-[#E4E7EC]">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#E4E7EC] bg-white p-1">
                <Image
                  src="/logo.png"
                  alt="Exocross"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <span className="text-base font-bold text-[#151A23] tracking-widest uppercase">
                EXOCROSS
              </span>
            </div>

            <p className="text-sm text-[#535D6B] max-w-sm leading-relaxed mb-6">
              Software, built for how your business actually works. A dual-model engineering
              studio delivering custom IT services and proprietary commercial products.
            </p>

            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white border border-[#E4E7EC] text-xs font-mono text-[#535D6B]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>All Systems Operational // 99.98% SLA</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#778191] mb-4 font-semibold">
              NAVIGATION DIRECTORY
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-[#535D6B]">
              {[
                { label: "Who We Are", id: "who-we-are" },
                { label: "What We Do", id: "what-we-do" },
                { label: "What We Made", id: "what-we-made" },
                { label: "How We Work", id: "how-we-work" },
                { label: "What's New", id: "whats-new" },
                { label: "Get In Touch", id: "get-in-touch" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="hover:text-[#245BDB] transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#778191] mb-4 font-semibold">
              COMMUNICATIONS
            </h4>
            <div className="space-y-2 text-sm text-[#535D6B]">
              <div>
                <span className="text-[11px] text-[#778191] font-mono block">INQUIRIES</span>
                <a
                  href="mailto:contact@exocross.com"
                  className="text-[#151A23] hover:text-[#245BDB] font-medium transition-colors"
                >
                  contact@exocross.com
                </a>
              </div>
              <div>
                <span className="text-[11px] text-[#778191] font-mono block">WEB DOMAIN</span>
                <span className="text-[#151A23] font-medium">www.exocross.com</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={scrollToTop}
                  data-cursor="TOP"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white hover:bg-[#F0F5FF] text-xs font-medium text-[#151A23] transition-colors border border-[#E4E7EC]"
                >
                  <span>Return to Top</span>
                  <ArrowUp className="w-3.5 h-3.5 text-[#245BDB]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Copyright and Legal footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#778191] gap-4">
          <p>© {new Date().getFullYear()} Exocross. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Next.js • TypeScript • Cloud Architecture</span>
            <span>Security & Privacy Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
