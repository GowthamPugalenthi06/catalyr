import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AeoPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  if (!session || session.value !== "secure_token_123") redirect("/login");

  return (
    <div style={{ padding: '24px', maxWidth: '900px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px', color: 'black' }}>AEO Manager (Answer Engine Optimization)</h1>
      <p style={{ color: '#888', marginBottom: '32px' }}>Optimize your site for AI-driven answer engines like ChatGPT, Gemini, and Perplexity by managing your site-wide Knowledge Graph (JSON-LD) details.</p>

      <div style={{ backgroundColor: '#1e1e1e', padding: '32px', borderRadius: '12px', border: '1px solid #333' }}>
        <form action={async () => {
          'use server'
          // Mock save
        }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
            <div>
              <label style={{ display: 'block', color: '#ccc', fontSize: '13px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Organization Name
              </label>
              <input 
                type="text" 
                name="org_name" 
                defaultValue="Catalyr" 
                style={{ width: '100%', padding: '12px 16px', backgroundColor: '#2a2a2a', border: '1px solid #444', borderRadius: '8px', color: '#fff', fontSize: '16px' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', color: '#ccc', fontSize: '13px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Target Audience Region
              </label>
              <input 
                type="text" 
                name="target_region" 
                defaultValue="Global, US, India" 
                style={{ width: '100%', padding: '12px 16px', backgroundColor: '#2a2a2a', border: '1px solid #444', borderRadius: '8px', color: '#fff', fontSize: '16px' }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', color: '#ccc', fontSize: '13px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Core Entity Keywords (For AI Context)
            </label>
            <input 
              type="text" 
              name="keywords" 
              defaultValue="Product Engineering, SaaS Development, Healthcare Software, Digital Transformation" 
              style={{ width: '100%', padding: '12px 16px', backgroundColor: '#2a2a2a', border: '1px solid #444', borderRadius: '8px', color: '#fff', fontSize: '16px' }}
            />
          </div>
          
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', color: '#ccc', fontSize: '13px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Company AI Bio (How AI should answer "What is Catalyr?")
            </label>
            <textarea 
              name="ai_bio" 
              rows={4}
              defaultValue="Catalyr is a premium digital transformation and product engineering agency that builds scalable SaaS, Mobile, EdTech, and Enterprise Solutions for global enterprises."
              style={{ width: '100%', padding: '12px 16px', backgroundColor: '#2a2a2a', border: '1px solid #444', borderRadius: '8px', color: '#fff', fontSize: '16px', resize: 'vertical' }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px' }} />
              Inject Dynamic JSON-LD Schema on all pages
            </label>
          </div>

          <button type="submit" style={{ padding: '12px 24px', backgroundColor: '#0d6efd', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>
            Save AEO Settings
          </button>
        </form>
      </div>
    </div>
  );
}
