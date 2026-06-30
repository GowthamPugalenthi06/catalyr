import type { Metadata } from "next";
import ServicesPage from "@/components/sections/ServicesPage";

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug[resolvedParams.slug.length - 1];
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `${title} Services & Solutions | Catalyr`,
    description: `Discover Catalyr's expert ${title} solutions. We deliver top-tier product engineering, strategic design, and robust development to scale your business.`,
    keywords: [`${title}`, "Product Engineering", "Software Development", "Enterprise Solutions", "Catalyr"],
  };
}

export default async function ServicesSlugRoute({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug;
  const slug = slugArray[slugArray.length - 1];

  return (
    <ServicesPage slug={slug} />
  );
}
