
"use client";

import { motion, useScroll, useSpring, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";
import { useEffect, useState } from "react";
import ForceScrollToTop from "@/components/ForceScrollToTop";

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const PulseDivider = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    className="w-full h-[44px] overflow-hidden"
  >
    <svg viewBox="0 0 900 44" preserveAspectRatio="none" className="w-full h-full block">
      <motion.path 
        initial={{ strokeDashoffset: 1400 }}
        whileInView={{ strokeDashoffset: 0 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        viewport={{ once: true }}
        d="M0,32 L60,32 L90,10 L120,36 L150,20 L180,30 L220,14 L260,32 L300,22 L340,34 L380,8 L420,28 L460,18 L500,32 L540,12 L580,26 L620,20 L660,34 L700,16 L740,28 L780,22 L820,32 L860,18 L900,26"
        fill="none"
        stroke="#6c5ce7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1400"
      />
    </svg>
  </motion.div>
);

const PulseDivider2 = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    className="w-full h-[44px] overflow-hidden"
  >
    <svg viewBox="0 0 900 44" preserveAspectRatio="none" className="w-full h-full block">
      <motion.path 
        initial={{ strokeDashoffset: 1400 }}
        whileInView={{ strokeDashoffset: 0 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        viewport={{ once: true }}
        d="M0,26 L50,18 L90,32 L130,16 L170,28 L210,20 L250,34 L290,14 L330,26 L370,32 L410,18 L450,28 L490,10 L530,30 L570,22 L610,34 L650,16 L690,28 L730,20 L770,32 L810,14 L850,26 L900,20"
        fill="none"
        stroke="#6c5ce7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1400"
      />
    </svg>
  </motion.div>
);

export default function OgStoreCaseStudyClient({ data }: { data: any }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isMounted, setIsMounted] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="flex flex-col w-full min-h-screen font-inter bg-[#121316] text-[#f4f3ef] selection:bg-[#6c5ce7] selection:text-white">
      <ForceScrollToTop />
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#6c5ce7] origin-left z-50"
        style={{ scaleX }}
      />

      <div className="max-w-[920px] mx-auto px-6 md:px-8 w-full">
        {/* Navigation */}
        <div className="pt-24 pb-8 flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#5c5e68] hover:text-[#f4f3ef] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {data.labels.backToWork}
          </Link>
        </div>

        {/* HERO */}
        <motion.header 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="pt-16 pb-16 border-b border-[#f4f3ef]/10"
        >
          <motion.div variants={fadeInUp} className="font-plex text-[12px] tracking-[0.14em] uppercase text-[#6c5ce7] mb-5">
            {data.labels.eyebrow}
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="font-space font-bold text-[34px] md:text-[58px] leading-[1.08] tracking-tight mb-6 max-w-[780px]">
            {data.labels.heroTitlePart1}
            <span className="text-[#9092a0]">{data.labels.heroTitleHighlight1}</span>
            {data.labels.heroTitlePart2}
            <span className="text-[#9092a0]">{data.labels.heroTitleHighlight2}</span>.
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-[17px] text-[#9092a0] max-w-[560px] leading-relaxed mt-5">
            {data.labels.heroDesc}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-9 flex flex-wrap gap-7 font-plex text-[12.5px] text-[#5c5e68]">
            <div className="flex gap-2">
              Role <span className="text-[#f4f3ef]">{data.role}</span>
            </div>
            <div className="flex gap-2">
              Duration <span className="text-[#f4f3ef]">{data.duration}</span>
            </div>
            <div className="flex gap-2">
              Data Period <span className="text-[#f4f3ef]">{data.dataPeriod}</span>
            </div>
          </motion.div>
        </motion.header>

        <PulseDivider />

        {/* 00 - PROJECT SNAPSHOT */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-16 border-b border-[#f4f3ef]/10"
        >
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-9">
            <div>
              <motion.div variants={fadeInUp} className="font-plex text-[12px] text-[#5c5e68] tracking-[0.08em] mb-4">
                {data.labels.snapshotNum}
              </motion.div>
              <motion.h2 variants={fadeInUp} className="font-space font-semibold text-[26px] tracking-tight">
                {data.labels.snapshotTitle}
              </motion.h2>
            </div>
          </div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[15px] text-[#9092a0]">
            <div className="space-y-8">
              <div>
                <h3 className="text-[11px] font-plex uppercase tracking-[0.1em] text-[#5c5e68] mb-2 border-b border-[#f4f3ef]/10 pb-2">OBJECTIVE</h3>
                <p className="leading-relaxed text-[#f4f3ef]">{data.labels.snapshotData.objective}</p>
              </div>
              <div>
                <h3 className="text-[11px] font-plex uppercase tracking-[0.1em] text-[#5c5e68] mb-2 border-b border-[#f4f3ef]/10 pb-2">PROBLEM</h3>
                <p className="leading-relaxed">{data.labels.snapshotData.problem}</p>
              </div>
              <div>
                <h3 className="text-[11px] font-plex uppercase tracking-[0.1em] text-[#5c5e68] mb-2 border-b border-[#f4f3ef]/10 pb-2">STRATEGY</h3>
                <p className="leading-relaxed font-semibold text-[#f4f3ef]">{data.labels.snapshotData.strategy}</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-[11px] font-plex uppercase tracking-[0.1em] text-[#5c5e68] mb-2 border-b border-[#f4f3ef]/10 pb-2">MY ROLE</h3>
                <p className="text-[#f4f3ef] font-semibold mb-2">{data.labels.snapshotData.role}</p>
                <ul className="flex flex-wrap gap-2">
                  {data.labels.snapshotData.responsibilities.map((r: string) => (
                    <li key={r} className="bg-[#1a1c21] px-2 py-1 rounded-sm text-[12px]">{r}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[11px] font-plex uppercase tracking-[0.1em] text-[#5c5e68] mb-2 border-b border-[#f4f3ef]/10 pb-2">EXECUTION</h3>
                <ul className="flex flex-wrap gap-2">
                  {data.labels.snapshotData.execution.map((e: string) => (
                    <li key={e} className="border border-[#f4f3ef]/20 px-2 py-1 rounded-sm text-[12px]">{e}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[11px] font-plex uppercase tracking-[0.1em] text-[#5c5e68] mb-2 border-b border-[#f4f3ef]/10 pb-2">RESULT</h3>
                <ul className="flex flex-col gap-1">
                  {data.labels.snapshotData.result.map((res: string) => (
                    <li key={res} className="text-[#f4f3ef] font-medium">{res}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* 01 - ABOUT */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-16 border-b border-[#f4f3ef]/10"
        >
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-9">
            <div>
              <motion.div variants={fadeInUp} className="font-plex text-[12px] text-[#5c5e68] tracking-[0.08em] mb-4">
                {data.labels.aboutNum}
              </motion.div>
              <motion.h2 variants={fadeInUp} className="font-space font-semibold text-[26px] tracking-tight">
                {data.labels.aboutTitle}
              </motion.h2>
            </div>
          </div>
          
          <motion.p variants={fadeInUp} className="text-[15px] text-[#9092a0] max-w-[680px] leading-relaxed">
            {data.labels.aboutP1}
          </motion.p>
          <motion.p variants={fadeInUp} className="text-[15px] text-[#9092a0] max-w-[680px] leading-relaxed mt-4">
            {data.labels.aboutP2}
          </motion.p>
        </motion.section>

        <PulseDivider2 />

        {/* 02 - REACH & GROWTH */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-16 border-b border-[#f4f3ef]/10"
        >
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-9">
            <div>
              <motion.div variants={fadeInUp} className="font-plex text-[12px] text-[#5c5e68] tracking-[0.08em] mb-4">
                {data.labels.reachNum}
              </motion.div>
              <motion.h2 variants={fadeInUp} className="font-space font-semibold text-[26px] tracking-tight">
                {data.labels.reachTitle}
              </motion.h2>
            </div>
            <motion.div variants={fadeInUp} className="font-plex text-[11.5px] text-[#9092a0] border border-[#f4f3ef]/[0.18] rounded-full px-3 py-1 whitespace-nowrap self-start">
              {data.labels.reachPeriod}
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-[#f4f3ef]/10 border border-[#f4f3ef]/10">
            <div className="bg-[#121316] p-[26px_22px]">
              <div className="font-space font-bold text-[30px] text-[#ff6b4a] tracking-tight">{data.metrics.nonFollowerReach}</div>
              <div className="text-[13px] text-[#9092a0] mt-2">{data.labels.reachLabel1}</div>
              <div className="font-plex text-[11.5px] text-[#6c5ce7] mt-2.5">{data.labels.reachDelta1}</div>
            </div>
            <div className="bg-[#121316] p-[26px_22px]">
              <div className="font-space font-bold text-[30px] text-[#ff6b4a] tracking-tight">{data.metrics.impressions}</div>
              <div className="text-[13px] text-[#9092a0] mt-2">{data.labels.reachLabel2}</div>
              <div className="font-plex text-[11.5px] text-[#6c5ce7] mt-2.5">{data.labels.reachDelta2}</div>
            </div>
            <div className="bg-[#121316] p-[26px_22px] col-span-2 md:col-span-1">
              <div className="font-space font-bold text-[30px] text-[#ff6b4a] tracking-tight">{data.metrics.netFollowers}</div>
              <div className="text-[13px] text-[#9092a0] mt-2">{data.labels.reachLabel3}</div>
              <div className="font-plex text-[11.5px] text-[#6c5ce7] mt-2.5">{data.labels.reachDelta3}</div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-6 p-[18px_20px] border-l-2 border-[#6c5ce7] bg-[#1a1c21] text-[14px] text-[#9092a0] max-w-[640px]">
            <span className="font-semibold text-[#f4f3ef]">{data.labels.reachWhy}</span> {data.labels.reachWhyDesc}
          </motion.div>
        </motion.section>

        {/* 03 - CONTENT EFFICIENCY */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-16 border-b border-[#f4f3ef]/10"
        >
          <div className="mb-9">
            <motion.div variants={fadeInUp} className="font-plex text-[12px] text-[#5c5e68] tracking-[0.08em] mb-4">
              {data.labels.contentNum}
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-space font-semibold text-[26px] tracking-tight">
              {data.labels.contentTitle}
            </motion.h2>
          </div>
          
          <motion.p variants={fadeInUp} className="text-[15px] text-[#9092a0] max-w-[640px] leading-relaxed mb-7">
            {data.labels.contentDesc}
          </motion.p>

          <div className="mt-7 space-y-6 max-w-[640px]">
            <motion.div variants={fadeInUp}>
              <div className="flex justify-between text-[13px] text-[#9092a0] mb-2">
                <span>{data.labels.postLabel}</span>
                <span className="font-semibold text-[#f4f3ef]">{data.labels.postData}</span>
              </div>
              <div className="h-[6px] bg-[#1a1c21] rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-[#6c5ce7]" 
                />
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="flex justify-between text-[13px] text-[#9092a0] mb-2">
                <span>{data.labels.reelLabel}</span>
                <span className="font-semibold text-[#f4f3ef]">{data.labels.reelData}</span>
              </div>
              <div className="h-[6px] bg-[#1a1c21] rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "58%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-[#f4f3ef]/30" 
                />
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-8 p-[18px_20px] bg-[#1a1c21] text-[14px] text-[#9092a0] max-w-[640px]">
            <span className="font-semibold text-[#f4f3ef]">{data.labels.strategyInt}</span> {data.labels.strategyIntDesc}
          </motion.div>
        </motion.section>

        {/* 04 - WHAT CHANGED BEHIND THE NUMBERS */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-16 border-b border-[#f4f3ef]/10"
        >
          <div className="mb-9">
            <motion.div variants={fadeInUp} className="font-plex text-[12px] text-[#5c5e68] tracking-[0.08em] mb-4">
              {data.labels.whatChangedNum}
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-space font-semibold text-[26px] tracking-tight">
              {data.labels.whatChangedTitle}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[15px] text-[#9092a0] mt-3">
              {data.labels.whatChangedSubtitle}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {data.labels.whatChangedBlocks.map((block: any, i: number) => (
              <motion.div key={i} variants={fadeInUp} className="flex gap-4">
                <div className="text-[#6c5ce7] opacity-60 mt-1 font-plex text-[13px]">0{i+1}</div>
                <div>
                  <h3 className="font-semibold text-[15px] text-[#f4f3ef] tracking-wide mb-2 uppercase">{block.title}</h3>
                  <p className="text-[14px] text-[#9092a0] leading-relaxed">{block.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 05 - CONVERSATION */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-16 border-b border-[#f4f3ef]/10"
        >
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-9">
            <div>
              <motion.div variants={fadeInUp} className="font-plex text-[12px] text-[#5c5e68] tracking-[0.08em] mb-4">
                {data.labels.convNum}
              </motion.div>
              <motion.h2 variants={fadeInUp} className="font-space font-semibold text-[26px] tracking-tight">
                {data.labels.convTitle}
              </motion.h2>
            </div>
            <motion.div variants={fadeInUp} className="font-plex text-[11.5px] text-[#9092a0] border border-[#f4f3ef]/[0.18] rounded-full px-3 py-1 whitespace-nowrap self-start">
              {data.labels.convPeriod}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp} className="flex flex-col gap-[1px] bg-[#f4f3ef]/10 border border-[#f4f3ef]/10 p-[1px]">
              <div className="bg-[#121316] p-[20px] flex justify-between items-center">
                <span className="text-[13.5px] text-[#9092a0]">{data.labels.funnelLabels[0]}</span>
                <span className="font-space font-bold text-[20px] text-[#f4f3ef]">{data.metrics.conversations}</span>
              </div>
              <div className="bg-[#121316] p-[20px] flex justify-between items-center">
                <span className="text-[13.5px] text-[#9092a0]">{data.labels.funnelLabels[1]}</span>
                <span className="font-space font-bold text-[20px] text-[#f4f3ef]">{data.metrics.contacts}</span>
              </div>
              <div className="bg-[#121316] p-[20px] flex justify-between items-center">
                <span className="text-[13.5px] text-[#9092a0]">{data.labels.funnelLabels[2]}</span>
                <span className="font-space font-bold text-[20px] text-[#f4f3ef]">{data.metrics.newContacts}</span>
              </div>
              <div className="bg-[#121316] p-[20px] flex justify-between items-center">
                <span className="text-[13.5px] text-[#9092a0]">{data.labels.funnelLabels[3]}</span>
                <span className="font-space font-bold text-[20px] text-[#f4f3ef]">{data.metrics.returningContacts}</span>
              </div>
            </motion.div>

            <div className="flex flex-col gap-6">
              <motion.div variants={fadeInUp}>
                <div className="text-[12px] uppercase tracking-wider text-[#5c5e68] mb-1.5">{data.labels.newContactGrowth}</div>
                <div className="font-space text-[24px] font-bold text-[#f4f3ef]">+37.2%</div>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <div className="text-[12px] uppercase tracking-wider text-[#5c5e68] mb-1.5">{data.labels.responseRate}</div>
                <div className="font-space text-[24px] font-bold text-[#6c5ce7]">{data.metrics.responseRate}</div>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <div className="text-[12px] uppercase tracking-wider text-[#5c5e68] mb-1.5">{data.labels.returningGrowth}</div>
                <div className="font-space text-[24px] font-bold text-[#f4f3ef]">+14.2%</div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* 06 - CONVERSION */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-16 border-b border-[#f4f3ef]/10"
        >
          <div className="mb-9">
            <motion.div variants={fadeInUp} className="font-plex text-[12px] text-[#5c5e68] tracking-[0.08em] mb-4">
              {data.labels.closingNum}
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-space font-semibold text-[26px] tracking-tight">
              {data.labels.closingTitle}
            </motion.h2>
          </div>
          
          <motion.p variants={fadeInUp} className="text-[15px] text-[#9092a0] max-w-[640px] leading-relaxed mb-10">
            {data.labels.closingDesc}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="font-space font-bold text-[54px] md:text-[72px] text-[#9092a0] opacity-50 tracking-tighter leading-none mb-2">
                {data.metrics.closingBefore}
              </div>
              <div className="font-plex text-[11px] tracking-widest text-[#5c5e68]">{data.labels.before}</div>
            </div>
            
            <div className="hidden md:block w-16 h-[2px] bg-[#f4f3ef]/10 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-[#f4f3ef]/20 rotate-45" />
            </div>

            <div className="text-center">
              <div className="font-space font-bold text-[54px] md:text-[72px] text-[#6c5ce7] tracking-tighter leading-none mb-2 drop-shadow-[0_0_15px_rgba(108,92,231,0.3)]">
                {data.metrics.closingCurrent}
              </div>
              <div className="font-plex text-[11px] tracking-widest text-[#5c5e68]">{data.labels.current}</div>
            </div>
            
            <div className="bg-[#1a1c21] border border-[#f4f3ef]/10 p-5 rounded-lg flex flex-col items-center justify-center min-w-[180px]">
              <div className="font-space font-bold text-[24px] text-[#f4f3ef] mb-1">{data.labels.points}</div>
              <div className="font-plex text-[10px] text-[#5c5e68] mb-3">{data.labels.relativeImp}</div>
              
              <div className="w-full h-[1px] bg-[#f4f3ef]/10 mb-3" />
              
              <div className="font-space font-bold text-[18px] text-[#ff6b4a] mb-1">{data.labels.relativeImp2}</div>
            </div>
          </motion.div>
        </motion.section>

        {/* 07 - BACKGROUND */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-16 border-b border-[#f4f3ef]/10"
        >
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-9">
            <div>
              <motion.div variants={fadeInUp} className="font-plex text-[12px] text-[#5c5e68] tracking-[0.08em] mb-4">
                {data.labels.backgroundNum}
              </motion.div>
              <motion.h2 variants={fadeInUp} className="font-space font-semibold text-[26px] tracking-tight">
                {data.labels.backgroundTitle}
              </motion.h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12">
            <motion.p variants={fadeInUp} className="text-[16px] text-[#f4f3ef] max-w-[500px] leading-relaxed whitespace-pre-line font-medium opacity-90">
              {data.labels.backgroundCopy}
            </motion.p>

            <motion.div variants={fadeInUp} className="border-l-2 border-[#6c5ce7] pl-6 py-2">
              <h3 className="font-semibold text-[15px] mb-2 whitespace-pre-line">{data.labels.backgroundRole}</h3>
              <p className="text-[13px] text-[#ff6b4a] font-medium">{data.labels.backgroundAchievement}</p>
            </motion.div>
          </div>
        </motion.section>

        {/* 08 - SKILLS */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-16 border-b border-[#f4f3ef]/10"
        >
          <div className="mb-9">
            <motion.div variants={fadeInUp} className="font-plex text-[12px] text-[#5c5e68] tracking-[0.08em] mb-4">
              {data.labels.skillsNum}
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-space font-semibold text-[26px] tracking-tight">
              {data.labels.skillsTitle}
            </motion.h2>
          </div>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-2.5">
            {[
              "Meta Ads Manager",
              "Social Media Strategy",
              "Creative Direction",
              "Content Planning",
              "Copywriting",
              "Data Analytics",
              "Customer Conversion",
              "Chat Handling",
            ].map(skill => (
              <div key={skill} className="px-4 py-2 border border-[#f4f3ef]/20 rounded-full text-[13.5px] font-medium text-[#9092a0] hover:text-[#f4f3ef] hover:border-[#f4f3ef] transition-colors">
                {skill}
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* 09 - EVIDENCE (LIGHTBOX ENABLED) */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-16 border-b border-[#f4f3ef]/10"
        >
          <div className="mb-9">
            <motion.div variants={fadeInUp} className="font-plex text-[12px] text-[#5c5e68] tracking-[0.08em] mb-4">
              {data.labels.proofNum}
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-space font-semibold text-[26px] tracking-tight">
              {data.labels.proofTitle}
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              <div 
                className="w-full bg-[#1a1c21] border border-[#f4f3ef]/10 p-1 cursor-zoom-in hover:border-[#6c5ce7] transition-colors"
                onClick={() => setLightboxImg("/images/projects/insight1.png")}
              >
                <img 
                  src="/images/projects/insight1.png" 
                  alt="Insight Data 1" 
                  className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
              <div className="text-[12px] text-[#5c5e68] font-plex uppercase text-center">
                {data.labels.proofLabels[0]}
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              <div 
                className="w-full bg-[#1a1c21] border border-[#f4f3ef]/10 p-1 cursor-zoom-in hover:border-[#6c5ce7] transition-colors"
                onClick={() => setLightboxImg("/images/projects/insight2.png")}
              >
                <img 
                  src="/images/projects/insight2.png" 
                  alt="Insight Data 2" 
                  className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
              <div className="text-[12px] text-[#5c5e68] font-plex uppercase text-center">
                {data.labels.proofLabels[1]}
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-12 text-[12.5px] text-[#5c5e68] max-w-[700px] leading-relaxed mx-auto text-center font-medium">
            {data.labels.disclaimer}
          </motion.div>
        </motion.section>

        {/* Footer Navigation */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 text-center"
        >
          <Link
            href="/#work"
            className="inline-flex items-center justify-center gap-2 text-[13px] font-medium tracking-widest text-[#f4f3ef] border border-[#f4f3ef]/20 rounded-full px-6 py-3 hover:bg-[#f4f3ef] hover:text-[#121316] transition-all"
          >
            {data.labels.backToWork}
          </Link>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 md:p-8 backdrop-blur-sm cursor-zoom-out"
            onClick={() => setLightboxImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-[110]"
              onClick={(e) => { e.stopPropagation(); setLightboxImg(null); }}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              src={lightboxImg}
              alt="Expanded evidence"
              className="max-w-full max-h-[85vh] object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
