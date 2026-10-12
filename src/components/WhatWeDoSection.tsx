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
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10 border-t border-[#E5E7EB]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
        <div>
          <span className="text-xs font-mono text-[#245BDB] uppercase tracking-wider mb-2 block font-semibold">
            02 // SERVICES DIRECTORY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#161B26] tracking-tight leading-tight">
            What we do
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#515B6B] max-w-2xl">
            Every service is tailored around how your business actually runs.
          </p>
        </div>

        {/* Clean Filter Controls */}
        <div className="flex items-center gap-1.5 p-1 rounded-lg border border-[#E5E7EB] bg-[#F7F8FA] overflow-x-auto max-w-full">
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
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors shrink-0 ${
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

      {/* Services Grid: Clean Architectural White Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredServices.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              onClick={() => handleServiceSelect(service)}
              onMouseEnter={() => sound.playHover()}
              data-cursor="EXPAND"
              className="group p-6 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#D1D5DB] hover:shadow-[0_8px_20px_-4px_rgba(15,23,42,0.08)] cursor-pointer flex flex-col justify-between transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-[#F7F8FA] border border-[#E5E7EB] flex items-center justify-center text-[#245BDB] group-hover:bg-[#F0F5FF] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-[#737D8C]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#161B26] mb-2 group-hover:text-[#245BDB] transition-colors">
                  {service.name}
                </h3>

                <p className="text-sm text-[#515B6B] leading-relaxed mb-6 line-clamp-3">
                  {service.description}
                </p>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#F7F8FA] text-[#515B6B]"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.techStack.length > 3 && (
                    <span className="px-1 py-0.5 text-[11px] font-mono text-[#737D8C]">
                      +{service.techStack.length - 3}
                    </span>
                  )}
                </div>

                <div className="pt-4 border-t border-[#E5E7EB]/60 flex items-center justify-between text-xs font-medium text-[#515B6B] group-hover:text-[#245BDB] transition-colors">
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#161B26]/40 backdrop-blur-xs animate-fade-in duration-150">
          <div className="relative max-w-xl w-full p-6 sm:p-8 rounded-xl bg-white border border-[#E5E7EB] shadow-[0_20px_48px_rgba(15,23,42,0.16)] max-h-[88vh] overflow-y-auto animate-fade-in-up">
            <button
              onClick={() => {
                sound.playClick();
                setSelectedService(null);
              }}
              aria-label="Close dialog"
              data-cursor="CLOSE"
              className="absolute top-5 right-5 p-1.5 rounded-lg text-[#515B6B] hover:text-[#161B26] hover:bg-[#F7F8FA] transition-colors"
            >
              ✕
            </button>

            <div className="flex items-center gap-3.5 mb-5 pr-8">
              <div className="w-11 h-11 rounded-lg bg-[#F0F5FF] border border-[#E5E7EB] flex items-center justify-center text-[#245BDB] shrink-0">
                <selectedService.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#737D8C]">
                  DISCIPLINE SPECIFICATION
                </span>
                <h3 className="text-xl font-bold text-[#161B26]">{selectedService.name}</h3>
              </div>
            </div>

            <p className="text-sm text-[#515B6B] leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#161B26] font-semibold mb-3">
                KEY DELIVERABLES & OUTCOMES
              </h4>
              <div className="space-y-2">
                {selectedService.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#515B6B]">
                    <Check className="w-4 h-4 text-[#245BDB] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#737D8C] font-semibold mb-2">
                TECHNOLOGY & TOOLING
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedService.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-[#F7F8FA] border border-[#E5E7EB] text-[#515B6B]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-5 border-t border-[#E5E7EB]">
              <span className="text-xs font-mono text-emerald-600">
                ● Available for New Engagements
              </span>
              <button
                onClick={() => handleInquire(selectedService.name)}
                data-cursor="ENGAGE"
                className="px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#245BDB] hover:bg-[#1948B8] transition-colors text-center"
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
