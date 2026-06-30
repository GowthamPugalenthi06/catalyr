"use client";

import React, { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { BLOG_POSTS, CATEGORIES } from "@/lib/blogData";

export default function EditBlogPost({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [tagInput, setTagInput] = useState("");
  const [coverPreview, setCoverPreview] = useState("");

  const [form, setForm] = useState({
    title: "",
    slug: "",
    summary: "",
    content: "",
    coverImage: "",
    authorName: "",
    authorAvatar: "",
    date: "",
    readTime: "",
    tags: [] as string[],
    status: "draft" as "published" | "draft",
    faqs: [] as { question: string; answer: string }[],
  });

  const [faqQuestion, setFaqQuestion] = useState("");
  const [faqAnswer, setFaqAnswer] = useState("");

  const addFAQ = () => {
    if (faqQuestion.trim() && faqAnswer.trim()) {
      setForm((prev) => ({
        ...prev,
        faqs: [...prev.faqs, { question: faqQuestion.trim(), answer: faqAnswer.trim() }],
      }));
      setFaqQuestion("");
      setFaqAnswer("");
    } else {
      showToast("FAQ Question and Answer are required", "error");
    }
  };

  const removeFAQ = (index: number) => {
    setForm((prev) => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index),
    }));
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/blogs/${resolvedParams.id}`);
        const json = await res.json();
        if (json.success && json.data) {
          const post = json.data;
          setForm({
            title: post.title,
            slug: post.slug,
            summary: post.summary,
            content: post.content,
            coverImage: post.coverImage,
            authorName: post.author.name,
            authorAvatar: post.author.avatar,
            date: post.date,
            readTime: post.readTime,
            tags: post.tags.map((t: any) => t.name),
            status: post.status,
            faqs: post.faqs || [],
          });
          setCoverPreview(post.coverImage);
        } else {
          showToast(json.error || "Failed to load blog post details", "error");
        }
      } catch (err) {
        showToast("Error connecting to server", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [resolvedParams.id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const addTag = () => {
    if (tagInput.trim() && !form.tags.includes(tagInput.trim())) {
      setForm((prev) => ({ ...prev, tags: [...prev.tags, tagInput.trim()] }));
      setTagInput("");
    }
  };

  const removeTag = (tag: string) => {
    setForm((prev) => ({ ...prev, tags: prev.tags.filter((t) => t !== tag) }));
  };

  const handleTagKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCoverPreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append("file", file);

      try {
        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        if (data.success) {
          setForm((prev) => ({ ...prev, coverImage: data.url }));
          showToast("Image uploaded successfully", "success");
        } else {
          showToast(data.error || "Failed to upload image", "error");
        }
      } catch (err) {
        showToast("Error uploading image", "error");
      }
    }
  };

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSubmit = async (e: React.FormEvent, publishNow = false) => {
    e.preventDefault();

    if (!form.title.trim()) {
      showToast("Title is required", "error");
      return;
    }

    setSaving(true);
    try {
      const status = publishNow ? "published" : form.status;
      const res = await fetch(`/api/blogs/${resolvedParams.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, status }),
      });
      const json = await res.json();
      if (json.success) {
        showToast("Blog post updated successfully!", "success");
        setTimeout(() => router.push("/admin"), 1000);
      } else {
        showToast(json.error || "Failed to update blog post", "error");
      }
    } catch (err) {
      showToast("Error connecting to server", "error");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <>
        <div className="admin-topbar">
          <h1 className="admin-topbar-title">Loading...</h1>
        </div>
        <div className="admin-content" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 400 }}>
          <div style={{ color: "var(--admin-text-muted)", fontSize: 16 }}>Loading post data...</div>
        </div>
      </>
    );
  }

  const availableTags = CATEGORIES.filter((c) => c.id !== "all").map((c) => c.label);

  return (
    <>
      {/* Top Bar */}
      <div className="admin-topbar">
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button
            className="admin-btn admin-btn-ghost"
            onClick={() => router.push("/admin")}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <h1 className="admin-topbar-title">Edit Post</h1>
          <span className={`admin-badge ${form.status}`} style={{ marginLeft: 8 }}>
            <span className="admin-badge-dot"></span>
            {form.status}
          </span>
        </div>
        <div className="admin-topbar-actions">
          <button
            className="admin-btn admin-btn-secondary"
            disabled={saving}
            onClick={(e) => handleSubmit(e, false)}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
          <button
            className="admin-btn admin-btn-primary"
            disabled={saving}
            onClick={(e) => handleSubmit(e, true)}
          >
            {saving ? "Publishing..." : "Update & Publish"}
          </button>
        </div>
      </div>

      <div className="admin-content">
        <form onSubmit={(e) => handleSubmit(e, false)}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 24 }}>
            {/* Left Column */}
            <div>
              <div className="admin-card">
                <div className="admin-card-header">
                  <span className="admin-card-title">Post Content</span>
                </div>
                <div className="admin-card-body">
                  <div className="admin-form-group">
                    <label className="admin-label">Title *</label>
                    <input
                      type="text"
                      name="title"
                      className="admin-input"
                      placeholder="Enter blog post title..."
                      value={form.title}
                      onChange={handleChange}
                      style={{ fontSize: 18, fontWeight: 600, padding: "16px" }}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Slug</label>
                    <input
                      type="text"
                      name="slug"
                      className="admin-input"
                      value={form.slug}
                      onChange={handleChange}
                    />
                    <div className="admin-form-hint">
                      URL: /blog/{form.slug || "your-post-slug"}
                    </div>
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Summary *</label>
                    <textarea
                      name="summary"
                      className="admin-textarea"
                      value={form.summary}
                      onChange={handleChange}
                      style={{ minHeight: 100 }}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Content (HTML)</label>
                    <textarea
                      name="content"
                      className="admin-textarea content-editor"
                      value={form.content}
                      onChange={handleChange}
                    />
                  </div>

                  {/* FAQs Section */}
                  <div className="admin-form-group" style={{ marginTop: 32, paddingTop: 32, borderTop: "1px solid var(--admin-border)" }}>
                    <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--admin-text)", marginBottom: 16 }}>Frequently Asked Questions (FAQs)</h3>
                    
                    {/* List of current FAQs */}
                    {form.faqs.length > 0 && (
                      <div className="admin-faq-list" style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                        {form.faqs.map((faq, index) => (
                          <div key={index} className="admin-faq-item" style={{
                            padding: 16,
                            borderRadius: 8,
                            backgroundColor: "rgba(255, 255, 255, 0.03)",
                            border: "1px solid var(--admin-border)",
                            position: "relative"
                          }}>
                            <div style={{ fontWeight: 600, color: "var(--admin-text)", paddingRight: 40, marginBottom: 4 }}>
                              Q: {faq.question}
                            </div>
                            <div style={{ color: "var(--admin-text-secondary)", fontSize: 13, lineHeight: 1.5 }}>
                              A: {faq.answer}
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFAQ(index)}
                              style={{
                                position: "absolute",
                                top: 12,
                                right: 12,
                                background: "none",
                                border: "none",
                                color: "var(--admin-danger)",
                                cursor: "pointer",
                                fontSize: 18,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                              }}
                              title="Delete FAQ"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Add new FAQ fields */}
                    <div style={{
                      padding: 16,
                      borderRadius: 8,
                      border: "1px dashed var(--admin-border)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 12
                    }}>
                      <div style={{ fontWeight: 500, fontSize: 14, color: "var(--admin-text)" }}>Add FAQ Item</div>
                      <div className="admin-form-group" style={{ marginBottom: 0 }}>
                        <input
                          type="text"
                          className="admin-input"
                          placeholder="Enter question (e.g. What is corporate website development?)"
                          value={faqQuestion}
                          onChange={(e) => setFaqQuestion(e.target.value)}
                        />
                      </div>
                      <div className="admin-form-group" style={{ marginBottom: 0 }}>
                        <textarea
                          className="admin-textarea"
                          placeholder="Enter answer details..."
                          value={faqAnswer}
                          onChange={(e) => setFaqAnswer(e.target.value)}
                          style={{ minHeight: 80 }}
                        />
                      </div>
                      <button
                        type="button"
                        className="admin-btn admin-btn-secondary"
                        onClick={addFAQ}
                        style={{ alignSelf: "flex-start" }}
                      >
                        + Add FAQ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Cover Image */}
              <div className="admin-card">
                <div className="admin-card-header">
                  <span className="admin-card-title">Cover Image</span>
                </div>
                <div className="admin-card-body">
                  <label className="admin-upload-zone">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    {coverPreview ? (
                      <div className="admin-upload-preview">
                        <img src={coverPreview} alt="Cover preview" />
                      </div>
                    ) : (
                      <>
                        <div className="admin-upload-icon">🖼️</div>
                        <div className="admin-upload-text">
                          <strong>Click to upload</strong>
                        </div>
                      </>
                    )}
                  </label>
                  <div className="admin-form-group" style={{ marginTop: 12, marginBottom: 0 }}>
                    <label className="admin-label">Image URL</label>
                    <input
                      type="text"
                      name="coverImage"
                      className="admin-input"
                      value={form.coverImage}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Author */}
              <div className="admin-card">
                <div className="admin-card-header">
                  <span className="admin-card-title">Author & Meta</span>
                </div>
                <div className="admin-card-body">
                  <div className="admin-form-group">
                    <label className="admin-label">Author Name</label>
                    <input
                      type="text"
                      name="authorName"
                      className="admin-input"
                      value={form.authorName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-label">Author Avatar URL</label>
                    <input
                      type="text"
                      name="authorAvatar"
                      className="admin-input"
                      value={form.authorAvatar}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-label">Read Time</label>
                    <input
                      type="text"
                      name="readTime"
                      className="admin-input"
                      value={form.readTime}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-label">Date</label>
                    <input
                      type="text"
                      name="date"
                      className="admin-input"
                      value={form.date}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="admin-card">
                <div className="admin-card-header">
                  <span className="admin-card-title">Tags</span>
                </div>
                <div className="admin-card-body">
                  <div style={{ display: "flex", gap: 8 }}>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="Add a tag..."
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={handleTagKeyDown}
                      style={{ flex: 1 }}
                    />
                    <button type="button" className="admin-btn admin-btn-secondary" onClick={addTag}>
                      Add
                    </button>
                  </div>
                  <div className="admin-tags-wrap" style={{ marginTop: 12 }}>
                    {form.tags.map((tag) => (
                      <span key={tag} className="admin-tag-chip">
                        {tag}
                        <button type="button" onClick={() => removeTag(tag)}>×</button>
                      </span>
                    ))}
                  </div>
                  <div style={{ marginTop: 12 }}>
                    <div className="admin-form-hint" style={{ marginBottom: 8 }}>Quick add:</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {availableTags
                        .filter((t) => !form.tags.includes(t))
                        .map((tag) => (
                          <button
                            key={tag}
                            type="button"
                            className="admin-btn admin-btn-secondary"
                            style={{ padding: "4px 10px", fontSize: 11 }}
                            onClick={() =>
                              setForm((prev) => ({
                                ...prev,
                                tags: [...prev.tags, tag],
                              }))
                            }
                          >
                            + {tag}
                          </button>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="admin-card">
                <div className="admin-card-header">
                  <span className="admin-card-title">Status</span>
                </div>
                <div className="admin-card-body">
                  <select
                    name="status"
                    className="admin-select"
                    value={form.status}
                    onChange={handleChange}
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      {toast && (
        <div className={`admin-toast ${toast.type}`}>
          {toast.type === "success" ? "✓" : "✕"} {toast.message}
        </div>
      )}
    </>
  );
}
