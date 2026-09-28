"use client";

import React, { useState } from "react";
import { sound } from "@/lib/sound";
import confetti from "canvas-confetti";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Copy,
  Check,
  Send,
  Sparkles,
  ChevronDown,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function GetInTouchSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["Web Applications"]);
  const [budget, setBudget] = useState("$25k - $50k");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    "Web Applications",
    "Mobile Applications",
    "Website Rebuilds & Repair",
    "AI Solutions",
    "Cloud Solutions",
    "Cost Optimization",
    "IT Consulting",
    "SEO & Performance",
  ];

  const budgetOptions = ["< $15k", "$15k - $35k", "$35k - $75k", "$75k+"];

  const toggleService = (srv: string) => {
    sound.playHover();
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleCopyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText("contact@exocross.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playPowerOn();

    // Trigger visual confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#38bdf8", "#3b82f6", "#06b6d4", "#ffffff"],
      });
    } catch {
      // Confetti fallback
    }

    setSubmitted(true);
  };

  return (
    <section
      id="get-in-touch"
      className="relative py-16 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12 sm:mb-16">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-4">
          <span>06 // GET IN TOUCH</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl">
          Tell us what you are working on, or what is not working.
        </h2>
        <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl leading-relaxed">
          We will help you find the right next step. Direct answers, honest timelines, and no
          fluff. We respond within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
        {/* Left Column: Contact Cards & Info */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Direct Channels Card */}
          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl glass-panel border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />

            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>Direct Channels</span>
            </h3>

            <div className="space-y-5 text-sm font-mono">
              {/* Email */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase">Business Email</span>
                    <span className="text-white font-medium select-all">contact@exocross.com</span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  data-cursor="COPY"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-gray-300 transition-colors"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Website */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase">Official Portal</span>
                  <a
                    href="https://www.exocross.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cyan-400 font-medium transition-colors"
                  >
                    www.exocross.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase">Direct Client Phone</span>
                  <span className="text-white font-medium">+1 (800) 396-2767</span>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase">Headquarters</span>
                  <span className="text-white font-medium">
                    Global Remote-First Studio (New York & Worldwide)
                  </span>
                </div>
              </div>
            </div>

            {/* Operational Commitments */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-3 text-xs font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Response Time: &lt; 24 business hours</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Mutual Non-Disclosure Agreement (NDA) on request</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Project Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="p-5 sm:p-10 rounded-2xl sm:rounded-3xl glass-panel-glow border border-cyan-500/30 relative">
            {submitted ? (
              <div className="py-12 sm:py-16 flex flex-col items-center justify-center text-center animate-in fade-in duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mb-5 sm:mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <Check className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white mb-3">
                  Message Dispatched Successfully
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 max-w-md mb-6 sm:mb-8">
                  Thank you for reaching out to Exocross. One of our lead architects will review
                  your requirements and reply within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl font-mono text-xs uppercase font-bold text-white bg-blue-600 hover:bg-blue-500"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    Start a Conversation
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Select your focus areas and let us know what you want to achieve.
                  </p>
                </div>

                {/* Service Selector Pills */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-cyan-300 mb-2.5">
                    WHAT CAN WE SOLVE FOR YOU?
                  </label>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {availableServices.map((srv) => {
                      const isSelected = selectedServices.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => toggleService(srv)}
                          className={`px-3 sm:px-3.5 py-1.5 rounded-xl text-[11px] sm:text-xs font-mono transition-all duration-200 border ${
                            isSelected
                              ? "bg-cyan-500/20 text-cyan-300 border-cyan-400/60 shadow-[0_0_12px_rgba(6,182,212,0.2)]"
                              : "bg-white/[0.03] text-gray-400 border-white/5 hover:border-white/20"
                          }`}
                        >
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-gray-300 mb-2.5">
                    ANTICIPATED BUDGET SCOPE
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          sound.playHover();
                          setBudget(opt);
                        }}
                        className={`py-2 px-2.5 sm:px-3 rounded-xl text-[11px] sm:text-xs font-mono text-center transition-all border ${
                          budget === opt
                            ? "bg-blue-600/30 text-white border-blue-500/70 shadow-[0_0_12px_rgba(59,130,246,0.3)] font-bold"
                            : "bg-white/[0.03] text-gray-400 border-white/5 hover:border-white/20"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-[10px] sm:text-xs font-mono text-gray-400 mb-1">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/50 border border-white/10 text-white text-base sm:text-sm focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-mono text-gray-400 mb-1">
                      WORK EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/50 border border-white/10 text-white text-base sm:text-sm focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-mono text-gray-400 mb-1">
                    COMPANY / ORGANIZATION
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Technologies"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/50 border border-white/10 text-white text-base sm:text-sm focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-mono text-gray-400 mb-1">
                    PROJECT GOALS OR CURRENT ISSUES *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what you are building, what is not working, or your target timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/50 border border-white/10 text-white text-base sm:text-sm focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  data-cursor="SUBMIT"
                  className="w-full py-3.5 sm:py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-500 hover:via-cyan-500 hover:to-blue-600 shadow-[0_0_30px_rgba(37,99,235,0.4)] border border-cyan-400/40 transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry to Exocross</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
