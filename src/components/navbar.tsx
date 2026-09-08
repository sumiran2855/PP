"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Focus", href: "#focus" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/70 py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#"
          className="group flex items-center gap-2.5 text-foreground font-bold tracking-tight text-lg"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform font-mono text-xs font-bold">
            &lt;/&gt;
          </div>
          <span className="font-extrabold text-foreground tracking-tight text-lg">
            Sumiran<span className="text-primary font-mono text-base">.dev</span>
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "transition-colors duration-200 hover:text-foreground",
                  isActive ? "text-foreground font-semibold" : "text-muted-foreground"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA / Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link href="/resume">
            <button className="px-6 py-2 rounded-full text-sm font-semibold text-white bg-[#1a1c3b] dark:bg-[#2e3160] hover:bg-[#252854] dark:hover:bg-[#3b3f7a] shadow-lg shadow-indigo-950/20 hover:shadow-indigo-950/30 active:scale-95 transition-all duration-200 cursor-pointer">
              Resume
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-border/60 bg-secondary/50 text-foreground hover:bg-secondary transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border/60 bg-background/95 backdrop-blur-2xl px-4 py-5 animate-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                  activeSection === item.href.substring(1)
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                )}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-border/50 flex flex-col gap-2">
              <Link
                href="/resume"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full"
              >
                <Button variant="outline" className="w-full justify-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  View Resume
                </Button>
              </Link>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full justify-center gap-2">
                  Get in Touch
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
