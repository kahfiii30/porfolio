"use client";

import AnimatedText, { FadeIn } from "@/components/AnimatedText";
import NextExperiment from "@/components/NextExperiment";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MetaAdsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const capabilities = [
    {
      num: "01",
      title: "CAMPAIGN STRUCTURE",
      items: ["Campaign setup", "Ad Set structure", "Ad creative organization", "Budget allocation", "Objective selection"]
    },
    {
      num: "02",
      title: "AUDIENCE",
      items: ["Broad audience", "Interest targeting", "Custom audiences", "Retargeting", "Lookalike audience concepts"]
    },
    {
      num: "03",
      title: "CREATIVE TESTING",
      items: ["Hooks", "Creative angles", "Static ads", "Video ads", "Offer testing", "CTA testing"]
    },
    {
      num: "04",
      title: "PERFORMANCE ANALYSIS",
      items: ["CTR", "CPM", "CPC", "Cost per result", "Conversion", "ROAS"]
    }
  ];

  const workflow = [
    "BUSINESS GOAL",
    "AUDIENCE",
    "OFFER",
    "CREATIVE",
    "META ADS",
    "DATA",
    "ITERATION"
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <AnimatedText 
        text="META ADS\n& PERFORMANCE\nMARKETING" 
        as="h1"
        className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-12"
      />
      
      <FadeIn delay={0.2}>
        <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl font-medium mb-32 border-l border-accent pl-6">
          I use Meta Ads not only to "run ads", but to understand how creative, audience, offer, and funnel work together.
          <br /><br />
          The goal is to find what works, understand why it works, and improve it through testing.
        </p>
      </FadeIn>

      <div className="flex flex-col gap-40">
        
        {/* Capabilities Grid */}
        <FadeIn delay={0.3}>
          <h2 className="text-sm font-mono tracking-widest text-accent mb-12 uppercase">Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {capabilities.map((cap) => (
              <div key={cap.num} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 border-b border-white/10 pb-4">
                  <span className="text-2xl font-mono text-white/30">{cap.num}</span>
                  <h3 className="text-2xl font-bold tracking-tight">{cap.title}</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {cap.items.map((item) => (
                    <li key={item} className="text-lg text-white/70 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Visual Workflow */}
        <FadeIn delay={0.4}>
          <h2 className="text-sm font-mono tracking-widest text-accent mb-16 uppercase text-center">The Workflow</h2>
          
          <div ref={containerRef} className="relative max-w-sm mx-auto flex flex-col items-center gap-12 py-12">
            <svg className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 h-full w-4 pointer-events-none" viewBox="0 0 4 100" preserveAspectRatio="none">
              <line x1="2" y1="0" x2="2" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              <motion.line 
                x1="2" y1="0" x2="2" y2="100" 
                stroke="var(--accent)" 
                strokeWidth="2" 
                vectorEffect="non-scaling-stroke"
                style={{ pathLength }} 
              />
            </svg>

            {workflow.map((step) => (
              <div key={step} className="relative z-10 bg-black px-6 py-4 border border-white/10 rounded-full flex items-center justify-center w-full shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                <span className="font-bold tracking-widest text-sm">{step}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Philosophy */}
        <FadeIn delay={0.5} className="py-20 border-t border-b border-white/10 my-10 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-12 max-w-3xl">
            "GOOD ADS ARE NOT<br />JUST ABOUT TARGETING.
            <br /><br />
            THE CREATIVE,<br />OFFER AND CUSTOMER<br />MATTER JUST AS MUCH."
          </h2>
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-2xl font-medium">
            Performance marketing works best when advertising is connected to the entire customer journey.
          </p>
        </FadeIn>

      </div>

      <NextExperiment href="/lab/web-experiments" label="Web Experiments" />
    </div>
  );
}
