"use client";

import * as React from "react";
import confetti from "canvas-confetti";
import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent } from "./ui/card";
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
  Check
} from "lucide-react";

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
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
        });
      } catch {
        // Safe fallback
      }
    } catch (err: unknown) {
      setSubmitStatus("error");
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again or email directly.";
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
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <Badge variant="default" className="gap-1.5 py-1 px-3 text-xs">
            <Mail className="w-3.5 h-3.5" /> Contact
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Let&apos;s Build Something Exceptional
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            Have a project in mind, an engineering role, or a technical inquiry? Drop me a message and I&apos;ll respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="border-border/70 shadow-sm">
              <CardContent className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    Contact Channels
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Direct access for inquiries, architectural consulting, and full-time engineering discussions.
                  </p>
                </div>

                {/* Email Info Card */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/40 border border-border/50">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground font-medium">Direct Email</p>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-sm font-semibold text-foreground hover:text-primary transition-colors truncate block"
                    >
                      {personal.email}
                    </a>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg border border-border/60 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                    title="Copy Email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Info Card */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/40 border border-border/50">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Location</p>
                    <p className="text-sm font-semibold text-foreground">
                      {personal.location}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Open to global remote and hybrid roles
                    </p>
                  </div>
                </div>

                {/* Response Time SLA */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground px-1">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span>Average response time: <strong>under 24 hours</strong></span>
                </div>

                {/* Social Networks */}
                <div className="pt-4 border-t border-border/50">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    Social Networks & Profiles
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={personal.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-xl border border-border/70 bg-secondary/40 text-xs font-semibold text-foreground hover:border-primary/50 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" /> GitHub
                    </a>
                    <a
                      href={personal.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-xl border border-border/70 bg-secondary/40 text-xs font-semibold text-foreground hover:border-primary/50 transition-colors"
                    >
                      <LinkedinIcon className="w-4 h-4" /> LinkedIn
                    </a>
                    <a
                      href={personal.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-xl border border-border/70 bg-secondary/40 text-xs font-semibold text-foreground hover:border-primary/50 transition-colors"
                    >
                      <TwitterIcon className="w-4 h-4" /> X
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Card className="border-border/70 shadow-lg">
              <CardContent className="p-6 sm:p-8">
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
                    <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-200 flex items-start gap-3 animate-in fade-in">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm">
                        <p className="font-bold">Message Sent Successfully!</p>
                        <p className="mt-0.5">{serverMessage}</p>
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-800 dark:text-rose-200 flex items-start gap-3 animate-in fade-in">
                      <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm">
                        <p className="font-bold">Submission Failed</p>
                        <p className="mt-0.5">{serverMessage}</p>
                      </div>
                    </div>
                  )}

                  {/* Name & Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        placeholder="John Doe"
                        className={errors.name ? "border-rose-500 focus-visible:ring-rose-500" : ""}
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-500 font-medium">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        placeholder="john@example.com"
                        className={errors.email ? "border-rose-500 focus-visible:ring-rose-500" : ""}
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-500 font-medium">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Subject (Optional)
                    </label>
                    <Input
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Project Inquiry / Job Opportunity / Architecture Discussion"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Message Area */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <Textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: "" });
                      }}
                      placeholder="Hi Sumiran, I'd like to discuss a project..."
                      className={errors.message ? "border-rose-500 focus-visible:ring-rose-500" : ""}
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-500 font-medium">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto min-w-[180px] gap-2 font-semibold shadow-indigo-500/20"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
