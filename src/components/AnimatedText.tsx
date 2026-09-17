"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode, ElementType } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
}

export default function AnimatedText({
  text,
  className = "",
  as: Tag = "h1",
  delay = 0,
}: AnimatedTextProps) {
  const lines = text.split("\n");

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      <Tag className="flex flex-col">
        {lines.map((line, index) => (
          <span key={index} className="overflow-hidden">
            <motion.span variants={item} className="block">
              {line}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  );
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
