"use client";

import { cn } from "@/lib/utils";

type FlaticonIconProps = {
	icon: string;
	className?: string;
	size?: number;
};

export function FlaticonIcon({ icon, className, size = 24 }: FlaticonIconProps) {
	return (
		<i
			className={cn("fi", icon, className)}
			style={{ fontSize: size }}
			aria-hidden
		/>
	);
}
