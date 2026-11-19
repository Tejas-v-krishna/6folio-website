export type ArtVariant = "serein" | "goodkind" | "northstar";

export type Project = {
  slug: string;
  title: string;
  category: string;
  discipline: string;
  year: string;
  status: "Concept project";
  statusNote: string;
  summary: string;
  challenge: string;
  opportunity: string;
  direction: string;
  detailTitle: string;
  detailIntro: string;
  details: { title: string; body: string }[];
  deliverables: string[];
  intendedMeasure: string;
  art: ArtVariant;
};

export const projects: Project[] = [
  {
    slug: "serein-objects",
    title: "Serein Objects",
    category: "Lifestyle and home goods",
    discipline: "Brand direction, content, photography and digital experience",
    year: "2026",
    status: "Concept project",
    statusNote: "Self-initiated concept project by 6FOLIO. No client engagement is implied.",
    summary:
      "A visual and digital identity for a homeware concept built around useful objects, honest materials, and quieter design.",
    challenge:
      "The fictional brief imagined a small homeware label with a considered product range and a weak digital presence. The products had texture, weight, and a clear point of view, but the brand story read like a catalogue. The challenge was to make simple objects feel worth pausing for without inventing luxury provenance or using borrowed visual language.",
    opportunity:
      "Most homeware brands try to create desire through abundance. This concept explores the opposite: fewer images, slower pacing, and close attention to the material details that make an object useful and lasting. The opportunity was to build a calm identity that could still guide a visitor clearly toward a product.",
    direction:
      "A warm, editorial system built around the quiet rhythm of a room. Stone, clay, paper, and shadow became the visual foundation. The language avoided lifestyle promises and focused on form, material, and use.",
    detailTitle: "Let the object take up space.",
    detailIntro:
      "The system paired restrained type with images that allow the products to breathe. Every layout decision was tested against a simple idea: would this help someone notice the object more clearly?",
    details: [
      {
        title: "Art direction",
        body: "Objects were framed as quiet studies rather than styled scenes. Close crops, natural shadow, and a neutral set gave each piece its own visual weight.",
      },
      {
        title: "Content system",
        body: "Product descriptions paired practical detail with a sentence about how the object changes a daily ritual. The tone stayed specific, useful, and free of luxury cliches.",
      },
      {
        title: "Digital experience",
        body: "The product page placed material and dimension information beside the image rather than hiding it. A short editorial story created context before the product grid.",
      },
    ],
    deliverables: [
      "Positioning and brand foundations",
      "Visual direction",
      "Photography direction",
      "Product content model",
      "Website structure and interface direction",
    ],
    intendedMeasure:
      "The concept would be tested against product-page completion, saved items, and direct enquiries. These are proposed measures, not results from a live project.",
    art: "serein",
  },
  {
    slug: "goodkind-coffee",
    title: "Goodkind Coffee",
    category: "Food and beverage",
    discipline: "Campaign concept, film, photography and social content",
    year: "2026",
    status: "Concept project",
    statusNote: "Self-initiated concept project by 6FOLIO. No client engagement is implied.",
    summary:
      "A campaign concept that follows the people, places, and small rituals behind a neighbourhood coffee brand.",
    challenge:
      "The fictional brief was for a neighbourhood coffee brand that had strong regulars and little reach beyond its own street. The obvious route was to show more cups of coffee. The real challenge was to give people a reason to care before they had tasted anything.",
    opportunity:
      "Coffee is a small daily event shaped by routine. The concept focuses on the moments around the cup: the first conversation of the day, the walk that clears a head, the table where a plan begins. That shift gives the brand a broader cultural role without overstating its size.",
    direction:
      "A campaign language built from warm overlays, short observational films, and a repeating note of morning light. The imagery stayed grounded in real streets and real hands, with copy that sounds like something a person would actually say.",
    detailTitle: "The drink is the beginning.",
    detailIntro:
      "The concept treats the cup as an opening scene. A shared campaign idea gives photography, film, and social content one job: make the everyday ritual feel worth noticing.",
    details: [
      {
        title: "Campaign idea",
        body: "A simple prompt, one more minute, collects small stories about the part of the day that coffee makes better. It works across posters, short films, and social posts.",
      },
      {
        title: "Film direction",
        body: "Short observational edits follow a hand, a street, a conversation, and finally the cup. No voiceover is needed because the sequence carries the thought.",
      },
      {
        title: "Social system",
        body: "A repeatable set of formats turns one shoot into a daily rhythm without reducing the brand to a content calendar. Each post keeps a distinct human detail.",
      },
    ],
    deliverables: [
      "Campaign concept and messaging",
      "Photography direction",
      "Short-form film direction",
      "Social format system",
      "Launch content structure",
    ],
    intendedMeasure:
      "The concept would be assessed through repeat visit intent, content saves, and direct responses to the campaign prompt. These are proposed measures, not observed results.",
    art: "goodkind",
  },
  {
    slug: "northstar-work",
    title: "Northstar Work",
    category: "SaaS and technology",
    discipline: "Launch strategy, landing page and lead-generation concept",
    year: "2026",
    status: "Concept project",
    statusNote: "Self-initiated concept project by 6FOLIO. No client engagement is implied.",
    summary:
      "A launch experience for a fictional software product, built to make its value easier to grasp and its next step easier to take.",
    challenge:
      "The fictional product helped teams coordinate complex work across several roles. Its feature set was broad, but the story arrived as a list of capabilities. A new visitor could not quickly tell what the product changed, who it was for, or what to do next.",
    opportunity:
      "The launch could slow down. Instead of explaining every feature at once, the experience follows one clear use case from scattered updates to a shared decision. A single narrative gives the interface a job and makes the product feel tangible before a demo.",
    direction:
      "A cool, structured visual system with a periwinkle field, precise rules, and one strong signal colour. The content moves from recognition to clarity to action, with product detail introduced only after the value is understood.",
    detailTitle: "Make the next step obvious.",
    detailIntro:
      "The landing experience is built around one path: understand the problem, see the product in context, and decide whether a conversation is useful.",
    details: [
      {
        title: "Positioning",
        body: "The product is framed around shared decisions rather than task volume. That distinction gives every section a clear role in the argument.",
      },
      {
        title: "Interface narrative",
        body: "A sequence of abstract interface panels shows information becoming aligned. It communicates the product's value without pretending a finished app exists.",
      },
      {
        title: "Conversion path",
        body: "The primary action asks for a short working session, not a generic demo. Supporting copy sets an honest expectation about what the conversation covers.",
      },
    ],
    deliverables: [
      "Positioning and launch narrative",
      "Landing-page structure",
      "UX writing",
      "Interface direction",
      "Lead enquiry flow",
    ],
    intendedMeasure:
      "The concept would be reviewed against comprehension, demo requests, and completion of the enquiry flow. These are proposed measures, not measured outcomes.",
    art: "northstar",
  },
];

export const projectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const nextProject = (slug: string) => {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
};
