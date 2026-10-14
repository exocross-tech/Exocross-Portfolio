"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { sound } from "@/lib/sound";
import { Calendar, Clock, ArrowUpRight, BookOpen } from "lucide-react";

export interface ArticleItem {
  id: string;
  title: string;
  category: "Release" | "Engineering" | "Case Study" | "Culture";
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

export const articlesData: ArticleItem[] = [
  {
    id: "exopulse-v2-4",
    title: "ExoPulse v2.4 Released: Autonomous Multi-Cloud FinOps Engine",
    category: "Release",
    date: "Sep 2026",
    readTime: "4 min read",
    excerpt:
      "Our proprietary cloud telemetry suite now supports real-time multi-cluster Kubernetes rightsizing with zero operational downtime.",
    content: [
      "Over the past 6 months, Exocross engineers tested ExoPulse v2.4 across hundreds of nodes. We solved the biggest complaint in cloud billing: delayed visibility.",
      "The new release features instant telemetry webhooks, automated idle pod termination, and heuristic spot-fleet scheduling that reduces compute invoices by an average of 38.4%.",
      "Because we run ExoPulse across both our internal products and client infrastructure, our team dogfoods every algorithm in production before public deployment.",
    ],
    tags: ["Product Release", "Cloud FinOps", "Kubernetes", "AWS"],
  },
  {
    id: "practical-ai-workflow",
    title: "Practical AI: Automating Real Workflows Without Hallucination Risk",
    category: "Engineering",
    date: "Aug 2026",
    readTime: "5 min read",
    excerpt:
      "Why deterministic validation schemas and semantic vector routing beat generic chat prompts for mission-critical enterprise data.",
    content: [
      "Too many companies were sold AI chatbots that make up facts when processing invoices or customer records. At Exocross, we take an engineering-first approach.",
      "By placing rigorous Pydantic and JSON Schema validators between LLM outputs and backend databases, we eliminate invalid data entry.",
      "Our clients save hundreds of manual hours every week without risking compliance or data integrity.",
    ],
    tags: ["Applied AI", "Architecture", "Enterprise", "Automation"],
  },
  {
    id: "legacy-rebuild-roi",
    title: "The True Cost of Legacy Code: Why Rebuilds Pay for Themselves in 90 Days",
    category: "Case Study",
    date: "Jul 2026",
    readTime: "6 min read",
    excerpt:
      "How taking over a broken, slow 10-year-old enterprise portal and refactoring it into modern Next.js unlocked a 142% conversion spike.",
    content: [
      "Inheriting broken software is an everyday discipline at Exocross. Most agencies refuse to touch messy codebases; we thrive on turning them around.",
      "We broke down the monolithic database locks, rebuilt the user interface in Next.js, and implemented edge caching.",
      "Within 90 days of launch, the client recovered their entire engineering investment through reduced hosting expenses and improved customer retention.",
    ],
    tags: ["Website Rebuilds", "Next.js", "Performance", "Tech Debt"],
  },
  {
    id: "dual-engine-philosophy",
    title: "The Dual Engine: Why Building Products Makes Us Better Client Engineers",
    category: "Culture",
    date: "Jun 2026",
    readTime: "3 min read",
    excerpt:
      "Running both client IT services and our own commercial software products keeps our engineering honest and battle-tested.",
    content: [
      "Pure service agencies never experience the 3:00 AM consequences of fragile architecture. When you build and sell your own products, you feel every architectural mistake.",
      "By maintaining both, our engineers bring product-level craftsmanship, rigorous uptime standards, and cost discipline to every client engagement.",
      "It transforms us from temporary contractors into authentic technical partners.",
    ],
    tags: ["Philosophy", "Exocross", "Product Mindset"],
  },
];

export default function WhatsNewSection() {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setSelectedArticle(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedArticle]);

