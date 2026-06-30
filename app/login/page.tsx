import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function AdminLogin() {
  async function login(formData: FormData) {
    "use server";
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (username === "catalyr" && password === "Catalyr@2026") {
      const cookieStore = await cookies();
      cookieStore.set("admin_session", "secure_token_123", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24, // 1 day
      });
      redirect("/admin");
    }
  }

  return (
    <main style={{ backgroundColor: '#f1f1f1', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif' }}>
      
      {/* WordPress style logo area */}
      <div style={{ marginBottom: '24px', textAlign: 'center' }}>
        <div style={{ margin: '0 auto', color: '#3c434a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: '600', letterSpacing: '-0.5px' }}>
          Catalyr
        </div>
      </div>

      {/* Login Box */}
      <div style={{ width: '320px', backgroundColor: '#fff', padding: '24px', border: '1px solid #c3c4c7', boxShadow: '0 1px 3px rgba(0,0,0,0.04)', borderRadius: '4px' }}>
        <form action={login} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', color: '#2c3338', fontSize: '14px', marginBottom: '8px' }}>Username or Email Address</label>
            <input 
              type="text" 
              name="username" 
              required
              style={{ width: '100%', padding: '6px 12px', boxSizing: 'border-box', backgroundColor: '#fff', border: '1px solid #8c8f94', borderRadius: '4px', color: '#2c3338', fontSize: '20px', lineHeight: '1.3', minHeight: '40px', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.07)' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'flex', justifyContent: 'space-between', color: '#2c3338', fontSize: '14px', marginBottom: '8px' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input 
                type="password" 
                name="password" 
                required
                style={{ width: '100%', padding: '6px 12px', boxSizing: 'border-box', backgroundColor: '#fff', border: '1px solid #8c8f94', borderRadius: '4px', color: '#2c3338', fontSize: '20px', lineHeight: '1.3', minHeight: '40px', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.07)' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '13px', color: '#2c3338' }}>
              <input type="checkbox" style={{ margin: 0, width: '16px', height: '16px', border: '1px solid #8c8f94', borderRadius: '4px' }} />
              Remember Me
            </label>
            
            <button type="submit" style={{ padding: '6px 14px', backgroundColor: '#2271b1', color: '#fff', border: '1px solid #2271b1', borderRadius: '3px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', textDecoration: 'none', lineHeight: '2.15384615' }}>
              Log In
            </button>
          </div>
        </form>
      </div>

      {/* Footer links */}
      <div style={{ width: '320px', marginTop: '16px', fontSize: '13px' }}>
        <a href="#" style={{ color: '#2271b1', textDecoration: 'none', paddingBottom: '4px' }}>Lost your password?</a>
        <br />
        <a href="/" style={{ color: '#2271b1', textDecoration: 'none', marginTop: '8px', display: 'inline-block' }}>← Go to Catalyr</a>
      </div>

    </main>
  );
}
