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
  }, [mobileMenuOpen]);

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
            className="flex items-center gap-3 group"
          >
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#E4E7EC] bg-[#F7F8FA] p-1 flex items-center justify-center">
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
              <span className="text-[10px] tracking-wider text-[#778191] font-mono -mt-0.5 hidden sm:inline">
                SOFTWARE & IT
              </span>
            </div>
          </a>

          {/* Clean Editorial Navigation Links */}
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
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick("#get-in-touch")}
              onMouseEnter={() => sound.playHover()}
              data-cursor="TALK"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider text-white uppercase bg-[#245BDB] rounded-lg hover:bg-[#1948B8] transition-colors shadow-xs"
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
              className="lg:hidden p-2 rounded-lg border border-[#E4E7EC] text-[#535D6B] hover:text-[#151A23] hover:bg-[#F7F8FA]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-over Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[999] bg-white flex flex-col justify-between p-6 sm:p-8 lg:hidden animate-in fade-in duration-150 overflow-y-auto">
          <div className="flex items-center justify-between border-b border-[#E4E7EC] pb-4">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#E4E7EC] bg-[#F7F8FA] p-1">
                <Image src="/logo.png" alt="Exocross" fill sizes="32px" className="object-contain" />
              </div>
              <span className="font-bold text-sm tracking-wider text-[#151A23] uppercase">
                EXOCROSS
              </span>
            </div>
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(false);
              }}
              aria-label="Close menu"
              className="p-2 rounded-lg text-[#535D6B] hover:text-[#151A23] hover:bg-[#F7F8FA]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-1 my-auto py-8">
            <span className="text-[11px] font-mono text-[#778191] uppercase tracking-wider mb-3">
              NAVIGATION
            </span>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`flex items-center justify-between text-left py-3 text-base font-medium border-b border-[#F2F4F7] ${
                    isActive ? "text-[#245BDB] font-semibold" : "text-[#535D6B]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#245BDB]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#E4E7EC]">
            <button
              onClick={() => handleNavClick("#get-in-touch")}
              className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#245BDB] rounded-lg hover:bg-[#1948B8]"
            >
              Get In Touch With Exocross
            </button>
          </div>
        </div>
      )}
    </>
  );
}
