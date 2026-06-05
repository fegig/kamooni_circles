"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
interface Feature {
	icon: string;
	title: string;
	description: string;
}

interface LandingFeaturesProps {
	features: readonly Feature[];
	showCta?: boolean;
}

export function LandingFeatures({ features, showCta = true }: LandingFeaturesProps) {
	return (
		<section className="bg-kam-gray-light py-16 sm:py-20">
			<div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
				<h2 className="font-heading mb-12 text-center text-2xl font-semibold tracking-tight text-kam-gray-dark sm:text-3xl">
					Built for collaboration and impact
				</h2>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{features.map((feature) => (
						<div
							key={feature.title}
							className={cn(
								"group rounded-xl border border-kam-gray-medium bg-white p-6 transition-all",
								"hover:border-kam-gray-medium hover:shadow-sm"
							)}
						>
							<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-kam-hero-yellow/20 transition-colors group-hover:bg-kam-hero-yellow/30">
								<i className={cn(feature.icon, "text-xl text-kam-button-red-orange")} aria-hidden />
							</div>
							<h3 className="mb-2 font-medium text-kam-gray-dark">{feature.title}</h3>
							<p className="text-sm leading-relaxed text-kam-gray-dark/80">{feature.description}</p>
						</div>
					))}
				</div>
				{showCta && (
					<div className="mt-12 text-center">
						<Link href="/explore">
							<Button size="sm" className="bg-kam-button-red-orange text-white hover:bg-kam-button-red-orange/90">
								Explore the map
								<i className="fi fi-br-arrow-right ml-2 inline-block" aria-hidden />
							</Button>
						</Link>
					</div>
				)}
			</div>
		</section>
	);
}
