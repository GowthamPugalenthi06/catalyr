# Phenomenon Studio — Blog System

> Full-stack blog platform with dynamic content management, built on Next.js 16.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Blog System](#blog-system)
- [Admin Panel](#admin-panel)
- [API Reference](#api-reference)
- [Folder Structure](#folder-structure)
- [How It Works](#how-it-works)

---

## Overview

This project extends the Phenomenon Studio website with a complete blog system that includes:

- **Dynamic Blog Pages** — Individual blog posts rendered from data, matching the original design
- **Insights Listing** — Filterable blog listing with category tabs
- **Admin Panel** — Premium dark-themed CRUD interface for managing blog posts
- **REST API** — Full CRUD API with file-based JSON persistence

## Architecture

```
┌─────────────────────────────────────────────────────┐
│                    Frontend                          │
│  ┌──────────────┐  ┌───────────────┐  ┌──────────┐ │
│  │ /insights    │  │ /blog/[slug]  │  │ /admin   │ │
│  │ Blog listing │  │ Single post   │  │ CRUD UI  │ │
│  └──────┬───────┘  └──────┬────────┘  └────┬─────┘ │
│         │                 │                │        │
│         └────────────┬────┘                │        │
│                      │                     │        │
│              ┌───────▼────────┐   ┌───────▼──────┐ │
│              │ lib/blogData.ts│   │ /api/blogs/* │ │
│              │ (static data)  │   │ (REST API)   │ │
│              └────────────────┘   └──────┬───────┘ │
│                                          │         │
│                                 ┌────────▼───────┐ │
│                                 │lib/blogStorage │ │
│                                 │ (JSON file I/O)│ │
│                                 └────────┬───────┘ │
│                                          │         │
│                                 ┌────────▼───────┐ │
│                                 │ data/blogs.json│ │
│                                 │ (persistence)  │ │
│                                 └────────────────┘ │
└─────────────────────────────────────────────────────┘
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open the site
open http://localhost:3000

# Open the admin panel
open http://localhost:3000/admin

# Open the blog listing
open http://localhost:3000/insights
```

## Blog System

### Blog Listing (`/insights`)

The Insights page displays all published blog posts with:
- Category filtering (All, Analytics, Business Intelligence, Design, Development, News)
- Clickable tags for inline filtering
- Article cards linking to individual blog pages
- Responsive 2-column grid

### Single Blog Page (`/blog/[slug]`)

Each blog post page includes:
- **Hero Section** — Dark background with breadcrumbs, tags, title, author info
- **Article Content** — Summary sidebar + full HTML article body
- **Share Block** — LinkedIn, Facebook, Twitter, Copy URL
- **CTA Banner** — Call-to-action with contact link
- **FAQ Accordion** — Expandable Q&A section (if FAQs are provided)
- **Related Posts** — Two related articles based on shared tags
- **Contact Form** — Reused from the existing site

### Available Blog Posts

| Slug | Title |
|------|-------|
| `website-development-company-usa` | Corporate Website Development USA |
| `design-system-lower-costs-faster-delivery` | Design System: 30% Lower Costs |
| `enterprise-web-app-development-architecture` | Enterprise Web App Architecture |
| `ai-assisted-software-development-2026` | AI-Assisted Software Development |
| `total-cost-ownership-custom-software` | Total Cost of Ownership |
| `brand-identity-services-guide-2026` | Brand Identity Services Guide |

## Admin Panel

Access the admin panel at **`/admin`**.

### Features

| Feature | Description |
|---------|-------------|
| **Dashboard** | Overview with stats (total posts, published, drafts, authors) |
| **Blog List** | Searchable, filterable table with all blog posts |
| **Create Post** | Two-column form with title, slug, content editor, cover image, tags |
| **Edit Post** | Pre-filled form for updating existing posts |
| **Delete Post** | Confirmation modal before deletion |
| **Status Toggle** | Click status badge to toggle Published/Draft |
| **Search & Filter** | Real-time search by title/author + status filter |
| **Toast Notifications** | Success/error feedback for all actions |

### Admin Routes

| Route | Purpose |
|-------|---------|
| `/admin` | Dashboard with blog list |
| `/admin/blog/new` | Create new blog post |
| `/admin/blog/[id]/edit` | Edit existing blog post |

### Blog Form Fields

- **Title** — Blog post title (required)
- **Slug** — URL-friendly identifier (auto-generated from title)
- **Summary** — Brief description for listing cards (required)
- **Content** — Full article content in HTML format
- **Cover Image** — Upload file or enter URL path
- **Author Name** — Post author
- **Author Avatar** — Avatar image URL
- **Date** — Publication date
- **Read Time** — Estimated reading time
- **Tags** — Category tags (add custom or select from quick-add)
- **Status** — Draft or Published

## API Reference

### Base URL: `/api/blogs`

#### List All Blogs
```
GET /api/blogs
Response: { success: true, data: BlogPost[] }
```

#### Create Blog
```
POST /api/blogs
Body: {
  title: string,
  slug: string,
  summary: string,
  content?: string,
  coverImage?: string,
  authorName?: string,
  authorAvatar?: string,
  date?: string,
  readTime?: string,
  tags?: string[],
  status?: "published" | "draft"
}
Response: { success: true, data: BlogPost }
```

#### Get Single Blog
```
GET /api/blogs/[id]
Response: { success: true, data: BlogPost }
```

#### Update Blog
```
PUT /api/blogs/[id]
Body: Partial<BlogPost fields>
Response: { success: true, data: BlogPost }
```

#### Delete Blog
```
DELETE /api/blogs/[id]
Response: { success: true, message: "Blog deleted" }
```

## Folder Structure

```
next_version/
├── app/
│   ├── admin/                    # Admin panel
│   │   ├── admin.css             # Admin dark theme styles
│   │   ├── layout.tsx            # Admin layout with sidebar
│   │   ├── page.tsx              # Dashboard with blog list
│   │   └── blog/
│   │       ├── new/
│   │       │   └── page.tsx      # Create new post
│   │       └── [id]/
│   │           └── edit/
│   │               └── page.tsx  # Edit existing post
│   ├── api/
│   │   └── blogs/
│   │       ├── route.ts          # GET (list) & POST (create)
│   │       └── [id]/
│   │           └── route.ts      # GET, PUT, DELETE
│   ├── blog/
│   │   └── [slug]/
│   │       └── page.tsx          # Dynamic blog post page
│   ├── insights/
│   │   └── page.tsx              # Blog listing page
│   └── layout.tsx                # Root layout
├── components/
│   ├── SiteChrome.tsx            # Conditional Header/Footer wrapper
│   └── sections/
│       ├── BlogArticle.tsx       # Single blog page component
│       └── Insights.tsx          # Blog listing component
├── lib/
│   ├── blogData.ts               # Blog types, sample data, helpers
│   └── blogStorage.ts           # File-based JSON CRUD operations
├── data/
│   └── blogs.json                # Persisted blog data (auto-created)
└── public/
    └── images/                   # Blog images & assets
```

## How It Works

### Adding a New Blog Post

1. Go to `/admin`
2. Click **"New Post"**
3. Fill in the form fields (title, content, tags, etc.)
4. Click **"Publish"** or **"Save Draft"**
5. The post appears on `/insights` (if published) and at `/blog/[slug]`

### Editing a Blog Post

1. Go to `/admin`
2. Click the **edit icon** (✏️) on any post row
3. Modify the fields
4. Click **"Save Changes"** or **"Update & Publish"**

### Deleting a Blog Post

1. Go to `/admin`
2. Click the **delete icon** (🗑️) on any post row
3. Confirm deletion in the modal

### Data Flow

1. **Frontend** reads from `lib/blogData.ts` (static imports for SSG/ISR)
2. **Admin panel** currently uses client-side state (ready for API integration)
3. **API routes** use `lib/blogStorage.ts` to read/write `data/blogs.json`
4. The JSON file is auto-seeded from `blogData.ts` on first API call

---

*Built with Next.js 16, React 19, and TypeScript.*
