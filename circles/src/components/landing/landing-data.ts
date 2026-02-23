/**
 * Shared data for the Kamooni landing page.
 * Centralized for easy content updates.
 */

export const FEATURES = [
	{
		icon: "fi fi-rr-globe",
		title: "Map-based exploration",
		description:
			"Discover people, projects, and events geographically. Filter by skills, causes, or SDGs.",
	},
	{
		icon: "fi fi-rr-users",
		title: "Circles",
		description: "Create communities, projects, or campaigns. Control membership and collaborate.",
	},
	{
		icon: "fi fi-rr-list",
		title: "Tasks & proposals",
		description: "Built-in task manager. Create proposals and let your community vote.",
	},
	{
		icon: "fi fi-rr-scroll",
		title: "Noticeboard & events",
		description: "Share updates on a feed. Publish events visible on the map and calendar.",
	},
	{
		icon: "fi fi-rr-comments",
		title: "Matrix chat",
		description: "Decentralized, privacy-respecting messaging with circles and collaborators.",
	},
] as const;

export const HOW_IT_WORKS = [
	{ step: 1, title: "Create your profile", detail: "Share your mission, skills, and causes." },
	{ step: 2, title: "Explore the map", detail: "Find people and projects near or far." },
	{ step: 3, title: "Join or create Circles", detail: "Collaborate on tasks, proposals, and discussions." },
] as const;

export type FaqItem = { question: string; answer: string };

export const FAQ_ITEMS: FaqItem[] = [
	{
		question: "What is Kamooni?",
		answer:
			"Kamooni is a social network for changemakers—people who want to build a better world together. It's a place to connect, collaborate, and contribute to meaningful projects, locally or globally.",
	},
	{
		question: "Is Kamooni just another social media platform?",
		answer:
			"Not at all. Unlike traditional social media, Kamooni is focused on action, not distraction. It's designed to help people do things together—whether that's volunteering, organizing, or building local solutions.",
	},
	{
		question: "Who is Kamooni for?",
		answer:
			"Kamooni is for anyone who wants to make a difference—activists, organizers, volunteers, community leaders, creatives, social entrepreneurs, and everyday people looking to contribute.",
	},
	{
		question: "How does Kamooni work?",
		answer:
			"You create a profile, share your mission, causes, and skills, and Kamooni helps match you with people, projects, and opportunities through a map-based interface and shared interests.",
	},
	{
		question: "What makes Kamooni different?",
		answer:
			"Kamooni gives you more control over your data, your connections, and your impact. It's values-driven, open-source, and supports direct collaboration, not just awareness or funding. It also has a map-based interface.",
	},
	{
		question: "What can I do on Kamooni?",
		answer:
			"You can create a profile and circles (groups) with control over access and look. We have a built-in task manager, proposals with community voting, and a map-based interface to explore and connect. Kamooni is in Test Pilot phase—Founding Members shape the platform.",
	},
	{
		question: 'What does the name "Kamooni" mean?',
		answer:
			'"Kamooni" is loosely based on the Latin communis, meaning "common, public, general, shared by all or many". The name reflects our belief in collective action, sharing and mutual support.',
	},
	{
		question: "Is Kamooni free to use?",
		answer:
			"This is our ambition. The purpose of Kamooni is to create a better society for all. We ask for a small membership fee (from €1/month) from those who can afford it to keep the platform ethical and ad-free. With ~10% of users as members, we can keep it free for everyone else.",
	},
	{
		question: "Why should I pay to use Kamooni?",
		answer:
			"Your membership supports a community-run platform with no corporate surveillance, no ads, and no data harvesting. As a member you vote on platform direction. You also get an 'altruistic' dividend on profits—you decide which projects receive it via the Altruistic Wallet.",
	},
	{
		question: "What's the Altruistic Wallet?",
		answer:
			"A digital wallet where you can donate time, money, or resources—but only to others. It tracks contributions, helps build reputation, and supports trustworthy projects. It's being developed as a stand-alone app.",
	},
	{
		question: "How do I build trust on Kamooni?",
		answer:
			"Kamooni uses a reputation system based on real contributions. Profiles show how people and projects have helped others. We're designing human verification to avoid fake projects. Trust is earned by living up to your promises.",
	},
	{
		question: "What's a Circle?",
		answer:
			"A Circle is a space on Kamooni—it can be a project, a community group, a campaign, or a place to gather people. You control the settings and membership of circles you create or administer.",
	},
	{
		question: "Will my data be sold or used for ads?",
		answer: "Never. Kamooni is committed to privacy and ethics. Your data belongs to you.",
	},
	{
		question: "Is Kamooni open source?",
		answer:
			"Yes. We believe in transparency and community ownership. Developers are welcome to help build the platform.",
	},
	{
		question: "Who is behind Kamooni?",
		answer:
			"Kamooni is built by a global network of activists, designers, and technologists through the Social Systems Lab. You are part of shaping it.",
	},
	{
		question: "How do I get started?",
		answer:
			"Create a profile, add your mission and skills, and explore the map. You'll find people, projects, or tasks to jump into right away.",
	},
	{
		question: "What is a Founding Member?",
		answer:
			"A Founding Member joins Kamooni early and shapes the culture and platform. You get the title 'Founder' on your profile and your voice counts in development decisions.",
	},
];
