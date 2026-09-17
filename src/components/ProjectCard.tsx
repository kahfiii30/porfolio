"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    category: string;
    shortDescription: string;
    slug: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
      data-cursor-project="true"
    >
      <Link href={`/projects/${project.slug}`} className="block w-full">
        {/* Visual Container */}
        <div className="relative w-full aspect-video bg-surface overflow-hidden rounded-2xl mb-6">
          {'image' in project && project.image ? (
            <img src={project.image as string} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white/5 font-mono text-4xl sm:text-5xl md:text-9xl font-bold uppercase overflow-hidden whitespace-nowrap select-none text-center">
              {project.title.replace(/\n/g, " ")}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <motion.div 
            className="w-full h-full bg-accent/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500 mix-blend-overlay absolute inset-0 pointer-events-none"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 whitespace-pre-line group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-white/50 tracking-wider uppercase mb-4">
              {project.category}
            </p>
            <p className="text-white/80 max-w-xl text-lg leading-relaxed">
              {project.shortDescription}
            </p>
          </div>
          
          <div className="flex items-center gap-2 mt-4 md:mt-0 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
            <span>View Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
