export type Service = {
  number: string;
  title: string;
  strapline: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    number: "01",
    title: "Brand direction",
    strapline: "Give the business a point of view.",
    description:
      "Before people recognise a brand, they need to understand it. We help define the position, message, and visual direction that make a business distinct and consistent.",
    deliverables: [
      "Brand and competitor discovery",
      "Audience and positioning work",
      "Brand story and messaging framework",
      "Visual identity direction",
      "Brand guidelines and launch assets",
    ],
  },
  {
    number: "02",
    title: "Content and storytelling",
    strapline: "Say something clearly. Then say it consistently.",
    description:
      "Good content is not a calendar full of posts. It is a useful point of view expressed in the right format, for the right audience, at the right moment.",
    deliverables: [
      "Content and channel strategy",
      "Content pillars and editorial planning",
      "Campaign concepts",
      "Brand voice and messaging",
      "Website and landing-page copy",
      "Captions, scripts, and founder content",
    ],
  },
  {
    number: "03",
    title: "Photography",
    strapline: "Images with a reason to exist.",
    description:
      "We create image libraries that help people see the product, the people, and the details behind a brand. The shoot is planned around where the images will be used and what each one needs to communicate.",
    deliverables: [
      "Product and e-commerce photography",
      "Lifestyle and editorial shoots",
      "Founder, team, and location portraits",
      "Campaign stills",
      "Creative direction and shot planning",
      "Retouching and asset delivery",
    ],
  },
  {
    number: "04",
    title: "Film and motion",
    strapline: "Make the story move.",
    description:
      "From a short product edit to a larger campaign film, we plan video around the message, audience, platform, and final use. We think about the opening frame, the pace, the sound, and the moment that should stay with the viewer.",
    deliverables: [
      "Brand and campaign films",
      "Product demonstrations",
      "Short-form social video",
      "Reels and vertical edits",
      "Interview and founder films",
      "Editing, colour, sound, and motion graphics",
    ],
  },
  {
    number: "05",
    title: "Marketing and growth",
    strapline: "Reach people for a reason.",
    description:
      "We plan marketing around the audience and the action that matters. We use creative, channel selection, testing, and measurement to make better decisions over time.",
    deliverables: [
      "Social media strategy and channel planning",
      "Paid campaign planning and management",
      "Audience research and creative testing",
      "Landing-page coordination",
      "Lead-generation campaigns",
      "Campaign measurement and reporting",
    ],
  },
  {
    number: "06",
    title: "Web and digital experience",
    strapline: "Build the experience around the next step.",
    description:
      "A website should do more than look presentable. It should help the right person understand the business, find useful information, trust what they see, and take action without unnecessary friction.",
    deliverables: [
      "Website strategy and structure",
      "UX and interface design",
      "Brand and campaign websites",
      "Landing pages",
      "Front-end and back-end development",
      "Forms, integrations, analytics, and technical SEO foundations",
    ],
  },
];
