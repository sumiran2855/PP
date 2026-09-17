"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface Scroll3DWrapperProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  tiltDirection?: "normal" | "reverse";
  depth?: number;
  enableScale?: boolean;
}

export function Scroll3DWrapper({
  children,
  className,
  intensity = 5,
  tiltDirection = "normal",
  depth = 30,
  enableScale = true,
}: Scroll3DWrapperProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const sign = tiltDirection === "normal" ? 1 : -1;

  // Subtle 3D tilt on scroll: starts slightly tilted, levels out in center, tilts slightly as it exits
  const rotateX = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [intensity * sign, 0, -intensity * sign]
  );

  const y = useTransform(smoothProgress, [0, 0.5, 1], [depth, 0, -depth]);

  const scale = useTransform(
    smoothProgress,
    [0, 0.2, 0.8, 1],
    enableScale ? [0.97, 1, 1, 0.98] : [1, 1, 1, 1]
  );

  const opacity = useTransform(smoothProgress, [0, 0.15, 0.85, 1], [0.75, 1, 1, 0.85]);

  return (
    <div ref={ref} className="perspective-1000">
      <motion.div
        style={{
          rotateX,
          y,
          scale,
          opacity,
          transformStyle: "preserve-3d",
        }}
        className={cn("will-change-transform", className)}
      >
        {children}
      </motion.div>
    </div>
  );
}

// 3D Parallax floating decorative element for backgrounds
export function Parallax3DOrb({
  className,
  speed = 40,
  direction = "down",
}: {
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const factor = direction === "down" ? 1 : -1;
  const y = useTransform(scrollYProgress, [0, 1], [-speed * factor, speed * factor]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90 * factor]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate }}
      className={cn("pointer-events-none absolute -z-10 blur-2xl opacity-30 dark:opacity-20", className)}
    />
  );
}

