"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { sound } from "@/lib/sound";
import { ExternalLink } from "lucide-react";

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
  previewImage?: string;
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
    previewImage: "/exopulse-preview.jpg",
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
    previewImage: "/synapse-preview.jpg",
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
  },
];

export default function WhatWeMadeSection() {
  const [filter, setFilter] = useState<"all" | "in-house" | "client">("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setSelectedProject(null);
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
  }, [selectedProject]);

  const filteredProjects = projectsData.filter((p) =>
    filter === "all" ? true : p.type === filter
  );

  return (
    <section
      id="what-we-made"
      className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10 border-t border-[#E5E7EB]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 lg:mb-16 gap-6">
        <div>
          <span className="text-xs font-mono text-[#245BDB] uppercase tracking-wider mb-2 block font-semibold">
            03 // PRODUCTS & CASE STUDIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#161B26] tracking-tight leading-tight">
            What we made
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-[#515B6B] max-w-2xl">
            Alongside client work, Exocross develops proprietary software products. Each
            solution starts from a real problem, engineered to the highest production standards.
          </p>
        </div>

        {/* Filter Switcher: Scrollable touch tabs on mobile */}
        <div className="flex items-center gap-1.5 p-1 rounded-lg border border-[#E5E7EB] bg-[#F7F8FA] overflow-x-auto max-w-full no-scrollbar">
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
              className={`px-3 py-2 sm:py-1.5 rounded-md text-xs font-medium transition-colors shrink-0 min-h-[38px] flex items-center justify-center ${
                filter === tab.id
                  ? "bg-white text-[#161B26] font-semibold shadow-xs"
                  : "text-[#515B6B] hover:text-[#161B26]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Structured Editorial Showcase Layout */}
      <div className="space-y-6 sm:space-y-8">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            onClick={() => {
              sound.playClick();
              setSelectedProject(project);
            }}
            onMouseEnter={() => sound.playHover()}
            data-cursor="CASE STUDY"
            className="group rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#D1D5DB] active:border-[#245BDB] hover:shadow-[0_8px_24px_-4px_rgba(15,23,42,0.08)] cursor-pointer p-5 sm:p-8 lg:p-10 transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
              {/* Left Column: Project Overview */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
                    <span
                      className={`px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] font-mono uppercase font-semibold ${
                        project.type === "in-house"
                          ? "bg-[#F0F5FF] text-[#245BDB] border border-[#E5E7EB]"
                          : "bg-[#F7F8FA] text-[#515B6B] border border-[#E5E7EB]"
                      }`}
                    >
                      {project.type === "in-house" ? "Exocross Product" : "Client System"}
                    </span>
                    <span className="text-[11px] sm:text-xs font-mono text-[#737D8C]">
                      0{idx + 1} // {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#161B26] group-hover:text-[#245BDB] transition-colors mb-1.5 sm:mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm lg:text-base font-medium text-[#245BDB] mb-2.5 sm:mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#515B6B] leading-relaxed mb-4 sm:mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3.5 sm:pt-4 border-t border-[#E5E7EB]/60">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-2.5 py-0.5 rounded text-[11px] sm:text-xs font-mono bg-[#F7F8FA] text-[#515B6B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual Interface Preview or Measured Outcomes */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full bg-[#F7F8FA] rounded-xl border border-[#E5E7EB] overflow-hidden p-4 sm:p-5">
                {project.previewImage ? (
                  <div className="mb-4">
                    <div className="relative w-full aspect-16/10 rounded-lg overflow-hidden border border-[#E5E7EB] shadow-xs bg-white">
                      <Image
                        src={project.previewImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 400px"
                        className="object-cover group-hover:scale-102 transition-transform duration-300"
                      />
                    </div>
                  </div>
                ) : null}

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#737D8C] block mb-2.5 sm:mb-3 font-semibold">
                    MEASURED OUTCOMES
                  </span>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
                    {project.impactMetrics.map((metric, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-base sm:text-lg lg:text-xl font-bold font-mono text-[#161B26] group-hover:text-[#245BDB] transition-colors">
                          {metric.value}
                        </span>
                        <span className="text-[9px] sm:text-[10px] text-[#737D8C] mt-0.5 leading-tight">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-medium text-[#245BDB]">
                  <span>Inspect System Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Project Deep-Dive Modal */}
      {selectedProject && mounted && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              sound.playClick();
              setSelectedProject(null);
            }
          }}
          className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-[#0B0F19]/75 backdrop-blur-sm animate-in fade-in duration-150"
        >
          <div className="relative w-full sm:max-w-2xl p-5 sm:p-8 rounded-t-2xl sm:rounded-xl bg-white border border-[#E5E7EB] shadow-[0_24px_64px_rgba(0,0,0,0.35)] max-h-[90vh] sm:max-h-[88vh] overflow-y-auto animate-fade-in-up">
            <button
              onClick={() => {
                sound.playClick();
                setSelectedProject(null);
              }}
              aria-label="Close dialog"
              data-cursor="CLOSE"
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-lg text-[#515B6B] hover:text-[#161B26] hover:bg-[#F7F8FA] min-h-[40px] min-w-[40px] flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            <div className="mb-4 sm:mb-6 pr-8">
              <span className="px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] font-mono tracking-wider uppercase bg-[#F0F5FF] text-[#245BDB] border border-[#E5E7EB] font-semibold inline-block mb-2 sm:mb-3">
                {selectedProject.type === "in-house"
                  ? "Exocross In-House Product"
                  : "Custom Client Architecture"}
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#161B26]">{selectedProject.title}</h3>
              <p className="text-[#245BDB] text-xs sm:text-sm mt-1">{selectedProject.tagline}</p>
            </div>

            {selectedProject.previewImage ? (
              <div className="relative w-full aspect-16/9 rounded-lg overflow-hidden border border-[#E5E7EB] mb-4 sm:mb-6">
                <Image
                  src={selectedProject.previewImage}
                  alt={selectedProject.title}
                  fill
                  sizes="600px"
                  className="object-cover"
                />
              </div>
            ) : null}

            <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-[#F7F8FA] border border-[#E5E7EB] mb-4 sm:mb-6">
              {selectedProject.impactMetrics.map((m, i) => (
                <div key={i} className="text-center">
                  <div className="text-base sm:text-lg lg:text-xl font-bold font-mono text-[#161B26]">{m.value}</div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-[#737D8C] uppercase mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 text-xs sm:text-sm text-[#515B6B] leading-relaxed">
              <div className="p-3.5 sm:p-4 rounded-lg bg-[#F7F8FA] border border-[#E5E7EB]">
                <span className="text-[11px] sm:text-xs font-mono uppercase text-[#161B26] font-bold block mb-1">
                  THE CHALLENGE
                </span>
                <p>{selectedProject.challenge}</p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-lg bg-[#F0F5FF] border border-[#E5E7EB]">
                <span className="text-[11px] sm:text-xs font-mono uppercase text-[#245BDB] font-bold block mb-1">
                  THE EXOCROSS SOLUTION
                </span>
                <p>{selectedProject.solution}</p>
              </div>
            </div>

            <div className="mb-5 sm:mb-6">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-[#737D8C] font-semibold block mb-2">
                TECHNOLOGIES UTILIZED
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 sm:px-2.5 py-1 rounded text-[11px] sm:text-xs font-mono bg-[#F7F8FA] border border-[#E5E7EB] text-[#515B6B]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 sm:pt-5 border-t border-[#E5E7EB]">
              <span className="text-xs font-mono text-[#737D8C] text-center sm:text-left">
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
                className="px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#245BDB] hover:bg-[#1948B8] transition-colors text-center min-h-[44px] flex items-center justify-center"
              >
                Discuss This Architecture →
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
