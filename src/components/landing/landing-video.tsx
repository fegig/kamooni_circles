"use client";

export function LandingVideo() {
	return (
		<section className="bg-kam-gray-light py-16 sm:py-20">
			<div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
				<h2 className="font-heading mb-2 text-center text-2xl font-semibold tracking-tight text-kam-gray-dark sm:text-3xl">
					Watch Kamooni in action
				</h2>
				<p className="mx-auto mb-8 max-w-xl text-center text-kam-gray-dark/80">
					A quick overview of what we&apos;re building and how you can take part.
				</p>
				<div className="relative overflow-hidden rounded-xl border border-kam-gray-medium bg-white shadow-sm">
					<div className="relative h-0 w-full" style={{ paddingBottom: "56.25%" }}>
						<iframe
							className="absolute inset-0 h-full w-full"
							src="https://www.youtube.com/embed/DBlJYdMKsTU"
							title="Kamooni video"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
