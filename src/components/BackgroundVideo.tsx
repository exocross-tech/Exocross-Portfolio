"use client";

import React, { useRef, useEffect } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video autoplays smoothly
    video.play().catch(() => {
      // Autoplay handled by browser policy
    });
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Background Video Layer */}
      <video
        ref={videoRef}
        src="/EC-Background.mp4"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-22"
      />

      {/* Enterprise Light Overlays for Maximum Typography Contrast & Elegance */}
      <div className="absolute inset-0 bg-white/78 backdrop-blur-[1.5px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/95" />
      <div className="absolute inset-0 bg-enterprise-grid opacity-35" />
    </div>
  );
}
