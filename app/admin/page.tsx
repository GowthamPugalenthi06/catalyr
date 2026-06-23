"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blogData";
import type { BlogPost } from "@/lib/blogData";

export default function AdminDashboard() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "published" | "draft">("all");
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/blogs");
      const json = await res.json();
      if (json.success) {
        setPosts(json.data);
      } else {
        showToast(json.error || "Failed to load posts", "error");
      }
    } catch (err) {
      showToast("Error connecting to server", "error");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.author.name.toLowerCase().includes(search.toLowerCase());
      const matchStatus = statusFilter === "all" || post.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [posts, search, statusFilter]);

  const stats = useMemo(() => {
    const published = posts.filter((p) => p.status === "published").length;
    const drafts = posts.filter((p) => p.status === "draft").length;
    const tags = new Set(posts.flatMap((p) => p.tags.map((t) => t.id)));
    const authors = new Set(posts.map((p) => p.author.name));
    return { total: posts.length, published, drafts, tags: tags.size, authors: authors.size };
  }, [posts]);

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
      const json = await res.json();
      if (json.success) {
        setPosts((prev) => prev.filter((p) => p.id !== id));
        showToast("Blog post deleted successfully");
      } else {
        showToast(json.error || "Failed to delete post", "error");
      }
    } catch (err) {
      showToast("Failed to delete post", "error");
    } finally {
      setDeleteTarget(null);
    }
  };

  const toggleStatus = async (id: string) => {
    const post = posts.find((p) => p.id === id);
    if (!post) return;
    const newStatus = post.status === "published" ? "draft" : "published";

    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const json = await res.json();
      if (json.success) {
        setPosts((prev) =>
          prev.map((p) => (p.id === id ? { ...p, status: newStatus } : p))
        );
        showToast("Status updated");
      } else {
        showToast(json.error || "Failed to update status", "error");
      }
    } catch (err) {
      showToast("Failed to update status", "error");
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="admin-topbar">
        <h1 className="admin-topbar-title">Blog Posts</h1>
        <div className="admin-topbar-actions">
          <Link href="/admin/blog/new" className="admin-btn admin-btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            New Post
          </Link>
        </div>
      </div>

      <div className="admin-content">
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center", padding: "80px 0", color: "var(--admin-text-secondary)" }}>
            Loading dashboard data...
          </div>
        ) : (
          <>
            {/* Stats */}
            <div className="admin-stats-grid">
          <div className="admin-stat-card">
            <div className="admin-stat-label">Total Posts</div>
            <div className="admin-stat-value">{stats.total}</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-label">Published</div>
            <div className="admin-stat-value" style={{ color: "var(--admin-success)" }}>
              {stats.published}
            </div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-label">Drafts</div>
            <div className="admin-stat-value" style={{ color: "var(--admin-warning)" }}>
              {stats.drafts}
            </div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-label">Authors</div>
            <div className="admin-stat-value">{stats.authors}</div>
          </div>
        </div>

        {/* Filters */}
        <div className="admin-card">
          <div className="admin-card-header">
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div className="admin-search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {(["all", "published", "draft"] as const).map((s) => (
                  <button
                    key={s}
                    className={`admin-btn ${statusFilter === s ? "admin-btn-primary" : "admin-btn-secondary"}`}
                    style={{ padding: "8px 14px", fontSize: 12, textTransform: "capitalize" }}
                    onClick={() => setStatusFilter(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <span style={{ fontSize: 13, color: "var(--admin-text-muted)" }}>
              {filteredPosts.length} post{filteredPosts.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Table */}
          {filteredPosts.length > 0 ? (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Post</th>
                    <th>Author</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Tags</th>
                    <th style={{ textAlign: "right" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPosts.map((post) => (
                    <tr key={post.id}>
                      <td>
                        <div className="admin-table-title">
                          <img
                            src={post.coverImage}
                            alt=""
                            className="admin-table-thumb"
                          />
                          <span className="admin-table-title-text">
                            {post.title}
                          </span>
                        </div>
                      </td>
                      <td>
                        <span style={{ color: "var(--admin-text-secondary)" }}>
                          {post.author.name}
                        </span>
                      </td>
                      <td>
                        <button
                          className={`admin-badge ${post.status}`}
                          onClick={() => toggleStatus(post.id)}
                          style={{ cursor: "pointer", border: "none" }}
                          title="Click to toggle status"
                        >
                          <span className="admin-badge-dot"></span>
                          {post.status}
                        </button>
                      </td>
                      <td>
                        <span style={{ color: "var(--admin-text-muted)", fontSize: 13 }}>
                          {post.date}
                        </span>
                      </td>
                      <td>
                        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                          {post.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              style={{
                                fontSize: 10,
                                fontWeight: 700,
                                padding: "3px 8px",
                                borderRadius: 4,
                                background: "var(--admin-surface-active)",
                                color: "var(--admin-text-secondary)",
                                textTransform: "uppercase",
                                letterSpacing: "0.06em",
                              }}
                            >
                              {tag.name}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td>
                        <div style={{ display: "flex", gap: 4, justifyContent: "flex-end" }}>
                          <Link
                            href={`/blog/${post.slug}`}
                            target="_blank"
                            className="admin-btn admin-btn-ghost admin-btn-icon"
                            title="View"
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                          </Link>
                          <Link
                            href={`/admin/blog/${post.id}/edit`}
                            className="admin-btn admin-btn-ghost admin-btn-icon"
                            title="Edit"
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                            </svg>
                          </Link>
                          <button
                            className="admin-btn admin-btn-danger admin-btn-icon"
                            title="Delete"
                            onClick={() => setDeleteTarget(post.id)}
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="admin-empty">
              <div className="admin-empty-icon">📝</div>
              <div className="admin-empty-title">No posts found</div>
              <div className="admin-empty-text">
                {search
                  ? "Try adjusting your search or filter."
                  : "Create your first blog post to get started."}
              </div>
              {!search && (
                <Link href="/admin/blog/new" className="admin-btn admin-btn-primary">
                  Create First Post
                </Link>
              )}
            </div>
          )}
        </div>
      </>
    )}
  </div>

      {/* Delete Confirmation Modal */}
      {deleteTarget && (
        <div className="admin-modal-overlay" onClick={() => setDeleteTarget(null)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-title">Delete Blog Post</div>
            <div className="admin-modal-text">
              Are you sure you want to delete this blog post? This action cannot be undone.
            </div>
            <div className="admin-modal-actions">
              <button
                className="admin-btn admin-btn-secondary"
                onClick={() => setDeleteTarget(null)}
              >
                Cancel
              </button>
              <button
                className="admin-btn admin-btn-primary"
                style={{ background: "var(--admin-danger)" }}
                onClick={() => handleDelete(deleteTarget)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className={`admin-toast ${toast.type}`}>
          {toast.type === "success" ? "✓" : "✕"} {toast.message}
        </div>
      )}
    </>
  );
}
