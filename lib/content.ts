export type Service = {
  index: string;
  slug: string;
  title: string;
  shortTitle: string;
  purpose: string;
  summary: string;
  outcome: string;
  deliverables: string[];
  note?: string;
};

export const services: Service[] = [
  {
    index: "01",
    slug: "brand-direction",
    title: "Brand direction",
    shortTitle: "Brand",
    purpose: "Find the point of view.",
    summary:
      "Positioning, brand foundations, messaging direction, and visual identity support. We help define what makes a business distinct and how that difference should come across.",
    outcome: "A clear position the whole team can work from.",
    deliverables: [
      "Brand and competitor discovery",
      "Audience and positioning work",
      "Brand story and messaging framework",
      "Naming support, where scoped",
      "Visual identity direction",
      "Logo and identity design through the assigned design lead or partner",
      "Brand guidelines and launch assets",
    ],
  },
  {
    index: "02",
    slug: "content-and-storytelling",
    title: "Content and storytelling",
    shortTitle: "Content",
    purpose: "Give the brand something worth saying.",
    summary:
      "We build content systems around audience needs, brand voice, and business goals. From campaign concepts to the words on a page, every piece has a job.",
    outcome: "A voice and a content system that hold together.",
    deliverables: [
      "Content and channel strategy",
      "Content pillars and editorial planning",
      "Campaign concepts",
      "Brand voice and messaging",
      "Website and landing-page copy",
      "Captions, scripts, and founder content",
      "Creative briefs and content calendars",
    ],
  },
  {
    index: "03",
    slug: "photography-and-film",
    title: "Photography and film",
    shortTitle: "Production",
    purpose: "Make the details visible, then put the idea in motion.",
    summary:
      "Product, people, places, and moments photographed with a clear direction, then shaped into film that gives the work presence. We plan every frame around where it will be used and what it needs to say.",
    outcome: "A coherent image and motion library built for real use.",
    deliverables: [
      "Product and e-commerce photography",
      "Lifestyle, editorial, portrait, and location shoots",
      "Brand and campaign films",
      "Product demonstrations and explainers",
      "Short-form social video, reels, and vertical edits",
      "Creative direction, shot planning, and production",
      "Editing, colour, sound, motion graphics, and asset delivery",
    ],
  },
  {
    index: "04",
    slug: "social-and-community",
    title: "Social and community",
    shortTitle: "Social",
    purpose: "Build a presence worth returning to.",
    summary:
      "A consistent presence where the audience already spends time. We connect platform strategy, publishing, and community care so the brand stays useful between campaigns.",
    outcome: "A publishing rhythm and a community that knows what to expect.",
    deliverables: [
      "Platform selection and channel strategy",
      "Monthly content calendars",
      "Content adaptation and publishing",
      "Community engagement and moderation",
      "Social listening and audience feedback",
      "Monthly channel reporting and recommendations",
    ],
    note: "Ongoing community management can be supported by a specialist partner until dedicated capacity is in place.",
  },
  {
    index: "05",
    slug: "marketing-and-growth",
    title: "Marketing and growth",
    shortTitle: "Growth",
    purpose: "Put the work in front of the right people.",
    summary:
      "We connect channel choices, creative testing, paid distribution, and measurement. The aim is to learn what reaches the right audience and what moves them to act.",
    outcome: "Better decisions about where attention comes from and what it does next.",
    deliverables: [
      "Social media strategy and channel planning",
      "Paid campaign planning and management",
      "Meta, Google, and LinkedIn advertising where suitable",
      "Audience research and creative testing",
      "Landing-page coordination",
      "Lead-generation campaigns",
      "Campaign measurement and reporting",
    ],
    note: "Marketing results depend on the offer, market, budget, timing, tracking, website, and sales process. We report honestly and do not promise a guaranteed result.",
  },
  {
    index: "06",
    slug: "web-and-digital-experience",
    title: "Web and digital experience",
    shortTitle: "Digital",
    purpose: "Make the next step easy.",
    summary:
      "We design and build digital experiences that help people understand an offer, find what they need, and take a useful next step.",
    outcome: "A fast, accessible experience with a clear path from interest to action.",
    deliverables: [
      "Website strategy and structure",
      "UX and interface design",
      "Brand and campaign websites",
      "Landing pages",
      "E-commerce experiences",
      "Front-end and back-end development",
      "Forms, APIs, and third-party integrations",
      "Analytics and event tracking",
      "Technical SEO foundations",
    ],
  },
];

export type MethodStage = {
  index: string;
  name: string;
  headline: string;
  description: string;
  output: string;
};

