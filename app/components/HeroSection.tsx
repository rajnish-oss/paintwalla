"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Space_Mono,Cormorant } from "next/font/google";
import { Menu, PhoneCall, X } from "@deemlol/next-icons";
import Enquiry from "./Enquiry";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const cormorant = Cormorant({
  weight: ["400"],
  subsets: ["latin"],
});

const navItems = ["How It Works", "Our Work", "Services", "Calculator"];

type HeroSectionProps = {
  renderH1?: boolean;
};

const HeroSection: React.FC<HeroSectionProps> = ({ renderH1 = true }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  useEffect(() => {
    if (!isEnquiryOpen) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsEnquiryOpen(false);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [isEnquiryOpen]);

  return (
    <header className="relative isolate min-h-svh overflow-hidden bg-[#f6efe3] text-white bg-[url('/heroImg.jpg')] bg-cover">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_32%),radial-gradient(circle_at_top_right,rgba(255,214,140,0.28),transparent_28%),linear-gradient(135deg,rgba(52,28,12,0.25),rgba(30,41,59,0.2))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(14,17,23,0.28),rgba(14,17,23,0.45))]" />

      <div className="relative z-10 flex min-h-svh flex-col">
        

        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 text-white">
            <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/35 bg-white/12 shadow-lg shadow-black/15 backdrop-blur-md">
              <span className="text-lg font-semibold">P</span>
            </span>
            <span className="text-lg font-medium tracking-[0.28em] uppercase sm:text-xl">paintwalla</span>
          </Link>

          <div className={`${spaceMono.className} hidden items-center gap-8 lg:flex`}>
            {navItems.map((item) => (
              <a key={item} href="#" className="text-md font-medium tracking-[0.16em] text-white/82 transition hover:text-white">
                {item}
              </a>
            ))}
          </div>

          <div className={`${spaceMono.className} hidden items-center gap-3 sm:flex`}>
            <a
              href="tel:+919118033566"
              className="inline-flex items-center gap-4 rounded-full border border-white/65 bg-white/12 px-6 py-3 text-sm font-semibold tracking-[0.16em] text-white shadow-lg shadow-black/10 backdrop-blur-md transition hover:bg-white/18"
            >
             <PhoneCall className="h-5 w-5 text-white" strokeWidth={2} />
             <span>9118033566</span>
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 p-3 text-white shadow-lg shadow-black/10 backdrop-blur-md transition hover:bg-white/18 sm:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-5 w-5" strokeWidth={2} /> : <Menu className="h-5 w-5" strokeWidth={2} />}
          </button>
        </nav>

        <div
          className={`fixed inset-0 z-30 sm:hidden ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
          aria-hidden={!isMenuOpen}
        >
          <button
            type="button"
            aria-label="Close menu overlay"
            className={`absolute inset-0 bg-black/45 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
            onClick={() => setIsMenuOpen(false)}
          />

          <aside
            className={`${spaceMono.className} absolute right-0 top-0 h-full w-[82vw] max-w-sm border-l border-white/15 bg-[#0f172a]/95 px-5 py-6 shadow-2xl shadow-black/30 backdrop-blur-xl transition-transform duration-300 ease-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm font-semibold tracking-[0.2em] text-white/90 uppercase">Menu</span>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/16"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-2xl px-4 py-4 text-sm font-medium tracking-[0.16em] text-white/90 transition hover:bg-white/10 hover:text-white"
                >
                  {item}
                </a>
              ))}

              <a
                href="tel:+919118033566"
                onClick={() => setIsMenuOpen(false)}
                className="mt-3 inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-4 text-sm font-semibold tracking-[0.16em] text-white transition hover:bg-white/16"
              >
                <PhoneCall className="h-5 w-5" strokeWidth={2} />
                <span>9118033566</span>
              </a>
            </div>
          </aside>
        </div>

        <main className="mx-auto flex w-full max-w-6xl flex-1 items-center px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pb-16 ">
          <div className="flex flex-col w-full gap-2 lg:items-center justify-center">

              {renderH1 ? (
                <h1 className={`${cormorant.className} max-w-5xl flex text-center text-4xl leading-[1.05] tracking-tighter text-white drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)] sm:text-6xl lg:text-7xl`}>
                  Premium Home Painting Services — Interior & Exterior Painters
                </h1>
              ) : (
                <p className={`${cormorant.className} max-w-5xl flex text-center text-4xl leading-[1.05] tracking-tighter text-white drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)] sm:text-6xl lg:text-7xl`}>
                  Premium Home Painting Services — Interior & Exterior Painters
                </p>
              )}

              <p className={`${spaceMono.className} mt-6 max-w-2xl flex text-center text-base leading-8 text-white/86 sm:text-lg`}>
                Premium home painting for interior and exterior spaces — experienced painters, top-quality materials, and meticulous preparation to deliver long-lasting, beautiful finishes.
              </p>

              <div className={`${spaceMono.className} mt-8 flex flex-col gap-4 sm:flex-row sm:items-center`}>
                <a
                  href="#enquiry"
                  onClick={(event) => {
                    event.preventDefault();
                    setIsEnquiryOpen(true);
                  }}
                  className="inline-flex items-center justify-center rounded-full bg-[#d8b56c] px-8 py-4 text-sm font-semibold tracking-[0.18em] text-white uppercase shadow-[0_14px_30px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:bg-[#e1bf75]"
                >
                  Book a quotation
                </a>

                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/8 px-8 py-4 text-sm font-semibold tracking-[0.18em] text-white/92 uppercase backdrop-blur-md transition hover:bg-white/14"
                >
                  See Examples
                </Link>
              </div>
          </div>
        </main>

        {isEnquiryOpen && (
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/60 px-4 py-6 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl overflow-hidden rounded-4xl bg-transparent shadow-2xl">
              <button
                type="button"
                onClick={() => setIsEnquiryOpen(false)}
                className="absolute right-4 top-4 z-10 inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-lg transition hover:bg-slate-50"
                aria-label="Close enquiry form"
              >
                <X className="h-5 w-5" strokeWidth={2} />
              </button>
              <Enquiry embedded />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeroSection;
