"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface MarqueeProps {
  items: string[];
}

export default function Marquee({ items }: MarqueeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const marqueeText = items.join(" / ") + " / ";

  return (
    <div 
      className="w-full overflow-hidden whitespace-nowrap py-8 border-y border-white/10 bg-surface/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: isMounted ? ["0%", "-100%"] : "0%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: isHovered ? 60 : 30, // Slow down on hover
          }}
        >
          {/* Double the content for seamless loop */}
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-2xl md:text-4xl font-bold tracking-widest px-4"
            >
              {marqueeText}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
