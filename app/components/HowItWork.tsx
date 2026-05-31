"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
	{
		title: "Enquiry & Booking",
		image: "/enq.webp",
		description:
			"You reach out with your project details, and the team records your requirements, preferred timeline, and property basics. You receive a clear response so you know the next step before any work begins.",
	},
	{
		title: "Site Inspection",
		image: "/siteInspection.webp",
		description:
			"A site visit is arranged to understand the spaces, current condition, and scope of work. The team checks the surfaces, listens to your needs, and confirms what will be required for a proper job.",
	},
	{
		title: "Quotation Approval",
		image: "/approval.webp",
		description:
			"You receive an itemized quotation that explains the work, materials, and expected effort in a transparent way. This helps you review everything clearly before giving approval and moving forward.",
	},
	{
		title: "Scheduling & Prep",
		image: "/prep.webp",
		description:
			"Once approved, the team sets a practical schedule and shares the planned time commitment. Work begins with protection, surface preparation, and coordination so the project starts in an organized way.",
	},
	{
		title: "Execution & Updates",
		image: "/execution.webp",
		description:
			"Skilled painters carry out the work with supervision and regular progress updates. The customer stays informed throughout, while the team focuses on clean execution, attention to detail, and consistent quality.",
	},
	{
		title: "Inspection & Handover",
		image: "/inspec.webp",
		description:
			"After completion, the team performs a final inspection, handles touch-ups if needed, and walks through the finished work with you. Any agreed after-service support or warranty guidance is shared clearly at handover.",
	},
];

