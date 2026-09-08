"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";
import { Terminal, Mail, ArrowUp, Sparkles, ChevronRight, Cpu } from "lucide-react";

export function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-200/80 dark:border-slate-800/80 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#eef2ff] dark:from-[#090d1a] dark:via-[#0e1324] dark:to-[#080b14] pt-14 pb-10 transition-colors duration-500 font-sans">
      {/* Ambient Aurora Glow Lights */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[300px] bg-gradient-to-tr from-indigo-500/15 via-purple-500/15 to-cyan-500/15 dark:from-indigo-600/20 dark:via-purple-600/20 dark:to-cyan-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Dot Grid Mask */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 dark:opacity-25 pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1 & 2 Span: Brand & Telemetry Console */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="#"
              className="group flex items-center gap-2.5 text-slate-900 dark:text-white font-black text-xl tracking-tight w-fit"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-200">
                <Terminal className="w-4 h-4" />
              </div>
              <span>
                Sumiran<span className="text-indigo-600 dark:text-indigo-400 font-mono">.dev</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md leading-relaxed font-normal">
              Senior Full-Stack & Cloud Systems Engineer dedicated to architecting resilient distributed microservices, high-throughput APIs, and polished web experiences.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-semibold backdrop-blur-md shadow-xs select-none">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>STATUS: AVAILABLE_FOR_ROLES & CONTRACTS</span>
            </div>
          </div>

          {/* Col 3: Navigation Index */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-indigo-500" />
              NAVIGATION // INDEX
            </h4>
            <ul className="space-y-2 font-sans font-medium text-slate-600 dark:text-slate-300">
              <li>
                <a
                  href="#about"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 transition-all duration-200 hover:translate-x-1"
                >
                  <ChevronRight className="w-3 h-3 text-indigo-500" /> About Me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 transition-all duration-200 hover:translate-x-1"
                >
                  <ChevronRight className="w-3 h-3 text-indigo-500" /> Skills Matrix
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 transition-all duration-200 hover:translate-x-1"
                >
                  <ChevronRight className="w-3 h-3 text-indigo-500" /> Featured Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 transition-all duration-200 hover:translate-x-1"
                >
                  <ChevronRight className="w-3 h-3 text-indigo-500" /> Career Journey
                </a>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 transition-all duration-200 hover:translate-x-1"
                >
                  <ChevronRight className="w-3 h-3 text-indigo-500" /> Web Resume
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 transition-all duration-200 hover:translate-x-1"
                >
                  <ChevronRight className="w-3 h-3 text-indigo-500" /> Direct Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Connect & Social Nodes */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              CONNECT // SOCIAL_NODES
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all cursor-pointer shadow-xs"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all cursor-pointer shadow-xs"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all cursor-pointer shadow-xs"
                aria-label="Twitter / X Profile"
                title="Twitter / X"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all cursor-pointer shadow-xs"
                aria-label="Direct Email"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-slate-500 dark:text-slate-400 pt-2 font-mono text-[11px]">
              LOCATION // {personal.location}
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright + Back to Top Button */}
        <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {personal.name}. Engineered with Next.js 16, TypeScript, Tailwind CSS v4 & Framer Motion.
          </p>

          <motion.button
            whileHover={{ y: -2 }}
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 transition-all cursor-pointer font-sans font-bold shadow-xs shrink-0"
            title="Scroll to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-indigo-500" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
