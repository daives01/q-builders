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
  portfolio: Array<{
    neighborhood: string;
    title: string;
    image: { src: string; alt: string; width: number; height: number };
    stats: Array<{ label: string; value: string }>;
  }>;
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
    email: "qbuilders123@gmail.com",
  },
  about: {
    bio: "We are a premier custom home builder specializing in duplexes and luxury residences throughout Denver's front range. Our team combines exceptional craftsmanship with modern design to deliver homes that exceed expectations. From initial concept to final walkthrough, we handle every detail with precision and care.",
  },
  owner: {
    name: "Tommy Cagle",
    photo: "/profile-picture.jpg",
    bio: "With 20+ years in the construction industry, Tommy has gained deep knowledge of every step of the home build process. That experience allows him to avoid costly mistakes and unexpected delays, spot and fix issues before they cause problems, and find ways to save cost without sacrificing quality. He knows the right questions to ask to help clients realize their dream house.",
    title: "Owner",
  },
  gallery: [
    {
      src: "/gallery/wolf-living-room.jpeg",
      alt: "Wolf living room",
      width: 1600,
      height: 1200,
    },
    {
      src: "/gallery/wolf-bathroom.jpeg",
      alt: "Wolf bathroom",
      width: 1600,
      height: 1200,
    },
    {
      src: "/gallery/wolf-dining-room.jpeg",
      alt: "Wolf dining room",
      width: 1600,
      height: 1200,
    },
    {
      src: "/gallery/wolf-pantry.jpeg",
      alt: "Wolf pantry",
      width: 1600,
      height: 1200,
    },
    {
      src: "/gallery/bannock-duplex.jpg",
      alt: "Bannock duplex",
      width: 1151,
      height: 863,
    },
    {
      src: "/gallery/lowell-front.jpg",
      alt: "Lowell residence front",
      width: 1362,
      height: 1022,
    },
    {
      src: "/gallery/lowell-living-room.jpg",
      alt: "Lowell living room",
      width: 1192,
      height: 894,
    },
    {
      src: "/gallery/lowell-main-room.jpg",
      alt: "Lowell main room",
      width: 1192,
      height: 894,
    },
    {
      src: "/gallery/lowell-bedroom.jpg",
      alt: "Lowell bedroom",
      width: 1364,
      height: 1022,
    },
    { src: "/gallery/mudroom.jpg", alt: "Mudroom", width: 864, height: 648 },
    {
      src: "/gallery/knox-front.jpg",
      alt: "Knox residence front",
      width: 1124,
      height: 842,
    },
    {
      src: "/gallery/knox-kitchen.jpg",
      alt: "Knox kitchen",
      width: 1134,
      height: 850,
    },
    {
      src: "/gallery/knox-outside.jpg",
      alt: "Knox exterior",
      width: 1128,
      height: 846,
    },
  ],
  portfolio: [
    {
      neighborhood: "Berkeley",
      title: "Wolff",
      image: {
        src: "/portfolio/wolff-st.jpg",
        alt: "Front exterior of a Wolff Street custom home in Berkeley",
        width: 1024,
        height: 768,
      },
      stats: [
        { label: "Bedrooms + Office", value: "5" },
        { label: "Bathrooms", value: "6" },
        { label: "Square Feet", value: "5,710" },
        { label: "Garage", value: "2 Car" },
      ],
    },
    {
      neighborhood: "Berkeley",
      title: "Wolff",
      image: {
        src: "/portfolio/wolff-st-2.jpg",
        alt: "Front exterior of a second Wolff Street custom home in Berkeley",
        width: 636,
        height: 477,
      },
      stats: [
        { label: "Bedrooms", value: "5" },
        { label: "Bathrooms", value: "6" },
        { label: "Square Feet", value: "5,170" },
        { label: "Garage", value: "2 Car" },
      ],
    },
    {
      neighborhood: "Platt Park",
      title: "Sherman",
      image: {
        src: "/portfolio/sherman-st.jpg",
        alt: "Front exterior and yard of a Sherman Street custom home in South Denver",
        width: 1024,
        height: 768,
      },
      stats: [
        { label: "Bedrooms", value: "4" },
        { label: "Bathrooms", value: "3.5" },
        { label: "Square Feet", value: "2,398" },
        { label: "Garage", value: "2 Car" },
      ],
    },
    {
      neighborhood: "Berkeley",
      title: "Raleigh",
      image: {
        src: "/portfolio/raleigh-st-duplex.jpg",
        alt: "Completed exterior of a Raleigh Street duplex in Berkeley",
        width: 1600,
        height: 1200,
      },
      stats: [
        { label: "Units", value: "2" },
        { label: "Bedrooms", value: "3" },
        { label: "Bathrooms", value: "2.5" },
        { label: "Square Feet", value: "2,379" },
      ],
    },
    {
      neighborhood: "Berkeley",
      title: "Raleigh",
      image: {
        src: "/portfolio/raleigh-st-residence.jpg",
        alt: "Exterior of a Raleigh Street residence in Berkeley",
        width: 1024,
        height: 768,
      },
      stats: [
        { label: "Units", value: "2" },
        { label: "Bedrooms", value: "3" },
        { label: "Bathrooms", value: "2.5" },
        { label: "Square Feet", value: "1,932" },
      ],
    },
    {
      neighborhood: "West Gold Meadows",
      title: "Brandt",
      image: {
        src: "/portfolio/brandt-pl.jpg",
        alt: "Exterior of a Brandt Place custom residence in West Gold Meadows",
        width: 1024,
        height: 768,
      },
      stats: [
        { label: "Bedrooms", value: "4" },
        { label: "Bathrooms", value: "3.5" },
        { label: "Square Feet", value: "3800" },
        { label: "Garage", value: "2" },
      ],
    },
    {
      neighborhood: "Berkeley",
      title: "Lowell",
      image: {
        src: "/portfolio/lowell-st.jpg",
        alt: "Exterior of a Lowell Street custom residence",
        width: 1600,
        height: 1200,
      },
      stats: [
        { label: "Bedrooms", value: "5" },
        { label: "Bathrooms", value: "3.5" },
        { label: "Square Feet", value: "4688" },
        { label: "Garage", value: "3" },
      ],
    },
    {
      neighborhood: "Observatory Park",
      title: "Cook",
      image: {
        src: "/portfolio/cook-st.jpg",
        alt: "Exterior of a Cook Street luxury custom home in Observatory Park",
        width: 1364,
        height: 1023,
      },
      stats: [
        { label: "Bedrooms", value: "5" },
        { label: "Bathrooms", value: "6" },
        { label: "Square Feet", value: "5710" },
        { label: "Garage", value: "2" },
      ],
    },
  ],
  testimonials: [],
  contact: {
    headline: "Let's talk",
    description:
      "Thinking about building your dream home? We're just an email away.",
  },
};
