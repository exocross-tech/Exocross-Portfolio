"use client";

import React, { useState } from "react";
import { sound } from "@/lib/sound";
import {
  Globe,
  Smartphone,
  Wrench,
  Search,
  Cloud,
  Cpu,
  Compass,
  TrendingDown,
  ArrowUpRight,
  Check,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  name: string;
  category: "engineering" | "cloud-ai" | "strategy";
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  deliverables: string[];
  techStack: string[];
  highlight: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-apps",
    name: "Web Applications",
    category: "engineering",
    icon: Globe,
    description:
      "Custom web platforms, portals, dashboards and internal tools, designed around your workflow and built to scale with you.",
    deliverables: [
      "Enterprise internal dashboards",
      "Customer portals & SaaS platforms",
      "High-concurrency API integrations",
      "Real-time reactive state management",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    highlight: "Sub-second load times & resilient architecture",
  },
  {
    id: "mobile-apps",
    name: "Mobile Applications",
    category: "engineering",
    icon: Smartphone,
    description:
      "Mobile apps for customers or staff, from first concept through launch and ongoing updates.",
    deliverables: [
      "iOS and Android native / cross-platform apps",
      "Offline-first mobile synchronization",
      "App Store & Play Store deployment pipeline",
      "Push notification & device telemetry",
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    highlight: "Smooth 60fps animations & intuitive native UX",
  },
  {
    id: "rebuilds-repair",
    name: "Website Rebuilds & Repair",
    category: "engineering",
    icon: Wrench,
    description:
      "We take over broken, slow, outdated or abandoned websites and bring them back to a stable, modern and maintainable state.",
    deliverables: [
      "Codebase rescue & tech debt clearance",
      "Performance & Core Web Vitals optimization",
      "Security audit and vulnerability patching",
      "Migration to modern Jamstack/Next.js frameworks",
    ],
    techStack: ["Modernization", "Next.js", "Lighthouse 100", "Micro-frontends"],
    highlight: "Turn slow liabilities into fast revenue drivers",
  },
  {
    id: "ai-solutions",
    name: "AI Solutions",
    category: "cloud-ai",
    icon: Cpu,
    description:
      "Practical AI features and automation, such as assistants, document processing and workflow automation, that save time and reduce manual work.",
    deliverables: [
      "Intelligent document parsing & OCR pipelines",
      "Private enterprise LLM copilots & assistants",
      "Automated ticket routing & agent workflows",
      "Embeddings & semantic vector search",
    ],
    techStack: ["OpenAI", "LangChain", "Vector DBs", "Python", "FastAPI"],
    highlight: "Pragmatic automation without hallucination risk",
  },
  {
    id: "cloud-solutions",
    name: "Cloud Solutions",
    category: "cloud-ai",
    icon: Cloud,
    description:
      "Setup, migration and management of cloud infrastructure that is secure, reliable and sized to what you actually use.",
    deliverables: [
      "AWS, Google Cloud & Azure infrastructure",
      "Kubernetes & Docker containerization",
      "CI/CD automated release pipelines",
      "Disaster recovery & multi-region failover",
    ],
    techStack: ["AWS", "GCP", "Kubernetes", "Terraform", "Docker"],
    highlight: "High-uptime, fault-tolerant cloud topology",
  },
  {
    id: "cost-optimization",
    name: "Cost Optimization",
    category: "strategy",
    icon: TrendingDown,
    description:
      "We review your software subscriptions, hosting and cloud plans, then find ways to cut what you pay without hurting performance.",
    deliverables: [
      "Full cloud spend audit & waste detection",
      "Reserved instances & spot fleet strategies",
      "SaaS license & redundancy pruning",
      "Automated idle-resource termination",
    ],
    techStack: ["AWS Cost Explorer", "FinOps", "Architecture Audit"],
    highlight: "Average 30% - 50% cloud cost reduction",
  },
  {
    id: "it-consulting",
    name: "IT Consulting",
    category: "strategy",
    icon: Compass,
    description:
      "Independent advice on technology choices, architecture, project planning and vendor decisions, so you invest in the right things.",
    deliverables: [
      "Technology stack evaluations",
      "Architecture blueprints & roadmaps",
      "Vendor RFP vetting & negotiation support",
      "Security compliance & risk analysis",
    ],
    techStack: ["Tech Due Diligence", "Architecture Auditing"],
    highlight: "Unbiased technical clarity before you spend",
  },
  {
    id: "seo",
    name: "SEO & Performance",
    category: "strategy",
    icon: Search,
    description:
      "Technical and on-page search optimization so the right customers can find you and your site performs the way search engines expect.",
    deliverables: [
      "Technical crawlability & schema markup",
      "Core Web Vitals tuning (LCP, INP, CLS)",
      "High-intent keyword taxonomy planning",
      "Internationalization & multi-region search",
    ],
    techStack: ["Schema.org", "Core Web Vitals", "Next.js SSR/ISR"],
    highlight: "Search ranking gains backed by technical engineering",
  },
];

export default function WhatWeDoSection() {
  const [filter, setFilter] = useState<"all" | "engineering" | "cloud-ai" | "strategy">("all");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = servicesData.filter((item) =>
    filter === "all" ? true : item.category === filter
  );

  const handleServiceSelect = (service: ServiceItem) => {
    sound.playClick();
    setSelectedService(service);
  };

  const handleInquire = (serviceName: string) => {
    sound.playClick();
    setSelectedService(null);
    const contactSection = document.getElementById("get-in-touch");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="what-we-do"
      className="relative py-16 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            What we do
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl">
            Every service is tailored around how your business actually runs.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md overflow-x-auto max-w-full">
          {[
            { id: "all", label: "All Services" },
            { id: "engineering", label: "Engineering" },
            { id: "cloud-ai", label: "Cloud & AI" },
            { id: "strategy", label: "Strategy & Cost" },
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
                  ? "bg-blue-600 text-white font-bold shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                  : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredServices.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              onClick={() => handleServiceSelect(service)}
              onMouseEnter={() => sound.playHover()}
              data-cursor="EXPAND"
              className="group relative p-6 rounded-3xl glass-card flex flex-col justify-between cursor-pointer border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_10px_35px_-10px_rgba(6,182,212,0.25)] transition-all duration-300"
            >
              <div>
                {/* Header Icon + Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/40 text-cyan-400 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-gray-500 group-hover:text-cyan-300 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                {/* Service Name */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.name}
                </h3>

                {/* Description verbatim from document */}
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-6">
                  {service.description}
                </p>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/5 text-[10px] font-mono text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.techStack.length > 3 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-cyan-400">
                      +{service.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* View details footer */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400 group-hover:text-white transition-colors">
                  <span>View Details</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Detail Modal / Drawer */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative max-w-xl w-full p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass-panel-glow border border-cyan-500/40 shadow-[0_25px_60px_rgba(0,0,0,0.8)] max-h-[88vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => {
                sound.playClick();
                setSelectedService(null);
              }}
              data-cursor="CLOSE"
              className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
            >
              ✕
            </button>

            {/* Service Header */}
            <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6 pr-8">
              <div className="p-3 sm:p-3.5 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 shrink-0">
                <selectedService.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-cyan-400">
                  DISCIPLINE SPECIFICATION
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{selectedService.name}</h3>
              </div>
            </div>

            {/* Full Description */}
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-5 sm:mb-6">
              {selectedService.description}
            </p>

            {/* Key Deliverables */}
            <div className="mb-5 sm:mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-3">
                KEY DELIVERABLES & OUTCOMES
              </h4>
              <div className="space-y-2">
                {selectedService.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                TECHNOLOGY & TOOLING
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {selectedService.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 sm:px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-[11px] sm:text-xs font-mono text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-white/10">
              <span className="text-[11px] sm:text-xs font-mono text-emerald-400">
                ● Available for New Engagements
              </span>
              <button
                onClick={() => handleInquire(selectedService.name)}
                data-cursor="ENGAGE"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all text-center"
              >
                Inquire For This Service →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
