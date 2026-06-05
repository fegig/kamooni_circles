"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface LandingEthicsProps {
	showMembershipCta?: boolean;
}

export function LandingEthics({ showMembershipCta = true }: LandingEthicsProps) {
	return (
		<section className="border-b border-kam-gray-medium bg-white py-16 sm:py-20">
			<div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
				<h2 className="font-heading mb-8 text-center text-2xl font-semibold tracking-tight text-kam-gray-dark sm:text-3xl">
					Ethical by design
				</h2>
				<div className="space-y-6 text-kam-gray-dark/80 leading-relaxed">
					<p>
						No ads. No data harvesting. No corporate surveillance. We&apos;re a small team stewarded by
						the Social Systems Foundation—no VCs, no extractive growth. One hundred per cent
						oligarch-free.
					</p>
					<p>
						Membership (from €1/month) keeps the lights on and the platform free for those who
						contribute. As a member, you vote on platform direction and profit allocation via the{" "}
						<Link
							href="https://mrtimtim.medium.com/the-altruistic-wallet-9163f19a0946"
							className="text-kam-button-red-orange underline decoration-kam-button-red-orange/30 underline-offset-2 hover:decoration-kam-button-red-orange"
						>
							Altruistic Wallet
						</Link>
						.
					</p>
					<p>Kamooni is open source. Your data stays yours. If that resonates, you&apos;re already one of us.</p>
				</div>
				<div className="mt-10 flex flex-col items-center gap-4">
					<Link href="https://www.socialsystems.io/our_people/">
						<Button
							variant="outline"
							size="sm"
							className="border-kam-button-red-orange text-kam-button-red-orange hover:bg-kam-button-red-orange hover:text-white"
						>
							Meet the team
						</Button>
					</Link>
					{showMembershipCta && (
						<>
							<Link href="/signup">
								<Button className="bg-kam-button-red-orange text-white hover:bg-kam-button-red-orange/90">
									Become a Founding Member
								</Button>
							</Link>
							<Link
								href="/docs/Seven Reasons to join Kamooni.pdf"
								className="text-sm text-kam-gray-dark/70 underline decoration-kam-gray-medium underline-offset-2 hover:text-kam-gray-dark"
							>
								Seven Reasons to join Kamooni (PDF)
							</Link>
						</>
					)}
				</div>
			</div>
		</section>
	);
}
