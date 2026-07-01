import { MetadataRoute } from 'next'
import { SERVICES_DATA } from "@/components/sections/ServicesData";
import { readBlogs } from "@/lib/blogStorage";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const rawBaseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL || "https://www.catalyr.com";
  const baseUrl = rawBaseUrl.endsWith('/') ? rawBaseUrl.slice(0, -1) : rawBaseUrl;

  const staticRoutes = [
    "",
    "/about",
    "/about-us",
    "/career",
    "/careers",
    "/cases",
    "/contact",
    "/contact-us",
    "/cookies-policy",
    "/edtech",
    "/fintech",
    "/healthcare",
    "/industries/ecommerce",
    "/industries/edtech",
    "/industries/fintech",
    "/industries/healthcare",
    "/industries/logistics",
    "/industries/real-estate",
    "/industries/saas",
    "/insights",
    "/partners",
    "/privacy-policy",
    "/saas",
    "/services",
    "/terms-of-use",
    "/work",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceSlugs = Object.keys(SERVICES_DATA).map(slug => `/services/${slug}`);
  const serviceEntries: MetadataRoute.Sitemap = serviceSlugs.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const posts = await readBlogs();
    const publishedPosts = posts.filter(post => post.status === "published");
    blogEntries = publishedPosts.map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.createdAt || new Date()),
      changeFrequency: 'monthly',
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
  }

  return [...staticEntries, ...serviceEntries, ...blogEntries];
}