  return (
    <section
      id="whats-new"
      className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10 border-t border-[#E4E7EC]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 lg:mb-16 gap-6">
        <div>
          <span className="text-xs font-mono text-[#245BDB] uppercase tracking-wider mb-2 block font-semibold">
            05 // INSIGHTS & DISPATCHES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#151A23] tracking-tight leading-tight">
            Latest Insights & Releases
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-[#535D6B] max-w-2xl">
            Engineering dispatches, product launches, and practical thoughts on modern software
            architecture from the Exocross team.
          </p>
        </div>

        <div className="text-xs font-mono text-[#535D6B] flex items-center gap-2 bg-[#F7F8FA] px-3.5 py-1.5 rounded-lg border border-[#E4E7EC] w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>UPDATED REGULARLY</span>
        </div>
      </div>

      {/* Editorial Articles Grid: 1 col on mobile, 2 on tablet/desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {articlesData.map((article) => (
          <article
            key={article.id}
            onClick={() => {
              sound.playClick();
              setSelectedArticle(article);
            }}
            onMouseEnter={() => sound.playHover()}
            data-cursor="READ"
            className="group p-5 sm:p-7 lg:p-8 rounded-xl bg-white border border-[#E4E7EC] hover:border-[#D0D5DD] active:border-[#245BDB] hover:shadow-[0_8px_20px_-4px_rgba(16,24,40,0.08)] cursor-pointer flex flex-col justify-between transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                <span className="px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] font-mono tracking-wider uppercase bg-[#F0F5FF] text-[#245BDB] border border-[#D0E2FF] font-semibold">
                  {article.category}
                </span>

                <div className="flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-mono text-[#778191]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#151A23] group-hover:text-[#245BDB] transition-colors mb-2.5 sm:mb-3 leading-snug">
                {article.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#535D6B] leading-relaxed mb-4 sm:mb-6">
                {article.excerpt}
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between pt-3.5 sm:pt-4 border-t border-[#F2F4F7]">
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono bg-[#F7F8FA] text-[#535D6B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-xs font-semibold text-[#245BDB]">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Article Detail Modal: Portaled to document.body to avoid stacking context collisions */}
      {selectedArticle && mounted && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              sound.playClick();
              setSelectedArticle(null);
            }
          }}
          className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-[#0B0F19]/75 backdrop-blur-sm animate-in fade-in duration-150"
        >
          <div className="relative w-full sm:max-w-2xl p-5 sm:p-8 rounded-t-2xl sm:rounded-xl bg-white border border-[#E4E7EC] shadow-[0_24px_64px_rgba(0,0,0,0.35)] max-h-[90vh] sm:max-h-[88vh] overflow-y-auto">
            <button
              onClick={() => {
                sound.playClick();
                setSelectedArticle(null);
              }}
              aria-label="Close dialog"
              data-cursor="CLOSE"
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-lg text-[#535D6B] hover:text-[#151A23] hover:bg-[#F7F8FA] min-h-[40px] min-w-[40px] flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            <div className="mb-4 sm:mb-6 pr-8">
              <div className="flex items-center gap-2 sm:gap-2.5 text-[11px] sm:text-xs font-mono text-[#778191] mb-2">
                <span className="px-2 py-0.5 rounded bg-[#F0F5FF] text-[#245BDB] font-semibold">
                  {selectedArticle.category}
                </span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#151A23] leading-tight">
                {selectedArticle.title}
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base text-[#535D6B] leading-relaxed border-t border-b border-[#E4E7EC] py-4 sm:py-6 mb-4 sm:mb-6">
              {selectedArticle.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-[#778191]">
                <BookOpen className="w-4 h-4 text-[#245BDB] shrink-0" />
                <span>BY EXOCROSS CORE RESEARCH LABS</span>
              </div>

              <button
                onClick={() => {
                  sound.playClick();
                  setSelectedArticle(null);
                }}
                className="px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#151A23] bg-[#F7F8FA] hover:bg-[#E4E7EC] text-center min-h-[44px] flex items-center justify-center"
              >
                Close Read
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
