"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import WhatWeMadeSection from "@/components/WhatWeMadeSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import WhatsNewSection from "@/components/WhatsNewSection";
import GetInTouchSection from "@/components/GetInTouchSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Lazy load non-critical visual enhancements so they don't block FCP/LCP
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
const ThreeCanvas = dynamic(() => import("@/components/ThreeCanvas"), { ssr: false });
const BackgroundVideo = dynamic(() => import("@/components/BackgroundVideo"), { ssr: false });

export default function Home() {
  const [activeSectionId, setActiveSectionId] = useState<string>("hero");
  const [sectionIndex, setSectionIndex] = useState<number>(0);

  useEffect(() => {
    const sectionIds = [
      "hero",
      "who-we-are",
      "what-we-do",
      "what-we-made",
      "how-we-work",
      "whats-new",
      "get-in-touch",
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Check which section is closest to viewport top
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        if (id === "hero") {
          if (scrollY < windowHeight * 0.4) {
            setActiveSectionId("hero");
            setSectionIndex(0);
            break;
          }
        } else {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= windowHeight * 0.45) {
              setActiveSectionId(id);
              setSectionIndex(i);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#151A23] selection:bg-[#245BDB] selection:text-white">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* High-End Enterprise Video Background Stream (EC-Background.mp4) */}
      <BackgroundVideo />

      {/* Architectural Wireframe Ambient Motion */}
      <ThreeCanvas currentSection={sectionIndex} />

      {/* Main Page Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar activeSection={activeSectionId} />

        <main className="flex-1">
          {/* Hero Section */}
          <div id="hero">
            <HeroSection />
          </div>

          {/* 1. Who We Are */}
          <WhoWeAreSection />

          {/* 2. What We Do */}
          <WhatWeDoSection />

          {/* 3. What We Made */}
          <WhatWeMadeSection />

          {/* 4. How We Work */}
          <HowWeWorkSection />

          {/* 5. What's New */}
          <WhatsNewSection />

          {/* 6. Get In Touch */}
          <GetInTouchSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Floating Ambient WhatsApp Quick Chat Action */}
      <WhatsAppButton />
    </div>
  );
}
