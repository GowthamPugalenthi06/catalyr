// ─── Blog Data Types & Initial Dataset ────────────────────────────────────────
// This module is the single source of truth for blog data on the frontend.
// In Phase 4 it will be replaced by API calls to /api/blogs.

export type BlogTag = {
  name: string;
  id: string;
};

export type BlogAuthor = {
  name: string;
  avatar: string;
  url: string;
};

export type BlogFAQ = {
  question: string;
  answer: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string; // HTML string
  coverImage: string;
  author: BlogAuthor;
  date: string;
  readTime: string;
  tags: BlogTag[];
  faqs: BlogFAQ[];
  status: "published" | "draft";
  createdAt: string;
  updatedAt: string;
};

// ─── Sample Blog Posts ────────────────────────────────────────────────────────
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "website-development-company-usa",
    title:
      "Corporate Website Development USA: What Enterprises Actually Need (vs. What Agencies Promise)",
    summary:
      "Discover what corporate website development companies in the USA actually deliver — from brand strategy and UX to custom code. Learn about pricing, timelines, and how to choose the right agency in 2026.",
    content: `
<p><b>Key insights:</b></p>
<ul>
<li><span style="font-weight: 400">Enterprises lose measurable revenue when development and design are split between separate vendors — miscommunication at the handoff is where most timelines collapse.</span></li>
<li><span style="font-weight: 400">Phenomenon Studio has shipped hundreds of digital products for clients in healthcare, fintech, SaaS, and e-commerce, with $500M+ raised by supported companies.</span></li>
<li><span style="font-weight: 400">Custom corporate website development in the USA typically runs $15,000–$80,000+ depending on scope, team size, and whether discovery is included; a Webflow build for a mid-market company usually takes 6–10 weeks.</span></li>
<li><span style="font-weight: 400">The agencies that deliver on time are those running design and engineering under one roof, with a named project lead accountable for both.</span></li>
</ul>
<p><span style="font-weight: 400"> By Nazarii Tkachyk | Fullstack Developer | June, 2026</span></p>
<h2>What a web development company actually does for an enterprise client</h2>
<p><span style="font-weight: 400">Most corporate websites fail not at launch but at the brief. A company sends a request for a 'professional, modern website' and receives a polished Figma file from one team, which then gets handed to developers who were not in the room when the design decisions were made. Three months later, the site looks slightly different from the prototype and behaves nothing like it was intended to.</span></p>
<p><span style="font-weight: 400">A web development company handling corporate work should own the entire chain: discovery, information architecture, UX design, visual design, front-end build, CMS configuration, QA, and launch. When those functions are separated across vendors, the gaps between them accumulate into delays and cost overruns.</span></p>
<p><span style="font-weight: 400">For an enterprise client, the practical deliverables look like this: a site that performs on Core Web Vitals, integrates cleanly with the existing CRM and analytics stack, passes accessibility audits, and can be updated by an internal marketing team without developer involvement. That last requirement eliminates most templated builds immediately.</span></p>
<p><span style="font-weight: 400">According to Google, pages that meet Core Web Vitals thresholds see up to 24% lower abandonment rates compared to pages that fail those thresholds. (Google Search Central, 2023)</span></p>
<h2>Agency for website development: what separates the ones that deliver</h2>
<p><span style="font-weight: 400">The question every operator should ask before signing a contract with an agency for website development is not 'Can you build this?' Every agency says yes. The question is: who owns the decision when the designer and the developer disagree?</span></p>
<p><span style="font-weight: 400">In agencies where design and development are genuinely integrated, that disagreement surfaces in an internal standup and gets resolved before it reaches the client. In agencies where the two functions are siloed or subcontracted, it surfaces as a scope change request two weeks before launch.</span></p>
<p><b>The structure that produces reliable delivery:</b></p>
<ul>
<li><span style="font-weight: 400">One named project lead who attends every stakeholder call and is accountable for both design quality and technical implementation.</span></li>
<li><span style="font-weight: 400">A discovery phase before any visual work begins, used to validate the information architecture and identify integration requirements.</span></li>
<li><span style="font-weight: 400">Weekly review cycles where working builds, not static mockups, are presented to the client.</span></li>
<li><span style="font-weight: 400">A defined handoff protocol that includes browser testing, CMS documentation, and a go-live checklist.</span></li>
</ul>
<h2>Website design and development agency: the full-cycle case for keeping it together</h2>
<p><span style="font-weight: 400">There is a version of corporate website development that runs smoothly, and a version that produces three rounds of revisions after development has started. The difference is almost always whether the website design and development agency involved treats those two functions as one continuous process or as two sequential deliverables.</span></p>
<h2>Website development and design companies: how to evaluate them before you sign</h2>
<p><span style="font-weight: 400">Hiring the wrong website development and design companies is a $30,000–$80,000 mistake that takes about six months to fully understand. By the time it is clear the project is off-track, the deposit is spent, the timeline has slipped, and the internal stakeholders who championed the project are explaining delays to leadership.</span></p>
<h2>Common mistakes when hiring a website development outsourcing company</h2>
<p><span style="font-weight: 400">Website development outsourcing has a specific failure mode that domestic hiring does not: the misalignment between what was specified in a brief and what was interpreted by a team working in a different context.</span></p>
<p><b>The most expensive mistakes:</b></p>
<ul>
<li><b>Skipping discovery and going straight to design</b><span style="font-weight: 400">. The resulting site is built around assumptions about the audience that were never validated.</span></li>
<li><b>Choosing a vendor based on the cheapest quote</b><span style="font-weight: 400">. A $12,000 quote for a corporate website is a signal, not a bargain.</span></li>
<li><b>Separating design and development into sequential contracts.</b><span style="font-weight: 400"> The handoff between these two phases is where scope creep, delay, and quality degradation most reliably occur.</span></li>
<li><b>Accepting a project plan with no milestone builds</b><span style="font-weight: 400">. If the first time you see working code is at the final review, you have no visibility into whether the build matches the design.</span></li>
<li><b>Ignoring post-launch needs.</b><span style="font-weight: 400"> A corporate website requires ongoing content updates, performance monitoring, and occasional feature additions.</span></li>
</ul>
    `,
    coverImage: "/images/blog_dev_usa.png",
    author: {
      name: "Nazarii Tkachyk",
      avatar: "/images/telegram-cloud-photo-size-2-5253719888026007023-y.jpg.webp",
      url: "#",
    },
    date: "Jun 12, 2026",
    readTime: "8 min read",
    tags: [{ name: "Development", id: "development" }],
    faqs: [
      {
        question: "What does a web development company in the United States do?",
        answer:
          "A US-based web development company manages the full process of planning, designing, building, and launching a corporate website. For enterprise clients, that typically includes discovery workshops, UX design, visual design, front-end and back-end development, CMS setup, integrations with CRM and analytics tools, QA, and post-launch support.",
      },
      {
        question: "How much does it cost to hire a web development firm in the United States?",
        answer:
          "Corporate website development in the USA ranges from $15,000 for a compact marketing site to $120,000+ for an enterprise platform with complex integrations and a full content strategy. A mid-market company looking for a 10–20 page corporate site with CMS and basic integrations should budget $30,000–$60,000 and a 6–10 week timeline.",
      },
      {
        question: "How do I choose the right web development agency in the US?",
        answer:
          "Start by asking for named client references, not just a portfolio. Confirm that the team presenting the proposal is the team that will build the project. Require that a discovery phase is included or offered before any design work starts.",
      },
      {
        question: "Which industries do US web development firms serve?",
        answer:
          "Most credible US web development firms serve healthcare, SaaS, fintech, professional services, e-commerce, and media. Regulated industries like healthcare require specific expertise: HIPAA compliance, accessibility standards, and integration with clinical or patient-record systems.",
      },
      {
        question: "What are red flags when hiring a US web development firm?",
        answer:
          "The clearest red flags: a portfolio with no named clients and no project outcomes, a quote that is significantly below market rate without a clear explanation of what is excluded, a project plan that goes directly from contract to design without a discovery phase, no named project lead assigned at contract time, and no post-launch support offering.",
      },
      {
        question: "What is the typical timeline for a corporate website development project?",
        answer:
          "A standard corporate website development timeline runs 6–12 weeks from discovery to launch. A Webflow build for a 10–15 page corporate site typically takes 6–8 weeks. A full enterprise platform with custom integrations, a large content migration, and a new design system can run 12–20 weeks.",
      },
    ],
    status: "published",
    createdAt: "2026-06-12T00:00:00Z",
    updatedAt: "2026-06-12T11:45:59Z",
  },
  {
    id: "2",
    slug: "design-system-lower-costs-faster-delivery",
    title:
      "With a design system: 30% lower costs, 50% faster delivery. Still skipping it?",
    summary:
      "Discover how a design system can cut development costs by 30%, accelerate time-to-market by 50%, improve product consistency, and support scalable growth.",
    content: `<p>Design systems are not just a design tool — they are a business accelerator. Companies that invest in design systems see measurable returns in development speed, product consistency, and team alignment.</p>
<h2>What is a Design System?</h2>
<p>A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications. It includes UI components, design tokens, documentation, and guidelines.</p>
<h2>The Business Case</h2>
<p>According to multiple case studies, organizations that implement design systems report 30% lower development costs and 50% faster time-to-market for new features and products.</p>`,
    coverImage: "/images/blog_design_system.png",
    author: {
      name: "Ruslan Vashchenko",
      avatar: "/images/telegram-cloud-document-2-5300745544623214761.jpg.webp",
      url: "#",
    },
    date: "Jun 11, 2026",
    readTime: "10 min read",
    tags: [
      { name: "Business Intelligence", id: "business-intelligence" },
      { name: "Design", id: "design" },
    ],
    faqs: [],
    status: "published",
    createdAt: "2026-06-11T00:00:00Z",
    updatedAt: "2026-06-11T00:00:00Z",
  },
  {
    id: "3",
    slug: "enterprise-web-app-development-architecture",
    title:
      "Enterprise web app development: architecture decisions that scale to 1M+ users",
    summary:
      "Enterprise web app development for product teams that need more than a vendor on a contract. Phenomenon is a web app development firm that handles enterprise app development services from architecture through launch.",
    content: `<p>Building enterprise web applications that scale requires making the right architectural decisions from day one. This article covers the key considerations for teams building products that need to serve over a million users.</p>
<h2>Architecture Fundamentals</h2>
<p>The foundation of any scalable web application starts with choosing the right architecture pattern. Whether it's microservices, serverless, or a modular monolith, each approach has trade-offs that directly impact your team's ability to ship features and maintain the system over time.</p>`,
    coverImage: "/images/blog_enterprise_architecture.png",
    author: {
      name: "Polina Chebanova",
      avatar: "/images/polina.jpg.webp",
      url: "#",
    },
    date: "May 31, 2026",
    readTime: "7 min read",
    tags: [{ name: "Development", id: "development" }],
    faqs: [],
    status: "published",
    createdAt: "2026-05-31T00:00:00Z",
    updatedAt: "2026-05-31T00:00:00Z",
  },
  {
    id: "4",
    slug: "ai-assisted-software-development-2026",
    title:
      "AI-assisted software development in 2026: why coding 40% faster doesn't mean 40% cheaper",
    summary:
      "AI Software Development Services engineered by a team with deep Python, AWS and computer-vision expertise. Our custom AI application development services accelerate MVPs by 50% and improve user workflows by 2x.",
    content: `<p>AI-assisted development tools have revolutionized how software teams work, but the economics aren't as straightforward as the headlines suggest. Coding faster doesn't automatically translate to lower costs.</p>
<h2>The Productivity Paradox</h2>
<p>While AI tools can accelerate code generation by 40%, the overall cost reduction is typically only 15-20%. The reason? Code generation is only one part of the software development lifecycle.</p>`,
    coverImage: "/images/blog_ai_development.png",
    author: {
      name: "Nazarii Tkachyk",
      avatar: "/images/telegram-cloud-photo-size-2-5253719888026007023-y.jpg.webp",
      url: "#",
    },
    date: "May 31, 2026",
    readTime: "8 min read",
    tags: [
      { name: "Business Intelligence", id: "business-intelligence" },
      { name: "Development", id: "development" },
    ],
    faqs: [],
    status: "published",
    createdAt: "2026-05-31T00:00:00Z",
    updatedAt: "2026-05-31T00:00:00Z",
  },
  {
    id: "5",
    slug: "total-cost-ownership-custom-software",
    title:
      "Total cost of ownership for custom software: 3-year financial model vs. SaaS subscriptions",
    summary:
      "Total Cost of Ownership for Custom Software for growing startups. A trusted custom software development services company provides custom development solutions that minimize technical debt and maximize ROI.",
    content: `<p>When evaluating custom software vs. SaaS, the total cost of ownership over three years tells a very different story than the initial price tag.</p>
<h2>Year 1: The Investment Phase</h2>
<p>Custom software requires a larger upfront investment, but the ROI curve begins to shift in year two as SaaS subscription costs compound and customization limitations become apparent.</p>`,
    coverImage: "/images/Case-preview-.webp",
    author: {
      name: "Anatolii Sakhno",
      avatar: "/images/ksenia.jpg.webp",
      url: "#",
    },
    date: "May 31, 2026",
    readTime: "8 min read",
    tags: [{ name: "Development", id: "development" }],
    faqs: [],
    status: "published",
    createdAt: "2026-05-31T00:00:00Z",
    updatedAt: "2026-05-31T00:00:00Z",
  },
  {
    id: "6",
    slug: "brand-identity-services-guide-2026",
    title:
      "Brand identity services: complete guide for startups & enterprises [2026]",
    summary:
      "Discover how brand identity services help startups and enterprises build scalable brands. Learn about brand strategy, visual identity, logo design, brand guidelines, pricing, and branding trends in 2026.",
    content: `<p>Brand identity is more than a logo — it's the complete system of visual and verbal elements that define how a company presents itself to the world.</p>
<h2>What Brand Identity Services Include</h2>
<p>A comprehensive brand identity engagement covers brand strategy, visual identity design, logo systems, typography, color palettes, brand guidelines, and application across all touchpoints.</p>`,
    coverImage: "/images/blog_ai_development.png",
    author: {
      name: "Dmytro Kirsanov",
      avatar: "/images/telegram-cloud-document-2-5300745544623214765-1.jpg.webp",
      url: "#",
    },
    date: "May 31, 2026",
    readTime: "7 min read",
    tags: [{ name: "Design", id: "design" }],
    faqs: [],
    status: "published",
    createdAt: "2026-05-31T00:00:00Z",
    updatedAt: "2026-05-31T00:00:00Z",
  },
];

// ─── Helper Functions ─────────────────────────────────────────────────────────

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getPublishedBlogs(): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.status === "published");
}

export function getBlogsByTag(tagId: string): BlogPost[] {
  if (tagId === "all") return getPublishedBlogs();
  return getPublishedBlogs().filter((post) =>
    post.tags.some((tag) => tag.id === tagId)
  );
}

export function getRelatedBlogs(currentSlug: string, limit = 2): BlogPost[] {
  const current = getBlogBySlug(currentSlug);
  if (!current) return getPublishedBlogs().slice(0, limit);

  const currentTagIds = current.tags.map((t) => t.id);
  return getPublishedBlogs()
    .filter(
      (post) =>
        post.slug !== currentSlug &&
        post.tags.some((tag) => currentTagIds.includes(tag.id))
    )
    .slice(0, limit);
}

export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "analytics", label: "Analytics" },
  { id: "business-intelligence", label: "Business Intelligence" },
  { id: "design", label: "Design" },
  { id: "development", label: "Development" },
  { id: "news", label: "News" },
];
