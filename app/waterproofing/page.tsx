"use client";

import Link from "next/link";
import { Cormorant, Space_Mono } from "next/font/google";
import { Menu, MapPin, ShieldCheck, Palette, UserCheck, CheckCircle2 } from "lucide-react";
import Enquiry from "../components/Enquiry";
import { googleSearchUrl } from "../../lib/utils";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const cormorant = Cormorant({
  weight: ["400"],
  subsets: ["latin"],
});

export default function WaterproofingPage() {
  return (
    <div className="min-h-screen bg-[#eef5f7] text-slate-800">
      <nav className="sticky top-0 z-50 border-b border-white/40 bg-white/70 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button className="rounded-lg p-2 hover:bg-black/5 lg:hidden">
              <Menu className="h-6 w-6 text-slate-700" />
            </button>
            <Link href="/" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/60 bg-[#75b8d1]/15 text-lg font-semibold text-[#3f6d84] shadow-sm">
                P
              </span>
              <span className={`${spaceMono.className} text-lg font-medium tracking-[0.28em] uppercase text-slate-900 sm:text-xl`}>
                paintwalla
              </span>
            </Link>
          </div>

          <div className={`${spaceMono.className} hidden items-center gap-8 text-xs font-medium tracking-[0.16em] text-slate-600 lg:flex`}>
            <Link href="/waterproofing" className="border-b-2 border-[#75b8d1] pb-5 pt-5 text-slate-900">
              WATERPROOFING
            </Link>
            <Link href="/interior-painting" className="transition-colors hover:text-slate-900">
              INTERIOR PAINTING
            </Link>
            <Link href="/exterior-painting" className="transition-colors hover:text-slate-900">
              EXTERIOR PAINTING
            </Link>
            <Link href="/wood-polish" className="transition-colors hover:text-slate-900">
              WOOD POLISHING
            </Link>
            <Link href="/pop" className="transition-colors hover:text-slate-900">
              POP
            </Link>
          </div>

          <button className="rounded-full bg-[#75b8d1] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-black/10 transition-all hover:bg-[#61a6c1]">
            Book Now
          </button>
        </div>
      </nav>

      <header className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.72),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(117,184,209,0.22),transparent_36%),linear-gradient(180deg,#eef5f7,#f7fbfc)] text-slate-900">
        <div className="absolute inset-0 bg-[url('/water_service.jpg')] bg-cover bg-center opacity-[0.10] mix-blend-multiply" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.76),rgba(238,245,247,0.9))]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
          <div className="space-y-8 lg:col-span-7">
            <div className="space-y-4">
              <span className={`${spaceMono.className} inline-block rounded-full border border-[#75b8d1]/30 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#3f6d84] shadow-sm backdrop-blur-md`}>
                Moisture Defense Solutions
              </span>
              <h1 className={`${cormorant.className} text-5xl font-normal leading-[0.95] tracking-tighter text-slate-950 sm:text-6xl lg:text-8xl`}>
                Professional <br />
                <span className="text-[#3f6d84]">Waterproofing</span>
              </h1>
              <p className={`${spaceMono.className} max-w-xl text-base leading-8 text-slate-700 sm:text-lg`}>
                Protect terraces, walls, and wet areas with coatings designed to block seepage, resist moisture, and extend surface life.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
              {[
                { label: "Projects", value: "8,750+" },
                { label: "Service Rating", value: "4.9 ★" },
                { label: "Leak Shield", value: "Top Grade" },
                { label: "Site Check", value: "Free" },
              ].map((metric, idx) => (
                <div key={idx} className="rounded-3xl border border-white/60 bg-white/70 p-4 text-center shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl">
                  <p className="mb-1 text-2xl font-extrabold text-slate-950 sm:text-3xl">{metric.value}</p>
                  <p className={`${spaceMono.className} text-xs font-semibold uppercase tracking-[0.2em] text-slate-500`}>{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Enquiry embedded />
          </div>
        </div>
      </header>

      <section className="border-b border-white/50 bg-white/70 py-10 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { icon: <Palette className="h-6 w-6 text-[#75b8d1]" />, title: "Seepage Control", desc: "Stops water from entering walls" },
            { icon: <Palette className="h-6 w-6 text-[#3f6d84]" />, title: "Crack Bridging", desc: "Flexible systems for surface cracks" },
            { icon: <UserCheck className="h-6 w-6 text-emerald-600" />, title: "Expert Team", desc: "Skilled on roofs and terraces" },
            { icon: <ShieldCheck className="h-6 w-6 text-blue-600" />, title: "Long-Term Safety", desc: "Trusted protective materials" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col gap-3 p-2 text-center sm:flex-row sm:items-start sm:text-left">
              <div className="shrink-0 rounded-2xl border border-white/60 bg-white/80 p-3 shadow-sm">{item.icon}</div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 sm:text-base">{item.title}</h4>
                <p className="text-xs font-medium text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl space-y-2">
            <h2 className={`${cormorant.className} text-4xl font-normal tracking-tight text-slate-950 sm:text-5xl`}>Waterproofing Solutions</h2>
            <p className="font-medium text-slate-500">Designed for bathrooms, terraces, exterior walls, and other moisture-prone areas.</p>
          </div>
          <a
            href={googleSearchUrl("waterproofing solutions")}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-1 self-start whitespace-nowrap font-semibold text-[#3f6d84] hover:text-[#2e5364] md:self-auto"
          >
            View More Solutions <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {[
            { title: "Terrace Protection", desc: "A strong outer layer to defend exposed roofs and terraces.", img: "/t1.webp" },
            { title: "Wall Seepage Fix", desc: "Targeted treatment for damp walls and recurring leak zones.", img: "/water_service.jpg" },
          ].map((design, idx) => (
            <div key={idx} className="group cursor-pointer overflow-hidden rounded-4xl border border-white/60 bg-white/80 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img src={design.img} alt={design.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold text-slate-900">{design.title}</h3>
                <p className="text-sm font-medium text-slate-500">{design.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#151515] py-16 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(117,184,209,0.2),transparent_32%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl space-y-3 text-center">
            <h2 className={`${cormorant.className} text-4xl font-normal tracking-tight sm:text-5xl`}>Trusted Waterproofing Systems</h2>
            <p className="font-medium text-slate-400">Materials chosen for durability, adhesion, and resistance to water penetration.</p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {[
              { name: "Dr. Fixit", brand: "Pidilite", finish: "Roof Shield" },
              { name: "Aqua Seal", brand: "Asian Paints", finish: "Wall Guard" },
              { name: "Raincoat", brand: "Berger", finish: "Flexible Coat" },
              { name: "Smart Care", brand: "Nerolac", finish: "PU Membrane" },
            ].map((paint, idx) => (
              <div key={idx} className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10">
                <div>
                  <div className="mb-4 h-8 w-8 rounded-full bg-linear-to-tr from-[#75b8d1] to-[#3f6d84] shadow-inner" />
                  <h4 className="mb-0.5 text-lg font-bold text-white">{paint.name}</h4>
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#75b8d1]">{paint.brand}</p>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-3 text-xs font-medium text-slate-400">
                  <span>
                    Finish: <strong>{paint.finish}</strong>
                  </span>
                  <a
                    href={googleSearchUrl(`${paint.name} ${paint.brand} waterproofing price`)}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-white hover:underline"
                  >
                    View Price
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <article className="border-t border-white/50 bg-white/70 py-16 sm:py-24 backdrop-blur-xl">
        <div className="mx-auto max-w-4xl space-y-12 px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <h2 className={`${cormorant.className} text-4xl font-normal tracking-tight text-slate-950 sm:text-5xl`}>What is Waterproofing?</h2>
            <p className="font-medium leading-relaxed text-slate-600">
              Waterproofing is the process of sealing and protecting vulnerable surfaces against moisture, seepage, and water damage. paintwalla uses proven coatings and application methods to strengthen the durability of roofs, bathrooms, terraces, and walls.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className={`${cormorant.className} text-3xl font-normal tracking-tight text-slate-950 sm:text-4xl`}>Benefits of Professional Execution</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { title: "Stops Seepage", desc: "Helps prevent damp marks and recurring leak problems." },
                { title: "Protects Structure", desc: "Reduces moisture damage to walls and concrete surfaces." },
                { title: "Improves Longevity", desc: "Extends the life of exposed building areas." },
                { title: "Reduces Repairs", desc: "Less water damage means fewer costly fixes later." },
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-3 rounded-2xl border border-white/60 bg-white/80 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <div>
                    <h4 className="mb-1 text-sm font-bold text-slate-900 sm:text-base">{benefit.title}</h4>
                    <p className="text-xs font-medium leading-relaxed text-slate-500 sm:text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      <footer className="border-t border-slate-900 bg-slate-950 py-12 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-sm font-medium sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black text-[#75b8d1]">paintwalla</span>
          </div>
          <p>© 2026 paintwalla Service Engine. All residential design properties reserved.</p>
        </div>
      </footer>
    </div>
  );
}