function HowItWork() {
	const sectionRef = useRef<HTMLElement | null>(null);
	const stepRefs = useRef<Array<HTMLElement | null>>([]);
	const indicatorCircleRefs = useRef<Array<HTMLSpanElement | null>>([]);
	const indicatorTitleRefs = useRef<Array<HTMLParagraphElement | null>>([]);
	const indicatorMetaRefs = useRef<Array<HTMLParagraphElement | null>>([]);
	const progressFillLineRef = useRef<SVGPathElement | null>(null);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const ctx = gsap.context(() => {
			const line = progressFillLineRef.current;
			const stepsInView = stepRefs.current.filter((step): step is HTMLElement => Boolean(step));
			const indicatorCircles = indicatorCircleRefs.current.filter(
				(circle): circle is HTMLSpanElement => Boolean(circle)
			);
			const indicatorTitles = indicatorTitleRefs.current.filter(
				(title): title is HTMLParagraphElement => Boolean(title)
			);
			const indicatorMeta = indicatorMetaRefs.current.filter(
				(meta): meta is HTMLParagraphElement => Boolean(meta)
			);

			if (!line || stepsInView.length === 0) {
				return;
			}

			const totalLength = line.getTotalLength();
			gsap.set(line, {
				strokeDasharray: totalLength,
				strokeDashoffset: totalLength,
			});

			gsap.to(line, {
				strokeDashoffset: 0,
				ease: "none",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 70%",
					end: "bottom 35%",
					scrub: true,
				},
			});

			const timeline = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 50%",
					end: "bottom 35%",
					scrub: true,
					once: true,
				},
			});

			if (
				indicatorCircles.length === stepsInView.length &&
				indicatorTitles.length === stepsInView.length &&
				indicatorMeta.length === stepsInView.length
			) {
				gsap.set(indicatorCircles, {
					backgroundColor: "#ffffff",
					borderColor: "#cbd5e1",
					color: "#64748b",
					scale: 1,
				});
				gsap.set(indicatorTitles, { color: "#64748b" });
				gsap.set(indicatorMeta, { color: "#64748b" });
			}

			stepsInView.forEach((step, index) => {
				const position =
					stepsInView.length > 1
						? index / (stepsInView.length - 1)
						: 1;
				timeline.fromTo(
					step,
					{ x: 72, autoAlpha: 0 },
					{
						x: 0,
						autoAlpha: 1,
						ease: "power3.out",
						duration: 0.2,
					},
					position
				);

				if (
					indicatorCircles[index] &&
					indicatorTitles[index] &&
					indicatorMeta[index]
				) {
					timeline.to(
						indicatorCircles[index],
						{
							backgroundColor: "#d8b56c",
							borderColor: "#d8b56c",
							color: "#ffffff",
							scale: 1.06,
							ease: "power2.out",
							duration: 3.35,
						},
						position + 0.08
					);

					timeline.to(
						indicatorTitles[index],
						{
							color: "#0f172a",
							duration: 3.35,
							ease: "power2.out",
						},
						position + 0.08
					);

					timeline.to(
						indicatorMeta[index],
						{
							color: "#334155",
							duration: 3.35,
							ease: "power2.out",
						},
						position + 0.08
					);
				}
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
			<section ref={sectionRef} className="relative isolate overflow-hidden bg-transparent px-4 py-16 text-slate-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
			<div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.6),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(216,181,108,0.14),transparent_28%)]" />

			<div className="mx-auto w-full max-w-7xl">
				<div className="mx-auto max-w-3xl text-center">
					<p className="text-sm font-semibold uppercase tracking-[0.42em] text-slate-500">
						How It Works
					</p>
					<h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
						A Simple, Hassle-Free Process
					</h2>
					<p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
						From the first enquiry to the final handover, we keep the process organized, transparent, and easy to follow. You always know what is happening, when it is happening, and how the work is being managed.
					</p>
				</div>

				<div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12">
					<div className="relative hidden lg:block">
						<div className="sticky top-24 flex h-[calc(100vh-7rem)] items-center justify-center">
							<div className="relative h-full w-full max-w-45">
								<svg
									className="absolute left-4.75 top-3 h-[calc(100%-1.5rem)] w-0.5 overflow-visible"
									viewBox="0 0 2 200"
									preserveAspectRatio="none"
									aria-hidden="true"
								>
									<path
										d="M1 0 V370"
										fill="none"
										stroke="#e2e8f0"
										strokeWidth="7"
										strokeLinecap="round"
									/>
									<path
										ref={progressFillLineRef}
										d="M1 0 V370"
										fill="none"
										stroke="#d8b56c"
										strokeWidth="7"
										strokeLinecap="round"
									/>
								</svg>

								{/* <div className="flex h-full flex-col justify-between py-6 gap-40">
									{steps.map((step, index) => {
										return (
											<div key={step.title} className="flex items-center gap-4">
												<span
													ref={(element) => {
														indicatorCircleRefs.current[index] = element;
													}}
													className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 bg-white text-xs font-semibold text-slate-500 transition-all duration-300"
												>
													0{index + 1}
												</span>
												<div className="min-w-0">
													<p
														ref={(element) => {
															indicatorTitleRefs.current[index] = element;
														}}
														className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-500 transition-colors duration-300"
													>
														{step.title}
													</p>
													<p
														ref={(element) => {
															indicatorMetaRefs.current[index] = element;
														}}
														className="mt-1 text-xs leading-5 text-slate-500"
													>
														Step {index + 1} of {steps.length}
													</p>
												</div>
											</div>
										);
									})}
								</div> */}
							</div>
						</div>
					</div>

					<div className="space-y-5 sm:space-y-6">
						{steps.map((step, index) => {
							return (
								<article
									key={step.title}
									ref={(element) => {
										stepRefs.current[index] = element;
									}}
									data-step-index={index}
									className="group rounded-4xl border border-white/60 p-6 opacity-0 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-7"
								>
									<div className="flex items-center gap-4">
										<div
											className="h-28 w-28 shrink-0 rounded-xl bg-cover bg-center"
											style={{ backgroundImage: `url(${step.image})` }}
											aria-hidden="true"
										/>
										<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#d8b56c] text-sm font-semibold text-white">
											0{index + 1}
										</span>
										<div>
											<h3 className="text-xl font-semibold tracking-tight text-slate-950">
												{step.title}
											</h3>
										</div>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default HowItWork;
