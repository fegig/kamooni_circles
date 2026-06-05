"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { gsap } from 'gsap'
import { useEffect, useRef } from "react";



interface LandingHeroProps {
	isHolding?: boolean;
	maintenanceMessage?: string;
}

export function LandingHero({
	isHolding = false,
	maintenanceMessage = "Kamooni is being updated. We'll be back soon.",
}: LandingHeroProps) {



	const leftImageRef = useRef<HTMLDivElement>(null);
    const rightImageRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const rotationRef = useRef({ left: 0, right: 0 });
    const tiltRef = useRef({ x: 0, y: 0 });

	useEffect(() => {
        const left = leftImageRef.current;
        const right = rightImageRef.current;
        const container = containerRef.current;
        if (!left || !right || !container) return;

        const ctx = gsap.context(() => {
            // Left image - clockwise rotation
            gsap.to(rotationRef.current, {
                left: 360,
                duration: 100,
                repeat: -1,
                ease: 'none',
                onUpdate: () => {
                    if (leftImageRef.current) {
                    gsap.set(leftImageRef.current, {
                        rotation: rotationRef.current.left,
                        x: tiltRef.current.x * -2,
                        y: tiltRef.current.y * -2,
                        force3D: true,
                    });
                    }
                },
            });

            // Right image - counter-clockwise rotation
            gsap.to(rotationRef.current, {
                right: -360,
                duration: 100,
                repeat: -1,
                ease: 'none',
                onUpdate: () => {
                    if (rightImageRef.current) {
                    gsap.set(rightImageRef.current, {
                        rotation: rotationRef.current.right,
                        x: tiltRef.current.x * 1.8,
                        y: tiltRef.current.y * 1.8,
                        force3D: true,
                    });
                    }
                },
            });

            // Initial apply so transforms show before first tween tick
            gsap.set(left, { rotation: 0, x: 0, y: 0, force3D: true });
            gsap.set(right, { rotation: 0, x: 0, y: 0, force3D: true });
        }, container);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const handleOrientation = (event: DeviceOrientationEvent) => {
            if (event.beta === null || event.gamma === null) return;

            // beta: front-to-back tilt (-180 to 180)
            // gamma: left-to-right tilt (-90 to 90)
            const tiltX = (event.gamma / 90) * 30; // Normalize to -30 to 30
            const tiltY = (event.beta / 180) * 30; // Normalize to -30 to 30

            gsap.to(tiltRef.current, {
                x: tiltX,
                y: tiltY,
                duration: 1.5,
                ease: 'power1.out'
            });
        };

        // Request permission for iOS 13+
        const requestPermission = () => {
            if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
                (DeviceOrientationEvent as any).requestPermission()
                    .then((permissionState: string) => {
                        if (permissionState === 'granted') {
                            window.addEventListener('deviceorientation', handleOrientation);
                        }
                    })
                    .catch(console.error);
            } else {
                // Non-iOS devices
                window.addEventListener('deviceorientation', handleOrientation);
            }
        };

        // Only activate on mobile/tablet
        if (window.matchMedia('(max-width: 1024px)').matches) {
            requestPermission();
        }

        return () => {
            window.removeEventListener('deviceorientation', handleOrientation);
        };
    }, []);

    // Mouse movement for desktop - updates tilt values
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        
        // Only on desktop
        if (window.matchMedia('(max-width: 1024px)').matches) return;

        const container = containerRef.current.getBoundingClientRect();
        const x = e.clientX - container.left;
        const y = e.clientY - container.top;
        
        // Calculate tilt based on mouse position (larger multiplier = more visible parallax)
        const moveX = ((x / container.width) - 0.5) * 25;
        const moveY = ((y / container.height) - 0.5) * 25;

        gsap.to(tiltRef.current, {
            x: moveX,
            y: moveY,
            duration: 1.5,
            ease: 'power1.out'
        });
    };

    const handleMouseLeave = () => {
        // Reset tilt on mouse leave (desktop only)
        if (window.matchMedia('(max-width: 1024px)').matches) return;

        gsap.to(tiltRef.current, {
            x: 0,
            y: 0,
            duration: 2,
            ease: 'power1.out'
        });
    };

	
	return (
		<section 
		ref={containerRef}
		onMouseMove={handleMouseMove}
		onMouseLeave={handleMouseLeave}
		className="relative overflow-hidden h-screen bg-kam-hero-yellow py-20 text-center sm:py-28 lg:py-32">

                    <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                        <div className="absolute lg:top-0 lg:left-0 top-0 left-1/2 lg:translate-x-0 -translate-x-1/2 lg:w-[500px] lg:h-[500px] w-72 h-72">
                            <div
                                ref={leftImageRef}
                                className="w-full h-full will-change-transform"
                                style={{
                                    mixBlendMode: 'overlay',
                                    opacity: 0.3,
                                    transformOrigin: 'center center',
                                }}
                            >
                                <div className="bg-[url('/images/flower-bg.png')] bg-cover bg-center w-full h-full rounded-3xl" />
                            </div>
                        </div>
                        <div className="absolute bottom-0 right-0 w-64 h-64">
                            <div
                                ref={rightImageRef}
                                className="w-full h-full will-change-transform"
                                style={{
                                    mixBlendMode: 'overlay',
                                    opacity: 0.3,
                                    transformOrigin: 'center center',
                                }}
                            >
                                <div className="bg-[url('/images/flower-bg.png')] bg-cover bg-center w-full h-full rounded-3xl" />
                            </div>
                        </div>
                    </div>
            

			<div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-28">
				<div className="mx-auto max-w-4xl text-center">
					<h1 className="font-heading mb-8 font-extrabold tracking-tight text-black/90 text-5xl lg:text-7xl">
						<div className="block">Built for connection, not distraction.</div>
					</h1>
					<p className="mx-auto mb-14 max-w-3xl text-base lg:text-xl leading-relaxed text-black/90 ">
						From communities and projects to tasks and events, Kamooni helps change makers find each
						other and get things done locally or globally. 
						<br/>
						<span className="font-bold">No ads. No Big Tech. Ethical and open-source.</span>
					</p>
					{isHolding ? (
						<div className="space-y-4">
							<div className="inline-block rounded-lg bg-kam-notice-red px-6 py-3 text-sm font-medium text-white shadow-md">
								{maintenanceMessage}
							</div>
							<p className="text-base font-medium">Thanks for your patience.</p>
						</div>
					) : (
						<div className="flex justify-center flex-col sm:flex-row gap-2">
							<Link href="/signup" className="rounded-md bg-kam-button-red-orange hover:bg-black/90 px-8 py-3 text-base font-medium text-white animate-in fade-in-0 duration-300">
									Test Pilot Signup
						
							</Link>
                            <Link href="/explore" className="rounded-md bg-white text-kam-button-red-orange 
                            border border-kam-button-red-orange
                             hover:bg-kam-button-red-orange/90 hover:text-white px-8 py-3 text-base font-medium animate-in fade-in-0 duration-300
                              flex items-center justify-center gap-2">
									<span className="inline-block">Explore the Platform</span>
                                    <i className="fi fi-br-arrow-right" aria-hidden />
							</Link>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
