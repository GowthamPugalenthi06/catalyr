import Insights from '@/components/sections/Insights';
import { readBlogs } from '@/lib/blogStorage';
import ContactForm from '@/components/sections/ContactForm';

export const revalidate = 60; // Revalidate every 60 seconds (ISR)
import type { BlogPost } from "@/lib/blogData";

export default async function InsightsPage() {
  let blogs: BlogPost[] = [];
  try {
    const allBlogs = await readBlogs();
    blogs = allBlogs.filter((p: BlogPost) => p.status === "published");
  } catch (err) {
    console.error("Failed to load blogs on server", err);
  }

  return (
    <main>
      <Insights initialBlogs={blogs} />
      <ContactForm />
    </main>
  );
}
