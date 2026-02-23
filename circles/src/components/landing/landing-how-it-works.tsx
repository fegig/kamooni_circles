"use client";

interface Step {
	step: number;
	title: string;
	detail: string;
}

interface LandingHowItWorksProps {
	steps: readonly Step[];
}

export function LandingHowItWorks({ steps }: LandingHowItWorksProps) {
	return (
		<section className="border-b border-kam-gray-medium bg-white py-16 sm:py-20">
			<div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
				<h2 className="font-heading mb-12 text-center text-2xl font-semibold tracking-tight text-kam-gray-dark sm:text-3xl">
					How it works
				</h2>
				<div className="flex flex-col gap-10 sm:flex-row sm:justify-between sm:gap-6">
					{steps.map((item) => (
						<div key={item.step} className="flex flex-col items-center text-center sm:flex-1">
							<div className="mb-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-kam-button-red-orange text-sm font-semibold text-white">
								{item.step}
							</div>
							<h3 className="mb-1 font-medium text-kam-gray-dark">{item.title}</h3>
							<p className="text-sm text-kam-gray-dark/80">{item.detail}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
