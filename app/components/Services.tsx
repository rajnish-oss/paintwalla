import Link from "next/link";

const services = [
	{
		title: "Interior Paint",
		description: "Smooth finishes and calm tones for living rooms, bedrooms, and every space in between.",
		accent: "from-[#d8c39a] via-[#9b7a52] to-[#5d4936]",
        bg:"bg-[url('/interior_service.webp')] bg-cover"
	},
	{
		title: "Exterior Paint",
		description: "Weather-ready coatings that keep the outside of your home clean, sharp, and protected.",
		accent: "from-[#d7e2ee] via-[#7da1c8] to-[#4f6a88]",
        bg:"bg-[url('/exterior_service.avif')] bg-cover"
	},
	{
		title: "Wood Polish",
		description: "Natural depth and a refined sheen for doors, trims, cabinets, and premium woodwork.",
		accent: "from-[#ead8be] via-[#b88957] to-[#7a4f2a]",
        bg:"bg-[url('/polish_service.jpg')] bg-cover"
	},
	{
		title: "Texture",
		description: "Statement walls with tactile character, soft contrast, and a high-end architectural feel.",
		accent: "from-[#e8d7cf] via-[#a87666] to-[#6b4b45]",
        bg:"bg-[url('/texture_service.webp')] bg-cover"
	},
	{
		title: "Waterproofing",
		description: "Reliable protection for terraces, walls, and moisture-prone areas that need to last.",
		accent: "from-[#d7edf2] via-[#75b8d1] to-[#3f6d84]",
        bg:"bg-[url('/water_service.jpg')] bg-cover"
	},
	{
		title: "POP",
		description: "Clean ceiling lines, modern shapes, and decorative detailing for a polished finish.",
		accent: "from-[#f3eadc] via-[#c8b59a] to-[#8e7354]",
        bg:"bg-[url('/pop_service.jpg')] bg-cover"
	},
];

