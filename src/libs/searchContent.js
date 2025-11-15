// Search content configuration for all pages
export const searchablePages = [
  {
    title: "Home",
    url: "/",
    keywords: [
      "united kuwait land",
      "ukl",
      "business support services",
      "sponsorship",
      "housing",
      "fleet management",
      "catering",
      "emergency support",
    ],
    content:
      "United Kuwait Land provides comprehensive business support services across the GCC region including sponsorship and government relations, housing solutions, fleet management, vehicle services, emergency support, and catering services.",
  },
  {
    title: "About Us",
    url: "/about",
    keywords: ["about", "company", "history", "mission", "vision", "values"],
    content:
      "Learn about United Kuwait Land's history, mission, and values. We are committed to delivering exceptional business support services with reliability, expertise, and integrity.",
  },
  {
    title: "Our Team",
    url: "/team",
    keywords: [
      "team",
      "people",
      "professionals",
      "experts",
      "staff",
      "careers",
      "hr",
    ],
    content:
      "The people behind UKL's success. Our experienced professionals deliver excellence across all service divisions. 150+ skilled professionals, 7 countries covered, 500+ active projects. Contact HR: hr@kuwait-land.com",
  },
  {
    title: "Services",
    url: "/services",
    keywords: ["services", "solutions", "offerings", "support"],
    content:
      "Comprehensive business support services including sponsorship and government relations, housing solutions, fleet management, vehicle services, emergency support, and catering services.",
  },
  {
    title: "Sponsorship & Government Relations",
    url: "/services",
    keywords: [
      "sponsorship",
      "government relations",
      "visa",
      "permits",
      "licensing",
      "compliance",
      "legal",
    ],
    content:
      "Complete sponsorship and government relations services including visa processing, work permits, business licensing, and regulatory compliance support across the GCC.",
  },
  {
    title: "Housing Solutions",
    url: "/services",
    keywords: [
      "housing",
      "accommodation",
      "residential",
      "apartments",
      "property",
      "living",
    ],
    content:
      "Comprehensive housing solutions for your employees including apartment sourcing, lease management, maintenance, and property services.",
  },
  {
    title: "Fleet Management",
    url: "/services",
    keywords: [
      "fleet",
      "vehicles",
      "transportation",
      "cars",
      "drivers",
      "logistics",
    ],
    content:
      "Professional fleet management services including vehicle procurement, maintenance, driver services, and comprehensive transportation solutions.",
  },
  {
    title: "Vehicle Services",
    url: "/services",
    keywords: [
      "vehicle",
      "car",
      "maintenance",
      "repair",
      "service",
      "automotive",
    ],
    content:
      "Complete vehicle services including maintenance, repairs, inspections, and automotive support for your business fleet.",
  },
  {
    title: "Emergency Support",
    url: "/services",
    keywords: [
      "emergency",
      "24/7",
      "support",
      "urgent",
      "crisis",
      "assistance",
    ],
    content:
      "24/7 emergency support services ensuring rapid response and problem resolution whenever you need assistance.",
  },
  {
    title: "Catering Services",
    url: "/services",
    keywords: ["catering", "food", "meals", "dining", "restaurant", "kitchen"],
    content:
      "Professional catering services for corporate events, employee dining, and large-scale food service operations.",
  },
  {
    title: "Portfolio",
    url: "/portfolios",
    keywords: ["portfolio", "projects", "work", "case studies", "clients"],
    content:
      "Explore our portfolio of successful projects and client partnerships across various industries and sectors.",
  },
  {
    title: "Contact Us",
    url: "/contact",
    keywords: [
      "contact",
      "get in touch",
      "email",
      "phone",
      "address",
      "location",
      "reach us",
    ],
    content:
      "Contact United Kuwait Land. Email: info@kuwait-land.com, Phone: +965 (664) 799 11. Reach out for general inquiries, quotes, service information, or partnership opportunities.",
  },
  {
    title: "FAQ",
    url: "/faq",
    keywords: ["faq", "questions", "answers", "help", "support", "information"],
    content:
      "Frequently asked questions about our services, processes, and business operations. Find answers to common inquiries.",
  },
  {
    title: "Careers",
    url: "mailto:hr@kuwait-land.com",
    keywords: [
      "careers",
      "jobs",
      "employment",
      "hiring",
      "work",
      "join",
      "hr",
      "human resources",
    ],
    content:
      "Join our growing team at UKL. We're looking for talented professionals passionate about delivering exceptional service. Contact HR: hr@kuwait-land.com",
  },
  {
    title: "Terms & Conditions",
    url: "/terms-and-conditions",
    keywords: ["terms", "conditions", "legal", "policy", "agreement"],
    content:
      "United Kuwait Land terms and conditions covering service agreements, client obligations, payment terms, liability, confidentiality, and governing law.",
  },
];

/**
 * Search through all pages based on content and keywords
 * @param {string} query - Search query
 * @returns {Array} Array of matching pages with relevance score
 */
export const searchPages = (query) => {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const searchTerm = query.toLowerCase().trim();
  const results = [];

  searchablePages.forEach((page) => {
    let score = 0;

    // Check title match (highest priority)
    if (page.title.toLowerCase().includes(searchTerm)) {
      score += 100;
    }

    // Check exact keyword match
    if (page.keywords.some((keyword) => keyword.toLowerCase() === searchTerm)) {
      score += 80;
    }

    // Check partial keyword match
    if (
      page.keywords.some((keyword) =>
        keyword.toLowerCase().includes(searchTerm)
      )
    ) {
      score += 50;
    }

    // Check content match
    if (page.content.toLowerCase().includes(searchTerm)) {
      score += 30;
    }

    // Calculate word matches for multi-word queries
    const words = searchTerm.split(" ");
    words.forEach((word) => {
      if (word.length > 2) {
        // Ignore very short words
        if (
          page.keywords.some((keyword) => keyword.toLowerCase().includes(word))
        ) {
          score += 10;
        }
        if (page.content.toLowerCase().includes(word)) {
          score += 5;
        }
      }
    });

    if (score > 0) {
      results.push({
        ...page,
        score,
        matchedText: getMatchedText(page.content, searchTerm),
      });
    }
  });

  // Sort by score (highest first)
  return results.sort((a, b) => b.score - a.score);
};

/**
 * Get a snippet of text containing the search term
 * @param {string} content - Full content text
 * @param {string} searchTerm - Search term
 * @returns {string} Text snippet
 */
const getMatchedText = (content, searchTerm) => {
  const index = content.toLowerCase().indexOf(searchTerm.toLowerCase());
  if (index === -1) return content.substring(0, 120) + "...";

  const start = Math.max(0, index - 40);
  const end = Math.min(content.length, index + searchTerm.length + 80);

  let snippet = content.substring(start, end);
  if (start > 0) snippet = "..." + snippet;
  if (end < content.length) snippet = snippet + "...";

  return snippet;
};
