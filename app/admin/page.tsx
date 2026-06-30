import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminDashboard() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");

  if (!session || session.value !== "secure_token_123") {
    redirect("/login");
  }

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '600',color:"black" }}>Admin Dashboard</h1>
        <form action={async () => {
          'use server'
          const cookieStore = await cookies();
          cookieStore.delete("admin_session");
          redirect("/login");
        }}>
          <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
            Logout
          </button>
        </form>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        <div style={{ backgroundColor: '#1e1e1e', padding: '24px', borderRadius: '12px', border: '1px solid #333' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '12px', color: '#fff' }}>Blog Upload</h2>
          <p style={{ color: '#888', marginBottom: '20px', fontSize: '14px' }}>Create, edit, and publish SEO-friendly blog posts.</p>
          <a href="/admin/blog" style={{ display: 'inline-block', padding: '8px 16px', backgroundColor: '#0d6efd', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontSize: '14px' }}>Manage Blogs</a>
        </div>
        <div style={{ backgroundColor: '#1e1e1e', padding: '24px', borderRadius: '12px', border: '1px solid #333' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '12px', color: '#fff' }}>Sitemap Generator</h2>
          <p style={{ color: '#888', marginBottom: '20px', fontSize: '14px' }}>Generate and edit sitemap.xml for better indexing.</p>
          <a href="/admin/sitemap" style={{ display: 'inline-block', padding: '8px 16px', backgroundColor: '#0d6efd', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontSize: '14px' }}>Manage Sitemap</a>
        </div>
        <div style={{ backgroundColor: '#1e1e1e', padding: '24px', borderRadius: '12px', border: '1px solid #333' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '12px', color: '#fff' }}>SEO Improviser</h2>
          <p style={{ color: '#888', marginBottom: '20px', fontSize: '14px' }}>Edit meta titles and descriptions for routes.</p>
          <a href="/admin/seo" style={{ display: 'inline-block', padding: '8px 16px', backgroundColor: '#0d6efd', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontSize: '14px' }}>Manage SEO</a>
        </div>
        <div style={{ backgroundColor: '#1e1e1e', padding: '24px', borderRadius: '12px', border: '1px solid #333' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '12px', color: '#fff' }}>AEO Manager</h2>
          <p style={{ color: '#888', marginBottom: '20px', fontSize: '14px' }}>Optimize your content for AI answer engines (ChatGPT, Gemini).</p>
          <a href="/admin/aeo" style={{ display: 'inline-block', padding: '8px 16px', backgroundColor: '#0d6efd', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontSize: '14px' }}>Manage AEO</a>
        </div>
        <div style={{ backgroundColor: '#1e1e1e', padding: '24px', borderRadius: '12px', border: '1px solid #333' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '12px', color: '#fff' }}>Google Tag Manager</h2>
          <p style={{ color: '#888', marginBottom: '20px', fontSize: '14px' }}>Configure GTM and tracking scripts for analytics.</p>
          <a href="/admin/gtm" style={{ display: 'inline-block', padding: '8px 16px', backgroundColor: '#0d6efd', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontSize: '14px' }}>Configure GTM</a>
        </div>
      </div>
    </div>
  );
}
