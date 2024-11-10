/**
 * An array of feature objects for the home page.
 *
 * @type {Array<Object>}
 * @property {string} image - The image URL of the feature.
 * @property {string} title - The title of the feature.
 * @property {string} description - The description of the feature.
 */
export const features = [
  {
    image: "/icon-chat.png",
    title: "You are our #1 priority",
    description:
      "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    image: "/icon-money.png",
    title: "More savings means higher rates",
    description:
      "The more you save with us, the higher your interest rate will be!",
  },
  {
    image: "/icon-security.png",
    title: "Security you can trust",
    description:
      "We use top of the line encryption to make sure your data and money is always safe.",
  },
];

/**
 * The hero data object for the home page.
 *
 * @type {Object}
 * @property {string} title - The title of the hero banner.
 * @property {Array<string>} subtitles - The subtitles of the hero banner.
 * @property {string} text - The text of the hero banner.
 */
export const heroData = {
  title: "Promoted Content",
  subtitles: ["No fees.", "No minimum deposit.", "High interest rates."],
  text: "Open a savings account with Argent Bank today!",
};

/**
 * An array of account objects for the user page.
 *
 * @type {Array<Object>}
 * @property {string} title - The title of the account.
 * @property {string} amount - The amount in the account.
 * @property {string} description - The description of the account.
 */
export const accounts = [
  {
    title: "Argent Bank Checking (x8349)",
    amount: "$2,082.79",
    description: "Available Balance",
  },
  {
    title: "Argent Bank Savings (x6712)",
    amount: "$10,928.42",
    description: "Available Balance",
  },
  {
    title: "Argent Bank Credit Card (x8349)",
    amount: "$184.30",
    description: "Current Balance",
  },
];
