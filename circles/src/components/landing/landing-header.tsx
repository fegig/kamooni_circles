"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LandingHeaderProps {
	showAuth?: boolean;
}

const NAV_LINKS = [
	{ href: "/explore", label: "Explore" },
	{ href: "/circles", label: "Circles" },
	{
		href: "https://mrtimtim.medium.com/kamooni-community-for-changemakers-bba055a5ba75",
		label: "Our story",
		external: true,
	},
];

const SCROLL_THRESHOLD = 50;

export function LandingHeader({ showAuth = true }: LandingHeaderProps) {
	const [visible, setVisible] = useState(true);
	const [isAtTop, setIsAtTop] = useState(true);
	const prevScrollY = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// At top: always show transparent header
			if (currentScrollY < SCROLL_THRESHOLD) {
				setVisible(true);
				setIsAtTop(true);
				prevScrollY.current = currentScrollY;
				return;
			}

			setIsAtTop(false);

			// Scrolling down: hide
			if (currentScrollY > prevScrollY.current) {
				setVisible(false);
			}
			// Scrolling up: show with white bg
			else if (currentScrollY < prevScrollY.current) {
				setVisible(true);
			}

			prevScrollY.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed left-0 right-0 top-0 z-100 transition-all duration-300",
				!visible && "-translate-y-full"
			)}
		>
			<div
				className={cn(
					"transition-colors duration-300",
					isAtTop ? "bg-transparent" : "bg-white shadow-sm"
				)}
			>
				<div className="container relative mx-auto flex h-18 items-center justify-between px-4 sm:px-6 lg:px-8">
					<Link href="/" className="group flex items-center gap-2 ">
						<Image
							src="/images/logo-test3.jpg"
							alt="Kamooni"
							width={36}
							height={36}
							className="h-8 w-auto opacity-95 transition-opacity group-hover:opacity-100 sm:h-9 rounded-full"
						/>
						<div>
							<span className="font-heading font-bold tracking-tight text-black/90">Kamooni</span>
							<span className="-mt-1 block text-xs text-kam-gray-dark/70">The social impact network</span>
						</div>
					</Link>

					{showAuth && (
						<>
							<nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex md:items-center md:gap-8">
								{NAV_LINKS.map((link) =>
									link.external ? (
										<a
											key={link.label}
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											className="text-base font-semibold text-black/80 hover:text-kam-gray"
										>
											{link.label}
										</a>
									) : (
										<Link
											key={link.label}
											href={link.href}
											className="text-base font-semibold text-black/80 hover:text-kam-gray"
										>
											{link.label}
										</Link>
									)
								)}
							</nav>

							<div className="flex items-center gap-2">
								<Link href="/login">
									<Button variant="ghost" size="sm" className="text-sm text-black/80 hover:bg-white hover:text-kam-button-red-orange">
										Log in
									</Button>
								</Link>
								<Link href="/signup">
									<Button
										size="sm"
										className="rounded-md bg-kam-button-red-orange hover:bg-white text-white hover:text-kam-button-red-orange">
										Get started
									</Button>
								</Link>
							</div>
						</>
					)}
				</div>
			</div>
		</header>
	);
}
