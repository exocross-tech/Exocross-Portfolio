"use client";

import React, { useRef, useEffect } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force-mute for reliable cross-browser autoplay compliance
    video.muted = true;
    video.defaultMuted = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Retry playing on first user interaction if blocked by strict browser policy
        const resumePlayback = () => {
          if (videoRef.current) {
            videoRef.current.play().catch(() => {});
          }
          window.removeEventListener("click", resumePlayback);
          window.removeEventListener("scroll", resumePlayback);
          window.removeEventListener("touchstart", resumePlayback);
        };
        window.addEventListener("click", resumePlayback, { once: true });
        window.addEventListener("scroll", resumePlayback, { once: true });
        window.addEventListener("touchstart", resumePlayback, { once: true });
      });
    }
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Background Video Layer - EC-Background.mp4 */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-45 transition-opacity duration-1000"
      >
        <source src="/EC-Background.mp4" type="video/mp4" />
      </video>

      {/* Calibrated light scrims to ensure high enterprise aesthetic and clear text contrast */}
      <div className="absolute inset-0 bg-white/55 backdrop-blur-[0.5px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/45 to-white/75" />
      <div className="absolute inset-0 bg-enterprise-grid opacity-25" />
    </div>
  );
}
