import Link from "next/link";

export default function PageEnd() {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-black text-[#d8b56c]">
			<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
					<div className="text-sm">© {year} paintwalla</div>

					<nav className="flex flex-wrap items-center gap-4 text-sm">
						<Link href="/" className="hover:underline">
							Home
						</Link>
						<Link href="/services" className="hover:underline">
							Services
						</Link>
						<Link href="/work" className="hover:underline">
							Work
						</Link>
						<Link href="/contact" className="hover:underline">
							Contact
						</Link>
					</nav>
				</div>
			</div>
		</footer>
	);
}

