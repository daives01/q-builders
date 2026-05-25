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
  gallery: Array<{ src: string; alt: string }>;
  portfolio: Array<{
    neighborhood: string;
    title: string;
    image: { src: string; alt: string };
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
    },
    {
      src: "/gallery/wolf-bathroom.jpeg",
      alt: "Wolf bathroom",
    },
    {
      src: "/gallery/wolf-dining-room.jpeg",
      alt: "Wolf dining room",
    },
    {
      src: "/gallery/wolf-pantry.jpeg",
      alt: "Wolf pantry",
    },
    {
      src: "/gallery/lowell-living-room.jpg",
      alt: "Lowell living room",
    },
    {
      src: "/gallery/lowell-main-room.jpg",
      alt: "Lowell main room",
    },
    {
      src: "/gallery/lowell-bedroom.jpg",
      alt: "Lowell bedroom",
    },
    { src: "/gallery/mudroom.jpg", alt: "Mudroom" },
    {
      src: "/gallery/knox-kitchen.jpg",
      alt: "Knox kitchen",
    },
  ],
  portfolio: [
    {
      neighborhood: "Berkeley",
      title: "Wolff",
      image: {
        src: "/portfolio/wolff-st-2.jpg",
        alt: "Front exterior of a second Wolff Street custom home in Berkeley",
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
      title: "Wolff",
      image: {
        src: "/portfolio/wolff-st.jpg",
        alt: "Front exterior of a Wolff Street custom home in Berkeley",
      },
      stats: [
        { label: "Bedrooms + Office", value: "5" },
        { label: "Bathrooms", value: "6" },
        { label: "Square Feet", value: "5,710" },
        { label: "Garage", value: "2 Car" },
      ],
    },
    {
      neighborhood: "West Gold Meadows",
      title: "Brandt",
      image: {
        src: "/portfolio/brandt-pl.jpg",
        alt: "Exterior of a Brandt Place custom residence in West Gold Meadows",
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
      title: "Raleigh",
      image: {
        src: "/portfolio/raleigh-st-duplex.jpg",
        alt: "Completed exterior of a Raleigh Street duplex in Berkeley",
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
      },
      stats: [
        { label: "Units", value: "2" },
        { label: "Bedrooms", value: "3" },
        { label: "Bathrooms", value: "2.5" },
        { label: "Square Feet", value: "1,932" },
      ],
    },
    {
      neighborhood: "Berkeley",
      title: "Lowell",
      image: {
        src: "/portfolio/lowell-st.jpg",
        alt: "Exterior of a Lowell Street custom residence",
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