export const method: MethodStage[] = [
  {
    index: "01",
    name: "Understand",
    headline: "Listen before making.",
    description:
      "We start with the business, not the deliverable list. We ask what needs to change, who it needs to matter to, and what is already known. Existing analytics, brand material, and previous work all inform the brief.",
    output: "Discovery summary, problem definition, audience assumptions, and baseline measures.",
  },
  {
    index: "02",
    name: "Position",
    headline: "Find the focus.",
    description:
      "We agree on the audience, message, priorities, scope, and signs of progress. The team knows what the work is meant to do before production begins, and which channels deserve attention first.",
    output: "Positioning direction, key message, creative direction, priority channels, and agreed scope.",
  },
  {
    index: "03",
    name: "Create",
    headline: "Shape the idea, then make the work.",
    description:
      "We set the creative direction and decide how the story should look, sound, read, and behave. The right people lead their disciplines, feedback stays focused, and every output belongs to the same larger idea.",
    output: "Approved creative direction, copy, identity assets, photography, film, website components, and campaign material.",
  },
  {
    index: "04",
    name: "Distribute",
    headline: "Put it to work.",
    description:
      "We publish, launch, distribute, or hand over the work with the practical details in place. Where appropriate, tracking is configured and checked before anything goes live.",
    output: "Live content, campaigns, landing pages, and a verified tracking plan.",
  },
  {
    index: "05",
    name: "Convert",
    headline: "Make the next step easier.",
    description:
      "We look at the path from attention to enquiry, booking, sign-up, or purchase. We fix friction in the message, the page, the form, or the follow-up, and record what changed.",
    output: "A tested conversion journey and a record of the changes made.",
  },
  {
    index: "06",
    name: "Optimise",
    headline: "Learn, then improve.",
    description:
      "We review what happened against the agreed objective. We keep what works, address what does not, and use the learning to guide the next step rather than starting over.",
    output: "A transparent report, insights, next priorities, and an updated test plan.",
  },
];

export type Perspective = {
  index: string;
  name: string;
  role: string;
  brings: string;
  description: string;
};

export const perspectives: Perspective[] = [
  {
    index: "01",
    name: "The Builder",
    role: "Founder and Head of Digital Experience",
    brings: "A useful, fast, accessible digital experience.",
    description:
      "A good idea needs somewhere useful to live. The Builder turns direction into websites, interfaces, integrations, and digital tools that work as well as they look.",
  },
  {
    index: "02",
    name: "The Observer",
    role: "Photography and Visual Production Lead",
    brings: "An eye for the detail that makes people look twice.",
    description:
      "The smallest visual detail can change how a brand is remembered. The Observer finds the light, texture, angle, and human detail that make an image feel considered.",
  },
  {
    index: "03",
    name: "The Director",
    role: "Film and Motion Lead",
    brings: "Movement, pace, and a visual sequence.",
    description:
      "A story changes when it moves. The Director gives ideas rhythm through filming, editing, sound, and motion.",
  },
  {
    index: "04",
    name: "The Growth Thinker",
    role: "Growth and Performance Marketing Lead",
    brings: "A connection between creative work and the business objective.",
    description:
      "Attention is only the beginning. The Growth Thinker asks who needs to see the work, where they will find it, and what should happen next.",
  },
  {
    index: "05",
    name: "The Story Editor",
    role: "Content and Communications Strategist",
    brings: "The right words, structure, and tone.",
    description:
      "Clear communication is a craft. The Story Editor gives a business its words, structure, tone, and content direction.",
  },
  {
    index: "06",
    name: "The Connector",
    role: "Client Partner and Delivery Producer",
    brings: "A brief, a plan, and a team that stays in step.",
    description:
      "Good work depends on good collaboration. The Connector makes sure the brief, people, feedback, and deadlines stay aligned.",
  },
];

export const values = [
  {
    title: "Clear thinking",
    description: "We want to understand the problem before choosing the format or tool.",
  },
  {
    title: "Care for the craft",
    description:
      "The details matter, whether the work is a line of copy, a frame, a campaign, or a line of code.",
  },
  {
    title: "Useful collaboration",
    description:
      "Good feedback is specific. Good decisions are shared. Good communication makes the process easier for everyone.",
  },
  {
    title: "Honest outcomes",
    description:
      "We show what was made, explain what was learned, and separate evidence from expectation.",
  },
  {
    title: "Work with a purpose",
    description:
      "We do not add deliverables to make a proposal look bigger. Every part should have a reason to be there.",
  },
];

