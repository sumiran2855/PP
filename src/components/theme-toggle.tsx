"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  // React 19 idiomatic mounted check without cascading effect render
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200/60 dark:border-slate-800/60 bg-slate-100/40 dark:bg-slate-900/40" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-300/80 dark:border-slate-700/80 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-xs hover:shadow-md hover:shadow-indigo-500/20 hover:border-indigo-500/50 dark:hover:border-indigo-400/50 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden group"
      aria-label="Toggle theme"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Background Glow Aura */}
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/0 via-indigo-500/0 to-cyan-400/0 group-hover:from-amber-400/10 group-hover:to-indigo-500/20 transition-all duration-500 rounded-full" />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ y: -14, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 14, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
          className="relative z-10 flex items-center justify-center"
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]" />
          ) : (
            <Moon className="w-4 h-4 text-indigo-600 drop-shadow-[0_0_6px_rgba(79,70,229,0.4)]" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
