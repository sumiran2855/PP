"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData, Testimonial } from "@/data/portfolio-data";
import { Scroll3DWrapper } from "./ui/scroll-3d-wrapper";
import {
  Star,
  Quote,
  Sparkles,
  MessageSquare,
  ShieldCheck,
  Calendar
} from "lucide-react";

function Feedback3DCard({
  item,
  index,
}: {
  item: Testimonial;
  index: number;
}) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = React.useState(0);
  const [rotateY, setRotateY] = React.useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = ((mouseY - height / 2) / height) * -7;
    const rY = ((mouseX - width / 2) / width) * 7;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const rating = item.rating || 5;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="perspective-1000 h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
        className="group relative h-full flex flex-col justify-between p-7 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl shadow-xl hover:shadow-2xl hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 overflow-hidden space-y-6"
      >
        {/* Subtle Ambient Hover Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

        {/* Ambient Decorative Quote Icon */}
        <Quote className="w-14 h-14 text-indigo-500/10 dark:text-indigo-400/10 absolute top-4 right-5 pointer-events-none" />

        <div className="space-y-4 relative z-10">
          {/* Top Bar: Rating Stars & Verified Client Pill */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            {/* 5-Star Rating */}
            <div className="flex items-center gap-1">
              {Array.from({ length: rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-amber-400 fill-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]"
                />
              ))}
              <span className="ml-1.5 text-xs font-mono font-bold text-slate-800 dark:text-slate-200">
                5.0
              </span>
            </div>

            {/* Verified Collaboration Badge */}
            {item.verified && (
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Verified Client</span>
              </span>
            )}
          </div>

          {/* Project Tag (if specified) */}
          {item.project && (
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 dark:bg-indigo-950/40 px-3 py-1 rounded-xl border border-indigo-500/20 max-w-full truncate">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate font-medium">Project: {item.project}</span>
            </div>
          )}

          {/* Testimonial Quote Content */}
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed italic font-normal">
            &ldquo;{item.content}&rdquo;
          </p>
        </div>

        {/* Footer: Client Info */}
        <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between gap-3 relative z-10">
          <div className="flex items-center gap-3.5">
            {item.avatarUrl ? (
              <Image
                src={item.avatarUrl}
                alt={item.name}
                width={44}
                height={44}
                unoptimized
                className="w-11 h-11 rounded-full object-cover border-2 border-indigo-500/40 shadow-sm shrink-0"
              />
            ) : (
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center font-bold text-white text-xs shrink-0 shadow-md font-mono">
                {item.name.slice(0, 2).toUpperCase()}
              </div>
            )}

            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {item.name}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {item.role} •{" "}
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                  {item.company}
                </span>
              </p>
            </div>
          </div>

          {item.date && (
            <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 flex items-center gap-1 shrink-0">
              <Calendar className="w-3 h-3" />
              {item.date}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function CustomerFeedbackSection() {
  const { testimonials } = portfolioData;

  return (
    <section
      id="feedback"
      className="scroll-mt-28 sm:scroll-mt-32 py-20 sm:py-32 relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#eef2ff] dark:from-[#090d1a] dark:via-[#0e1324] dark:to-[#080b14] transition-colors duration-500"
    >
      {/* Ambient Aurora Glow Lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-purple-500/20 via-indigo-500/20 to-cyan-500/20 dark:from-purple-600/20 dark:via-indigo-600/25 dark:to-cyan-600/20 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Dot Grid Mask */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 dark:opacity-25 pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-2 mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold backdrop-blur-md shadow-xs select-none font-mono">
            <MessageSquare className="w-3.5 h-3.5 text-indigo-500" />
            <span>VERIFIED_FEEDBACK // CLIENT_REVIEWS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Customer Feedback &{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Client Endorsements
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl font-normal">
            Direct testimonials from founders, engineering directors, and product leaders I&apos;ve collaborated with.
          </p>
        </motion.div>

        {/* 3D TESTIMONIALS GRID WITH SCROLL PERSPECTIVE */}
        <Scroll3DWrapper intensity={4} depth={20}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((item, idx) => (
              <Feedback3DCard key={idx} item={item} index={idx} />
            ))}
          </div>
        </Scroll3DWrapper>

        {/* Bottom Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-6 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                100% Client Satisfaction & On-Time Delivery Track Record
              </h4>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-normal">
              High-velocity communication, clear architectural milestones, and strict test coverage.
            </p>
          </div>

          <Link href="/#contact">
            <button className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all shadow-md cursor-pointer hover:scale-105 whitespace-nowrap">
              Start a Project Together
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
