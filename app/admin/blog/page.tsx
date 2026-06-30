import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { readBlogs } from "@/lib/blogStorage";
import type { BlogPost } from "@/lib/blogData";

export default async function AdminBlogList() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  if (!session || session.value !== "secure_token_123") redirect("/login");

  let blogs: BlogPost[] = [];
  try {
    blogs = await readBlogs();
  } catch (err) {
    console.error("Failed to load blogs", err);
  }

  return (
    <div style={{ padding: '32px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: '600', color: 'black', marginBottom: '8px' }}>Blog Posts</h1>
          <p style={{ color: '#888', fontSize: '14px' }}>Manage your blog content, categories, and FAQs here.</p>
        </div>
        <Link 
          href="/admin/blog/new" 
          style={{ padding: '10px 20px', backgroundColor: '#0d6efd', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}
        >
          + Add New Post
        </Link>
      </div>

      <div style={{ backgroundColor: '#1e1e1e', borderRadius: '12px', border: '1px solid #333', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #333', backgroundColor: '#252525' }}>
              <th style={{ padding: '16px 24px', color: '#888', fontWeight: '500', fontSize: '14px' }}>Title</th>
              <th style={{ padding: '16px 24px', color: '#888', fontWeight: '500', fontSize: '14px' }}>Status</th>
              <th style={{ padding: '16px 24px', color: '#888', fontWeight: '500', fontSize: '14px' }}>Date</th>
              <th style={{ padding: '16px 24px', color: '#888', fontWeight: '500', fontSize: '14px', width: '150px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.length > 0 ? (
              blogs.map((post) => (
                <tr key={post.id} style={{ borderBottom: '1px solid #333', backgroundColor: '#1a1a1a' }}>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{ color: '#fff', fontWeight: '500', fontSize: '15px', marginBottom: '4px' }}>{post.title}</div>
                    <div style={{ color: '#666', fontSize: '13px' }}>/blog/{post.slug}</div>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <span style={{ 
                      padding: '4px 10px', 
                      borderRadius: '12px', 
                      fontSize: '12px', 
                      fontWeight: '600', 
                      backgroundColor: post.status === 'published' ? 'rgba(25, 135, 84, 0.2)' : 'rgba(108, 117, 125, 0.2)',
                      color: post.status === 'published' ? '#20c997' : '#adb5bd'
                    }}>
                      {post.status.toUpperCase()}
                    </span>
                  </td>
                  <td style={{ padding: '16px 24px', color: '#ccc', fontSize: '14px' }}>
                    {post.date}
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <Link 
                        href={`/admin/blog/${post.id}/edit`}
                        style={{ padding: '6px 12px', backgroundColor: 'transparent', border: '1px solid #555', color: '#fff', borderRadius: '4px', textDecoration: 'none', fontSize: '13px' }}
                      >
                        Edit
                      </Link>
                      <a 
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        rel="noreferrer"
                        style={{ padding: '6px 12px', backgroundColor: 'transparent', border: '1px solid #555', color: '#fff', borderRadius: '4px', textDecoration: 'none', fontSize: '13px' }}
                      >
                        View
                      </a>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} style={{ padding: '32px', textAlign: 'center', color: '#888' }}>
                  No blog posts found. Create your first post!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
