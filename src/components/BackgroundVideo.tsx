"use client";

import React, { useRef, useEffect, useState } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canLoad, setCanLoad] = useState(false);

  useEffect(() => {
    // Only load background video on desktop when browser is idle
    if (window.innerWidth < 1024) return;

    const timer = setTimeout(() => {
      setCanLoad(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!canLoad) return;
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }, [canLoad]);

  return (
    <div
      aria-hidden="true"
      className="hidden lg:block fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Background Video Layer - EC-Background.mp4 */}
      {canLoad && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          disablePictureInPicture
          disableRemotePlayback
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-45 transition-opacity duration-1000"
        >
          <source src="/EC-Background.mp4" type="video/mp4" />
        </video>
      )}

      {/* Calibrated light scrims to ensure high enterprise aesthetic and clear text contrast */}
      <div className="absolute inset-0 bg-white/55 backdrop-blur-[0.5px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/45 to-white/75" />
      <div className="absolute inset-0 bg-enterprise-grid opacity-25" />
    </div>
  );
}
