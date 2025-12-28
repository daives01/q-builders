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
		stats: Array<{ label: string; value: string }>;
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
		name: "Tommy Cagle",
		photo: "/profile-picture.jpg",
		bio: "I've been in the construction industry for over 20 years and building custom homes for 10. My job is to deliver exactly what you want at the price you expect, without surprises.\n\nI don't inflate costs. I find smart ways to save you money on things that don't matter and invest in things that do. I've built my own house twice, so I bring the same standards to yours.\n\nWhen I'm not building, I'm hiking or rock climbing with family.",
		stats: [
			{ label: "Homes built", value: "75+" },
			{ label: "Years of experience", value: "20+" },
		]
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
	testimonials: [
		{ quote: "Tommy was on-site almost every day. We always knew exactly where things stood, and he caught issues before they became problems.", name: "Sarah & Tom", neighborhood: "Cherry Creek", project: "Custom Build" },
		{ quote: "We went over budget on finishes (our choice), and Tommy found ways to save elsewhere without cutting corners. Really appreciated that.", name: "Michael & Lisa", neighborhood: "Washington Park", project: "Full Renovation" },
		{ quote: "Interviewed a few builders before going with Tommy. He was the only one who actually listened to what we wanted instead of pushing his own ideas.", name: "David", neighborhood: "LoDo", project: "Modern Loft" },
		{ quote: "This is our second build with Tommy. Same great communication, same quality. Easy choice.", name: "Jennifer & Mark", neighborhood: "Highland", project: "New Construction" },
		{ quote: "Our lot had some tricky drainage issues. Tommy brought in the right people and solved it without any drama.", name: "Robert & Maria", neighborhood: "Golden", project: "Mountain Modern" },
		{ quote: "Clear communication from day one. There were no surprises on the invoice and the finish work is exceptional.", name: "Chris & Amy", neighborhood: "Capitol Hill", project: "Victorian Restoration" }
	],
	contact: {
		headline: "Let's talk",
		description: "Thinking about building your dream home? I'm just an email away."
	}
};

