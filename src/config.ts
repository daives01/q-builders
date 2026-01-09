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
		name: string;
		photo: string;
		bio: string;
	};
	owner: {
		name: string;
		title: string;
		photo: string;
		bio: string;
	};
	gallery: Array<{ src: string; alt: string }>;
	testimonials: Array<{
		quote: string;
		name: string;
		neighborhood: string;
		project?: string;
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
		name: "Q Builders",
		photo: "",
		bio: "We are a premier custom home builder specializing in duplexes and luxury residences throughout Denver's front range. Our team combines exceptional craftsmanship with modern design to deliver homes that exceed expectations. From initial concept to final walkthrough, we handle every detail with precision and care."
	},
	owner: {
		name: "Tommy Cagle",
		photo: "/profile-picture.jpg",
		bio: "With 20+ years in the construction industry, Tommy has gained deep knowledge of every step of the home build process. That experience allows him to avoid costly mistakes and unexpected delays, spot and fix issues before they cause problems, and find ways to save cost without sacrificing quality. He knows the right questions to ask to help clients realize their dream house.",
		title: "Owner"
	},
	gallery: [
		{ src: "/gallery/wolf-living-room.jpeg", alt: "Wolf living room" },
		{ src: "/gallery/wolf-bathroom.jpeg", alt: "Wolf bathroom" },
		{ src: "/gallery/wolf-dining-room.jpeg", alt: "Wolf dining room" },
		{ src: "/gallery/wolf-pantry.jpeg", alt: "Wolf pantry" },
		{ src: "/gallery/bannock-duplex.jpg", alt: "bannock duplex" },
		{ src: "/gallery/lowell-front.jpg", alt: "Lowell residence front" },
		{ src: "/gallery/lowell-living-room.jpg", alt: "Lowell living room" },
		{ src: "/gallery/lowell-main-room.jpg", alt: "Lowell main room" },
		{ src: "/gallery/lowell-bedroom.jpg", alt: "Lowell bedroom" },
		{ src: "/gallery/mudroom.jpg", alt: "mudroom" },
		{ src: "/gallery/knox-front.jpg", alt: "Knox residence front" },
		{ src: "/gallery/knox-kitchen.jpg", alt: "Knox kitchen" },
		{ src: "/gallery/knox-outside.jpg", alt: "Knox exterior" },
	],
	testimonials: [],
	contact: {
		headline: "Let's talk",
		description: "Thinking about building your dream home? We're just an email away."
	}
};

