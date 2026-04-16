interface Config {
	hero: {
		headline: string;
		subline: string;
		blueprintImage: string;
		framingImage: string;
		houseImage: string;
		email: string;
	};
	about: {
		bio: string;
	};
	owner: {
		name: string;
		title: string;
		photo: string;
		bio: string;
	};
	gallery: Array<{ src: string; alt: string; width: number; height: number }>;
	testimonials: Array<{
		quote: string;
		name: string;
		neighborhood: string;
	}>;
	contact: {
		headline: string;
		description: string;
	};
}

export const config: Config = {
	hero: {
		headline: "Q Builders",
		subline: "Custom residential construction along Denver's front range",
		blueprintImage: "/hero-blueprint-old.jpg",
		framingImage: "/hero-framing.jpg",
		houseImage: "/hero-image.jpeg",
		email: "qbuilders123@gmail.com"
	},
	about: {
		bio: "We are a premier custom home builder specializing in duplexes and luxury residences throughout Denver's front range. Our team combines exceptional craftsmanship with modern design to deliver homes that exceed expectations. From initial concept to final walkthrough, we handle every detail with precision and care."
	},
	owner: {
		name: "Tommy Cagle",
		photo: "/profile-picture.jpg",
		bio: "With 20+ years in the construction industry, Tommy has gained deep knowledge of every step of the home build process. That experience allows him to avoid costly mistakes and unexpected delays, spot and fix issues before they cause problems, and find ways to save cost without sacrificing quality. He knows the right questions to ask to help clients realize their dream house.",
		title: "Owner"
	},
	gallery: [
		{ src: "/gallery/wolf-living-room.jpeg", alt: "Wolf living room", width: 3840, height: 2160 },
		{ src: "/gallery/wolf-bathroom.jpeg", alt: "Wolf bathroom", width: 3140, height: 2160 },
		{ src: "/gallery/wolf-dining-room.jpeg", alt: "Wolf dining room", width: 3840, height: 2160 },
		{ src: "/gallery/wolf-pantry.jpeg", alt: "Wolf pantry", width: 2128, height: 2160 },
		{ src: "/gallery/bannock-duplex.jpg", alt: "Bannock duplex", width: 1536, height: 863 },
		{ src: "/gallery/lowell-front.jpg", alt: "Lowell residence front", width: 1536, height: 1022 },
		{ src: "/gallery/lowell-living-room.jpg", alt: "Lowell living room", width: 1344, height: 895 },
		{ src: "/gallery/lowell-main-room.jpg", alt: "Lowell main room", width: 1344, height: 895 },
		{ src: "/gallery/lowell-bedroom.jpg", alt: "Lowell bedroom", width: 1536, height: 1023 },
		{ src: "/gallery/mudroom.jpg", alt: "Mudroom", width: 864, height: 1184 },
		{ src: "/gallery/knox-front.jpg", alt: "Knox residence front", width: 1280, height: 843 },
		{ src: "/gallery/knox-kitchen.jpg", alt: "Knox kitchen", width: 1279, height: 851 },
		{ src: "/gallery/knox-outside.jpg", alt: "Knox exterior", width: 1280, height: 847 },
	],
	testimonials: [],
	contact: {
		headline: "Let's talk",
		description: "Thinking about building your dream home? We're just an email away."
	}
};
