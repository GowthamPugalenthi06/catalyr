import { readBlogs, getBlogBySlug } from "@/lib/blogStorage";
import BlogArticle from "@/components/sections/BlogArticle";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 60; // Revalidate every 60 seconds (ISR)

export async function generateStaticParams() {
  try {
    const posts = await readBlogs();
    return posts.filter((p) => p.status === "published").map((post) => ({ slug: post.slug }));
  } catch (err) {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getBlogBySlug(slug);
    if (!post) return { title: "Blog Post Not Found" };

    return {
      title: `${post.title} | Catalyr Blog`,
      description: post.summary,
      openGraph: {
        title: post.title,
        description: post.summary,
        type: "article",
        images: [{ url: post.coverImage }],
      },
    };
  } catch (err) {
    return { title: "Error" };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post || post.status !== "published") {
    notFound();
  }

  // Fetch and compute related posts dynamically
  const allBlogs = await readBlogs();
  const publishedBlogs = allBlogs.filter((p) => p.status === "published" && p.slug !== slug);
  const currentTags = post.tags.map((t) => t.id);
  const relatedPosts = publishedBlogs
    .map((blog) => {
      const matchCount = blog.tags.filter((t) => currentTags.includes(t.id)).length;
      return { blog, matchCount };
    })
    .sort((a, b) => b.matchCount - a.matchCount)
    .slice(0, 2)
    .map((item) => item.blog);

  return <BlogArticle post={post} relatedPosts={relatedPosts} />;
}
