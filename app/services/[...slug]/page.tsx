import type { Metadata } from "next";
import ServicesPage from "@/components/sections/ServicesPage";

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug[resolvedParams.slug.length - 1];
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `${title} | Phenomenon Studio`,
  };
}

export default async function ServicesSlugRoute({ params }: { params: Promise<{ slug: string[] }> }) {
  await params;
  return (
    <main className="next_block_sticky">
      <ServicesPage />
    </main>
  );
}
