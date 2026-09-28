"use client";

import React, { useState } from "react";
import { sound } from "@/lib/sound";
import { Calendar, Clock, ArrowUpRight, Sparkles, Tag, BookOpen } from "lucide-react";

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

  return (
    <section
      id="whats-new"
      className="relative py-16 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs tracking-widest uppercase mb-4 w-fit">
            <span>05 // WHAT&apos;S NEW</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Latest Insights & Releases
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl">
            Engineering dispatches, product launches, and practical thoughts on modern software
            architecture from the Exocross team.
          </p>
        </div>

        <div className="text-xs font-mono text-cyan-400 flex items-center gap-2 bg-white/[0.03] px-3.5 sm:px-4 py-2 rounded-xl border border-white/10 w-fit">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>UPDATED REGULARLY</span>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        {articlesData.map((article, idx) => (
          <article
            key={article.id}
            onClick={() => {
              sound.playClick();
              setSelectedArticle(article);
            }}
            onMouseEnter={() => sound.playHover()}
            data-cursor="READ"
            className="group p-5 sm:p-8 rounded-2xl sm:rounded-3xl glass-card border border-white/10 hover:border-cyan-400/50 cursor-pointer flex flex-col justify-between transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.4)]"
          >
            <div>
              {/* Category & Meta */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  {article.category}
                </span>

                <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
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

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3 leading-snug">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {article.excerpt}
              </p>
            </div>

            <div>
              {/* Tags & Action */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[10px] font-mono text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-200">
          <div className="relative max-w-2xl w-full p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass-panel-glow border border-cyan-500/40 shadow-[0_25px_70px_rgba(0,0,0,0.9)] max-h-[88vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => {
                sound.playClick();
                setSelectedArticle(null);
              }}
              data-cursor="CLOSE"
              className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="mb-5 sm:mb-6 pr-8">
              <div className="flex items-center gap-2 sm:gap-3 text-xs font-mono text-cyan-400 mb-2">
                <span className="px-2.5 py-0.5 rounded bg-cyan-500/20 border border-cyan-400/40 text-[10px] sm:text-xs">
                  {selectedArticle.category}
                </span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                {selectedArticle.title}
              </h3>
            </div>

            {/* Article Body */}
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed font-sans border-t border-b border-white/10 py-5 sm:py-6 mb-5 sm:mb-6">
              {selectedArticle.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Tags & Author Info */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-[10px] sm:text-xs font-mono text-gray-400">
                  BY EXOCROSS CORE RESEARCH LABS
                </span>
              </div>

              <button
                onClick={() => {
                  sound.playClick();
                  setSelectedArticle(null);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-mono uppercase font-bold tracking-wider text-white bg-blue-600 hover:bg-blue-500 text-center"
              >
                Close Read
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
