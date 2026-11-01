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
  principle: string;
  description: string;
  artwork: "serein" | "goodkind" | "northstar" | "mira" | "field";
  surface: "orange" | "mint" | "ink";
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
    principle: "Objects before interface.",
    description:
      "A visual and digital identity for a homeware concept built around useful objects, honest materials, and quieter design.",
    artwork: "serein",
    surface: "orange",
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
    principle: "The useful pause.",
    description:
      "A campaign concept that follows the people, places, and small rituals behind a neighbourhood coffee brand.",
    artwork: "goodkind",
    surface: "mint",
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
    principle: "One workflow at a time.",
    description:
      "A launch experience for a fictional software product, built to make its value easier to grasp and its next step easier to take.",
    artwork: "northstar",
    surface: "ink",
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
  {
    slug: "mira-skincare",
    title: "Mira Skincare",
    category: "Brand concept",
    industry: "Beauty and personal care",
    type: "Brand direction, photography, content, and e-commerce experience",
    services: ["Brand direction", "Content and storytelling", "Photography and film", "Web and digital experience"],
    surface: "mint",
    label: "Independent concept project",
    year: "2026",
    principle: "Fewer products, more reason.",
    description:
      "A visual identity and commerce experience for a skincare concept built on a small, honest product range and a calm, editorial tone.",
    artwork: "mira",
    brief:
      "Mira Skincare is a fictional skincare label created for this study. The brief was to build a brand and e-commerce experience for a small range of products with a clear point of view: fewer products, more reason. The audience is tired of cluttered shelves and louder-than-necessary claims.",
    opportunity:
      "The skincare category is loud. Most brands compete on ingredient lists, clinical language, or lifestyle imagery that has nothing to do with the product. Mira's opportunity was to be the opposite: quiet, specific, and useful. The product should feel considered, not marketed.",
    direction:
      "The direction was built around calm clarity. A mint and cream palette, close-up product photography with natural light, and copy that explains what each product does without exaggeration. The identity uses a single thin rule and generous spacing to let the product breathe.",
    work:
      "The concept includes a wordmark and visual direction, a product photography system, responsive product page layouts, an editorial story structure, and a content plan for the first collection. Every image was art directed for the concept.",
    details: [
      {
        title: "Product first, promise second",
        description:
          "Product pages open with a close-up image and a one-line description of what the product does. The ingredient list and usage follow, not precede.",
      },
      {
        title: "Calm, not clinical",
        description:
          "The tone is specific and warm. No before-and-after imagery, no percentages, no invented trial results. The product speaks through the image and the explanation.",
      },
      {
        title: "One range, one rhythm",
        description:
          "The product grid uses a single column on mobile and a calm two-column layout on desktop. The spacing is generous. The next step is always close.",
      },
    ],
    measure:
      "If launched, success would be measured against qualified product enquiries, add-to-cart rate, and the share of visitors who reach a second product. These are proposed measures, not achieved results.",
    gallery: [
      { caption: "Identity study: mark, thin rule, and range numbering.", scene: 1 },
      { caption: "Art direction study: product forms, surface, and material detail.", scene: 2 },
      { caption: "Commerce study: product story, supporting detail, and next step.", scene: 3 },
    ],
  },
  {
    slug: "field-and-forge",
    title: "Field and Forge",
    category: "Campaign concept",
    industry: "Outdoor and lifestyle",
    type: "Campaign concept, film, photography, and social content",
    services: ["Content and storytelling", "Photography and film", "Social and community", "Marketing and growth"],
    surface: "orange",
    label: "Independent concept project",
    year: "2026",
    principle: "Built for the long walk.",
    description:
      "A campaign concept for an outdoor gear brand, built around the idea of equipment that earns its place over years, not seasons.",
    artwork: "field",
    brief:
      "Field and Forge is a fictional outdoor gear brand created for this study. The brief was to introduce the brand through the idea of equipment that earns its place over years, not seasons. The audience is not an enthusiast who tracks gear specs. It is someone who wants one good jacket, one good pack, and the confidence that both will last.",
    opportunity:
      "Outdoor brands usually sell performance. Field and Forge's opportunity was to sell durability and honesty. Show the jacket at the end of a long walk, not at the start. Show the pack with a repair patch, not fresh from the factory. Let the wear be the proof.",
    direction:
      "The idea was built for the long walk. A campaign built around endurance, honest materials, and the small rituals of outdoor life. Warm daylight, hands, weathered surfaces, and imperfect conditions. The visual language pairs wide landscape frames with close detail shots. Copy stays plain and observational, with no performance claims.",
    work:
      "The concept includes a 60-second brand film treatment, a four-part vertical series, a stills library, a social content system, and caption guidelines. The rollout is designed to work across a shop window, a phone screen, and a paid social placement without losing its tone.",
    details: [
      {
        title: "Wear as proof",
        description:
          "The campaign shows equipment after use, not before. The jacket is wet. The pack has a patch. The boots are scuffed. The wear tells the story.",
      },
      {
        title: "One idea, several formats",
        description:
          "The film, stills, and social edits are planned together. Each asset has its own job, but all of them return to the same set of rituals rather than becoming separate campaigns.",
      },
      {
        title: "A social system, not a content pile",
        description:
          "Four repeating content types give the team a practical publishing rhythm. The system leaves room for community replies and behind-the-scenes moments instead of filling every slot in advance.",
      },
    ],
    measure:
      "If launched, the concept would be assessed on recall among local customers, saves and shares on the ritual series, and the number of people who use the campaign's in-store prompt. These are proposed measures, not achieved results.",
    gallery: [
      { caption: "Campaign study: built for the long walk, expressed as type and daylight.", scene: 1 },
      { caption: "Photography study: weather, surfaces, and the details that survive.", scene: 2 },
      { caption: "Social study: a repeatable vertical format for the four-part series.", scene: 3 },
    ],
  },
  {
    slug: "common-ground",
    title: "Common Ground",
    category: "Hospitality concept",
    industry: "Hospitality and members' clubs",
    type: "Brand direction, photography, social content, and digital experience",
    services: ["Brand direction", "Content and storytelling", "Photography and film", "Social and community", "Web and digital experience"],
    surface: "orange",
    label: "Independent concept project",
    year: "2026",
    principle: "A room worth returning to.",
    description:
      "A brand and digital experience for a neighbourhood members' club, built around the people, rituals, and rooms that make a place feel like yours.",
    artwork: "serein",
    brief:
      "Common Ground is a fictional neighbourhood members' club created for this study. The brief was to build a brand and digital experience that communicated belonging without exclusivity. The club needed to feel considered and warm, not members-only in the restrictive sense.",
    opportunity:
      "Most members' clubs sell status. Common Ground's opportunity was to sell familiarity. The work needed to show the room at the end of the day, the regular at the corner table, the staff who remember how you take your coffee. Belonging is built from small repetitions, not a membership card.",
    direction:
      "The direction was built around the idea of a room worth returning to. A warm palette, close, observational photography, and a digital experience that shows the space before it asks for a booking. The identity uses a simple geometric mark and a generous editorial layout.",
    work:
      "The concept includes a visual identity, a photography system, a social content plan, a membership enquiry flow, and a responsive website structure. The work is designed to show the club honestly: the rooms, the people, and the rituals that make it feel lived in.",
    details: [
      {
        title: "Show the room first",
        description:
          "The homepage opens with the space, not the membership. The photography shows the light, the furniture, and the small details that tell a visitor what the club feels like.",
      },
      {
        title: "Membership without the gate",
        description:
          "The enquiry flow is simple and human. It asks what brings you in, not how much you earn. The tone stays warm and direct.",
      },
      {
        title: "A social rhythm",
        description:
          "The content plan follows the club's week: quiet mornings, long lunches, evening events. The system gives the team a practical rhythm without turning the feed into a noticeboard.",
      },
    ],
    measure:
      "If launched, success would be measured against qualified membership enquiries, tour bookings, and the share of visitors who return to the site within a month. These are proposed measures, not achieved results.",
    gallery: [
      { caption: "Identity study: the mark, the room, and the return visit.", scene: 1 },
      { caption: "Photography study: light, furniture, and the details that make a room.", scene: 2 },
      { caption: "Digital study: the space before the ask.", scene: 3 },
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

export type Note = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  body: string[];
};

export const notes: Note[] = [
  {
    slug: "why-six-perspectives",
    title: "Why six perspectives beat one generalist",
    date: "2026",
    readingTime: "4 min read",
    excerpt:
      "A generalist can do a lot of things adequately. Six specialists working from one brief can do them well, and the work holds together.",
    body: [
      "A generalist can do a lot of things adequately. Six specialists working from one brief can do them well, and the work holds together.",
      "The difference is not talent. It is attention. A photographer notices light. A writer notices rhythm. A developer notices friction. A growth lead notices audience. A client partner notices the person behind the brief. None of those observations is replaceable by the others.",
      "When one person does all of it, the observations blur. The work gets made, but it gets made from a single angle. That angle is usually the one the person is most comfortable with, not the one the problem needs.",
      "Six perspectives do not mean six people doing six separate jobs. It means six people looking at the same problem early, when the decisions are still cheap to change.",
      "The number is not a gimmick. It is a reminder that good work is rarely the product of one way of seeing.",
    ],
  },
  {
    slug: "the-brief-is-the-project",
    title: "The brief is the project",
    date: "2026",
    readingTime: "3 min read",
    excerpt:
      "Most projects do not fail in execution. They fail in the brief, where the objective was never agreed clearly enough to judge against.",
    body: [
      "Most projects do not fail in execution. They fail in the brief, where the objective was never agreed clearly enough to judge against.",
      "A brief is not a list of deliverables. It is a shared understanding of what needs to change, for whom, and how we will know if it worked. Without that, every decision becomes a matter of opinion.",
      "We spend a disproportionate amount of time at the start of a project. Not because we are slow, but because the cost of a wrong assumption compounds. A wrong assumption in week one becomes a wrong direction by week four, and a wrong outcome by week eight.",
      "The best briefs are short. They name the problem, the audience, the constraint, and the measure. Everything else is a decision, not a given.",
      "If the brief is unclear, we would rather pause than produce. A beautiful campaign against the wrong objective is still a failure.",
    ],
  },
  {
    slug: "concept-work-honestly",
    title: "Concept work, labelled honestly",
    date: "2026",
    readingTime: "3 min read",
    excerpt:
      "A new studio has no client history. The honest response is to make the work anyway and label it clearly. The dishonest response is to invent one.",
    body: [
      "A new studio has no client history. The honest response is to make the work anyway and label it clearly. The dishonest response is to invent one.",
      "Every project in our portfolio is self-initiated. We set the brief, defined the audience, and produced the work. The names are working names. The outcomes are intended measures, not achieved results.",
      "This is not a compromise. A well-made concept project demonstrates more than a polished case study for a real client, because it shows the thinking without the safety of a real constraint. It shows what the team would do if trusted.",
      "We label every piece of concept work as concept work. We do not invent client names, metrics, testimonials, or awards. If a project does not have evidence behind it, we say so.",
      "The alternative is a portfolio full of claims that cannot be verified. That is not a portfolio. It is a brochure.",
    ],
  },
];

export const studioFacts = [
  {
    title: "Six disciplines, one brief",
    description:
      "Strategy, content, image, motion, growth, and digital experience work from the same objective, audience, and measurement plan.",
  },
  {
    title: "One named point of contact",
    description:
      "Every project has a clear route through the work, from the first conversation to the final handover.",
  },
  {
    title: "Concept-led portfolio",
    description:
      "The first release shows self-initiated studies, labelled honestly. Real client work will be added only when it can be published.",
  },
  {
    title: "Partner-supported specialists",
    description:
      "Dedicated brand design leadership, specialist search, and community management at scale can be supported by trusted partners.",
  },
  {
    title: "Measurement before launch",
    description:
      "Success is agreed before campaigns begin. We separate evidence from expectation and report both clearly.",
  },
];

export const questions = [
  {
    id: "change",
    question: "What needs to change?",
    answer:
      "We start with the business problem, not the deliverable list. The first conversation is about the outcome you need, the audience it affects, and what has already been tried.",
  },
  {
    id: "audience",
    question: "Who needs to care?",
    answer:
      "A clear brand is not for everyone. We define the people the work needs to reach and the action it should make easier, then decide which channels deserve attention.",
  },
  {
    id: "measure",
    question: "What will we measure?",
    answer:
      "We agree on signs of progress before production starts. For concept work, we state intended measures rather than claimed results. For live work, we report against the agreed objective.",
  },
  {
    id: "leave-out",
    question: "What can we leave out?",
    answer:
      "Scope discipline is part of the work. We would rather make fewer things properly than fill a proposal with outputs that do not serve the objective.",
  },
  {
    id: "connected",
    question: "How do six people stay connected?",
    answer:
      "One shared brief, one named point of contact, and a process that keeps specialists close to the decisions. The work is reviewed as a whole, not handed between silos.",
  },
];
