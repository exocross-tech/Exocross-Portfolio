"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable custom cursor for fine pointers (desktops/laptops)
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check hovered element cursor data
      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest(
        "a, button, [data-cursor], input, textarea, select, .interactive-card"
      ) as HTMLElement | null;

      if (interactiveEl) {
        setIsHovered(true);
        const customText = interactiveEl.getAttribute("data-cursor") || "";
        setCursorText(customText);
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Smooth physics loop for the trailing outer ring
    const render = () => {
      // Lerp ring towards mouse position
      const ease = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300">
      {/* Central High-Precision Dot */}
      <div
        ref={dotRef}
        className={`fixed left-0 top-0 -ml-1 -mt-1 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#38bdf8] transition-[opacity,transform] duration-75 ease-out will-change-transform ${
          isHovered ? "opacity-0 scale-50" : "opacity-100 scale-100"
        }`}
      />

      {/* Trailing Fluid Magnetic Ring */}
      <div
        ref={ringRef}
        className={`fixed left-0 top-0 flex items-center justify-center rounded-full border will-change-transform transition-[width,height,background-color,border-color,margin] duration-200 ease-out ${
          isClicking
            ? "border-cyan-400 bg-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            : isHovered
            ? "border-blue-400/80 bg-blue-500/15 backdrop-blur-xs shadow-[0_0_25px_rgba(59,130,246,0.3)]"
            : "border-white/30 bg-white/5"
        } ${
          isHovered
            ? cursorText
              ? "-ml-9 -mt-9 h-[72px] w-[72px]"
              : "-ml-6 -mt-6 h-12 w-12"
            : isClicking
            ? "-ml-4 -mt-4 h-8 w-8"
            : "-ml-4 -mt-4 h-8 w-8"
        }`}
      >
        {cursorText && (
          <span className="text-[10px] font-bold tracking-widest text-cyan-300 uppercase select-none animate-pulse">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
