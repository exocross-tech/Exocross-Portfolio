"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { sound } from "@/lib/sound";
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

const navItems = [
  { label: "Who We Are", href: "#who-we-are", id: "who-we-are" },
  { label: "What We Do", href: "#what-we-do", id: "what-we-do" },
  { label: "What We Made", href: "#what-we-made", id: "what-we-made" },
  { label: "How We Work", href: "#how-we-work", id: "how-we-work" },
  { label: "What's New", href: "#whats-new", id: "whats-new" },
  { label: "Get In Touch", href: "#get-in-touch", id: "get-in-touch" },
];

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sound.setEnabled(next);
  };

  const handleNavClick = (href: string) => {
    sound.playClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#06080d]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
            : "py-4 sm:py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              sound.playClick();
            }}
            onMouseEnter={() => sound.playHover()}
            data-cursor="EXOCROSS"
            className="flex items-center gap-2.5 sm:gap-3 group"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden bg-black/60 border border-white/15 p-1 group-hover:border-cyan-400/60 transition-colors duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)] shrink-0">
              <Image
                src="/logo.png"
                alt="Exocross"
                fill
                sizes="36px"
                className="object-contain p-0.5 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold tracking-widest text-sm sm:text-base text-white uppercase group-hover:text-cyan-300 transition-colors duration-300">
                  EXOCROSS
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-wider text-gray-400 font-mono hidden sm:inline">
                SOFTWARE & IT
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  onMouseEnter={() => sound.playHover()}
                  data-cursor="GOTO"
                  className={`relative px-3.5 py-1.5 text-xs font-mono tracking-wider transition-all duration-200 rounded-full ${
                    isActive
                      ? "text-cyan-300 font-semibold bg-white/[0.08] shadow-[0_0_12px_rgba(56,189,248,0.2)]"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <span className="text-[10px] text-gray-500 mr-1.5">
                    0{idx + 1}
                  </span>
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-cyan-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Toggle Button */}
            <button
              onClick={toggleSound}
              onMouseEnter={() => sound.playHover()}
              title={soundEnabled ? "Mute audio" : "Enable ambient audio"}
              data-cursor="SOUND"
              className={`p-2 rounded-xl border transition-all duration-300 flex items-center justify-center min-w-[38px] min-h-[38px] ${
                soundEnabled
                  ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                  : "border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              {soundEnabled ? (
                <div className="flex items-center gap-1">
                  <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span className="hidden xl:inline text-[10px] font-mono font-medium tracking-wide">
                    FX ON
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  <VolumeX className="w-4 h-4" />
                  <span className="hidden xl:inline text-[10px] font-mono tracking-wide">
                    FX OFF
                  </span>
                </div>
              )}
            </button>

            {/* Direct Contact Button */}
            <button
              onClick={() => handleNavClick("#get-in-touch")}
              onMouseEnter={() => sound.playHover()}
              data-cursor="TALK"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium tracking-wider text-white uppercase bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.35)] border border-cyan-400/30"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              data-cursor="MENU"
              aria-label="Toggle mobile navigation"
              className="lg:hidden p-2 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:text-white min-w-[40px] min-h-[40px] flex items-center justify-center active:scale-95"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-over Full-Screen Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[999] bg-[#06080d]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 lg:hidden animate-in fade-in duration-200 overflow-y-auto">
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-black/60 border border-white/15 p-1">
                <Image src="/logo.png" alt="Exocross" fill sizes="32px" className="object-contain" />
              </div>
              <span className="font-extrabold text-sm tracking-wider text-white uppercase">
                EXOCROSS
              </span>
            </div>
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(false);
              }}
              className="p-2 rounded-xl bg-white/10 text-gray-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3 my-auto py-6 max-w-sm mx-auto w-full">
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-2">
              DIRECTORY INDEX
            </span>
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`flex items-center justify-between text-left py-3 text-lg font-medium transition-colors border-b border-white/5 ${
                    isActive ? "text-cyan-300 font-bold" : "text-gray-300 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                    {item.label}
                  </span>
                  <span className="text-xs font-mono text-gray-500">0{idx + 1}</span>
                </button>
              );
            })}
          </div>

          {/* Bottom Actions inside Menu */}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3 max-w-sm mx-auto w-full">
            <button
              onClick={() => handleNavClick("#get-in-touch")}
              className="w-full py-3.5 text-center text-xs font-mono uppercase font-bold tracking-wider text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg border border-cyan-400/40"
            >
              Get In Touch With Exocross
            </button>
            <div className="flex items-center justify-between text-xs text-gray-400 font-mono pt-1">
              <span>AUDIO AMBIENCE</span>
              <button
                onClick={toggleSound}
                className="px-3 py-1 bg-white/10 rounded-lg text-cyan-400 font-bold"
              >
                {soundEnabled ? "FX ACTIVE" : "FX OFF"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
