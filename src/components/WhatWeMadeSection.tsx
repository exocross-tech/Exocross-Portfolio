"use client";

import React, { useState } from "react";
import { sound } from "@/lib/sound";
import {
  ExternalLink,
  Layers,
  Sparkles,
  TrendingUp,
  Cpu,
  ShieldCheck,
  CheckCircle,
  Activity,
  Zap,
} from "lucide-react";

export interface ProjectItem {
  id: string;
  title: string;
  type: "in-house" | "client";
  category: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  impactMetrics: { label: string; value: string }[];
  tags: string[];
  gradient: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "exopulse",
    title: "ExoPulse",
    type: "in-house",
    category: "Cloud FinOps Product",
    tagline: "Intelligent Multi-Cloud Cost Optimization & Resource Telemetry",
    description:
      "A proprietary Exocross SaaS product that autonomously detects idle infrastructure, rightsizes container workloads, and secures spot instances across AWS and GCP.",
    challenge:
      "Modern cloud bills spiral out of control due to overprovisioned Kubernetes clusters and unmonitored staging environments.",
    solution:
      "Built an autonomous agent that analyzes utilization telemetry in real-time, executing non-disruptive rightsizing algorithms.",
    impactMetrics: [
      { label: "Avg Cost Reduction", value: "38.4%" },
      { label: "Active Deployments", value: "140+" },
      { label: "Payback Period", value: "< 14 Days" },
    ],
    tags: ["AWS", "GCP", "Kubernetes", "Next.js", "Python", "FinOps"],
    gradient: "from-blue-600/30 via-cyan-600/20 to-transparent",
  },
  {
    id: "synapse-ai",
    title: "Synapse AI Flow",
    type: "in-house",
    category: "AI Workflow Product",
    tagline: "Enterprise Document Intelligence & Copilot Automation",
    description:
      "In-house AI engine that parses unstructured documents, invoices, and multi-format spreadsheets with zero hallucination and automatic ERP sync.",
    challenge:
      "Manual document verification created backlogs of up to 48 hours for logistics and supply chain organizations.",
    solution:
      "Engineered an automated pipeline combining vision OCR models with deterministic JSON schema validation and audit logging.",
    impactMetrics: [
      { label: "Processing Speed", value: "1.2s / Doc" },
      { label: "Accuracy Rate", value: "99.8%" },
      { label: "Manual Hours Saved", value: "12,000+" },
    ],
    tags: ["OpenAI", "LangChain", "Vector DB", "FastAPI", "React"],
    gradient: "from-purple-600/30 via-indigo-600/20 to-transparent",
  },
  {
    id: "omnihealth",
    title: "OmniHealth Global",
    type: "client",
    category: "Healthcare Platform",
    tagline: "High-Concurrency Telemedicine & Patient Portal Suite",
    description:
      "Engineered a scalable HIPAA-compliant patient management, video consultation, and EHR synchronization web and mobile platform.",
    challenge:
      "The client's legacy system crashed during peak patient consultation hours and struggled with video latency.",
    solution:
      "Architected a microservices topology with WebRTC peer video routing and sub-second patient queue synchronizers.",
    impactMetrics: [
      { label: "Concurrent Patients", value: "50,000+" },
      { label: "System Uptime", value: "99.99%" },
      { label: "Latency", value: "< 45ms" },
    ],
    tags: ["React Native", "Next.js", "WebRTC", "Node.js", "HIPAA"],
    gradient: "from-emerald-600/30 via-teal-600/20 to-transparent",
  },
  {
    id: "apex-fintech",
    title: "Apex FinTech Engine",
    type: "client",
    category: "Financial Analytics",
    tagline: "Low-Latency High-Frequency Trading & Risk Dashboard",
    description:
      "Real-time institutional trading interface processing millions of market events with custom WebGL charts and instantaneous order routing.",
    challenge:
      "Trading desk experienced UI stutter and memory leaks during high volatility market open sessions.",
    solution:
      "Built custom canvas rendering buffers and binary WebSocket protocols that eliminated UI render bottlenecks.",
    impactMetrics: [
      { label: "Event Throughput", value: "2.4M / min" },
      { label: "Render Frame Rate", value: "60 FPS Locked" },
      { label: "Memory Footprint", value: "-62%" },
    ],
    tags: ["WebGL", "Three.js", "WebSockets", "Rust Core", "TypeScript"],
    gradient: "from-amber-600/30 via-orange-600/20 to-transparent",
  },
  {
    id: "heritage-revamp",
    title: "Heritage Commerce Rebuild",
    type: "client",
    category: "Website Rebuild & Repair",
    tagline: "Complete Jamstack Revamp of a 10-Year-Old Enterprise Store",
    description:
      "Took over a broken, abandoned monolithic e-commerce application, modernizing the architecture to headless Next.js with sub-second page loads.",
    challenge:
      "Page load times exceeded 5.8s, leading to high cart abandonment rates and poor search engine crawl performance.",
    solution:
      "Refactored the catalog into an edge-cached Next.js frontend with Stripe and Shopify Headless APIs.",
    impactMetrics: [
      { label: "Load Time Reduction", value: "5.8s → 0.55s" },
      { label: "Conversion Lift", value: "+142%" },
      { label: "Lighthouse Score", value: "99 / 100" },
    ],
    tags: ["Next.js", "Headless", "Edge Cache", "Stripe", "Tailwind"],
    gradient: "from-cyan-600/30 via-blue-600/20 to-transparent",
  },
];