export const engagements = [
  {
    title: "Project engagements",
    description:
      "Defined work such as a brand launch, campaign production, website, or product launch. These have a written scope, milestones, review rounds, and handover.",
  },
  {
    title: "Ongoing growth partnerships",
    description:
      "An agreed monthly scope across selected service pillars. These include a planning session, monthly priorities, regular check-ins, and a performance review. Not every client needs all six services every month.",
  },
];

export const firstNinetyDays = [
  {
    period: "Days 1 to 15",
    focus: "Discovery and direction",
    activities: "Business review, audience, positioning, analytics baseline, priorities, scope.",
  },
  {
    period: "Days 16 to 30",
    focus: "Build the foundation",
    activities:
      "Brand and content direction, creative production plan, website or landing-page plan, measurement setup.",
  },
  {
    period: "Days 31 to 60",
    focus: "Launch and distribute",
    activities:
      "Publish content, launch website and campaigns, test creative and channel assumptions.",
  },
  {
    period: "Days 61 to 90",
    focus: "Learn and improve",
    activities:
      "Review results, improve weak points, scale what is working responsibly, agree the next-quarter plan.",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  industry: string;
  type: string;
  services: string[];
  label: string;
  year: string;
  description: string;
  artwork: "serein" | "goodkind" | "northstar";
  brief: string;
  opportunity: string;
  direction: string;
  work: string;
  details: { title: string; description: string }[];
  measure: string;
  gallery: { caption: string; scene: 1 | 2 | 3 }[];
};

export const projects: Project[] = [
  {
    slug: "serein-objects",
    title: "Serein Objects",
    category: "Homeware concept",
    industry: "Lifestyle and home goods",
    type: "Brand direction, photography, content, and e-commerce experience",
    services: ["Brand direction", "Content and storytelling", "Photography and film", "Web and digital experience"],
    label: "Independent concept project",
    year: "2026",
    description:
      "A visual and digital identity for a homeware concept built around useful objects, honest materials, and quieter design.",
    artwork: "serein",
    brief:
      "Serein Objects is a fictional homeware label created for this study. The brief was to build a brand and e-commerce experience for a small collection of everyday objects made from honest materials, without the visual noise that usually surrounds direct-to-consumer homeware.",
    opportunity:
      "Most homeware brands compete on novelty. Serein's opportunity was the opposite: make familiar objects feel considered, slow the pace of the page, and let material, proportion, and use carry the story. The customer should want fewer, better things rather than more.",
    direction:
      "The direction was built around quiet attention. A warm stone palette, an editorial product layout, and photography that treats a jug or a tray with the same care as a collectible object. The identity uses a single curved rule, drawn from the handle of a cup, as its one repeating gesture.",
    work:
      "The concept includes a wordmark and visual direction, a product photography system, responsive product page layouts, an editorial story structure, packaging studies, and a launch content plan for the first collection. Every image was art directed for the concept rather than borrowed from stock.",
    details: [
      {
        title: "Objects before interface",
        description:
          "Product pages open with a full-bleed image and a short line about use, not a wall of specifications. Details follow only once the object has had room to be seen.",
      },
      {
        title: "One gesture, repeated",
        description:
          "The curved rule appears in the mark, section breaks, and packaging tape. It gives the system a recognisable signature without adding another decorative element to every screen.",
      },
      {
        title: "A calmer grid",
        description:
          "Wide margins and a single-column product story give the images room. On mobile, the grid collapses to one clear reading order with the next step kept close.",
      },
    ],
    measure:
      "If launched, success would be measured against qualified product enquiries, add-to-cart rate, and the share of visitors who reach a second product. These are proposed measures for a concept, not achieved results.",
    gallery: [
      { caption: "Identity study: mark, curved rule, and collection numbering.", scene: 1 },
      { caption: "Art direction study: vessel forms, surface, and material detail.", scene: 2 },
      { caption: "Commerce study: product story, supporting detail, and next step.", scene: 3 },
    ],
  },
  {
    slug: "goodkind-coffee",
    title: "Goodkind Coffee",
    category: "Campaign concept",
    industry: "Food and beverage",
    type: "Campaign concept, film, photography, and social content",
    services: ["Content and storytelling", "Photography and film", "Social and community", "Marketing and growth"],
    label: "Independent concept project",
    year: "2026",
    description:
      "A campaign concept that follows the people, places, and small rituals behind a neighbourhood coffee brand.",
    artwork: "goodkind",
    brief:
      "Goodkind Coffee is a fictional neighbourhood coffee brand created for this study. The brief was to introduce the place through the ritual around the cup rather than the usual language of origin, roast, and equipment. The audience already drinks coffee. The question is why they should choose this room, this counter, and these people.",
    opportunity:
      "Specialty coffee often speaks to enthusiasts and leaves everyone else out. Goodkind's opportunity was to make the brand generous and familiar. Show the first quiet minute of a working day, the conversation that runs longer than planned, the walk to the counter. Let the product appear inside a life.",
    direction:
      "The idea was the useful pause. A campaign built around small rituals, warm daylight, hands, tables, and imperfect surfaces. The visual language pairs close, tactile stills with short vertical films. Copy stays plain and observational, with no grand claims about coffee changing your morning.",
    work:
      "The concept includes a 45-second brand film treatment, a six-part vertical series, a stills library, a social content system, in-store cards, and caption guidelines. The rollout is designed to work across a shop window, a phone screen, and a paid social placement without losing its tone.",
    details: [
      {
        title: "One idea, several formats",
        description:
          "The film, stills, and social edits are planned together. Each asset has its own job, but all of them return to the same set of rituals rather than becoming separate campaigns.",
      },
      {
        title: "Familiar, not nostalgic",
        description:
          "The grade is warm but the compositions are contemporary. Hands and everyday surfaces do the storytelling, which keeps the work human without styling the brand as a period piece.",
      },
      {
        title: "A social system, not a content pile",
        description:
          "Six repeating content types give the team a practical publishing rhythm. The system leaves room for community replies and behind-the-counter moments instead of filling every slot in advance.",
      },
    ],
    measure:
      "If launched, the concept would be assessed on recall among local customers, saves and shares on the ritual series, and the number of people who use the campaign's in-store prompt. These are proposed measures, not achieved results.",
    gallery: [
      { caption: "Campaign study: the useful pause, expressed as type and daylight.", scene: 1 },
      { caption: "Photography study: hands, surfaces, and the rituals around the cup.", scene: 2 },
      { caption: "Social study: a repeatable vertical format for the six-part series.", scene: 3 },
    ],
  },
  {
    slug: "northstar-work",
    title: "Northstar Work",
    category: "Launch concept",
    industry: "SaaS and technology",
    type: "Launch strategy, landing page, and lead-generation concept",
    services: ["Brand direction", "Content and storytelling", "Marketing and growth", "Web and digital experience"],
    label: "Independent concept project",
    year: "2026",
    description:
      "A launch experience for a fictional software product, built to make its value easier to grasp and its next step easier to take.",
    artwork: "northstar",
    brief:
      "Northstar Work is a fictional work-management product created for this study. The product had a broad feature set and a familiar problem: buyers could not tell what it was for. The brief was to create a launch experience that explains one clear use case at a time and gives a prospective team an obvious next step.",
    opportunity:
      "Software buyers do not need the full feature list first. They need to recognise their own week. The opportunity was to lead with a single workflow, show the product in sequence, and let the breadth of the platform emerge after the core value is understood.",
    direction:
      "One clear use case at a time. The page follows a team's week from Monday planning to Friday review, using a restrained interface study and plain language. Claims stay specific and verifiable in the product. No invented customer logos, no fake analytics, no imaginary growth numbers.",
    work:
      "The concept includes positioning and messaging direction, landing-page structure, UX writing, a responsive page build, an enquiry form flow with validation states, and an analytics plan for launch. The interface study is clearly presented as a design concept rather than a screenshot of a live product.",
    details: [
      {
        title: "A sequence, not a feature wall",
        description:
          "Each section answers the next question a buyer would ask. The page moves from the familiar problem to the workflow, then to proof of how the product supports it, then to the trial.",
      },
      {
        title: "Plain language over product vocabulary",
        description:
          "Internal terms are translated into the moments a team would recognise. The interface study supports the words instead of becoming the only explanation.",
      },
      {
        title: "Measurement planned before launch",
        description:
          "The concept defines events for demo requests, pricing views, and workflow completion, so the launch could be judged on qualified interest rather than page views alone.",
      },
    ],
    measure:
      "If launched, success would be measured against qualified demo requests, landing-page completion, and the rate at which visitors reach the pricing view. These are proposed measures, not achieved results.",
    gallery: [
      { caption: "Positioning study: one workflow, one clear promise.", scene: 1 },
      { caption: "Interface study: a week in sequence, shown without invented metrics.", scene: 2 },
      { caption: "Launch study: the path from first visit to a qualified conversation.", scene: 3 },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string): Project {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}
