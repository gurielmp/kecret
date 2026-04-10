export const siteConfig = {
  name: "Zennelis Creative",
  legalName: "Zennelis Creative",
  description:
    "A digital agency for brands that need social media management, company websites, and a sharper operating system for marketing execution.",
  url: "https://zennelis.com",
  contactEmail: "hello@zennelis.com",
  locale: "en_US",
  keywords: [
    "digital agency",
    "social media agency",
    "web design agency",
    "company profile website",
    "landing page agency",
    "content management",
    "brand strategy",
    "website development",
  ],
  socialImage: "/og/zennelis-og.svg",
  stats: [
    {
      value: "360°",
      label: "From strategy and content to a credible web presence.",
    },
    {
      value: "48h",
      label: "Fast feedback cycles for campaigns, reviews, and iteration.",
    },
    {
      value: "1 base",
      label:
        "One foundation for content and web assets that can scale with the brand.",
    },
  ],
  services: [
    {
      kicker: "Social Media",
      name: "Content & channel management",
      description:
        "For brands that need a reliable publishing rhythm, clearer content direction, and consistent execution.",
      items: [
        "Content pillars and monthly planning",
        "Caption writing and publishing support",
        "Monthly reporting and insight reviews",
      ],
    },
    {
      kicker: "Website",
      name: "Company profile & landing page",
      description:
        "For businesses that need a fast, credible website that can evolve into a stronger conversion funnel.",
      items: [
        "Information architecture and copy direction",
        "Responsive UI for desktop and mobile",
        "CMS-ready structure for future content updates",
      ],
    },
    {
      kicker: "Growth Support",
      name: "Campaign asset & optimization",
      description:
        "For launches, promotions, and lead generation work that needs sharper assets and tighter decision-making.",
      items: [
        "Creative briefs for campaigns",
        "Landing page refinement and CTA audits",
        "Support assets for ads and outreach",
      ],
    },
  ],
  process: [
    {
      title: "Discover",
      description:
        "Understand the brand objective, target audience, and the main bottlenecks in the current marketing stack.",
    },
    {
      title: "Structure",
      description:
        "Define the service scope, page architecture, and the deliverables that actually matter first.",
    },
    {
      title: "Build",
      description:
        "Execute content, visuals, and website work with reusable building blocks and minimal duplication.",
    },
    {
      title: "Refine",
      description:
        "Review performance, improve the copy and CTA flow, and expand the system with better precision.",
    },
  ],
  packages: [
    {
      name: "Starter",
      description:
        "For businesses that need a clean digital presence without overbuilding.",
      price: "From $400",
      billing: "per project or monthly, depending on scope",
      featured: false,
      items: [
        "Core company profile website",
        "3-4 primary pages",
        "Direction for copy and visual structure",
      ],
    },
    {
      name: "Growth",
      description:
        "The core package for brands that need both website execution and content support.",
      price: "From $900",
      billing: "custom scope with funnel and content priorities",
      featured: true,
      items: [
        "Company website or focused landing page",
        "Monthly social media planning",
        "More structured CTA and inquiry flow",
      ],
    },
    {
      name: "Retainer",
      description:
        "For ongoing production, continuous updates, and a steadier delivery rhythm.",
      price: "Custom",
      billing: "monthly retainer based on deliverables",
      featured: false,
      items: [
        "Content and campaign asset management",
        "Website updates and light maintenance",
        "Recurring reviews for the next experiment",
      ],
    },
  ],
} as const;
