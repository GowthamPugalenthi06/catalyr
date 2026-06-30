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
    slug: "custom-saas-development-guide-2026",
    title: "The Ultimate Guide to Custom SaaS Development in 2026: Cost, Timeline & Features",
    summary: "Everything you need to know about custom SaaS development in 2026. Discover how product engineering agencies approach scalable architectures, average costs, timelines, and feature prioritization for high-growth startups.",
    content: `
      <h2>The Shift in SaaS Development in 2026</h2>
      <p>As the cloud-native ecosystem matures, the expectations for SaaS applications have evolved. Customers now demand millisecond latency, enterprise-grade security by default, and seamless third-party integrations from Day 1. Building a custom SaaS platform requires more than just web development; it demands comprehensive <strong>product engineering</strong>.</p>
      
      <h2>Cost and Timeline Expectations</h2>
      <p>A frequent question founders ask is: <em>"How much does custom SaaS development cost?"</em> While costs vary based on complexity, a fully featured SaaS MVP typically ranges from <strong>$40,000 to $120,000</strong>, taking anywhere between <strong>3 to 6 months</strong> to launch. Working with a dedicated product engineering agency like Catalyr ensures predictable timelines, clear communication, and architecture that scales from your first 100 to your first 100,000 users.</p>
      
      <h2>Core Features Every Modern SaaS Needs</h2>
      <ul>
        <li><strong>Multi-tenant Architecture:</strong> Secure data isolation and scalability.</li>
        <li><strong>Role-Based Access Control (RBAC):</strong> Essential for B2B applications.</li>
        <li><strong>Automated Billing & Subscriptions:</strong> Seamless Stripe or Paddle integrations.</li>
        <li><strong>API-First Design:</strong> Allowing your users to integrate your platform with their existing workflows.</li>
      </ul>
      
      <h2>Why Partner with Catalyr?</h2>
      <p>At Catalyr, we specialize in building high-performance SaaS applications tailored to your business model. Our team handles everything from initial UX/UI design to robust backend architecture and cloud deployment.</p>
    `,
    coverImage: "/work/saas-development.png",
    author: {
      name: "Catalyr Engineering Team",
      avatar: "/work/icon.png",
      url: "/about-us",
    },
    date: "Jun 20, 2026",
    readTime: "6 min read",
    tags: [
      { name: "SaaS", id: "saas" },
      { name: "Development", id: "development" }
    ],
    faqs: [
      { question: "How long does it take to build a SaaS MVP?", answer: "Typically 3 to 6 months, depending on feature complexity and integration requirements." },
      { question: "What tech stack is best for SaaS development?", answer: "React/Next.js for the frontend and Node.js or Python for the backend are industry standards in 2026 for highly scalable SaaS platforms." }
    ],
    status: "published",
    createdAt: "2026-06-20T00:00:00Z",
    updatedAt: "2026-06-20T00:00:00Z",
  },
  {
    id: "2",
    slug: "choose-product-engineering-partner",
    title: "How to Choose the Right Product Engineering Partner for Your Startup",
    summary: "Not all software agencies are created equal. Learn the critical differences between traditional outsourcing and hiring a true product engineering partner to build your startup's core technology.",
    content: `
      <h2>Outsourcing vs. Product Engineering</h2>
      <p>The traditional IT outsourcing model is broken for startups. Hiring developers to blindly follow a spec sheet leads to feature bloat, technical debt, and products that fail to find market fit. A <strong>product engineering partner</strong> acts as an extension of your team, challenging assumptions, prioritizing features, and focusing on business outcomes rather than just output.</p>
      
      <h2>What to Look For in a Tech Partner</h2>
      <ul>
        <li><strong>Domain Expertise:</strong> Have they built products in your industry? (e.g., Healthcare, EdTech, Logistics).</li>
        <li><strong>End-to-End Capabilities:</strong> Can they handle UX/UI design, architecture, frontend/backend development, and DevOps?</li>
        <li><strong>Transparent Communication:</strong> Do they use modern collaboration tools and Agile methodologies?</li>
        <li><strong>Post-Launch Support:</strong> Do they offer SLAs, maintenance, and iteration cycles post-launch?</li>
      </ul>
      
      <h2>The Cost of Bad Technical Decisions</h2>
      <p>A cheap initial quote often results in rebuilding the product within 12 months. Partnering with a premium product engineering team minimizes technical debt and ensures your application is built on scalable, secure foundations.</p>
      <p>Catalyr brings a unique blend of strategic business intelligence and elite engineering talent to ensure your product succeeds in competitive markets.</p>
    `,
    coverImage: "/work/product-engineering.png",
    author: {
      name: "Catalyr Strategy Team",
      avatar: "/work/icon.png",
      url: "/about-us",
    },
    date: "Jun 15, 2026",
    readTime: "7 min read",
    tags: [
      { name: "Business Intelligence", id: "business-intelligence" },
      { name: "Strategy", id: "strategy" }
    ],
    faqs: [
      { question: "What is product engineering?", answer: "Product engineering involves the entire process of designing, developing, testing, and deploying a software product, with a strong focus on user experience and business value." }
    ],
    status: "published",
    createdAt: "2026-06-15T00:00:00Z",
    updatedAt: "2026-06-15T00:00:00Z",
  },
  {
    id: "3",
    slug: "healthcare-app-development-best-practices",
    title: "Healthcare App Development: Compliance, UX & Security Best Practices",
    summary: "Building software for the healthcare industry requires a delicate balance of strict compliance (HIPAA/GDPR) and exceptional user experience. Explore the best practices for modern healthcare application development.",
    content: `
      <h2>The Compliance Challenge</h2>
      <p>Healthcare software development is inherently complex due to strict regulatory frameworks like <strong>HIPAA</strong> in the US and <strong>GDPR</strong> in Europe. Security cannot be an afterthought; it must be embedded at the architectural level. This includes end-to-end encryption, audit logging, and secure data storage protocols.</p>
      
      <h2>Prioritizing Patient and Provider UX</h2>
      <p>Historically, healthcare software has been notorious for poor usability. In 2026, the focus has shifted entirely. A great healthcare app must provide intuitive interfaces for patients and streamlined workflows for medical professionals to prevent burnout.</p>
      
      <h2>Key Components of Modern Healthcare Apps</h2>
      <ul>
        <li><strong>Telehealth Integration:</strong> High-quality, secure video conferencing capabilities.</li>
        <li><strong>Interoperability:</strong> Seamless integration with existing EMR/EHR systems (HL7/FHIR standards).</li>
        <li><strong>Accessibility:</strong> Ensuring the app is usable by individuals with varying degrees of digital literacy and physical ability.</li>
      </ul>
      
      <p>Catalyr has extensive experience navigating the complexities of healthcare product engineering, delivering compliant, secure, and user-friendly medical software solutions.</p>
    `,
    coverImage: "/work/healthcare-development.png",
    author: {
      name: "Catalyr Engineering Team",
      avatar: "/work/icon.png",
      url: "/about-us",
    },
    date: "Jun 10, 2026",
    readTime: "8 min read",
    tags: [
      { name: "Healthcare", id: "healthcare" },
      { name: "Development", id: "development" }
    ],
    faqs: [
      { question: "What is HIPAA compliance in software?", answer: "It ensures that Protected Health Information (PHI) is securely stored, transmitted, and accessed only by authorized personnel." }
    ],
    status: "published",
    createdAt: "2026-06-10T00:00:00Z",
    updatedAt: "2026-06-10T00:00:00Z",
  },
  {
    id: "4",
    slug: "digital-transformation-logistics-software",
    title: "Digital Transformation in Logistics: Building Scalable Supply Chain Software",
    summary: "Logistics and supply chain management are undergoing massive digital transformations. Learn how custom logistics software development is optimizing operations, reducing costs, and enabling real-time tracking.",
    content: `
      <h2>Modernizing the Supply Chain</h2>
      <p>The logistics sector is rapidly moving away from legacy systems and spreadsheets toward real-time, cloud-native platforms. Digital transformation in logistics is no longer a luxury; it's a requirement to remain competitive.</p>
      
      <h2>Core Benefits of Custom Logistics Software</h2>
      <ul>
        <li><strong>Real-Time Visibility:</strong> Track shipments, fleets, and inventory with precision accuracy.</li>
        <li><strong>Automated Workflows:</strong> Reduce manual entry errors and streamline order processing.</li>
        <li><strong>Predictive Analytics:</strong> Utilize AI to forecast demand, optimize routes, and prevent supply chain bottlenecks.</li>
      </ul>
      
      <h2>Why Off-The-Shelf Doesn't Always Work</h2>
      <p>Every logistics company has unique operational workflows. Off-the-shelf software often forces businesses to change their proven processes to fit the software. <strong>Custom logistics product development</strong> molds the software to fit your exact operational needs, providing a massive competitive advantage.</p>
      
      <p>At Catalyr, we engineer scalable supply chain solutions that drive efficiency, lower operational costs, and future-proof logistics businesses for the modern era.</p>
    `,
    coverImage: "/work/logistics-development.png",
    author: {
      name: "Catalyr Strategy Team",
      avatar: "/work/icon.png",
      url: "/about-us",
    },
    date: "Jun 05, 2026",
    readTime: "5 min read",
    tags: [
      { name: "Logistics", id: "logistics" },
      { name: "Business Intelligence", id: "business-intelligence" }
    ],
    faqs: [
      { question: "How does custom software improve logistics?", answer: "It provides tailored workflows, seamless integrations with existing hardware, and real-time data analytics tailored to the company's specific supply chain model." }
    ],
    status: "published",
    createdAt: "2026-06-05T00:00:00Z",
    updatedAt: "2026-06-05T00:00:00Z",
  }
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
  { id: "saas", label: "SaaS" },
  { id: "healthcare", label: "Healthcare" },
  { id: "logistics", label: "Logistics" },
  { id: "development", label: "Development" },
  { id: "business-intelligence", label: "Business Intelligence" },
  { id: "strategy", label: "Strategy" },
];
