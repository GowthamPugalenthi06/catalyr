import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function GTMPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  if (!session || session.value !== "secure_token_123") redirect("/login");

  return (
    <div style={{ padding: '24px', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px',color:"black" }}>Google Tag Manager</h1>
      <p style={{ color: '#888', marginBottom: '32px' }}>Configure your GTM container ID to track analytics across the site.</p>

      <div style={{ backgroundColor: '#1e1e1e', padding: '32px', borderRadius: '12px', border: '1px solid #333' }}>
        <form action={async () => {
          'use server'
          // Mock save
        }}>
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', color: '#ccc', fontSize: '13px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              GTM Container ID
            </label>
            <input 
              type="text" 
              name="gtm_id" 
              defaultValue="GTM-XXXXXXX" 
              placeholder="GTM-XXXXXXX"
              style={{ width: '100%', padding: '12px 16px', backgroundColor: '#2a2a2a', border: '1px solid #444', borderRadius: '8px', color: '#fff', fontSize: '16px' }}
            />
            <p style={{ color: '#888', fontSize: '12px', marginTop: '8px' }}>Enter your container ID starting with "GTM-".</p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px' }} />
              Enable GTM Script Site-wide
            </label>
          </div>

          <button type="submit" style={{ padding: '12px 24px', backgroundColor: '#0d6efd', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