const Services: React.FC = () => {
	return (
		<section className="relative isolate overflow-hidden bg-transparent px-4 py-16 text-slate-900 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
			<div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_34%),radial-gradient(circle_at_bottom,rgba(216,181,108,0.2),transparent_28%)]" />

			<div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-7xl flex-col justify-center">
				<div className="mx-auto w-full max-w-3xl text-center">
					<p className="text-sm font-semibold uppercase tracking-[0.42em] text-slate-500">
						paintwalla Services
					</p>
					<h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
						Book <span className="text-slate-700">Our Service</span>
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
						A clean, open layout inspired by the reference image, with enough breathing room for your own background image to shine through.
					</p>
				</div>

				<div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
					{services.map((service, index) => (
						service.title === "Interior Paint" ? (
							<Link
								key={service.title}
								href="/interior-painting"
								className="group relative min-h-60 overflow-hidden rounded-4xl border border-white/60 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.10)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.14)]"
							>
								<div className={`absolute inset-0 ${service.bg} opacity-[0.8]`} />
								<div className="absolute inset-0 " />

								<div className="relative flex h-full min-h-52.5 flex-col justify-between rounded-3xl border border-white/45 bg-white/10 p-5">
									<div className="flex items-center justify-between gap-4">
										<span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/10 bg-white/70 text-sm font-semibold text-slate-800 shadow-sm">
											0{index + 1}
										</span>
										<h3 className="text-2xl font-semibold tracking-tight text-slate-950">
											{service.title}
										</h3>
									</div>

									<div className="flex items-center justify-between pt-2">
										<span className="text-sm font-semibold text-slate-800 transition group-hover:translate-x-1">
											Explore
										</span>
									</div>
								</div>
							</Link>
						) : service.title === "Exterior Paint" ? (
							<Link
								key={service.title}
								href="/exterior-painting"
								className="group relative min-h-60 overflow-hidden rounded-4xl border border-white/60 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.10)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.14)]"
							>
								<div className={`absolute inset-0 ${service.bg} opacity-[0.8]`} />
								<div className="absolute inset-0 " />

								<div className="relative flex h-full min-h-52.5 flex-col justify-between rounded-3xl border border-white/45 bg-white/10 p-5">
									<div className="flex items-center justify-between gap-4">
										<span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/10 bg-white/70 text-sm font-semibold text-slate-800 shadow-sm">
											0{index + 1}
										</span>
										<h3 className="text-2xl font-semibold tracking-tight text-slate-950">
											{service.title}
										</h3>
									</div>

									<div className="flex items-center justify-between pt-2">
										<span className="text-sm font-semibold text-slate-800 transition group-hover:translate-x-1">
											Explore
										</span>
									</div>
								</div>
							</Link>
						) : service.title === "Wood Polish" ? (
							<Link
								key={service.title}
								href="/wood-polish"
								className="group relative min-h-60 overflow-hidden rounded-4xl border border-white/60 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.10)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.14)]"
							>
								<div className={`absolute inset-0 ${service.bg} opacity-[0.8]`} />
								<div className="absolute inset-0 " />

								<div className="relative flex h-full min-h-52.5 flex-col justify-between rounded-3xl border border-white/45 bg-white/10 p-5">
									<div className="flex items-center justify-between gap-4">
										<span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/10 bg-white/70 text-sm font-semibold text-slate-800 shadow-sm">
											0{index + 1}
										</span>
										<h3 className="text-2xl font-semibold tracking-tight text-slate-950">
											{service.title}
										</h3>
									</div>

									<div className="flex items-center justify-between pt-2">
										<span className="text-sm font-semibold text-slate-800 transition group-hover:translate-x-1">
											Explore
										</span>
									</div>
								</div>
							</Link>
						) : service.title === "Waterproofing" ? (
							<Link
								key={service.title}
								href="/waterproofing"
								className="group relative min-h-60 overflow-hidden rounded-4xl border border-white/60 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.10)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.14)]"
							>
								<div className={`absolute inset-0 ${service.bg} opacity-[0.8]`} />
								<div className="absolute inset-0 " />

								<div className="relative flex h-full min-h-52.5 flex-col justify-between rounded-3xl border border-white/45 bg-white/10 p-5">
									<div className="flex items-center justify-between gap-4">
										<span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/10 bg-white/70 text-sm font-semibold text-slate-800 shadow-sm">
											0{index + 1}
										</span>
										<h3 className="text-2xl font-semibold tracking-tight text-slate-950">
											{service.title}
										</h3>
									</div>

									<div className="flex items-center justify-between pt-2">
										<span className="text-sm font-semibold text-slate-800 transition group-hover:translate-x-1">
											Explore
										</span>
									</div>
								</div>
							</Link>
						) : service.title === "Texture" ? (
							<Link
								key={service.title}
								href="/texture"
								className="group relative min-h-60 overflow-hidden rounded-4xl border border-white/60 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.10)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.14)]"
							>
								<div className={`absolute inset-0 ${service.bg} opacity-[0.8]`} />
								<div className="absolute inset-0 " />

								<div className="relative flex h-full min-h-52.5 flex-col justify-between rounded-3xl border border-white/45 bg-white/10 p-5">
									<div className="flex items-center justify-between gap-4">
										<span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/10 bg-white/70 text-sm font-semibold text-slate-800 shadow-sm">
											0{index + 1}
										</span>
										<h3 className="text-2xl font-semibold tracking-tight text-slate-950">
											{service.title}
										</h3>
									</div>

									<div className="flex items-center justify-between pt-2">
										<span className="text-sm font-semibold text-slate-800 transition group-hover:translate-x-1">
											Explore
										</span>
									</div>
								</div>
							</Link>
						) : service.title === "POP" ? (
							<Link
								key={service.title}
								href="/pop"
								className="group relative min-h-60 overflow-hidden rounded-4xl border border-white/60 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.10)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.14)]"
							>
								<div className={`absolute inset-0 ${service.bg} opacity-[0.8]`} />
								<div className="absolute inset-0 " />

								<div className="relative flex h-full min-h-52.5 flex-col justify-between rounded-3xl border border-white/45 bg-white/10 p-5">
									<div className="flex items-center justify-between gap-4">
										<span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/10 bg-white/70 text-sm font-semibold text-slate-800 shadow-sm">
											0{index + 1}
										</span>
										<h3 className="text-2xl font-semibold tracking-tight text-slate-950">
											{service.title}
										</h3>
									</div>

									<div className="flex items-center justify-between pt-2">
										<span className="text-sm font-semibold text-slate-800 transition group-hover:translate-x-1">
											Explore
										</span>
									</div>
								</div>
							</Link>
						) : (
							<article
							key={service.title}
							className="group relative min-h-60 overflow-hidden rounded-4xl border border-white/60  p-5 shadow-[0_18px_60px_rgba(15,23,42,0.10)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.14)]"
						>
							<div className={`absolute inset-0 ${service.bg} opacity-[0.8]`} />
							<div className="absolute inset-0 " />

							<div className="relative flex h-full min-h-52.5 flex-col justify-between rounded-3xl border border-white/45 bg-white/10 p-5">
								<div className="flex items-center justify-between gap-4">
									<span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/10 bg-white/70 text-sm font-semibold text-slate-800 shadow-sm">
										0{index + 1}
									</span>
									<h3 className="text-2xl font-semibold tracking-tight text-slate-950">
										{service.title}
									</h3>
								</div>

						
									
								

								<div className="flex items-center justify-between pt-2">
									<span className="text-sm font-semibold text-slate-800 transition group-hover:translate-x-1">
										Explore
									</span>
								</div>
							</div>
							</article>
							)
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