export default function WhatWeMadeSection() {
  const [filter, setFilter] = useState<"all" | "in-house" | "client">("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projectsData.filter((p) =>
    filter === "all" ? true : p.type === filter
  );

  return (
    <section
      id="what-we-made"
      className="relative py-16 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs tracking-widest uppercase mb-4 w-fit">
            <span>03 // WHAT WE MADE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Our Products & Client Work
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl">
            Alongside client work, Exocross develops proprietary software products. Each
            solution starts from a real problem, engineered to the highest production standards.
          </p>
        </div>

        {/* Filter Switcher */}
        <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md overflow-x-auto max-w-full">
          {[
            { id: "all", label: "All Work" },
            { id: "in-house", label: "Our In-House Products" },
            { id: "client", label: "Client Solutions" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                sound.playHover();
                setFilter(tab.id as typeof filter);
              }}
              data-cursor="FILTER"
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-mono tracking-wider transition-all duration-200 shrink-0 ${
                filter === tab.id
                  ? "bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            onClick={() => {
              sound.playClick();
              setSelectedProject(project);
            }}
            onMouseEnter={() => sound.playHover()}
            data-cursor="CASE STUDY"
            className="group relative rounded-3xl glass-card overflow-hidden border border-white/10 hover:border-cyan-400/50 cursor-pointer flex flex-col justify-between transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
          >
            {/* Ambient project top banner */}
            <div
              className={`h-44 sm:h-52 w-full p-6 flex flex-col justify-between relative bg-gradient-to-br ${project.gradient} border-b border-white/10`}
            >
              <div className="flex items-center justify-between z-10">
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase font-semibold ${
                    project.type === "in-house"
                      ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/40"
                      : "bg-blue-400/20 text-blue-300 border border-blue-400/40"
                  }`}
                >
                  {project.type === "in-house" ? "★ Exocross Product" : "● Client System"}
                </span>

                <span className="text-xs font-mono text-gray-400">0{idx + 1}</span>
              </div>

              {/* Title & Tagline in Banner */}
              <div className="z-10">
                <span className="text-[11px] font-mono text-cyan-300 uppercase tracking-wider block mb-1">
                  {project.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Background Cyber Grid */}
              <div className="absolute inset-0 bg-cyber-grid opacity-30" />
            </div>

            {/* Bottom Content Area */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-sm sm:text-base text-gray-300 font-medium mb-3">
                  {project.tagline}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Metric Badges */}
                <div className="grid grid-cols-3 gap-3 mb-6 p-3.5 rounded-2xl bg-black/40 border border-white/5">
                  {project.impactMetrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-base sm:text-lg font-mono font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {metric.value}
                      </div>
                      <div className="text-[10px] font-mono text-gray-500 uppercase">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[10px] font-mono text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 group-hover:underline">
                    <span>Inspect System</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Project Deep-Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-200">
          <div className="relative max-w-2xl w-full p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass-panel-glow border border-cyan-500/40 shadow-[0_25px_70px_rgba(0,0,0,0.9)] max-h-[88vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => {
                sound.playClick();
                setSelectedProject(null);
              }}
              data-cursor="CLOSE"
              className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="mb-5 sm:mb-6 pr-8">
              <span className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 inline-block mb-2 sm:mb-3">
                {selectedProject.type === "in-house"
                  ? "★ Exocross In-House Product"
                  : "● Custom Client Architecture"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{selectedProject.title}</h3>
              <p className="text-cyan-400 font-mono text-xs sm:text-sm mt-1">{selectedProject.tagline}</p>
            </div>

            {/* Metrics Highlight */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 mb-5 sm:mb-6">
              {selectedProject.impactMetrics.map((m, i) => (
                <div key={i} className="text-center">
                  <div className="text-base sm:text-xl font-bold font-mono text-cyan-300">{m.value}</div>
                  <div className="text-[9px] sm:text-[11px] font-mono text-gray-400 uppercase">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Problem & Solution Breakdown */}
            <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
              <div className="p-3.5 sm:p-4 rounded-xl bg-black/40 border border-white/5">
                <span className="text-[10px] sm:text-xs font-mono uppercase text-red-400 font-bold block mb-1">
                  THE CHALLENGE
                </span>
                <p>{selectedProject.challenge}</p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-black/40 border border-white/5">
                <span className="text-[10px] sm:text-xs font-mono uppercase text-emerald-400 font-bold block mb-1">
                  THE EXOCROSS SOLUTION
                </span>
                <p>{selectedProject.solution}</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-6 sm:mb-8">
              <span className="text-[10px] sm:text-xs font-mono uppercase text-gray-400 block mb-2">
                TECHNOLOGIES UTILIZED
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {selectedProject.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 sm:px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-[11px] sm:text-xs font-mono text-blue-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-white/10">
              <span className="text-[11px] sm:text-xs font-mono text-gray-400">
                WANT TO BUILD SIMILAR CAPABILITIES?
              </span>
              <button
                onClick={() => {
                  sound.playClick();
                  setSelectedProject(null);
                  const el = document.getElementById("get-in-touch");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                data-cursor="DISCUSS"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all text-center"
              >
                Discuss This Architecture →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
