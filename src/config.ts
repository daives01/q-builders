interface Config {
	hero: {
		headline: string;
		subline: string;
		backgroundImage: string;
		blueprintImage: string;
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
		subline: "Custom Homes in the Greater Denver Area",
		backgroundImage: "/hero-image.jpeg",
		blueprintImage: "/hero-blueprint.jpg",
		email: "hello@qbuilders.com"
	},
	about: {
		name: "Tommy Cagle",
		photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
		bio: "I've spent the last decade in Denver translating dreams into brick and mortar. My philosophy is simple: every home should be a reflection of its owner's story, built with unwavering attention to detail and a commitment to quality that lasts generations.",
		stats: [
			{ label: "Crafted Homes", value: "38" },
			{ label: "Years Building", value: "10+" },
			{ label: "Neighborhoods", value: "12" }
		]
	},
	gallery: [
		{ src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", alt: "Modern mountain home with dramatic views" },
		{ src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80", alt: "Spacious living room with vaulted ceilings" },
		{ src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80", alt: "Chef's kitchen with custom cabinetry" },
		{ src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80", alt: "Serene master bedroom retreat" },
		{ src: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1200&q=80", alt: "Elegant home office with natural light" },
		{ src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80", alt: "Outdoor entertainment space" },
		{ src: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&w=1200&q=80", alt: "Contemporary bathroom design" },
		{ src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", alt: "Open floor plan living space" }
	],
	testimonials: [
		{ quote: "Working with John was transformative. He didn't just build us a house—he helped us discover how we wanted to live. Every detail reflects who we are as a family.", name: "Sarah & Tom", neighborhood: "Cherry Creek", project: "5,200 sq ft" },
		{ quote: "In a world of compromises, John delivers on every promise. The timeline, the budget, the quality—everything exceeded our expectations. He's a true craftsman.", name: "Michael & Lisa", neighborhood: "Washington Park", project: "4,800 sq ft" },
		{ quote: "We interviewed six builders before finding John. The difference was night and day. He listens, he cares, and he delivers homes that become family heirlooms.", name: "David", neighborhood: "LoDo", project: "3,600 sq ft" },
		{ quote: "Three homes later, we wouldn't trust anyone else. John's integrity and attention to detail are unmatched. He's become part of our family's story.", name: "Jennifer & Mark", neighborhood: "Highland", project: "4,200 sq ft" },
		{ quote: "Our mountain retreat is everything we imagined and more. John understood our vision for indoor-outdoor living and made it a reality. Simply breathtaking.", name: "Robert & Maria", neighborhood: "Golden", project: "6,000 sq ft" },
		{ quote: "The level of communication throughout our build was exceptional. We always knew where things stood, and the finished home exceeded our wildest dreams.", name: "Chris & Amy", neighborhood: "Capitol Hill", project: "3,800 sq ft" }
	],
	contact: {
		headline: "Your Story Starts Here",
		description: "Every great home begins with a conversation. Let's discuss your vision, explore possibilities, and start crafting the home you've always imagined."
	}
};
