"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar({ currentLocale = "en" }: { currentLocale?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const switchLanguage = (lang: string) => {
    document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000`;
    router.refresh();
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Left */}
          <Link href="/" className="text-xl font-medium tracking-tight relative z-[60]" onClick={() => setIsOpen(false)}>
            KAHFI.
          </Link>

          {/* Center / Right Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/#work" className="hover:text-accent transition-colors">
              Work
            </Link>
            <Link href="/#about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/#experience" className="hover:text-accent transition-colors">
              Experience
            </Link>
            <Link href="/#lab" className="hover:text-accent transition-colors">
              Lab
            </Link>
            
            {/* Language Switcher Desktop */}
            <div className="flex items-center gap-2 border border-white/20 rounded-full px-3 py-1 bg-white/5">
              <button 
                onClick={() => switchLanguage("en")}
                className={`transition-colors ${currentLocale === "en" ? "text-accent font-bold" : "text-white/50 hover:text-white"}`}
              >
                EN
              </button>
              <span className="text-white/20 text-xs">|</span>
              <button 
                onClick={() => switchLanguage("id")}
                className={`transition-colors ${currentLocale === "id" ? "text-accent font-bold" : "text-white/50 hover:text-white"}`}
              >
                ID
              </button>
            </div>

            <Link
              href="/#contact"
              className="px-5 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
            >
              Let's Talk
            </Link>
          </nav>

          {/* Mobile Right Side (Lang + Menu) */}
          <div className="md:hidden flex items-center gap-4 relative z-[60]">
            {/* Language Switcher Mobile */}
            <div className="flex items-center gap-2 text-xs font-medium">
              <button 
                onClick={() => switchLanguage("en")}
                className={`transition-colors ${currentLocale === "en" ? "text-accent font-bold" : "text-white/50"}`}
              >
                EN
              </button>
              <span className="text-white/20">|</span>
              <button 
                onClick={() => switchLanguage("id")}
                className={`transition-colors ${currentLocale === "id" ? "text-accent font-bold" : "text-white/50"}`}
              >
                ID
              </button>
            </div>

            <button 
              onClick={toggleMenu}
              className="p-2 text-white hover:text-accent transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center pt-20"
      >
        <nav className="flex flex-col items-center gap-8 text-2xl font-bold tracking-tight">
          <Link href="/#work" onClick={toggleMenu} className="hover:text-accent transition-colors">
            Work
          </Link>
          <Link href="/#about" onClick={toggleMenu} className="hover:text-accent transition-colors">
            About
          </Link>
          <Link href="/#experience" onClick={toggleMenu} className="hover:text-accent transition-colors">
            Experience
          </Link>
          <Link href="/#lab" onClick={toggleMenu} className="hover:text-accent transition-colors">
            Lab
          </Link>
          <Link
            href="/#contact"
            onClick={toggleMenu}
            className="mt-4 px-8 py-3 rounded-full bg-white text-black text-lg hover:bg-gray-200 transition-colors"
          >
            Let's Talk
          </Link>
        </nav>
      </motion.div>
    </>
  );
}
