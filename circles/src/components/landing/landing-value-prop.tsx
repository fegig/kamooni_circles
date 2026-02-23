"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LandingValueProp() {
	return (
		<section className="border-b border-kam-gray-medium bg-white py-16 sm:py-20">
			<div className="container mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
				<h2 className="font-heading mb-4 text-2xl font-semibold tracking-tight text-kam-gray-dark sm:text-3xl">
					Most social media distracts. <span className="text-kam-hero-yellow">We connect.</span>
				</h2>
				<p className="mb-8 text-kam-gray-dark/80 leading-relaxed">
					Changemakers need more than likes—they need tools to collaborate, build trust, and make
					real impact. Kamooni helps you find each other and get things done together.
				</p>
				<Link href="https://mrtimtim.medium.com/kamooni-community-for-changemakers-bba055a5ba75">
					<Button
						variant="outline"
						size="sm"
						className="border-kam-button-red-orange text-kam-button-red-orange hover:bg-kam-button-red-orange hover:text-white"
					>
						Read our story
					</Button>
				</Link>
			</div>
		</section>
	);
}
