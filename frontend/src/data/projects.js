// All portfolio projects. The `id` is used in the URL: /portfolio/<id>
// Card thumbnails live at /projects/<id>/cover.jpg inside frontend/public.

export const CASE_STUDIES = [
  {
    id: "wayfair-homepage-redesign",
    section: "ui",
    title: "Wayfair Homepage Redesign",
    category: "UX/UI Audit · Website Redesign",
    client: "Wayfair — Concept Study",
    role: "UX/UI Designer",
    tools: ["Figma"],
    focus: "Visual Hierarchy · Navigation · Content Structure · CTA Design · Usability",
    image: "/projects/wayfair-homepage-redesign/cover.jpg",
    description:
      "A heuristic UX/UI audit of the Wayfair homepage, translated into a cleaner redesign with a stronger content hierarchy, consistent components and clearer CTAs.",
  },
  {
    id: "sakal-festive-shopping",
    section: "ui",
    title: "Sakal Shopping — Festive UI",
    category: "UX/UI Design · Mobile App · E-commerce",
    client: "Sakal Media Group",
    role: "UX/UI Designer",
    tools: ["Figma"],
    focus: "User Flow · Information Architecture · E-commerce UI · WhatsApp Integration",
    image: "/projects/sakal-festive-shopping/cover.jpg",
    description:
      "A festive marketplace that skips the traditional cart — shoppers discover products and talk directly to local vendors through pre-filled WhatsApp enquiries.",
  },
  {
    id: "sakal-classified-ads",
    section: "ui",
    title: "Sakal Classified Ads UI",
    category: "UX/UI Design · Booking Platform Redesign",
    client: "Sakal Media Group",
    role: "UX/UI Designer",
    tools: ["Figma"],
    focus: "Usability · Pricing Transparency · Ad Preview · Booking Flow",
    image: "/projects/sakal-classified-ads/cover.jpg",
    description:
      "Redesigning the end-to-end classified ad booking journey — from login to payment — around clarity, live previews and transparent pricing.",
  },
  {
    id: "graam-rural-network",
    section: "ui",
    title: "GRAAM — Digital Rural Intelligence Network",
    category: "UI/UX · Website Design · Visual Design",
    client: "Concept Platform — Rural Maharashtra",
    role: "UI/UX Designer",
    tools: ["Figma"],
    focus: "Information Architecture · Visual Hierarchy · Responsive Web Design",
    image: "/projects/graam-rural-network/cover.jpg",
    description:
      "A rural-first digital ecosystem connecting villages across Maharashtra — earthy visual language, storytelling structure and a human-centered interface.",
  },
  {
    id: "real-estate-campaigns",
    section: "visual",
    title: "Real Estate Campaigns — Digital & Outdoor",
    category: "Visual Design · Campaign · Social & OOH",
    client: "Real Estate Brands",
    role: "Graphic Designer",
    tools: ["Photoshop", "Illustrator"],
    focus: "Brand Consistency · Campaign Design · Hoardings · Social Creatives",
    image: "/projects/real-estate-campaigns/cover.jpg",
    description:
      "A cohesive premium visual identity for real estate campaigns, scaled seamlessly from social media creatives to outdoor hoardings.",
  },
  {
    id: "sakal-brand-promotions",
    section: "visual",
    title: "Brand Promotions — Sakal Media Group",
    category: "Visual Design · Brand Communication",
    client: "Sakal Media Group",
    role: "Sr. Graphic Designer",
    tools: ["Photoshop", "Illustrator"],
    focus: "Data Visualisation · Promotional Creatives · Multi-platform",
    image: "/projects/sakal-brand-promotions/cover.jpg",
    description:
      "High-impact promotional creatives translating reach, subscribers and engagement metrics into simple, visually striking formats across 7 verticals.",
  },
  {
    id: "automotive-campaigns",
    section: "visual",
    title: "Automotive Social Campaigns",
    category: "Social Media · Campaign Design · Art Direction",
    client: "Creative Agency — Automotive Brands",
    role: "Sr. Graphic Designer",
    tools: ["Photoshop", "Illustrator"],
    focus: "Concept · Art Direction · Visual Storytelling · Brand Expression",
    image: "/projects/automotive-campaigns/cover.jpg",
    description:
      "Campaign-led social creatives for automotive brands — festive moments, product storytelling and awareness campaigns within strong brand identities.",
  },
  {
    id: "sakal-podcast-content",
    section: "visual",
    title: "Sakal Digital — Podcast & Content Design",
    category: "Editorial Design · Podcast Branding · Marathi Typography",
    client: "Sakal Media Group",
    role: "Sr. Graphic Designer",
    tools: ["Photoshop", "Illustrator"],
    focus: "Podcast Identity · Editorial Storytelling · Social Thumbnails",
    image: "/projects/sakal-podcast-content/cover.jpg",
    description:
      "Distinct visual identities for Sakal's podcast and content ecosystem — subject-first art direction built on expressive Marathi typography.",
  },
    {
    id: "global-impact-forum",
    section: "ui",
    title: "Sakal Global Impact Forum — Website Design",
    category: "UI/UX · Visual Design · Website Design",
    client: "Sakal Media Group",
    role: "UI/Visual Designer",
    tools: ["Figma"],
    focus: "Corporate · Institutional · Responsive Web",
    image: "/projects/global-impact-forum/cover.jpg",
    description:
      "A premium institutional website concept designed for Sakal Global Impact Forum. The experience combines a strong editorial layout, deep blue visual language, structured content modules and responsive UI to communicate leadership, credibility and global impact.",
  },
];

