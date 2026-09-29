"use client";

import React, { useState } from "react";
import { sound } from "@/lib/sound";
import {
  Compass,
  FileSpreadsheet,
  Cpu,
  Rocket,
  Headphones,
  CheckCircle,
  Users,
  PiggyBank,
  Wrench,
  Sparkles,
  MessageSquare,
} from "lucide-react";

export const workflowSteps = [
  {
    step: "01",
    name: "Discover",
    icon: Compass,
    summary: "We learn your goals, users and constraints before proposing anything.",
    deliverables: [
      "User journey & constraint mapping",
      "Current tech stack & debt assessment",
      "Clear feasibility & ROI definition",
    ],
    details:
      "We dive deep into how your operations actually function. No generic templates or assumptions—we validate the problem before writing a line of code.",
  },
  {
    step: "02",
    name: "Plan",
    icon: FileSpreadsheet,
    summary: "You get a clear scope, timeline and cost, so there are no surprises.",
    deliverables: [
      "Fixed scope milestones & deliverables",
      "Transparent engineering cost schedule",
      "Architecture diagram & data models",
    ],
    details:
      "Surprise overages are the enemy of trust. We commit to defined deliverables, strict sprint targets, and honest time estimates.",
  },
  {
    step: "03",
    name: "Build",
    icon: Cpu,
    summary: "We deliver in stages and show working results along the way.",
    deliverables: [
      "Bi-weekly interactive staging previews",
      "Continuous CI/CD integration",
      "Production-ready clean TypeScript & tests",
    ],
    details:
      "You don't wait months to see code. You get live staging environments every sprint, inspecting features as they are built.",
  },
  {
    step: "04",
    name: "Launch",
    icon: Rocket,
    summary: "We test thoroughly, release carefully and hand over with documentation.",
    deliverables: [
      "End-to-end stress & security testing",
      "Zero-downtime production deployment",
      "Comprehensive architecture documentation",
    ],
    details:
      "Launch day should be celebration, not panic. We run load tests, failover routines, and provide complete documentation so you own your code.",
  },
  {
    step: "05",
    name: "Support",
    icon: Headphones,
    summary: "We stay available for maintenance, fixes and future improvements.",
    deliverables: [
      "Guaranteed uptime & SLA monitoring",
      "Rapid bug resolution channels",
      "Iterative roadmap & feature expansion",
    ],
    details:
      "Software is a living product. We don't vanish after release. We remain your trusted technical partner for the long haul.",
  },
];

export const whyChooseData = [
  {
    icon: Users,
    title: "One team, many disciplines",
    description:
      "Development, cloud, SEO, AI and consulting under one roof. No fragmented agencies passing the blame.",
    badge: "UNIFIED",
  },
  {
    icon: PiggyBank,
    title: "Cost-conscious by default",
    description:
      "We look for ways to lower your spend, not raise it. We eliminate unnecessary subscriptions and over-provisioned cloud infrastructure.",
    badge: "FINOPS",
  },
  {
    icon: Wrench,
    title: "We fix what others left behind",
    description:
      "Broken and inherited projects are part of our everyday work. We take messy, abandoned codebases and turn them into reliable engines.",
    badge: "RECOVERY",
  },
  {
    icon: Sparkles,
    title: "Product-builder mindset",
    description:
      "We build and sell our own software products, so we care about long-term maintainability, edge cases, and real end-user quality.",
    badge: "STANDARDS",
  },
  {
    icon: MessageSquare,
    title: "Plain communication",
    description:
      "Clear scope, honest timelines, and direct answers. You talk directly with senior engineers who understand your business.",
    badge: "DIRECT",
  },
];

