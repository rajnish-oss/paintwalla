"use client";

import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "../../components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../../components/ui/carousel";

const projects = [
	{
		title: "Rudra Ratnam",
		description:
			"A balanced interior makeover with smooth color transitions, calm tones, and a clean premium finish that makes the living space feel brighter and more refined.",
		images: [
			{ src: "/before1.jpeg", alt: "Painted living room interior" },
			{ src: "/after1.jpeg", alt: "Decorative texture wall finish" },
		],
	},
	{
		title: "Haweliya Ashapur",
		description:
			"A fresh exterior treatment with weather-ready paint, sharp edges, and a polished curb appeal that makes the whole property feel newly defined.",
		images: [
			{ src: "/before2.jpeg", alt: "Fresh exterior paint project" },
			{ src: "/after2.jpeg", alt: "Waterproof exterior protection" },
		],
	},
	{
		title: "Rudra Hight",
		description:
			"A focused finishing project that combines POP detailing and wood polish accents to bring depth, structure, and a more elegant final look.",
		images: [
			{ src: "/before3.jpeg", alt: "POP ceiling finish" },
			{ src: "/after3.jpeg", alt: "Polished wood detail" },
		],
	},
];

function Work() {
	return (
		<section className="relative isolate overflow-hidden bg-transparent px-4 py-16 text-slate-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
			<div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.65),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(216,181,108,0.15),transparent_26%)]" />

			<div className="mx-auto w-full max-w-7xl">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
						Our Work
					</h2>
					<p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
						Explore three featured projects, each with 100% customer satisfaction.
					</p>
				</div>

				<div className="mt-12 space-y-8 lg:mt-16 lg:space-y-10">
					{projects.map((project, index) => {
						const reverseLayout = index % 2 === 1;

						return (
							<div
								key={project.title}
								className={`grid items-center gap-8 rounded-[2rem] border border-white/60 bg-white/35 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.10)] backdrop-blur-2xl lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:p-5 ${reverseLayout ? "lg:[direction:rtl]" : ""}`}
							>
								<div className={`relative ${reverseLayout ? "lg:[direction:ltr]" : ""}`}>
									<div className="pointer-events-none absolute -inset-5 rounded-4xl bg-white/20 blur-3xl" />
									<Carousel className="relative overflow-hidden rounded-4xl border border-white/70 bg-white/30 p-3 shadow-[0_24px_80px_rgba(15,23,42,0.14)] backdrop-blur-2xl">
										<CarouselContent className="-ml-4">
											{project.images.map((image, imageIndex) => (
												<CarouselItem key={image.src} className="pl-4 md:basis-4/5">
													<Card className="overflow-hidden border-white/55 bg-[linear-gradient(to_top,rgb(3, 4, 7),rgb(3, 6, 15))]">
														<CardContent className="relative aspect-4/3 p-0">
															<Image
																src={image.src}
																alt={image.alt}
																fill
																className="object-contain bg-black"
																sizes="(max-width: 768px) 100vw, 50vw"
																priority={index === 0 && imageIndex === 0}
															/>
															<div className="absolute inset-0 " />
															<div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white">
																<div>
																	<p className="text-md font-semibold uppercase tracking-[0.35em] text-white/75">
																		{imageIndex === 0 ? "Before" : "After"}
																	</p>
																	<h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
																		{project.title}
																	</h3>
																</div>
																<span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] backdrop-blur-md">
																	0{imageIndex + 1}
																</span>
															</div>
														</CardContent>
													</Card>
												</CarouselItem>
											))}
										</CarouselContent>

										<CarouselPrevious />
										<CarouselNext />
									</Carousel>
								</div>

								<div className={`relative rounded-4xl border border-white/60 bg-white/72 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:p-10 lg:p-12 ${reverseLayout ? "lg:[direction:ltr]" : ""}`}>
									<p className="text-sm font-semibold uppercase tracking-[0.42em] text-slate-500">
										Project
									</p>
									<h3 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
										{project.title}
									</h3>
									<p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
										{project.description}
									</p>
									<div className="mt-8 grid gap-4 sm:grid-cols-2">
										<div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4">
											<p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">Service Mix</p>
											<p className="mt-2 text-sm font-medium text-slate-900">
												Interior, exterior, and finish detail
											</p>
										</div>
										<div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4">
											<p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">Result</p>
											<p className="mt-2 text-sm font-medium text-slate-900">
												Clean, premium, and lasting
											</p>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				<div className="mt-12 flex justify-center lg:mt-16">
					<Link
						href="/gallery"
						className="inline-flex items-center justify-center rounded-full bg-[#d8b56c] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_14px_30px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5 hover:bg-[#e1bf75] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8b56c]"
					>
						View Gallery
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Work;
