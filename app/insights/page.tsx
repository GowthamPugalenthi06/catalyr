import Insights from '@/components/sections/Insights';
import { readBlogs } from '@/lib/blogStorage';

export const revalidate = 60; // Revalidate every 60 seconds (ISR)

export default async function InsightsPage() {
  let blogs = [];
  try {
    const allBlogs = await readBlogs();
    blogs = allBlogs.filter((p) => p.status === "published");
  } catch (err) {
    console.error("Failed to load blogs on server", err);
  }

  return (
    <main>
      <Insights initialBlogs={blogs} />
    </main>
  );
}