export default function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="how-we-work"
      className="relative py-16 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl">
          A disciplined 5-stage framework. Zero guesswork.
        </h2>
        <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl leading-relaxed">
          From initial discovery to long-term support, here is how we ensure your software is
          delivered on time, on budget, and built to last.
        </p>
      </div>

      {/* 5-Step Process Interactive Stepper */}
      <div className="mb-16 sm:mb-24">
        {/* Step Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 mb-6 sm:mb-8">
          {workflowSteps.map((s, idx) => {
            const Icon = s.icon;
            const isCurrent = activeStep === idx;
            return (
              <button
                key={s.step}
                onClick={() => {
                  sound.playClick();
                  setActiveStep(idx);
                }}
                onMouseEnter={() => sound.playHover()}
                data-cursor="STAGE"
                className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all duration-300 relative flex flex-col justify-between ${
                  isCurrent
                    ? "bg-blue-600/20 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.3)]"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span
                    className={`text-[10px] sm:text-xs font-mono font-bold ${
                      isCurrent ? "text-cyan-300" : "text-gray-500"
                    }`}
                  >
                    STEP {s.step}
                  </span>
                  <Icon
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${isCurrent ? "text-cyan-400" : "text-gray-400"}`}
                  />
                </div>
                <div
                  className={`text-sm sm:text-base font-bold ${
                    isCurrent ? "text-white" : "text-gray-300"
                  }`}
                >
                  {s.name}
                </div>
                {isCurrent && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-b-xl sm:rounded-b-2xl" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Card */}
        {(() => {
          const cur = workflowSteps[activeStep];
          const CurIcon = cur.icon;
          return (
            <div className="p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl glass-panel-glow border border-cyan-500/30 relative overflow-hidden transition-all duration-500">
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 sm:p-3 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 shrink-0">
                      <CurIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-cyan-400">
                        PHASE {cur.step} // COLLABORATION
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{cur.name}</h3>
                    </div>
                  </div>

                  <p className="text-lg text-gray-200 font-medium mb-3">{cur.summary}</p>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">{cur.details}</p>

                  <div className="space-y-2.5">
                    {cur.deliverables.map((del, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-gray-200 font-mono">
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Interactive Telemetry Box */}
                <div className="lg:col-span-5 bg-black/50 p-6 rounded-2xl border border-white/10 font-mono text-xs">
                  <div className="text-gray-400 border-b border-white/10 pb-3 mb-4 flex justify-between">
                    <span>STAGE TELEMETRY</span>
                    <span className="text-emerald-400">VALIDATED</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-500 text-[10px] block">CLIENT INVOLVEMENT</span>
                      <span className="text-white text-sm">Collaborative Staging Demos</span>
                    </div>
                    <div>
                      <span className="text-gray-500 text-[10px] block">DOCUMENTATION</span>
                      <span className="text-cyan-300 text-sm">Full Schemas & Codebase Ownership</span>
                    </div>
                    <div>
                      <span className="text-gray-500 text-[10px] block">NEXT TRANSITION</span>
                      <button
                        onClick={() => {
                          sound.playClick();
                          setActiveStep((prev) => (prev + 1) % workflowSteps.length);
                        }}
                        className="text-xs text-blue-400 hover:text-cyan-300 underline font-bold mt-1 inline-block"
                      >
                        Advance to Step {((activeStep + 1) % workflowSteps.length) + 1} →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Why Choose Exocross Section Header */}
      <div className="flex flex-col items-start mb-8 sm:mb-12">
        <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          Why Choose Exocross
        </h3>
        <p className="mt-2 text-xs sm:text-sm lg:text-base text-gray-400 max-w-2xl">
          What makes working with Exocross fundamentally different from traditional vendors or
          outsourcing shops.
        </p>
      </div>

      {/* 5 Core Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {whyChooseData.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              onMouseEnter={() => sound.playHover()}
              className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl glass-card border border-white/10 hover:border-cyan-400/40 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10 text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-widest uppercase bg-blue-500/10 text-cyan-300 border border-blue-500/20">
                    {item.badge}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                <span>PILLAR 0{idx + 1}</span>
                <span className="text-cyan-400">GUARANTEED</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
