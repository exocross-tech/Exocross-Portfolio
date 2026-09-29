"use client";

import React, { useRef, useState, useEffect } from "react";
import { sound } from "@/lib/sound";
import {
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
} from "lucide-react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => {
      setCurrentTime(video.currentTime);
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  const togglePlay = () => {
    sound.playClick();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    sound.playClick();
    if (!videoRef.current) return;
    const next = !isMuted;
    videoRef.current.muted = next;
    setIsMuted(next);
  };

  const toggleFullscreen = () => {
    sound.playClick();
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen?.();
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * duration;
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const scrollTo = (id: string) => {
    sound.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-1rem)] lg:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1440px] mx-auto w-full z-10 overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/3 left-0 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-4 sm:right-10 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center flex-1 my-auto py-4 sm:py-6 w-full">
        {/* Left Column: Core Narrative */}
        <div className="lg:col-span-6 flex flex-col items-start text-left justify-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            We consults, We build,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
              We renovate, We reduce.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300/90 max-w-2xl font-light leading-relaxed mb-8 sm:mb-10">
            Exocross helps companies to utilize technology.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => scrollTo("what-we-made")}
              onMouseEnter={() => sound.playHover()}
              data-cursor="WORK"
              className="w-full sm:w-auto px-7 sm:px-8 py-4 rounded-xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-500 hover:via-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] flex items-center justify-center gap-2.5 border border-cyan-400/40 active:scale-95"
            >
              <span>Explore What We Made</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={() => scrollTo("get-in-touch")}
              onMouseEnter={() => sound.playHover()}
              data-cursor="DISCUSS"
              className="w-full sm:w-auto px-7 sm:px-8 py-4 rounded-xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Consult Our Team</span>
            </button>
          </div>
        </div>

        {/* Right Column: Hero Video Showcase (1.mp4) & Interactive Frame */}
        <div className="lg:col-span-6 w-full flex items-center justify-center">
          <div
            onMouseEnter={() => sound.playHover()}
            className="relative rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 glass-panel-glow border border-cyan-500/30 shadow-[0_15px_45px_rgba(0,0,0,0.7)] group hover:border-cyan-400/60 transition-all duration-500"
          >
            {/* Ambient Video Glow Backdrop */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/30 via-cyan-400/20 to-indigo-600/30 blur-xl opacity-60 group-hover:opacity-100 transition duration-700 pointer-events-none" />

            {/* Video Player Container */}
            <div className="relative z-10 w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black/90 border border-white/10 group/player">
              <video
                ref={videoRef}
                src="/1.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Video Overlay Controls on Hover / Mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-90 sm:opacity-0 group-hover/player:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 sm:p-4">
                {/* Top overlay badge */}
                <div className="flex justify-between items-center text-[10px] font-mono text-cyan-300">
                  <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur-md">
                    EXOCROSS PRODUCTION
                  </span>
                  <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur-md">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                {/* Center Play/Pause Quick Tap */}
                <div className="flex items-center justify-center">
                  <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                    className="p-3 sm:p-4 rounded-full bg-black/60 hover:bg-cyan-500 text-white hover:text-black border border-white/20 backdrop-blur-md transition-all duration-200 transform hover:scale-110 active:scale-95"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                    ) : (
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                    )}
                  </button>
                </div>

                {/* Bottom Bar: Scrubber & Controls */}
                <div className="flex flex-col gap-2">
                  {/* Scrubber Progress Bar */}
                  <div
                    onClick={handleSeek}
                    className="w-full h-1.5 rounded-full bg-white/20 cursor-pointer overflow-hidden relative group/scrub"
                  >
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-100"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-white">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={togglePlay}
                        className="hover:text-cyan-400 transition-colors p-1"
                        aria-label="Play/Pause"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>

                      <button
                        onClick={toggleMute}
                        className="hover:text-cyan-400 transition-colors p-1 flex items-center gap-1"
                        aria-label="Toggle Mute"
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4 text-gray-400" />
                        ) : (
                          <Volume2 className="w-4 h-4 text-cyan-400" />
                        )}
                        <span className="text-[10px] hidden sm:inline">
                          {isMuted ? "UNMUTE" : "MUTED"}
                        </span>
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-gray-300 font-mono">
                        {formatTime(currentTime)}
                      </span>
                      <button
                        onClick={toggleFullscreen}
                        className="hover:text-cyan-400 transition-colors p-1"
                        aria-label="Fullscreen"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Banner (Anchored at the bottom of the hero viewport) */}
      <div className="w-full mt-auto pt-6 sm:pt-8 pb-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 lg:p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
          <div className="p-2 sm:p-3 text-center border-r border-white/5">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-mono tracking-tight">
              99.98%
            </div>
            <div className="text-[10px] sm:text-xs text-gray-400 uppercase font-mono tracking-wider mt-1.5">
              Uptime Architecture
            </div>
          </div>
          <div className="p-2 sm:p-3 text-center sm:border-r border-white/5">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cyan-400 font-mono tracking-tight">
              38%+
            </div>
            <div className="text-[10px] sm:text-xs text-gray-400 uppercase font-mono tracking-wider mt-1.5">
              Cloud Spend Cut
            </div>
          </div>
          <div className="p-2 sm:p-3 text-center border-r border-white/5">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-400 font-mono tracking-tight">
              24h
            </div>
            <div className="text-[10px] sm:text-xs text-gray-400 uppercase font-mono tracking-wider mt-1.5">
              Technical Response
            </div>
          </div>
          <div className="p-2 sm:p-3 text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-mono tracking-tight">
              100%
            </div>
            <div className="text-[10px] sm:text-xs text-gray-400 uppercase font-mono tracking-wider mt-1.5">
              Code & IP Handover
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
