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
  Clock,
  ShieldCheck,
  Loader2,
  AlertCircle,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_NUMBERS } from "@/lib/whatsapp";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
    navigator.clipboard.writeText("exocross.tech@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          services: selectedServices,
          budget,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to dispatch message.");
      }

      sound.playPowerOn();

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#245bdb", "#24a6c8", "#535d6b", "#151a23"],
        });
      } catch {
        // Fallback
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to dispatch message.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="get-in-touch"
      className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10 border-t border-[#E4E7EC]"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-10 sm:mb-14 lg:mb-16">
        <span className="text-xs font-mono text-[#245BDB] uppercase tracking-wider mb-2 block font-semibold">
          06 // INITIATE DIALOGUE
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#151A23] tracking-tight leading-tight max-w-3xl">
          Tell us what you are working on, or what is not working.
        </h2>
        <p className="mt-2 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#535D6B] max-w-2xl leading-relaxed">
          We will help you find the right next step. Direct answers, honest timelines, and no
          fluff. We respond within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
        {/* Left Column: Direct Communications Directory */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-6">
          <div className="p-5 sm:p-7 lg:p-8 rounded-2xl bg-[#F7F8FA] border border-[#E4E7EC]">
            <h3 className="text-base sm:text-lg font-bold text-[#151A23] mb-4 sm:mb-6">
              Direct Channels
            </h3>

            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm font-mono">
              {/* Email */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E4E7EC] flex items-center justify-between">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="p-2 rounded-lg bg-[#F0F5FF] text-[#245BDB] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-[#778191] block uppercase">Business Email</span>
                    <a
                      href="mailto:exocross.tech@gmail.com"
                      className="text-[#151A23] hover:text-[#245BDB] font-medium text-xs sm:text-sm truncate block transition-colors"
                    >
                      exocross.tech@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  data-cursor="COPY"
                  className="p-2 rounded-lg text-[#535D6B] hover:text-[#151A23] hover:bg-[#F7F8FA] min-h-[40px] min-w-[40px] flex items-center justify-center shrink-0"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* WhatsApp Instant Chat */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E4E7EC] hover:border-[#25D366] flex items-center justify-between transition-colors group">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-[#25D366] shrink-0 border border-emerald-100">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-[#778191] block uppercase">WhatsApp Instant Chat</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2.5 text-xs sm:text-sm">
                      <a
                        href={getWhatsAppUrl(WHATSAPP_NUMBERS.primary)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#151A23] hover:text-[#25D366] font-medium transition-colors"
                      >
                        +91 7604 830 742
                      </a>
                      <span className="hidden sm:inline text-[#778191]">•</span>
                      <a
                        href={getWhatsAppUrl(WHATSAPP_NUMBERS.secondary)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#151A23] hover:text-[#25D366] font-medium transition-colors"
                      >
                        +91 81244 73373
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl(WHATSAPP_NUMBERS.primary)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open WhatsApp Chat"
                  data-cursor="CHAT"
                  className="p-2 rounded-lg text-[#25D366] hover:bg-emerald-50 min-h-[40px] min-w-[40px] flex items-center justify-center shrink-0 transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Website */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E4E7EC] flex items-center gap-2.5 sm:gap-3">
                <div className="p-2 rounded-lg bg-[#F0F5FF] text-[#245BDB] shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#778191] block uppercase">Official Portal</span>
                  <a
                    href="https://www.exocross.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#151A23] hover:text-[#245BDB] font-medium"
                  >
                    www.exocross.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E4E7EC] flex items-center gap-2.5 sm:gap-3">
                <div className="p-2 rounded-lg bg-[#F0F5FF] text-[#245BDB] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#778191] block uppercase">Headquarters</span>
                  <span className="text-[#151A23] font-medium">
                    Chennai, Tamil Nadu, India
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#E4E7EC] space-y-2 text-[11px] sm:text-xs font-mono text-[#535D6B]">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#245BDB] shrink-0" />
                <span>Response Time: &lt; 24 business hours</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#245BDB] shrink-0" />
                <span>Mutual Non-Disclosure Agreement (NDA) on request</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Project Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="p-5 sm:p-8 lg:p-10 rounded-2xl bg-white border border-[#E4E7EC] shadow-xs">
            {submitted ? (
              <div className="py-10 sm:py-16 flex flex-col items-center justify-center text-center animate-in fade-in duration-200">
                <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4 sm:mb-5">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#151A23] mb-2">
                  Message Dispatched Successfully
                </h3>
                <p className="text-xs sm:text-sm text-[#535D6B] max-w-md mb-6 sm:mb-8 leading-relaxed">
                  Thank you for reaching out to Exocross. One of our lead architects will review
                  your requirements and reply within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-3 rounded-lg font-mono text-xs uppercase font-semibold text-white bg-[#245BDB] hover:bg-[#1948B8] min-h-[44px]"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#151A23] mb-1">
                    Start a Conversation
                  </h3>
                  <p className="text-xs sm:text-sm text-[#535D6B]">
                    Select your focus areas and let us know what you want to achieve.
                  </p>
                </div>

                {/* Service Selector Pills: Generous touch targets */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#151A23] font-semibold mb-2 sm:mb-2.5">
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
                          className={`px-3 py-2 sm:py-1.5 rounded-lg text-xs font-medium transition-colors border min-h-[38px] flex items-center ${
                            isSelected
                              ? "bg-[#245BDB] text-white border-[#245BDB]"
                              : "bg-[#F7F8FA] text-[#535D6B] border-[#E4E7EC] hover:border-[#D0D5DD] active:bg-[#E4E7EC]"
                          }`}
                        >
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Range: Touch-friendly grid */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#151A23] font-semibold mb-2 sm:mb-2.5">
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
                        className={`py-2.5 sm:py-2 px-3 rounded-lg text-xs font-mono text-center transition-colors border min-h-[42px] flex items-center justify-center ${
                          budget === opt
                            ? "bg-[#F0F5FF] text-[#245BDB] border-[#245BDB] font-semibold"
                            : "bg-[#F7F8FA] text-[#535D6B] border-[#E4E7EC] hover:border-[#D0D5DD] active:bg-[#E4E7EC]"
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
                    <label className="block text-[11px] sm:text-xs font-mono text-[#535D6B] mb-1">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-3 sm:py-2.5 rounded-lg bg-white border border-[#E4E7EC] text-[#151A23] text-sm focus:border-[#245BDB] focus:outline-none focus:ring-1 focus:ring-[#245BDB] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono text-[#535D6B] mb-1">
                      WORK EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-3 sm:py-2.5 rounded-lg bg-white border border-[#E4E7EC] text-[#151A23] text-sm focus:border-[#245BDB] focus:outline-none focus:ring-1 focus:ring-[#245BDB] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-mono text-[#535D6B] mb-1">
                    COMPANY / ORGANIZATION
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Technologies"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-3 sm:py-2.5 rounded-lg bg-white border border-[#E4E7EC] text-[#151A23] text-sm focus:border-[#245BDB] focus:outline-none focus:ring-1 focus:ring-[#245BDB] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-mono text-[#535D6B] mb-1">
                    PROJECT GOALS OR CURRENT ISSUES *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what you are building, what is not working, or your target timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-3 sm:py-2.5 rounded-lg bg-white border border-[#E4E7EC] text-[#151A23] text-sm focus:border-[#245BDB] focus:outline-none focus:ring-1 focus:ring-[#245BDB] transition-colors resize-none"
                  />
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-850 text-xs flex items-start gap-2.5 animate-in fade-in">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div className="leading-relaxed">
                      <span className="font-medium text-rose-900">{errorMessage}</span>
                      <span className="block mt-1 text-[11px] text-rose-700">
                        You can also contact our team directly at{" "}
                        <a href="mailto:exocross.tech@gmail.com" className="font-semibold underline">
                          exocross.tech@gmail.com
                        </a>
                      </span>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-cursor="SUBMIT"
                  className={`w-full py-3.5 rounded-lg font-mono text-xs font-bold uppercase tracking-wider text-white transition-all flex items-center justify-center gap-2 min-h-[48px] ${
                    isSubmitting
                      ? "bg-[#245BDB]/70 cursor-not-allowed"
                      : "bg-[#245BDB] hover:bg-[#1948B8] active:bg-[#153e9f]"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 shrink-0 animate-spin" />
                      <span>Transmitting Inquiry to Exocross...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 shrink-0" />
                      <span>Transmit Inquiry to Exocross</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
