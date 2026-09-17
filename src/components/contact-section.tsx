"use client";

import * as React from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Copy,
  Check,
  Terminal,
  Sparkles,
  Cpu
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const { personal } = portfolioData;

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = React.useState<string>("");
  const [copied, setCopied] = React.useState(false);

  const validateForm = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please enter your name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Please enter a message of at least 10 characters.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setServerMessage("");

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setSubmitStatus("success");
      setServerMessage(data.message || "Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: "",
      });

      // Fire celebratory confetti!
      try {
        confetti({
          particleCount: 85,
          spread: 75,
          origin: { y: 0.7 },
        });
      } catch {
        // Safe fallback
      }
    } catch (err: unknown) {
      setSubmitStatus("error");
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or email directly.";
      setServerMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 sm:scroll-mt-32 py-20 sm:py-32 relative overflow-hidden bg-gradient-to-b from-[#eef2ff] via-[#f8fafc] to-[#f1f5f9] dark:from-[#080b14] dark:via-[#0c1020] dark:to-[#090d1a] transition-colors duration-500"
    >
      {/* Ambient Aurora Glow Lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-cyan-500/20 dark:from-indigo-600/20 dark:via-purple-600/25 dark:to-cyan-600/20 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Dot Grid Mask */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 dark:opacity-25 pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-2 mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold backdrop-blur-md shadow-xs select-none font-mono">
            <Mail className="w-3.5 h-3.5 text-indigo-500" />
            <span>TRANSMISSION_GATEWAY // DIRECT_COMMUNICATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Exceptional
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl font-normal">
            Have a project in mind, an engineering role, or a technical inquiry? Drop me a message and I&apos;ll respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Channels & Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-6 sm:p-8 shadow-xl space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-500" />
                  Contact Channels
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  Direct access for inquiries, architectural consulting, and full-time engineering discussions.
                </p>
              </div>

              {/* Direct Email Card */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/20">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">Direct Email</p>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate block"
                  >
                    {personal.email}
                  </a>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg border border-indigo-500/30 hover:bg-indigo-500/20 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer shrink-0"
                  title="Copy Email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/20">
                <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400">Primary Location</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {personal.location}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Open to global remote and hybrid engineering roles
                  </p>
                </div>
              </div>

              {/* Response Time SLA */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-300 px-1">
                <Clock className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Response SLA: <strong className="text-indigo-600 dark:text-indigo-400">under 24 hours</strong></span>
              </div>

              {/* Social Networks */}
              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 space-y-3">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                  SOCIAL_NETWORKS
                </p>
                <div className="flex items-center gap-2.5">
                  <a
                    href={personal.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-800/80 text-xs font-bold text-slate-800 dark:text-slate-200 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
                  >
                    <GithubIcon className="w-4 h-4" /> GitHub
                  </a>
                  <a
                    href={personal.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-800/80 text-xs font-bold text-slate-800 dark:text-slate-200 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4" /> LinkedIn
                  </a>
                  <a
                    href={personal.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-800/80 text-xs font-bold text-slate-800 dark:text-slate-200 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
                  >
                    <TwitterIcon className="w-4 h-4" /> X
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Terminal Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-[#0f1424] text-slate-200 shadow-xl overflow-hidden font-mono text-xs">
              {/* macOS Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 select-none gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="ml-1 sm:ml-2 text-slate-400 font-semibold text-[11px] flex items-center gap-1.5 truncate">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span className="hidden sm:inline">sumiran@dev:~/contact_gateway --dispatch</span>
                    <span className="sm:hidden">~/contact_gateway</span>
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-[10px] text-slate-400 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>READY_TO_DISPATCH</span>
                </div>
              </div>

              {/* Form Body */}
              <div className="p-6 sm:p-8 font-sans">
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Honeypot for spam bots */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) =>
                      setFormData({ ...formData, honeypot: e.target.value })
                    }
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Feedback Status Alert */}
                  {submitStatus === "success" && (
                    <div className="p-4 rounded-xl border border-emerald-500/40 bg-emerald-500/15 text-emerald-300 flex items-start gap-3 animate-in fade-in font-mono text-xs">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">Message Sent Successfully!</p>
                        <p className="mt-0.5">{serverMessage}</p>
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 rounded-xl border border-rose-500/40 bg-rose-500/15 text-rose-300 flex items-start gap-3 animate-in fade-in font-mono text-xs">
                      <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">Submission Failed</p>
                        <p className="mt-0.5">{serverMessage}</p>
                      </div>
                    </div>
                  )}

                  {/* Name & Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-slate-300 flex items-center justify-between">
                        <span>Your Name <span className="text-rose-400">*</span></span>
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        placeholder="John Doe"
                        className={cn(
                          "bg-slate-900/90 border-slate-800 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-xs rounded-xl",
                          errors.name && "border-rose-500 focus:border-rose-500"
                        )}
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <p className="text-[11px] font-mono text-rose-400">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-slate-300 flex items-center justify-between">
                        <span>Your Email <span className="text-rose-400">*</span></span>
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        placeholder="john@example.com"
                        className={cn(
                          "bg-slate-900/90 border-slate-800 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-xs rounded-xl",
                          errors.email && "border-rose-500 focus:border-rose-500"
                        )}
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <p className="text-[11px] font-mono text-rose-400">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-300">
                      Subject (Optional)
                    </label>
                    <Input
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Project Inquiry / Engineering Role / Architectural Discussion"
                      className="bg-slate-900/90 border-slate-800 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-xs rounded-xl"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-300 flex items-center justify-between">
                      <span>Message <span className="text-rose-400">*</span></span>
                    </label>
                    <Textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: "" });
                      }}
                      placeholder="Hi Sumiran, I'd like to discuss a project..."
                      className={cn(
                        "bg-slate-900/90 border-slate-800 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-xs rounded-xl resize-none",
                        errors.message && "border-rose-500 focus:border-rose-500"
                      )}
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p className="text-[11px] font-mono text-rose-400">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Action Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto min-w-[200px] gap-2 font-mono font-bold text-xs py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white shadow-lg shadow-indigo-500/30 cursor-pointer border-0 transition-all duration-200"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          DISPATCHING_MESSAGE...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          DISPATCH MESSAGE
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
