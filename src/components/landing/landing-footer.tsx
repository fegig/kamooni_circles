"use client";

import Link from "next/link";

export function LandingFooter() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-black/90 text-white">
			<div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
				{/* Main footer grid - Kaizen-inspired structure */}
				<div className="grid grid-cols-2 gap-8 border-b border-white/10 pb-10 md:grid-cols-4">
					{/* Platform */}
					<div>
						<h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/70">
							Platform
						</h4>
						<ul className="space-y-3">
							<li>
								<Link href="/explore" className="text-white/80 hover:text-white">
									Explore
								</Link>
							</li>
							<li>
								<Link href="/circles" className="text-white/80 hover:text-white">
									Circles
								</Link>
							</li>
							<li>
								<a
									href="https://mrtimtim.medium.com/kamooni-community-for-changemakers-bba055a5ba75"
									className="text-white/80 hover:text-white"
									target="_blank"
									rel="noopener noreferrer"
								>
									Our story
								</a>
							</li>
						</ul>
					</div>
					{/* Resources */}
					<div>
						<h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/70">
							Resources
						</h4>
						<ul className="space-y-3">
							<li>
								<a
									href="https://mrtimtim.medium.com/the-altruistic-wallet-9163f19a0946"
									className="text-white/80 hover:text-white"
									target="_blank"
									rel="noopener noreferrer"
								>
									Altruistic Wallet
								</a>
							</li>
							<li>
								<Link href="/docs/Seven Reasons to join Kamooni.pdf" className="text-white/80 hover:text-white">
									Seven Reasons to join
								</Link>
							</li>
							<li>
								<a href="#faq" className="text-white/80 hover:text-white">
									FAQ
								</a>
							</li>
						</ul>
					</div>
					{/* Company */}
					<div>
						<h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/70">
							Company
						</h4>
						<ul className="space-y-3">
							<li>
								<a
									href="https://www.socialsystems.io/our_people/"
									className="text-white/80 hover:text-white"
									target="_blank"
									rel="noopener noreferrer"
								>
									Our team
								</a>
							</li>
							<li>
								<a
									href="https://socialsystems.io"
									className="text-white/80 hover:text-white"
									target="_blank"
									rel="noopener noreferrer"
								>
									Social Systems Lab
								</a>
							</li>
						</ul>
					</div>
					{/* Connect */}
					<div>
						<h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/70">
							Connect
						</h4>
						<ul className="space-y-3">
							<li>
								<a
									href="https://instagram.com/kamooni.network"
									className="text-white/80 hover:text-white"
									target="_blank"
									rel="noopener noreferrer"
								>
									Instagram
								</a>
							</li>
							<li>
								<a href="mailto:info@kamooni.org" className="text-white/80 hover:text-white">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
				{/* Bottom bar */}
				<div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-center">
					<p className="text-sm text-white/60">
						© {currentYear} Kamooni. All rights reserved.
					</p>
					<div className="flex items-center gap-4">
						<Link href="/privacy" className="text-sm text-white/60 hover:text-white/80">
							Privacy
						</Link>
						
					</div>
				</div>
			</div>
		</footer>
	);
}
