"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Menu, X, FileText, ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Reviews", href: "/#feedback" },
  { label: "Focus", href: "/#focus" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");
  const [hoveredNav, setHoveredNav] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.replace(/^\/?#/, ""));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto pt-3 sm:pt-4">
        <div
          className={cn(
            "pointer-events-auto transition-all duration-500 rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between",
            isScrolled
              ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-200/90 dark:border-slate-800/90 shadow-xl shadow-indigo-500/10 dark:shadow-indigo-500/20"
              : "bg-white/40 dark:bg-slate-950/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 shadow-sm"
          )}
        >
          {/* Brand Logo */}
          <Link
            href="#"
            className="group flex items-center gap-2.5 text-foreground font-bold tracking-tight text-lg"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/30 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 font-mono text-xs font-bold">
              {"</>"}
            </div>
            <span className="font-extrabold text-slate-900 dark:text-white tracking-tight text-lg">
              <span>Sumiran</span>
              <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent font-mono text-base">.dev</span>
            </span>
          </Link>

          {/* Desktop Nav Items with Framer Motion Sliding Pill */}
          <nav
            onMouseLeave={() => setHoveredNav(null)}
            className="hidden md:flex items-center gap-1 bg-slate-100/60 dark:bg-slate-800/50 p-1 rounded-full border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-md"
          >
            {NAV_ITEMS.map((item) => {
              const targetId = item.href.replace(/^\/?#/, "");
              const isActive = activeSection === targetId;
              const isHovered = hoveredNav === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setHoveredNav(item.href)}
                  className={cn(
                    "relative px-4 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200",
                    isActive || isHovered
                      ? "text-slate-900 dark:text-white font-bold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  )}
                >
                  {(isHovered || (isActive && !hoveredNav)) && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white dark:bg-slate-700/80 rounded-full shadow-xs border border-slate-200/80 dark:border-slate-600/80 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link href="/resume">
              <button className="relative px-5 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-1.5 border border-indigo-400/30">
                <Sparkles className="w-3.5 h-3.5 text-indigo-200 animate-pulse" />
                <span>Resume</span>
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger Controls */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-slate-300/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-foreground hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-indigo-500" /> : <Menu className="w-5 h-5 text-indigo-500" />}
            </button>
          </div>
        </div>

        {/* Mobile Animated Glass Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="pointer-events-auto md:hidden mt-2 border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl rounded-2xl px-4 py-5 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col space-y-1.5">
                {NAV_ITEMS.map((item) => {
                  const targetId = item.href.replace(/^\/?#/, "");
                  const isActive = activeSection === targetId;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "px-4 py-2.5 rounded-xl text-sm font-semibold transition-all",
                        isActive
                          ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold border border-indigo-500/20"
                          : "text-slate-600 dark:text-slate-300 hover:text-foreground hover:bg-slate-100 dark:hover:bg-slate-900"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <div className="pt-3 mt-2 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col gap-2">
                  <Link
                    href="/resume"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full justify-center gap-2 rounded-xl font-semibold">
                      <FileText className="w-4 h-4 text-indigo-500" />
                      <span>View Resume</span>
                    </Button>
                  </Link>
                  <a href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold">
                      <span>Get in Touch</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
