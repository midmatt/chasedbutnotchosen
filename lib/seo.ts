export const SITE_URL = "https://chasedbutnotchosen.com";
export const SITE_NAME = "Chased But Not Chosen";
export const SITE_TAGLINE =
  "A Journal for Healing & Returning to Yourself";

export const SITE_DESCRIPTION =
  "Being Chased, But Not Chosen is a printable journal for healing, releasing, and returning to yourself. Instant digital PDF download — self-reflection prompts, worksheets, and a checklist to help you recognize your worth and choose yourself.";

export const BOOK_NAME = "Being Chased, But Not Chosen";
export const BOOK_PRICE = "19.99";
export const BOOK_PRICE_CURRENCY = "USD";

// The product cover is currently the best available social preview asset.
// NOTE: A dedicated 1200x630 Open Graph image is recommended (see SEO flags).
export const OG_IMAGE = {
  url: "/images/book-cover.png",
  width: 1130,
  height: 1461,
  alt: "Being Chased, But Not Chosen — a journal for healing and returning to yourself",
};

// TODO(seo): Confirm the author. Defaulting to the brand as an Organization.
// If the journal is authored by a named person, swap this to:
//   { "@type": "Person", name: "Author Name" }
const BOOK_AUTHOR = {
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
};

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    description: SITE_DESCRIPTION,
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
  };
}

export function getBookSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: BOOK_NAME,
    bookFormat: "https://schema.org/EBook",
    author: BOOK_AUTHOR,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    description: SITE_DESCRIPTION,
    image: `${SITE_URL}${OG_IMAGE.url}`,
    inLanguage: "en",
    url: SITE_URL,
    // Kept as an array so additional formats (e.g. Hardcover/Paperback) can be
    // appended later without restructuring this block.
    offers: [
      {
        "@type": "Offer",
        price: BOOK_PRICE,
        priceCurrency: BOOK_PRICE_CURRENCY,
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/#purchase`,
        itemCondition: "https://schema.org/NewCondition",
      },
    ],
  };
}
