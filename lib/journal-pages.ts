export type JournalPage = {
  src: string;
  title: string;
  description: string;
  alt: string;
  width: number;
  height: number;
};

export const JOURNAL_PAGES: JournalPage[] = [
  {
    src: "/images/reality-check.png",
    title: "The Reality Check",
    description:
      "Getting honest with myself is the first step to freedom. Explore why you found yourself here, your biggest triggers, and what you're finally ready to see.",
    alt: "The Reality Check",
    width: 1130,
    height: 1463,
  },
  {
    src: "/images/quotes.png",
    title: "Quotes to Remember",
    description:
      "Gentle affirmations and reminders for the moments you need them most — about healing, self-worth, and choosing yourself again.",
    alt: "Quotes to Remember",
    width: 1126,
    height: 1462,
  },
  {
    src: "/images/keeping-receipts.png",
    title: "Keeping Receipts",
    description:
      "This is your space to document the patterns — not to be bitter, but to be clear. Accountability, what was withheld, and how you choose yourself from here.",
    alt: "Keeping Receipts",
    width: 1130,
    height: 1462,
  },
  {
    src: "/images/how-i-can-choose-me.png",
    title: "How I Can Choose Me",
    description:
      "This is your plan. Your standards. Your future. Behaviors to recognize, mindset shifts to make, and what you will no longer tolerate — specifically.",
    alt: "How I Can Choose Me",
    width: 1128,
    height: 1458,
  },
  {
    src: "/images/my-personal-experiences.png",
    title: "My Personal Experiences",
    description:
      "Your space to write freely — what happened, how it made you feel, and what you need to remember. Repeat across multiple entries.",
    alt: "My Personal Experiences",
    width: 1126,
    height: 1456,
  },
  {
    src: "/images/things-i-need-to-remember.png",
    title: "Things I Need to Remember",
    description:
      "Open-lined notes pages to capture thoughts, breakthroughs, affirmations, or anything your healing heart needs to hold on to.",
    alt: "Things I Need to Remember",
    width: 1126,
    height: 1458,
  },
];