// Rich, scrollable content for each project's detail page.
// Section blocks support: paragraphs, lists, cards, heuristics, image, gallery.

export const PROJECT_DETAILS = {
  "wayfair-homepage-redesign": {
    type: "UX/UI Design · Heuristic Audit · Website Redesign",
    sections: [
      {
        label: "OVERVIEW",
        title: "Making a crowded homepage easier to read and act on",
        paragraphs: [
          "This project focused on conducting a UX/UI audit of the Wayfair homepage to identify usability and visual communication issues that could make it harder for users to discover products, understand the page structure, and take action.",
          "After analyzing the existing interface, I identified areas where content hierarchy, visual consistency, navigation, and CTA placement could be improved. I then redesigned the homepage with a cleaner structure and more intentional visual hierarchy.",
        ],
        lists: [
          {
            heading: "The main objective was to understand how effectively the homepage:",
            items: [
              "Communicates Wayfair’s value proposition",
              "Guides users toward relevant products and categories",
              "Organizes a large amount of content without creating visual clutter",
              "Uses CTAs to support user decision-making",
              "Maintains consistency across different sections",
              "Helps users move naturally from discovery → exploration → purchase",
            ],
          },
        ],
      },
      {
        label: "01 — UX/UI AUDIT",
        title: "Six heuristic areas, evaluated in depth",
        paragraphs: [
          "I evaluated the existing homepage using key usability and interface principles. Each heuristic area below maps pain points found on the live page to concrete design solutions — and the impact each change was designed to create.",
        ],
        heuristics: [
          {
            title: "Visibility of System Status",
            pains: [
              "Too many promotions (Deals, Sales, Affirm, App, Seasonal Offers) shown simultaneously",
              "No clear indication of what is most important right now",
              "User is unsure where to focus first",
            ],
            solutions: [
              "Introduce a primary hero focus",
              "Only 1 main offer above the fold",
              "Secondary offers appear after scrolling",
              "Use progressive disclosure for deals",
            ],
            impact: "Reduces confusion, improves engagement",
          },
          {
            title: "Match Between System & Real World",
            pains: [
              "Marketing-heavy copy (e.g., “Iconic. Want it.”) lacks clarity",
              "Section headings don’t clearly explain benefits",
            ],
            solutions: [
              "Replace vague copy with user-centric language",
              "“Iconic. Want it.” → “Best-selling furniture customers love”",
              "Add short benefit-led subtext under section headers",
            ],
            impact: "Improves comprehension & trust",
          },
          {
            title: "User Control & Freedom",
            pains: [
              "Endless vertical scrolling",
              "Difficult to jump between sections",
              "No quick navigation for homepage sections",
            ],
            solutions: [
              "Add a sticky section navigator — Deals | Living Room | Storage | Kitchen | Bedroom",
              "“Back to Top” floating button",
              "Allow users to collapse sections",
            ],
            impact: "Better control, less frustration",
          },
          {
            title: "Consistency & Standards",
            pains: [
              "Different card sizes, layouts, and CTA styles",
              "Inconsistent spacing and visual rhythm",
              "Some sections feel like ads, others like catalog",
            ],
            solutions: [
              "Create a unified card system — same image ratio, same CTA position, same price & rating hierarchy",
              "Standardize the typography scale",
            ],
            impact: "Cleaner UI & easier scanning",
          },
          {
            title: "Recognition Over Recall",
            pains: ["No visual indication of recently viewed items"],
            solutions: [
              "Add a “Recently Viewed” strip",
              "Highlight “You viewed this earlier” and “Similar to items you liked”",
              "Improve product badges — Best Seller, New, Limited Deal",
            ],
            impact: "Higher return engagement",
          },
          {
            title: "Aesthetic & Minimalist Design",
            pains: [
              "Visually cluttered",
              "Too many banners stacked vertically",
              "Weak whitespace usage",
            ],
            solutions: [
              "Reduce banner frequency",
              "Introduce stronger whitespace",
              "Group related content into visual blocks",
            ],
            impact: "Premium feel & reduced fatigue",
          },
        ],
        lists: [
          {
            heading: "Key problems identified",
            items: [
              "Competing visual elements made it difficult to identify the primary focus of each section.",
              "Inconsistent spacing and component presentation reduced visual cohesion.",
              "Multiple promotional elements and CTAs competed for user attention.",
              "Content prioritization could be improved to guide users through the page more naturally.",
              "Product discovery could be made more intuitive through clearer categorization and section organization.",
              "Some sections lacked a strong distinction between primary and secondary content.",
            ],
          },
        ],
        image: {
          src: "/projects/wayfair-homepage-redesign/audit.jpg",
          alt: "Full UX/UI audit board of the Wayfair homepage — audit method, challenges and six-part heuristic evaluation",
          caption: "Full audit board — click to view full size",
        },
      },
      {
        label: "02 — REDESIGN",
        title: "A clearer content hierarchy and browsing flow",
        paragraphs: [
          "Based on the audit findings, I redesigned the homepage around a clearer content hierarchy and more structured browsing flow.",
          "The redesign focused on creating a stronger hero section, organizing product categories into visually distinct sections, improving spacing and alignment, and establishing a more consistent card and component system.",
          "Rather than simply changing the visual appearance, the redesign was driven by the findings from the UX audit and focused on improving the overall clarity, consistency, and usability of the interface.",
        ],
        lists: [
          {
            heading: "The redesign focused on",
            items: [
              "Creating a stronger hero section with a clear value proposition and primary CTA.",
              "Structuring product categories into visually distinct sections.",
              "Improving spacing, alignment, and typography for better readability.",
              "Establishing a more consistent card and component system.",
              "Reducing unnecessary visual competition between promotional sections.",
              "Creating clearer CTA hierarchy so users can understand the intended action.",
              "Using imagery more intentionally to support product discovery.",
              "Designing a smoother flow from hero → categories → products → promotions → footer.",
            ],
          },
        ],
        image: {
          src: "/projects/wayfair-homepage-redesign/redesign.jpg",
          alt: "Redesigned Wayfair homepage — hero, featured categories, shop by room, verified picks, deals and footer",
          caption: "Redesigned homepage — click to view full size",
        },
      },
    ],
    takeaway: {
      label: "KEY TAKEAWAY",
      text: "This project helped me understand how a UX audit can translate into practical design decisions. Instead of redesigning purely based on aesthetics, I used usability principles to identify problems and then connected each design change to a specific user experience goal.",
    },
    process: ["Audit", "Identify Problems", "Prioritize Issues", "Redesign", "Refine UI", "Final Prototype"],
  },

  "sakal-festive-shopping": {
    type: "UX/UI Design · Mobile App · E-commerce",
    sections: [
      {
        label: "OVERVIEW",
        title: "A festive marketplace built around conversations, not carts",
        paragraphs: [
          "Sakal Media Group planned a festive shopping platform designed to connect customers directly with local vendors during the festive season.",
          "The goal was to create a simple shopping experience where users could discover festive products, explore vendors and product details, and directly contact sellers through WhatsApp instead of going through a traditional cart and checkout system.",
          "The challenge was to design a user journey that made product discovery easy while keeping the purchasing process simple, familiar, and focused on direct communication between buyers and vendors.",
        ],
      },
      {
        label: "THE CHALLENGE",
        title: "From checkout funnels to direct conversations",
        paragraphs: [
          "Traditional e-commerce platforms involve several steps before a purchase. For this platform, the requirement was different — the interface needed to support quick product discovery and direct vendor communication, while avoiding unnecessary checkout complexity.",
        ],
        cards: [
          {
            title: "Traditional E-commerce",
            text: "Browse → Product → Add to Cart → Checkout → Payment → Order. Multiple steps, accounts and friction before a customer ever talks to a seller.",
          },
          {
            title: "Sakal Shopping",
            text: "Browse → Select Category → Select Product → Contact Vendor → Purchase. The vendor conversation is the conversion point.",
          },
        ],
      },
      {
        label: "KEY DESIGN GOALS",
        title: "What the experience needed to achieve",
        lists: [
          {
            heading: "Six goals guided every screen",
            items: [
              "Make festive products easy to discover.",
              "Organize products into clear categories.",
              "Provide enough product information to help users make a decision.",
              "Make vendor communication easily accessible.",
              "Reduce unnecessary steps between product discovery and enquiry.",
              "Create a festive visual identity while maintaining usability.",
            ],
          },
        ],
      },
      {
        label: "THE APPROACH",
        title: "Four parts, one simple journey",
        cards: [
          {
            title: "01 — Homepage",
            text: "The starting point for product discovery: festive categories, top brands, popular products, promotional banners and featured products — so users instantly understand what they can shop for and where to explore next.",
          },
          {
            title: "02 — Product Listing",
            text: "A structured category grid with clear product imagery, names, pricing, vendor information and simple filtering — built for fast scanning and quick decisions.",
          },
          {
            title: "03 — Product Detail",
            text: "Everything needed before contacting a vendor: images, details, price, vendor information, description, related products — and a prominent “Chat with Vendor on WhatsApp” CTA instead of Add to Cart.",
          },
          {
            title: "04 — WhatsApp Integration",
            text: "The key differentiator. The CTA opens a pre-filled WhatsApp message — “I’m interested to know more about your sofa collection. Could you please provide me with some product details?” — reducing the effort to start a conversation.",
          },
        ],
      },
      {
        label: "USER JOURNEY",
        title: "Five steps from discovery to conversation",
        paragraphs: [
          "User → Selects Category → Selects Product → Clicks CTA → Lands on Vendor’s WhatsApp.",
          "The intention was to remove the long checkout journey and make vendor interaction the primary conversion point: direct conversation → faster enquiry → potentially faster purchase closure.",
        ],
        image: {
          src: "/projects/sakal-festive-shopping/board.jpg",
          alt: "Full case study board of the Sakal Shopping festive UI — homepage, category, product detail and WhatsApp flow",
          caption: "Full case study board — click to view full size",
        },
      },
      {
        label: "IMPACT",
        title: "A lighter marketplace model",
        lists: [
          {
            heading: "The proposed experience",
            items: [
              "Simplifies the path from discovery to vendor communication.",
              "Removes unnecessary checkout steps.",
              "Encourages direct customer–vendor interaction.",
              "Gives local vendors a familiar communication channel.",
              "Creates a focused festive shopping experience.",
            ],
          },
        ],
      },
    ],
    takeaway: {
      label: "KEY TAKEAWAY",
      text: "This project helped me explore how business requirements can influence UX decisions. Rather than replicating a conventional e-commerce experience, I designed the user journey around the platform’s actual conversion model — connecting customers directly with vendors through WhatsApp.",
    },
    process: ["Research", "Flow Mapping", "Wireframes", "UI Design", "Prototype"],
  },

  "sakal-classified-ads": {
    type: "UX/UI Design · Booking Platform Redesign",
    sections: [
      {
        label: "OVERVIEW",
        title: "Turning a fragmented booking system into a guided flow",
        paragraphs: [
          "The Classified Ads booking platform is a key revenue channel for the organization. However, the existing system was fragmented and time-consuming, resulting in drop-offs and user frustration.",
          "My role was to redesign the end-to-end journey — from login to successful ad booking — focusing on usability, clarity, and efficiency.",
        ],
      },
      {
        label: "PROBLEM STATEMENT",
        title: "Where the existing journey broke down",
        cards: [
          {
            title: "Complicated Process",
            text: "Users found the process too complicated, with multiple confusing steps between login and booking.",
          },
          {
            title: "No Ad Preview",
            text: "Lack of clear ad previews before payment reduced trust and caused last-minute edits.",
          },
          {
            title: "Hidden Pricing",
            text: "Pricing transparency was missing, often leading to cart abandonment.",
          },
          {
            title: "Clunky Navigation",
            text: "Navigation between categories and dates was not intuitive.",
          },
        ],
      },
      {
        label: "RESEARCH & INSIGHTS",
        title: "Listening to advertisers first",
        lists: [
          {
            heading: "User interviews",
            items: ["Frequent advertisers wanted faster repeat booking."],
          },
          {
            heading: "Pain points identified",
            items: [
              "Forgetting login credentials — need for a simple “Forgot Password” flow.",
              "Confusion in selecting the right category.",
              "No live preview of ads, leading to last-minute edits.",
              "Payment failures without proper guidance caused frustration.",
            ],
          },
          {
            heading: "Competitive analysis",
            items: [
              "Reviewed flows from Dainik Bhaskar, Times Classifieds and Quikr to benchmark simplicity and speed.",
            ],
          },
          {
            heading: "User personas",
            items: [
              "Business Owner · Job Recruiter · General User — each demanded simplicity, quick navigation and a clear cost breakdown.",
            ],
          },
        ],
      },
      {
        label: "USER FLOW",
        title: "The redesigned booking journey",
        lists: [
          {
            heading: "Login to booking confirmation",
            items: [
              "Login · Forgot Password · Sign Up",
              "Select Ad Category → State / Package",
              "Ad Content → Calendar → Offers",
              "Ad Preview → Customer Details",
              "Order Summary → Payment Gateway → Booking Confirmation",
            ],
          },
        ],
        image: {
          src: "/projects/sakal-classified-ads/board.jpg",
          alt: "Full case study board of the Sakal Classified Ads booking UI",
          caption: "Full case study board — click to view full size",
        },
      },
    ],
    takeaway: {
      label: "KEY TAKEAWAY",
      text: "Redesigning a revenue-critical flow taught me to balance business goals with user anxiety — transparent pricing, live previews and forgiving recovery flows turned a frustrating process into a guided one.",
    },
    process: ["Interviews", "Competitive Analysis", "Personas", "Flow Redesign", "UI Design", "Prototype"],
  },

  "graam-rural-network": {
    type: "UI/UX Design · Website Design · Visual Design",
    sections: [
      {
        label: "OVERVIEW",
        title: "Digital transformation, rooted in rural Maharashtra",
        paragraphs: [
          "GRAAM is a conceptual digital platform designed to connect and empower villages across Maharashtra through a centralized digital ecosystem. The platform brings together village information, local stories, agriculture, community participation, emergency resources, and development opportunities in one accessible interface.",
          "The website was designed to communicate the idea of digital transformation at the grassroots level, while maintaining a visual connection with Maharashtra’s rural landscape, people, agriculture, and local communities.",
        ],
      },
      {
        label: "DESIGN OBJECTIVE",
        title: "Trustworthy and approachable — not a conventional tech portal",
        lists: [
          {
            heading: "The interface needed to",
            items: [
              "Clearly communicate what GRAAM is within the first few seconds.",
              "Make complex platform information easy to understand.",
              "Highlight villages, agriculture, and local communities through visual storytelling.",
              "Create clear pathways to explore villages and case studies.",
              "Balance technology with a human and earthy visual identity.",
              "Present large amounts of information without making the interface feel overwhelming.",
            ],
          },
        ],
      },
      {
        label: "UI DESIGN APPROACH",
        title: "Nine decisions that shaped the experience",
        cards: [
          {
            title: "01 — Rural-First Visual Language",
            text: "Built the identity around rural Maharashtra using natural greens, warm neutrals, earthy imagery and agricultural landscapes for an authentic, community-focused feel.",
          },
          {
            title: "02 — Strong Hero Section",
            text: "An immersive rural landscape with a clear headline, supporting message and CTA immediately communicates GRAAM’s purpose.",
          },
          {
            title: "03 — Clear Information Hierarchy",
            text: "Structured as a storytelling journey: Hero → About → Vision → Mission → Stories → Case Studies → Opportunities → Testimonials.",
          },
          {
            title: "04 — About, Vision & Mission",
            text: "Concise content combined with imagery, cards and visual hierarchy to make important information easier to scan and more engaging.",
          },
          {
            title: "05 — Local Stories & Discoverability",
            text: "Villages and local stories presented as visual cards combining photography, location names and short descriptions — an exploration-focused experience.",
          },
          {
            title: "06 — Case Studies",
            text: "Large photography and minimal text make case studies visually engaging while staying quick to scan.",
          },
          {
            title: "07 — Opportunities Section",
            text: "A deep green visual block with layered imagery and organic elements creates contrast and gives the section stronger emphasis.",
          },
          {
            title: "08 — Human-Centered Design",
            text: "Focus on people + place — farmers, villagers, communities and landscapes communicate the human impact behind the platform.",
          },
          {
            title: "09 — Typography & Layout",
            text: "Clear typography, generous whitespace, consistent alignment, modular cards and strong CTA placement keep an information-rich interface clean.",
          },
        ],
      },
      {
        label: "FINAL OUTCOME",
        title: "Rural storytelling meets a modern digital experience",
        paragraphs: [
          "The design intentionally avoids making GRAAM look like a generic corporate or government portal. Instead, it creates a visual identity that feels local, human, environmentally connected and digitally progressive.",
          "The result is a homepage that uses photography, whitespace, modular layouts, strong hierarchy and earthy visual language to turn a complex rural-development concept into an approachable digital experience.",
        ],
        image: {
          src: "/projects/graam-rural-network/board.jpg",
          alt: "Full GRAAM homepage design — hero, about, vision, stories, case studies and opportunities sections",
          caption: "Full homepage design — click to view full size",
        },
      },
    ],
    takeaway: {
      label: "KEY TAKEAWAY",
      text: "Designing for rural empowerment meant letting the landscape and its people lead the interface — technology stays in the background, and the community stays in focus.",
    },
    process: ["Research", "Moodboards", "Wireframes", "Visual Language", "UI Design", "Prototype"],
  },

  "real-estate-campaigns": {
    type: "Visual Design · Campaign · Digital & Outdoor",
    sections: [
      {
        label: "OVERVIEW",
        title: "A premium identity that scales from feed to hoarding",
        paragraphs: [
          "The objective was to create a cohesive and premium visual identity for real estate campaigns across digital and outdoor platforms — communicating key selling propositions (lifestyle, exclusivity, investment value) in a visually compelling and easy-to-digest format.",
        ],
      },
      {
        label: "MY ROLE",
        title: "Concept to multi-format delivery",
        lists: [
          {
            heading: "What I owned",
            items: [
              "Conceptualized and designed engaging social media creatives aligned with real estate branding and campaign messaging.",
              "Developed a scalable design system that allowed smooth adaptation of creatives from digital formats to outdoor hoardings.",
              "Created visually impactful layouts, typography, and compositions to highlight property features and brand positioning.",
              "Collaborated with marketing and content teams to translate business goals into effective visual storytelling.",
              "Ensured brand consistency across multiple creatives while maintaining platform-specific design optimization.",
            ],
          },
        ],
      },
      {
        label: "DESIGN THINKING",
        title: "The system behind the look",
        cards: [
          {
            title: "Brand Consistency",
            text: "Used the brand’s green & golden ochre palette with clean layouts and contrast to maintain a premium, cohesive look across every touchpoint.",
          },
          {
            title: "Strategic Use of Colors",
            text: "Green reflects growth, prosperity and trust — key emotions in real estate. Golden ochre adds a sense of luxury and heritage.",
          },
          {
            title: "Luxury Visual Language",
            text: "High-end imagery and minimal compositions convey exclusivity and sophistication without visual noise.",
          },
        ],
      },
      {
        label: "THE WORK",
        title: "Selected creatives",
        gallery: [
          { src: "/projects/real-estate-campaigns/board-2.jpg", alt: "Extended set of real estate campaign creatives"},
        ],
      },
    ],
    takeaway: {
      label: "KEY TAKEAWAY",
      text: "A campaign system only works if it survives every format. Designing the rules first — palette, grid, type — made each new creative faster to produce and instantly recognizable.",
    },
    process: ["Brief", "Concept", "Design System", "Digital Creatives", "Outdoor Adaptation"],
  },

  "sakal-brand-promotions": {
    type: "Visual Design · Brand Communication · All Platforms",
    sections: [
      {
        label: "OVERVIEW",
        title: "Turning audience scale into visual stories",
        paragraphs: [
          "The objective was to promote Sakal Media Group’s multi-platform strength and audience scale across 7 distinct verticals — communicating key achievements (reach, subscribers, page views) in a visually impactful and easy-to-digest format.",
        ],
      },
      {
        label: "MY ROLE",
        title: "Data in, design out",
        lists: [
          {
            heading: "What I owned",
            items: [
              "Designed high-impact promotional creatives highlighting achievements, milestones, and platform strengths across all verticals.",
              "Translated complex data — views, reach, engagement metrics — into visually engaging and simplified design formats.",
              "Collaborated with marketing teams to align messaging with business goals and promotional strategies.",
            ],
          },
        ],
      },
      {
        label: "THE WORK",
        title: "Selected promotional creatives",
        image: {
          src: "/projects/sakal-brand-promotions/board.jpg",
          alt: "Sakal Media Group brand promotion creatives across digital verticals",
          caption: "Promotional creatives — click to view full size",
        },
        gallery: [
          { src: "/projects/sakal-brand-promotions/board-2.jpg", alt: "Extended set of Sakal brand promotion creatives" },
        ],
      },
    ],
    takeaway: {
      label: "KEY TAKEAWAY",
      text: "Numbers persuade only when people actually read them. The craft here was hierarchy — making the biggest achievement the loudest element, and letting everything else support it.",
    },
    process: ["Brief", "Data Prioritisation", "Concept", "Design", "Multi-platform Adaptation"],
  },

  "automotive-campaigns": {
    type: "Social Media · Campaign Design · Brand Communication",
    sections: [
      {
        label: "OVERVIEW",
        title: "Concept-led creatives for automotive brands",
        paragraphs: [
          "During my time at a creative agency, I worked on social and digital communication for multiple automotive brands, developing campaign-led creatives across brand communication, festive occasions, product storytelling and awareness campaigns.",
          "The work required translating established brand identities into individual creative concepts while maintaining a consistent visual language across digital touchpoints.",
          "Rather than treating each post as an isolated design, I approached the work as a combination of concept, art direction, visual storytelling and brand expression.",
        ],
      },
      {
        label: "THE CHALLENGE",
        title: "Distinctive to the brand, built for the feed",
        paragraphs: [
          "Automotive brands have strong and recognizable visual identities. Every creative needed to feel distinctive to the brand while still being engaging enough to capture attention on social media.",
        ],
        lists: [
          {
            heading: "The content had to",
            items: [
              "Communicate a message within seconds",
              "Maintain brand recognition",
              "Follow established visual guidelines",
              "Adapt to different festivals and cultural moments",
              "Combine automotive imagery with conceptual storytelling",
              "Create visual variety without losing brand consistency",
              "Maintain a premium and polished aesthetic",
            ],
          },
        ],
      },
      {
        label: "MY ROLE",
        title: "From brief to visual concept",
        paragraphs: [
          "My role was to transform campaign briefs into visual concepts that could work within the fast-paced environment of social media without losing the sophistication and recognisability of the automotive brand.",
        ],
      },
      {
        label: "SELECTED CREATIVES",
        title: "Campaign gallery",
        gallery: [
          { src: "/projects/automotive-campaigns/g01.jpg", alt: "Automotive campaign creative — winter concept" },
          { src: "/projects/automotive-campaigns/g02.jpg", alt: "Automotive campaign creative" },
          { src: "/projects/automotive-campaigns/g03.jpg", alt: "Automotive campaign creative" },
          { src: "/projects/automotive-campaigns/g04.jpg", alt: "Road safety awareness creative" },
          { src: "/projects/automotive-campaigns/g05.jpg", alt: "Automotive festive creative — portrait" },
          { src: "/projects/automotive-campaigns/g06.jpg", alt: "Automotive social creative" },
          { src: "/projects/automotive-campaigns/g07.jpg", alt: "Automotive social creative" },
          { src: "/projects/automotive-campaigns/g08.jpg", alt: "Automotive social creative" },
          { src: "/projects/automotive-campaigns/g09.jpg", alt: "Automotive social creative" },
          { src: "/projects/automotive-campaigns/g10.jpg", alt: "Automotive social creative" },
          { src: "/projects/automotive-campaigns/g11.jpg", alt: "Automotive social creative" },
          { src: "/projects/automotive-campaigns/g12.jpg", alt: "Automotive social creative" },
        ],
      },
    ],
    takeaway: {
      label: "KEY TAKEAWAY",
      text: "Working inside strict automotive brand systems taught me that creativity under constraint is a skill of its own — the concept carries the post, and the brand carries the recognition.",
    },
    process: ["Brief", "Concept", "Art Direction", "Design", "Platform Adaptation"],
  },

    "global-impact-forum": {
    type: "UI/UX · Visual Design · Website Design",
    sections: [
      {
        label: "OVERVIEW",
        title: "A credible, global digital presence for institutional leadership",
        paragraphs: [
          "Designed a premium, responsive website concept for Sakal Global Impact Forum (GIF) — an institutional platform connecting Maharashtra's business, political, educational and international leadership.",
          "The design approach focuses on creating a credible, modern and globally positioned digital presence, while making a large amount of institutional information easy to explore and understand.",
        ],
      },
      {
        label: "DESIGN APPROACH",
        title: "Five decisions that shaped the experience",
        cards: [
          {
            title: "01 — Structured & Editorial Layout",
            text: "A clean editorial structure moves the user through a deliberate narrative: Introduction → Purpose → Core Ideas → Community → Leadership → Growth → Membership → Key Information → CTA. It feels like a story, not a collection of disconnected sections.",
          },
          {
            title: "02 — Premium Blue Visual Language",
            text: "Deep navy and royal blue, supported by white space and lighter blue surfaces, communicate trust, credibility, leadership, authority and institutional character. Bright blue is used selectively for key UI elements and CTAs to create hierarchy without making the interface heavy.",
          },
          {
            title: "03 — Strong Hero Section",
            text: "A full-width photographic background with a dark blue treatment makes an impactful first impression. Large typography, supporting content and a primary CTA immediately communicate the purpose of the platform.",
          },
          {
            title: "04 — Information Hierarchy",
            text: "Large section headings, short introductions, numbered content blocks, cards, consistent spacing, image-led storytelling and clear CTA placement let users scan quickly while still reaching detailed information.",
          },
          {
            title: "05 — Modular Content Sections",
            text: "The Core Idea, Community Architecture, Three-Phase Growth Plan and Membership sections use modular cards and numbered blocks. The repeated 01 / 02 / 03 / 04 pattern creates visual rhythm and shows the progression of information.",
          },
        ],
      },
      {
        label: "FINAL OUTCOME",
        title: "Complex institutional content, made easy to digest",
        paragraphs: [
          "The final desktop design combines a strong editorial layout, structured content modules and a consistent blue visual language to communicate leadership, credibility and global impact.",
        ],
        image: {
          src: "/projects/global-impact-forum/board.jpg",
          alt: "Full Sakal Global Impact Forum desktop website design",
          caption: "Full desktop design — click to view full size",
        },
      },
      {
        label: "RESPONSIVE DESIGN",
        title: "The same premium experience on mobile",
        paragraphs: [
          "The desktop experience was translated into a long-form mobile layout, keeping the same content hierarchy and visual identity across screen sizes. Content stacks vertically, cards adapt to a single column, typography scales appropriately, images keep their visual importance and CTAs remain prominent. It is not simply a shrunken desktop design.",
        ],
        image: {
          src: "/projects/global-impact-forum/mobile.jpg",
          alt: "Sakal Global Impact Forum mobile website design",
          caption: "Mobile layout — click to view full size",
        },
      },
    ],
    takeaway: {
      label: "KEY TAKEAWAY",
      text: "For an institution with a lot to say, structure is the design — a clear narrative, modular blocks and a disciplined blue palette make complex information feel credible and easy to scan.",
    },
    process: ["Research", "Content Structuring", "Wireframes", "Visual Language", "UI Design", "Responsive Design"],
  },

  "sakal-podcast-content": {
    type: "Editorial Design · Podcast Branding · Social Media",
    sections: [
      {
        label: "OVERVIEW",
        title: "A visual voice for every show",
        paragraphs: [
          "A collection of digital creatives developed for Sakal’s digital content ecosystem, with a focus on podcast promotion, editorial storytelling and audience engagement.",
          "The work involved creating visually distinctive identities for different content formats while maintaining a connection to the larger Sakal brand.",
          "The challenge was to communicate diverse topics — from news and conversations to relationships, agriculture and politics — through strong visual concepts, Marathi typography and subject-specific art direction.",
        ],
      },
      {
        label: "THE CHALLENGE",
        title: "One ecosystem, many personalities",
        paragraphs: [
          "With multiple podcast and content properties covering completely different subjects, each series needed to feel unique and immediately recognisable.",
        ],
        lists: [
          {
            heading: "At the same time, the designs needed to",
            items: [
              "Maintain Sakal’s brand presence",
              "Work effectively as social media thumbnails",
              "Communicate the subject at a glance",
              "Create distinctive identities for different shows",
              "Work primarily with Marathi typography",
              "Balance editorial credibility with contemporary digital aesthetics",
              "Remain visually consistent as a larger content ecosystem",
            ],
          },
        ],
      },
      {
        label: "CREATIVE APPROACH",
        title: "Content-first, not template-first",
        paragraphs: [
          "Rather than using one common template for every podcast, I explored a content-first visual language. The subject of each show became the starting point for the visual direction.",
          "Topic → Concept → Typography → Illustration / Imagery → Final Identity. This allowed different podcast properties to develop their own personalities while still belonging to the Sakal digital ecosystem.",
        ],
      },
      {
        label: "THE WORK",
        title: "Podcast identities & editorial creatives",
        image: {
          src: "/projects/sakal-podcast-content/board.jpg",
          alt: "Podcast cover designs and editorial creatives for Sakal Digital",
          caption: "Podcast cover design collection — click to view full size",
        },
        gallery: [
          { src: "/projects/sakal-podcast-content/award.jpg", alt: "Award and recognition creative for Sakal Digital content" },
        ],
      },
    ],
    takeaway: {
      label: "KEY TAKEAWAY",
      text: "Marathi typography became the identity system itself — each show’s letterforms carry its personality, so the audience recognises the podcast before reading a word.",
    },
    process: ["Subject Study", "Concept", "Typography", "Illustration", "Final Identity"],
  },
};
