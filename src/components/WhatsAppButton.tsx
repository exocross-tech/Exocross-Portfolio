"use client";

import React, { useState } from "react";
import { sound } from "@/lib/sound";
import { getWhatsAppUrl, WHATSAPP_NUMBERS } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_NUMBERS.primary);

  return (
    <aside
      aria-label="WhatsApp quick contact"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5"
    >
      {/* Tooltip Pill on Hover */}
      <div
        className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#151A23] text-white text-xs font-medium shadow-md transition-all duration-200 pointer-events-none select-none border border-[#2B3545] ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
        <span>Chat on WhatsApp</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Exocross on WhatsApp (+91 7604 830 742)"
        data-cursor="CHAT"
        onMouseEnter={() => {
          setHovered(true);
          sound.playHover();
        }}
        onMouseLeave={() => setHovered(false)}
        onClick={() => sound.playClick()}
        className="relative group p-3.5 sm:p-4 rounded-full bg-[#25D366] hover:bg-[#20BD5A] active:scale-95 text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.5)] transition-all duration-200 flex items-center justify-center min-h-[52px] min-w-[52px]"
      >
        {/* Ambient Ring Ping */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 group-hover:animate-ping" />

        {/* Official WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
          className="relative z-10 w-6 h-6 transition-transform duration-200 group-hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.787-1.677-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.528.15-.176.2-.301.301-.502.1-.2.05-.377-.025-.528-.075-.15-.678-1.634-.929-2.238-.244-.588-.493-.508-.678-.518-.176-.008-.377-.01-.578-.01-.2 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511s1.079 2.912 1.23 3.113c.15.2 2.123 3.242 5.143 4.547.718.311 1.279.497 1.716.636.721.23 1.377.197 1.896.12.578-.087 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.577-.351zM12.042 2C6.523 2 2.042 6.478 2.042 12c0 1.954.561 3.78 1.531 5.328L2 22l4.825-1.528A9.948 9.948 0 0012.042 22c5.518 0 10-4.478 10-10s-4.482-10-10-10zm0 18.23c-1.616 0-3.131-.476-4.409-1.296l-.316-.204-2.868.908.928-2.796-.208-.328A8.17 8.17 0 013.818 12c0-4.535 3.689-8.224 8.224-8.224 4.535 0 8.224 3.689 8.224 8.224 0 4.535-3.689 8.23-8.224 8.23z" />
        </svg>

        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full z-20" />
      </a>
    </aside>
  );
}
