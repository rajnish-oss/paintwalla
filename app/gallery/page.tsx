import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import QuotationModalButton from "../components/QuotationModalButton";

export const metadata: Metadata = {
	title: "Gallery | Paintwalla",
	description:
		"Browse Paintwalla's past painting, texture, POP, and waterproofing work in one curated gallery.",
};


const paintwalaSrc = (fileName: string) => `/paintwala/${encodeURIComponent(fileName)}`;

const galleryPhotos = [
	"exterior_paint.jpg",
	"gettyimages-1386471399-612x612.jpg",
	"IMG-20260607-WA0000.jpg",
	"IMG-20260607-WA0001.jpg",
	"IMG-20260607-WA0002.jpg",
	"IMG-20260607-WA0003.jpg",
	"IMG-20260607-WA0004.jpg",
	"IMG-20260607-WA0005.jpg",
	"IMG-20260607-WA0006.jpg",
	"IMG-20260607-WA0007.jpg",
	"IMG-20260607-WA0008.jpg",
	"IMG-20260607-WA0009.jpg",
	"IMG-20260607-WA0010.jpg",
	"IMG-20260607-WA0011.jpg",
	"IMG-20260607-WA0012.jpg",
	"IMG-20260607-WA0013.jpg",
	"IMG-20260607-WA0014.jpg",
	"IMG-20260607-WA0015.jpg",
	"IMG-20260607-WA0016.jpg",
	"IMG-20260607-WA0017.jpg",
	"IMG-20260607-WA0018.jpg",
	"IMG-20260607-WA0019.jpg",
	"IMG-20260607-WA0020.jpg",
	"IMG-20260607-WA0021.jpg",
	"IMG-20260607-WA0022.jpg",
	"IMG-20260607-WA0023.jpg",
	"IMG-20260607-WA0024.jpg",
	"IMG-20260607-WA0025.jpg",
	"IMG-20260607-WA0026.jpg",
	"IMG-20260607-WA0027.jpg",
	"IMG-20260607-WA0028.jpg",
	"IMG-20260607-WA0029.jpg",
	"WhatsApp Image 2026-05-23 at 12.43.37 PM.jpeg",
	"WhatsApp Image 2026-05-23 at 12.43.37 PM (2).jpeg",
];

export default function GalleryPage() {
	return (
		<main className="bg-[#f6efe3] text-slate-950">
			<section className="relative isolate overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
				<div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.72),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(216,181,108,0.18),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.4),rgba(255,255,255,0.08))]" />

				<div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
					<div className="mx-auto max-w-3xl text-center">
						<p className="text-sm font-semibold uppercase tracking-[0.42em] text-slate-500">
							Past Work Gallery
						</p>
						<h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
							See the finishes we have delivered
						</h1>
						<p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
							A curated view of recent painting and finishing projects, with before-and-after snapshots that show the difference clearly.
						</p>
					</div>

					<div>
						<div className="mt-8 columns-1 gap-4 sm:columns-2 xl:columns-3">
							{galleryPhotos.map((fileName, index) => (
								<div
									key={fileName}
									className="mb-4 break-inside-avoid overflow-hidden rounded-3xl border border-white/70 bg-white/75 shadow-[0_18px_50px_rgba(15,23,42,0.10)]"
								>
									<div className="relative aspect-4/3">
										<Image
											src={paintwalaSrc(fileName)}
											alt={`Paintwalla gallery image ${index + 1}: ${fileName}`}
											fill
											sizes="(max-width: 768px) 100vw, 33vw"
											className="object-contain bg-black"
										/>
									</div>
								</div>
							))}
						</div>
					</div>

						<div className="grid gap-4 rounded-4xl border border-white/70 bg-slate-950 px-6 py-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.42em] text-white/60">Next Step</p>
							<h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
								Want a finish like this for your home?
							</h2>
							<p className="mt-3 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
								Book a quotation and we will help you plan the right paint system, preparation level, and finish style.
							</p>
						</div>
						<div className="flex flex-col gap-3 sm:flex-row">
							<QuotationModalButton
								className="inline-flex items-center justify-center rounded-full bg-[#d8b56c] px-6 py-3 text-sm font-semibold tracking-[0.16em] text-white uppercase transition hover:bg-[#e1bf75]"
							>
								Book a quotation
							</QuotationModalButton>
							<Link
								href="/"
								className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/8 px-6 py-3 text-sm font-semibold tracking-[0.16em] text-white uppercase transition hover:bg-white/14"
							>
								Back home
							</Link>
						</div>
					</div>

				</div>
			</section>
		</main>
	);
}
