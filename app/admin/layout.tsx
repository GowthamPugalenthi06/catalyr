import "./admin.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout" suppressHydrationWarning={true}>
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-brand">
          <div className="admin-sidebar-brand-icon">P</div>
          <span className="admin-sidebar-brand-text">Phenomenon</span>
          <span className="admin-sidebar-brand-badge">Admin</span>
        </div>

        <nav className="admin-sidebar-nav">
          <span className="admin-sidebar-label">Content</span>

          <a href="/admin" className="admin-nav-link active">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Blog Posts
          </a>

          <span className="admin-sidebar-label" style={{ marginTop: 16 }}>Quick Links</span>

          <a href="/" className="admin-nav-link" target="_blank">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            View Site
          </a>

          <a href="/insights" className="admin-nav-link" target="_blank">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            Insights Page
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        {children}
      </main>
    </div>
  );
}
