
"use client";

import { motion, useScroll, useSpring, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
            {data.labels.heroTitle.split('percakapan')[0]}
            <span className="text-[#9092a0]">percakapan</span>
            {data.labels.heroTitle.split('percakapan')[1].split('closing')[0]}
            <span className="text-[#9092a0]">closing</span>.
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-[17px] text-[#9092a0] max-w-[560px] leading-relaxed mt-5">
            {data.labels.heroDesc}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-9 flex flex-wrap gap-7 font-plex text-[12.5px] text-[#5c5e68]">
            <div className="flex gap-2">
              Peran <span className="text-[#f4f3ef]">{data.role}</span>
            </div>
            <div className="flex gap-2">
              Durasi <span className="text-[#f4f3ef]">{data.duration}</span>
            </div>
            <div className="flex gap-2">
              Periode data <span className="text-[#f4f3ef]">{data.dataPeriod}</span>
            </div>
          </motion.div>
        </motion.header>

        <PulseDivider />

        {/* 00 - ABOUT */}
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

        {/* 01 - REACH & GROWTH */}
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

        {/* 02 - CONTENT EFFICIENCY */}
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
              <div className="h-[10px] bg-[#1a1c21] relative overflow-hidden border border-[#f4f3ef]/10">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#6c5ce7] to-[#ff6b4a]" 
                />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="flex justify-between text-[13px] text-[#9092a0] mb-2">
                <span>{data.labels.reelLabel}</span>
                <span className="font-semibold text-[#f4f3ef]">{data.labels.reelData}</span>
              </div>
              <div className="h-[10px] bg-[#1a1c21] relative overflow-hidden border border-[#f4f3ef]/10">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "69%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="absolute inset-y-0 left-0 bg-[#5c5e68]" 
                />
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-6 p-[18px_20px] border-l-2 border-[#6c5ce7] bg-[#1a1c21] text-[14px] text-[#9092a0] max-w-[640px]">
            <span className="font-semibold text-[#f4f3ef]">{data.labels.strategyInt}</span> {data.labels.strategyIntDesc}
          </motion.div>
        </motion.section>

        {/* 03 - CONVERSATION */}
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

          <div className="max-w-[640px] flex flex-col gap-[2px] mt-2">
            {[
              { label: data.labels.funnelLabels[0], val: data.metrics.conversations, pct: "100%" },
              { label: data.labels.funnelLabels[1], val: data.metrics.contacts, pct: "96%" },
              { label: data.labels.funnelLabels[2], val: data.metrics.newContacts, pct: "57%" },
              { label: data.labels.funnelLabels[3], val: data.metrics.returningContacts, pct: "39%" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-[180px_1fr_auto] items-center gap-[6px] md:gap-4 py-[14px] border-b border-dashed border-[#f4f3ef]/10">
                <div className="text-[13.5px] text-[#9092a0]">{item.label}</div>
                <div className="h-[8px] bg-[#1a1c21] border border-[#f4f3ef]/10">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: item.pct }}
                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-[#6c5ce7]" 
                  />
                </div>
                <div className="font-plex text-[14px] text-right min-w-[70px]">{item.val}</div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-[#f4f3ef]/10 border border-[#f4f3ef]/10 mt-8 max-w-[920px]">
            <div className="bg-[#121316] p-[26px_22px]">
              <div className="font-space font-bold text-[30px] text-[#f4f3ef] tracking-tight">+41,4%</div>
              <div className="text-[13px] text-[#9092a0] mt-2">{data.labels.newContactGrowth}</div>
            </div>
            <div className="bg-[#121316] p-[26px_22px]">
              <div className="font-space font-bold text-[30px] text-[#ff6b4a] tracking-tight">{data.metrics.responseRate}</div>
              <div className="text-[13px] text-[#9092a0] mt-2">{data.labels.responseRate}</div>
            </div>
            <div className="bg-[#121316] p-[26px_22px] col-span-2 md:col-span-1">
              <div className="font-space font-bold text-[30px] text-[#f4f3ef] tracking-tight">+30,6%</div>
              <div className="text-[13px] text-[#9092a0] mt-2">{data.labels.returningGrowth}</div>
            </div>
          </motion.div>
        </motion.section>

        {/* 04 - CLOSING RATE */}
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

          <motion.p variants={fadeInUp} className="text-[15px] text-[#9092a0] max-w-[640px] leading-relaxed">
            {data.labels.closingDesc}
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-8 mt-5">
            <div className="text-center">
              <div className="font-space font-bold text-[46px] text-[#5c5e68]">{data.metrics.closingBefore}</div>
              <div className="font-plex text-[12px] text-[#9092a0] mt-1 uppercase">{data.labels.before}</div>
            </div>
            <div className="text-[22px] text-[#5c5e68]">→</div>
            <div className="text-center">
              <div className="font-space font-bold text-[46px] text-[#ff6b4a]">{data.metrics.closingCurrent}</div>
              <div className="font-plex text-[12px] text-[#9092a0] mt-1 uppercase">{data.labels.current}</div>
            </div>
            <div className="text-[22px] text-[#5c5e68]">=</div>
            <div className="text-center">
              <div className="font-space font-bold text-[46px] text-[#ff6b4a]">{data.labels.points}</div>
              <div className="font-plex text-[12px] text-[#9092a0] mt-1 uppercase">{data.labels.relativeImp}</div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-7 bg-[#1a1c21] border border-dashed border-[#f4f3ef]/[0.18] p-[14px_18px] font-plex text-[11.5px] text-[#9092a0] mb-0">
            {data.labels.editNote}
          </motion.div>
        </motion.section>

        {/* 05 - SKILLS */}
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

          <div className="flex flex-col">
            {data.skills.map((skill: any, idx: number) => (
              <motion.div key={idx} variants={fadeInUp} className="grid grid-cols-[28px_1fr] gap-4 py-[18px] border-b border-[#f4f3ef]/10 last:border-b-0">
                <div className="font-plex text-[12px] text-[#6c5ce7] pt-[3px]">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div>
                  <div className="font-space font-semibold text-[16px]">{skill.name}</div>
                  <div className="text-[13.5px] text-[#9092a0] mt-1 max-w-[560px]">{skill.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 06 - PROOF */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              <div className="bg-[#1a1c21] rounded-lg overflow-hidden border border-[#f4f3ef]/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/projects/og-store/evidence/proof-juli-2026.png" alt="Proof Juli 2026" className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="font-plex text-[11.5px] text-[#5c5e68] text-center uppercase tracking-wider">{data.labels.proofJuli}</div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              <div className="bg-[#1a1c21] rounded-lg overflow-hidden border border-[#f4f3ef]/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/projects/og-store/evidence/proof-agustus-2026.png" alt="Proof Agustus 2026" className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="font-plex text-[11.5px] text-[#5c5e68] text-center uppercase tracking-wider">{data.labels.proofAgustus}</div>
            </motion.div>
          </div>
        </motion.section>

        {/* FOOTER */}
        <footer className="py-[64px] pb-[80px]">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="font-space text-[20px] font-semibold mt-7">
              {data.labels.footerCta} <span className="text-[#6c5ce7]">→</span>
            </div>
            <p className="font-plex text-[12px] text-[#5c5e68] max-w-[600px] leading-[1.7] mt-[18px] whitespace-pre-line">
              {data.labels.footerNote}
            </p>
          </motion.div>
        </footer>

      </div>
    </main>
  );
}
