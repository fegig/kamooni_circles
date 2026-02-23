"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { FaqItem } from "./landing-data";

interface LandingFaqProps {
	items: FaqItem[];
	initialCount?: number;
}

export function LandingFaq({ items, initialCount = 3 }: LandingFaqProps) {
	const [showAll, setShowAll] = useState(false);
	const displayed = showAll ? items : items.slice(0, initialCount);

	return (
		<section id="faq" className="bg-kam-gray-light py-16 sm:py-20">
			<div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
				<h2 className="font-heading mb-2 text-center text-2xl font-semibold tracking-tight text-kam-gray-dark sm:text-3xl">
					Frequently asked questions
				</h2>
				<p className="mb-10 text-center text-sm text-kam-gray-dark/80">
					Quick answers to the big questions about Kamooni.
				</p>
				<Accordion type="single" collapsible className="space-y-3">
					{displayed.map((faq, index) => (
						<AccordionItem
							key={faq.question}
							value={`faq-${index}`}
							className="rounded-lg border border-kam-gray-medium bg-white px-4"
						>
							<AccordionTrigger className="text-left font-medium text-kam-gray-dark hover:no-underline [&[data-state=open]]:border-b [&[data-state=open]]:border-kam-gray-medium [&[data-state=open]]:pb-3">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className="text-kam-gray-dark/80">{faq.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
				{items.length > initialCount && (
					<div className="mt-8 text-center">
						<Button
							variant="ghost"
							size="sm"
							onClick={() => setShowAll(!showAll)}
							className="text-kam-gray-dark/80 hover:text-kam-button-red-orange"
						>
							{showAll ? "Show fewer" : `Show all ${items.length} questions`}
						</Button>
					</div>
				)}
			</div>
		</section>
	);
}
