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
      className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10 border-t border-[#E4E7EC]"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-10 sm:mb-14 lg:mb-16">
        <span className="text-xs font-mono text-[#245BDB] uppercase tracking-wider mb-2 block font-semibold">
          04 // ENGINEERING PROCESS
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#151A23] tracking-tight leading-tight max-w-3xl">
          How we work
        </h2>
        <p className="mt-2 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#535D6B] max-w-2xl leading-relaxed">
          A disciplined 5-stage framework. Zero guesswork.
        </p>
      </div>

      {/* Structured Engineering Timeline Framework */}
      <div className="mb-14 sm:mb-20 lg:mb-24">
        {/* Process Tabs: Scrollable or grid based on viewport width */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
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
                className={`p-3 sm:p-4 rounded-xl border text-left transition-all min-h-[48px] ${
                  isCurrent
                    ? "bg-[#F0F5FF] border-[#245BDB] shadow-xs"
                    : "bg-white border-[#E4E7EC] hover:border-[#D0D5DD] active:bg-[#F7F8FA]"
                }`}
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span
                    className={`text-[11px] sm:text-xs font-mono font-bold ${
                      isCurrent ? "text-[#245BDB]" : "text-[#778191]"
                    }`}
                  >
                    PHASE {s.step}
                  </span>
                  <Icon
                    className={`w-3.5 sm:w-4 h-3.5 sm:h-4 ${isCurrent ? "text-[#245BDB]" : "text-[#778191]"}`}
                  />
                </div>
                <div
                  className={`text-xs sm:text-sm font-bold ${
                    isCurrent ? "text-[#151A23]" : "text-[#535D6B]"
                  }`}
                >
                  {s.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Stage Box: Fluid padding and responsive grid */}
        {(() => {
          const cur = workflowSteps[activeStep];
          const CurIcon = cur.icon;
          return (
            <div className="p-5 sm:p-8 lg:p-10 rounded-2xl bg-[#F7F8FA] border border-[#E4E7EC]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 sm:gap-3.5 mb-4 sm:mb-5">
                    <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-lg bg-white border border-[#E4E7EC] flex items-center justify-center text-[#245BDB] shrink-0">
                      <CurIcon className="w-5 sm:w-6 h-5 sm:h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#778191]">
                        STAGE {cur.step} EXECUTION
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#151A23]">{cur.name}</h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#151A23] font-semibold mb-2 sm:mb-3">{cur.summary}</p>
                  <p className="text-xs sm:text-sm text-[#535D6B] leading-relaxed mb-5 sm:mb-6">{cur.details}</p>

                  <div className="space-y-2 sm:space-y-2.5">
                    {cur.deliverables.map((del, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#535D6B]">
                        <CheckCircle className="w-4 h-4 text-[#245BDB] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white p-4 sm:p-6 rounded-xl border border-[#E4E7EC] text-xs font-mono">
                  <div className="text-[#778191] border-b border-[#F2F4F7] pb-2.5 sm:pb-3 mb-3 sm:mb-4 flex justify-between font-semibold">
                    <span>STAGE SPECIFICATION</span>
                    <span className="text-emerald-600">CERTIFIED</span>
                  </div>
                  <div className="space-y-3 sm:space-y-3.5">
                    <div>
                      <span className="text-[#778191] text-[10px] block">CLIENT INVOLVEMENT</span>
                      <span className="text-[#151A23] text-xs sm:text-sm font-semibold">Collaborative Staging Demos</span>
                    </div>
                    <div>
                      <span className="text-[#778191] text-[10px] block">DOCUMENTATION</span>
                      <span className="text-[#245BDB] text-xs sm:text-sm font-semibold">Full Schemas & Codebase Ownership</span>
                    </div>
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          sound.playClick();
                          setActiveStep((prev) => (prev + 1) % workflowSteps.length);
                        }}
                        className="text-xs text-[#245BDB] hover:text-[#1948B8] font-bold inline-flex items-center gap-1 min-h-[40px]"
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

      {/* Why Choose Exocross Header */}
      <div className="flex flex-col items-start mb-8 sm:mb-10">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#151A23] tracking-tight">
          Why Choose Exocross
        </h3>
        <p className="mt-2 text-xs sm:text-sm lg:text-base text-[#535D6B] max-w-2xl leading-relaxed">
          What makes working with Exocross fundamentally different from traditional vendors or
          outsourcing shops.
        </p>
      </div>

      {/* 5 Core Pillars Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {whyChooseData.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              onMouseEnter={() => sound.playHover()}
              className="p-5 sm:p-6 rounded-xl bg-white border border-[#E4E7EC] hover:border-[#D0D5DD] flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-[#F7F8FA] border border-[#E4E7EC] flex items-center justify-center text-[#245BDB]">
                    <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-[#F0F5FF] text-[#245BDB] font-semibold border border-[#D0E2FF]">
                    {item.badge}
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-[#151A23] mb-1.5 sm:mb-2">{item.title}</h4>
                <p className="text-xs sm:text-sm text-[#535D6B] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 sm:mt-6 pt-3 border-t border-[#F2F4F7] flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#778191]">
                <span>PILLAR 0{idx + 1}</span>
                <span className="text-[#245BDB] font-semibold">GUARANTEED</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
