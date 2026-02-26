import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sentinel - AI-Powered GitHub Code Analysis & Reviewer",
  description:
    "Transform your development workflow with AI-assisted code navigation, natural language search, auto-generated documentation, and intelligent pull-request assistance. Connect your GitHub repos and start collaborating smarter with vector embeddings and machine learning.",
  keywords: [
    "AI code analysis",
    "GitHub integration",
    "code search",
    "natural language programming",
    "vector embeddings",
    "code documentation",
    "pull request assistant",
    "code collaboration",
    "machine learning",
    "developer tools",
    "code intelligence",
    "AI programming assistant",
    "codebase analysis",
    "automated documentation",
    "code review AI",
    "GitHub automation",
    "developer productivity",
    "code understanding",
    "semantic search",
    "AI-powered development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
