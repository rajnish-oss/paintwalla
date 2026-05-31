import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import WhatsAppButton from "./components/WhatsAppButton";
import { useEffect } from "react";
const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paintwalla — Premium Home Painting Services | Interior & Exterior Painters",
  description: "Explore Paintwalla's interior paint, exterior paint, wood polish, texture, waterproofing, and POP services.",
  icons: {
    icon: [
      { url: "/i16.png", sizes: "16x16", type: "image/png" },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Load non-critical styles asynchronously to avoid render-blocking CSS
    // These imports create async CSS chunks and are executed on the client only.
    const load = async () => {
      // @ts-ignore - CSS-only package import
      await import("tw-animate-css");
      // @ts-ignore - CSS-only package import
      await import("shadcn/tailwind.css");
    };
    void load();
  }, []);
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
