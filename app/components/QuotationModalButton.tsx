"use client";

import { useEffect, useState } from "react";
import { X } from "@deemlol/next-icons";

import Enquiry from "./Enquiry";

type QuotationModalButtonProps = {
	children?: React.ReactNode;
	className?: string;
};

export default function QuotationModalButton({
	children = "Book a quotation",
	className,
}: QuotationModalButtonProps) {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (!isOpen) return;

		const onEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsOpen(false);
			}
		};

		window.addEventListener("keydown", onEscape);
		return () => window.removeEventListener("keydown", onEscape);
	}, [isOpen]);

	return (
		<>
			<button type="button" className={className} onClick={() => setIsOpen(true)}>
				{children}
			</button>

			{isOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 py-6 backdrop-blur-sm"
					role="dialog"
					aria-modal="true"
					aria-label="Book a quotation"
				>
					<button
						type="button"
						aria-label="Close quotation form"
						className="absolute inset-0 cursor-default"
						onClick={() => setIsOpen(false)}
					/>
					<div className="relative z-10 max-h-full w-full max-w-4xl overflow-y-auto rounded-4xl bg-transparent shadow-2xl">
						<button
							type="button"
							onClick={() => setIsOpen(false)}
							className="absolute right-4 top-4 z-10 inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-lg transition hover:bg-slate-50"
							aria-label="Close enquiry form"
						>
							<X className="h-5 w-5" strokeWidth={2} />
						</button>
						<Enquiry embedded />
					</div>
				</div>
			)}
		</>
	);
}
