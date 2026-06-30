"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CATEGORIES } from "@/lib/blogData";

export default function NewBlogPost() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    summary: "",
    content: "",
    coverImage: "",
    authorName: "",
    authorAvatar: "",
    date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    readTime: "",
    tags: [] as string[],
    status: "draft" as "published" | "draft",
    faqs: [] as { question: string; answer: string }[],
  });

  const [tagInput, setTagInput] = useState("");
  const [coverPreview, setCoverPreview] = useState("");
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Auto-generate slug from title
    if (name === "title") {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
      setForm((prev) => ({ ...prev, slug }));
    }
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
    if (!form.summary.trim()) {
      showToast("Summary is required", "error");
      return;
    }

    setSaving(true);

    try {
      const status = publishNow ? "published" : form.status;
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, status }),
      });
      const json = await res.json();
      if (json.success) {
        showToast(
          publishNow ? "Blog post published!" : "Blog post saved as draft!",
          "success"
        );
        setTimeout(() => router.push("/admin"), 1000);
      } else {
        showToast(json.error || "Failed to save post", "error");
      }
    } catch (err) {
      showToast("Error connecting to server", "error");
    } finally {
      setSaving(false);
    }
  };

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
          <h1 className="admin-topbar-title">Create New Post</h1>
        </div>
        <div className="admin-topbar-actions">
          <button
            className="admin-btn admin-btn-secondary"
            disabled={saving}
            onClick={(e) => handleSubmit(e, false)}
          >
            {saving ? "Saving..." : "Save Draft"}
          </button>
          <button
            className="admin-btn admin-btn-primary"
            disabled={saving}
            onClick={(e) => handleSubmit(e, true)}
          >
            {saving ? "Publishing..." : "Publish"}
          </button>
        </div>
      </div>

      <div className="admin-content">
        <form onSubmit={(e) => handleSubmit(e, false)}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 24 }}>
            {/* Left Column — Main Content */}
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
                      placeholder="auto-generated-from-title"
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
                      placeholder="Write a brief summary of the article..."
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
                      placeholder="<h2>Introduction</h2>&#10;<p>Write your blog content here using HTML markup...</p>"
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

            {/* Right Column — Meta */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Cover Image */}
              <div className="admin-card">
                <div className="admin-card-header">
                  <span className="admin-card-title">Cover Image</span>
                </div>
                <div className="admin-card-body">
                  <label className={`admin-upload-zone ${coverPreview ? 'has-image' : ''}`}>
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
                          <strong>Click to upload</strong> or drag & drop
                          <br />
                          PNG, JPG, WebP up to 5MB
                        </div>
                      </>
                    )}
                  </label>
                  <div className="admin-form-group" style={{ marginTop: 12, marginBottom: 0 }}>
                    <label className="admin-label">Or enter image URL</label>
                    <input
                      type="text"
                      name="coverImage"
                      className="admin-input"
                      placeholder="/images/cover.png"
                      value={form.coverImage}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Author & Meta */}
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
                      placeholder="John Doe"
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
                      placeholder="/images/author.webp"
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
                      placeholder="8 min read"
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
                      placeholder="Jun 12, 2026"
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
                  <div className="admin-form-group" style={{ marginBottom: 12 }}>
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
                      <button
                        type="button"
                        className="admin-btn admin-btn-secondary"
                        onClick={addTag}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  <div className="admin-tags-wrap">
                    {form.tags.map((tag) => (
                      <span key={tag} className="admin-tag-chip">
                        {tag}
                        <button type="button" onClick={() => removeTag(tag)}>
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                  <div style={{ marginTop: 12 }}>
                    <div className="admin-form-hint" style={{ marginBottom: 8 }}>
                      Quick add:
                    </div>
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

      {/* Toast */}
      {toast && (
        <div className={`admin-toast ${toast.type}`}>
          {toast.type === "success" ? "✓" : "✕"} {toast.message}
        </div>
      )}
    </>
  );
}
