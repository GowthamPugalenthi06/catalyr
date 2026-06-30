import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function SitemapPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  if (!session || session.value !== "secure_token_123") redirect("/login");

  return (
    <div style={{ padding: '24px', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px',color:"black" }}>Sitemap Generator</h1>
      <p style={{ color: '#888', marginBottom: '32px' }}>Generate and manage your sitemap.xml to ensure search engines can index all your pages correctly.</p>

      <div style={{ backgroundColor: '#1e1e1e', padding: '32px', borderRadius: '12px', border: '1px solid #333', marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ color: '#fff', marginBottom: '4px' }}>sitemap.xml</h3>
            <p style={{ color: '#888', fontSize: '14px' }}>Last generated: Today at 12:45 PM</p>
          </div>
          <form action={async () => {
            'use server'
            // Mock generate
          }}>
            <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#198754', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
              Re-generate Sitemap
            </button>
          </form>
        </div>
        
        <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#111', borderRadius: '8px', border: '1px solid #222' }}>
          <pre style={{ margin: 0, color: '#a5d6ff', fontSize: '13px', overflowX: 'auto', lineHeight: '1.5' }}>
{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://catalyr.com/</loc>
    <lastmod>2026-06-30</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://catalyr.com/about</loc>
    <lastmod>2026-06-25</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://catalyr.com/work</loc>
    <lastmod>2026-06-28</lastmod>
    <priority>0.9</priority>
  </url>
  <!-- 32 more URLs... -->
</urlset>`}
          </pre>
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '16px' }}>
        <a href="/sitemap.xml" target="_blank" style={{ padding: '10px 20px', backgroundColor: '#333', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>View Live Sitemap</a>
      </div>
    </div>
  );
}
