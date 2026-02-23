"use client";

import { useEffect } from "react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		let lenis: any;
		const init = async () => {
			const Lenis = (await import("lenis")).default;
			lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
			const raf = (time: number) => {
				lenis.raf(time);
				requestAnimationFrame(raf);
			};
			requestAnimationFrame(raf);
		};
		init();
		return () => lenis?.destroy?.();
	}, []);

	return <>{children}</>;
}
