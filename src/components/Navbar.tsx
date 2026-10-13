"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { sound } from "@/lib/sound";
import { Menu, X, ArrowUpRight } from "lucide-react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    sound.playClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      // Small timeout to allow drawer close transition
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 bg-white/95 backdrop-blur-md ${
          scrolled ? "border-b border-[#E4E7EC] shadow-[0_1px_3px_rgba(16,24,40,0.05)]" : "border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              sound.playClick();
            }}
            onMouseEnter={() => sound.playHover()}
            data-cursor="EXOCROSS"
            className="flex items-center gap-2.5 sm:gap-3 group select-none min-h-[44px]"
          >
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#E4E7EC] bg-[#F7F8FA] p-1 flex items-center justify-center shrink-0">
              <Image
                src="/logo.png"
                alt="Exocross"
                fill
                sizes="32px"
                className="object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-widest text-[#151A23] uppercase">
                EXOCROSS
              </span>
              <span className="text-[10px] tracking-wider text-[#778191] font-mono -mt-0.5 hidden xs:inline sm:inline">
                SOFTWARE & IT
              </span>
            </div>
          </a>

          {/* Clean Editorial Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  onMouseEnter={() => sound.playHover()}
                  data-cursor="GOTO"
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? "text-[#245BDB] font-semibold"
                      : "text-[#535D6B] hover:text-[#151A23]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#245BDB] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => handleNavClick("#get-in-touch")}
              onMouseEnter={() => sound.playHover()}
              data-cursor="TALK"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider text-white uppercase bg-[#245BDB] rounded-lg hover:bg-[#1948B8] transition-colors shadow-xs min-h-[44px]"
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
              aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2.5 rounded-lg border border-[#E4E7EC] text-[#535D6B] hover:text-[#151A23] hover:bg-[#F7F8FA] active:bg-[#E4E7EC] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#151A23]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop & Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[999] lg:hidden">
          {/* Backdrop */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-[#161B26]/50 backdrop-blur-xs transition-opacity duration-200 animate-fade-in"
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col justify-between p-6 sm:p-8 animate-in slide-in-from-right duration-200 overflow-y-auto"
          >
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between border-b border-[#E4E7EC] pb-4">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#E4E7EC] bg-[#F7F8FA] p-1 flex items-center justify-center">
                  <Image src="/logo.png" alt="Exocross" fill sizes="32px" className="object-contain p-0.5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm tracking-wider text-[#151A23] uppercase">
                    EXOCROSS
                  </span>
                  <span className="text-[9px] tracking-wider text-[#778191] font-mono">
                    SOFTWARE & IT
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  sound.playClick();
                  setMobileMenuOpen(false);
                }}
                aria-label="Close menu"
                className="p-2 rounded-lg border border-[#E4E7EC] text-[#535D6B] hover:text-[#151A23] hover:bg-[#F7F8FA] min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col gap-1 py-6 my-auto">
              <span className="text-[11px] font-mono text-[#778191] uppercase tracking-wider mb-2 font-semibold">
                DIRECTORY
              </span>
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.href)}
                    className={`flex items-center justify-between text-left py-3.5 px-3 rounded-lg text-base font-medium transition-colors min-h-[48px] ${
                      isActive
                        ? "text-[#245BDB] bg-[#F0F5FF] font-semibold"
                        : "text-[#535D6B] hover:bg-[#F7F8FA] hover:text-[#151A23]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#778191]">0{idx + 1}</span>
                      <span>{item.label}</span>
                    </div>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-[#245BDB]" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-[#778191]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#E4E7EC] space-y-3">
              <button
                onClick={() => handleNavClick("#get-in-touch")}
                className="w-full py-3.5 px-4 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#245BDB] hover:bg-[#1948B8] rounded-lg transition-colors flex items-center justify-center gap-2 min-h-[48px] shadow-xs active:scale-[0.99]"
              >
                <span>Get In Touch With Exocross</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="text-center">
                <span className="text-[10px] font-mono text-[#778191]">
                  contact@exocross.com • 24h Response
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
