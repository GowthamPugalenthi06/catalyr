import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function SEOPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  if (!session || session.value !== "secure_token_123") redirect("/login");

  const pages = [
    { path: "/", title: "Catalyr | Top Product Engineering & Digital Transformation Agency", desc: "Catalyr helps global enterprises and fast-growing startups build, scale, and transform their digital products." },
    { path: "/about-us", title: "About Us | Catalyr", desc: "Learn about Catalyr, our mission, and the expert team building transformative digital products." },
    { path: "/services", title: "Our Services | Catalyr", desc: "Explore our full-cycle product engineering, UI/UX design, and digital transformation services." },
    { path: "/cases", title: "Case Studies | Catalyr", desc: "View our portfolio of successful digital products built for startups and enterprises." },
    { path: "/insights", title: "Insights & Blog | Catalyr", desc: "Read the latest thoughts on software engineering, design, and tech from the Catalyr team." },
    { path: "/contact-us", title: "Contact Us | Catalyr", desc: "Get in touch with Catalyr to discuss your next digital product or engineering project." },
    { path: "/saas", title: "SaaS Development Services | Catalyr", desc: "End-to-end SaaS application development for scale and performance." },
    { path: "/healthcare", title: "Healthcare Tech Solutions | Catalyr", desc: "Secure and compliant software solutions for the healthcare industry." },
    { path: "/edtech", title: "EdTech Development | Catalyr", desc: "Innovative digital learning platforms and EdTech software development." },
    { path: "/terms-of-use", title: "Terms of Use | Catalyr", desc: "Read the terms and conditions for using the Catalyr website and services." },
    { path: "/privacy-policy", title: "Privacy Policy | Catalyr", desc: "Learn how Catalyr collects, uses, and protects your personal information." },
    { path: "/cookies-policy", title: "Cookies Policy | Catalyr", desc: "Understand how we use cookies to improve your experience on our website." }
  ];

  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' ,color:"black"}}>SEO Improviser</h1>
      <p style={{ color: '#888', marginBottom: '32px' }}>Manage metadata, titles, and descriptions for all routes.</p>

      <div style={{ backgroundColor: '#1e1e1e', borderRadius: '12px', border: '1px solid #333', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #333', backgroundColor: '#252525' }}>
              <th style={{ padding: '16px 24px', color: '#888', fontWeight: '500', fontSize: '14px' }}>Page Route</th>
              <th style={{ padding: '16px 24px', color: '#888', fontWeight: '500', fontSize: '14px' }}>Meta Title</th>
              <th style={{ padding: '16px 24px', color: '#888', fontWeight: '500', fontSize: '14px' }}>Meta Description</th>
              <th style={{ padding: '16px 24px', color: '#888', fontWeight: '500', fontSize: '14px', width: '100px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((p, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #333', verticalAlign: 'top' }}>
                <td style={{ padding: '16px 24px', color: '#fff', fontFamily: 'monospace', fontSize: '13px' }}>{p.path}</td>
                <td style={{ padding: '16px 24px', color: '#ccc', fontSize: '14px' }}>{p.title}</td>
                <td style={{ padding: '16px 24px', color: '#aaa', fontSize: '13px', maxWidth: '300px' }}>{p.desc}</td>
                <td style={{ padding: '16px 24px' }}>
                  <button style={{ padding: '6px 12px', backgroundColor: 'transparent', border: '1px solid #555', color: '#fff', borderRadius: '4px', cursor: 'pointer', fontSize: '13px' }}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
