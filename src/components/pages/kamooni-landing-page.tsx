"use client";

import {
	LandingHeader,
	LandingHero,
	LandingValueProp,
	LandingFeatures,
	LandingHowItWorks,
	LandingVideo,
	LandingEthics,
	LandingFaq,
	LandingFooter,
	FEATURES,
	HOW_IT_WORKS,
	FAQ_ITEMS,
} from "@/components/landing";

export type KamooniLandingVariant = "welcome" | "holding";

interface KamooniLandingPageProps {
	variant?: KamooniLandingVariant;
	maintenanceMessage?: string;
}

export default function KamooniLandingPage({
	variant = "welcome",
	maintenanceMessage = "Kamooni is being updated after a malware incident. We should be running smoothly again by Wednesday, 28 January, 2026.",
}: KamooniLandingPageProps) {
	const isHoldingPage = variant === "holding";

	return (
		<div className="min-h-screen bg-white font-sans text-kam-gray-dark animate-fade-in">
			<LandingHeader showAuth={!isHoldingPage} />
			<LandingHero isHolding={isHoldingPage} maintenanceMessage={maintenanceMessage} />
			<LandingValueProp />
			<LandingFeatures features={FEATURES} showCta={!isHoldingPage} />
			<LandingHowItWorks steps={HOW_IT_WORKS} />
			<LandingVideo />
			<LandingEthics showMembershipCta={!isHoldingPage} />
			<LandingFaq items={FAQ_ITEMS} initialCount={3} />
			<LandingFooter />
		</div>
	);
}
