import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Sumiran | Senior Full-Stack & Cloud Systems Engineer",
  description:
    "Personal portfolio of Sumiran, Senior Full-Stack & Cloud Systems Engineer specializing in Next.js, Node.js, Go, Kubernetes, and distributed systems.",
  keywords: [
    "Sumiran",
    "Full Stack Engineer",
    "Software Engineer Portfolio",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "Distributed Systems",
    "Kubernetes",
    "Cloud Architect"
  ],
  authors: [{ name: "Sumiran" }],
  openGraph: {
    title: "Sumiran | Senior Full-Stack & Cloud Systems Engineer",
    description:
      "Architecting scalable cloud backends and high-performance, polished web applications.",
    url: "https://sumiran.dev",
    siteName: "Sumiran Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
