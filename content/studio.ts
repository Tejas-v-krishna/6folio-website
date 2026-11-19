export type TeamRole = {
  number: string;
  perspective: string;
  role: string;
  contribution: string;
};

export const teamRoles: TeamRole[] = [
  {
    number: "01",
    perspective: "The Builder",
    role: "Founder and Head of Digital Experience",
    contribution:
      "Turns the strategy into a useful, fast, accessible digital experience. Owns web architecture, development, integrations, and technical quality.",
  },
  {
    number: "02",
    perspective: "The Observer",
    role: "Photography and Visual Production Lead",
    contribution:
      "Notices the details that make a product, person, or place worth looking at. Owns still photography and visual production.",
  },
  {
    number: "03",
    perspective: "The Director",
    role: "Film and Motion Lead",
    contribution:
      "Gives ideas movement, pace, sound, and a visual sequence. Owns video production, editing, and motion-led content.",
  },
  {
    number: "04",
    perspective: "The Growth Thinker",
    role: "Growth and Performance Marketing Lead",
    contribution:
      "Connects creative work to the audience, channel, budget, and business objective. Owns campaign planning, paid media, testing, and measurement.",
  },
  {
    number: "05",
    perspective: "The Story Editor",
    role: "Content and Communications Strategist",
    contribution:
      "Finds the message inside the brief and shapes it into a voice people can understand. Owns messaging, content strategy, scripts, and copy.",
  },
  {
    number: "06",
    perspective: "The Connector",
    role: "Client Partner and Delivery Producer",
    contribution:
      "Keeps the work moving and the people aligned. Owns client communication, scope, schedule, approvals, and delivery coordination.",
  },
];

export const values = [
  {
    title: "Clear thinking",
    body: "We want to understand the problem before choosing the format or tool.",
  },
  {
    title: "Care for the craft",
    body: "The details matter, whether the work is a line of copy, a frame, a campaign, or a line of code.",
  },
  {
    title: "Useful collaboration",
    body: "Good feedback is specific. Good decisions are shared. Good communication makes the process easier for everyone.",
  },
  {
    title: "Honest outcomes",
    body: "We show what was made, explain what was learned, and separate evidence from expectation.",
  },
  {
    title: "Work with a purpose",
    body: "We do not add deliverables to make a proposal look bigger. Every part should have a reason to be there.",
  },
];

export const method = [
  {
    number: "01",
    title: "Listen",
    body: "We start with the business, not the deliverable list. We ask what needs to change, who it needs to matter to, and what is already known.",
  },
  {
    number: "02",
    title: "Find the focus",
    body: "We agree on the audience, message, priorities, scope, and signs of progress. The team knows what the work is meant to do before production begins.",
  },
  {
    number: "03",
    title: "Shape the idea",
    body: "We set the creative direction and decide how the story should look, sound, read, and behave across the relevant channels.",
  },
  {
    number: "04",
    title: "Make the work",
    body: "The right people take the lead on their disciplines. We keep feedback focused and make sure each output belongs to the same larger idea.",
  },
  {
    number: "05",
    title: "Put it to work",
    body: "We publish, launch, distribute, or hand over the work with the practical details in place. Where appropriate, tracking is configured before launch.",
  },
  {
    number: "06",
    title: "Learn and improve",
    body: "We review what happened against the agreed objective. We keep what works, address what does not, and use the learning to guide the next step.",
  },
];
