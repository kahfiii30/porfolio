"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const pathname = usePathname();
  const cursorRef = useRef<HTMLDivElement>(null);

  // Smooth mouse movement
  const cursorX = useSpring(0, { stiffness: 400, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 400, damping: 28 });

  useEffect(() => {
    // Disable custom cursor on touch devices or small screens
    const isMobile = window.matchMedia("(pointer: coarse), (max-width: 768px)").matches;
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isLink = target.tagName.toLowerCase() === "a" || target.closest("a");
      const isButton = target.tagName.toLowerCase() === "button" || target.closest("button");
      const projectCard = target.closest("[data-cursor-project]");
      
      if (projectCard) {
        setIsHovered(true);
        setHoverText("VIEW");
      } else if (isLink || isButton) {
        setIsHovered(true);
        setHoverText("");
      } else {
        setIsHovered(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, pathname]);

  // Hide on mobile via CSS
  return (
    <motion.div
      ref={cursorRef}
      className="hidden md:flex pointer-events-none fixed top-0 left-0 z-[100] items-center justify-center rounded-full bg-white mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={{ width: 16, height: 16, opacity: 0 }}
      animate={{
        width: isHovered ? (hoverText ? 64 : 40) : 16,
        height: isHovered ? (hoverText ? 64 : 40) : 16,
        opacity: 1,
      }}
      transition={{ duration: 0.2 }}
    >
      {hoverText && (
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-black text-[10px] font-bold tracking-widest mix-blend-normal"
        >
          {hoverText}
        </motion.span>
      )}
    </motion.div>
  );
}
