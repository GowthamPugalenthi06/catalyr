# Catalyr — Product Development Agency Website

> Built with **Next.js 14 App Router** · Deployed at [catalyr.com](https://catalyr.com)

---

## 🏗 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | CSS (legacy site CSS imported from `public/`) |
| Fonts | System fonts via CSS variables |
| Image Hosting | `/public/` (local) + Unsplash CDN (external stock) |
| Blog Storage | JSON file (`lib/blogStorage.ts`) + static seed (`lib/blogData.ts`) |
| Deployment | Node.js server / Vercel |

---

## 📁 Project Structure

```
next_version/
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Homepage
│   ├── about/page.tsx          # About Us
│   ├── work/page.tsx           # Portfolio / Work
│   ├── career/page.tsx         # Careers
│   ├── contact/page.tsx        # Contact
│   ├── insights/page.tsx       # Blog / Insights
│   ├── services/               # Service pages
│   │   ├── saas-development/
│   │   ├── web-development/
│   │   ├── mobile-app-development/
│   │   ├── mvp-development/
│   │   ├── ui-ux-design/
│   │   ├── product-strategy/
│   │   ├── ai-solutions/
│   │   └── automation-solutions/
│   └── industries/             # Industry-specific pages
│       ├── saas/               ✅ Active
│       ├── healthcare/         ✅ Active
│       ├── edtech/             ✅ Active
│       ├── ecommerce/          ✅ Active (newly added)
│       ├── real-estate/        ✅ Active (newly added)
│       ├── logistics/          ✅ Active (newly added)
│       └── fintech/            ❌ Returns 404 (removed)
├── components/
│   ├── Header.tsx              # Global navigation
│   ├── Footer.tsx              # Global footer
│   ├── AnimatedWords.tsx       # Word animation component
│   └── sections/               # Page section components
│       ├── Hero.tsx            # Homepage hero (crossfade images)
│       ├── Services.tsx        # "What We Build" section
│       ├── ProblemsWeSolve.tsx # "How We Work" section
│       ├── BestCases.tsx       # Impact grid (8 cards)
│       ├── IndustriesTabs.tsx  # Industries overview tab
│       ├── Awards.tsx          # The Catalyr Edge section
│       ├── Testimonials.tsx    # Core Values section
│       ├── Team.tsx            # Team photo grid
│       ├── Cases.tsx           # Work preview cards
│       ├── CasesPage.tsx       # Full work page
│       ├── CareerPage.tsx      # Career page
│       ├── SaasPage.tsx        # SaaS industry page
│       ├── HealthcarePage.tsx  # Healthcare industry page
│       ├── EdtechPage.tsx      # EdTech industry page
│       ├── EcommercePage.tsx   # E-Commerce industry page (NEW)
│       ├── RealEstatePage.tsx  # Real Estate industry page (NEW)
│       ├── LogisticsPage.tsx   # Logistics industry page (NEW)
│       └── ServicesPage.tsx    # Dynamic service pages
├── lib/
│   ├── blogData.ts             # Blog seed data (7 posts)
│   └── blogStorage.ts          # Blog read/write utilities
├── public/
│   ├── images/                 # Static images (logos, icons, avatars)
│   ├── work/                   # Project mockup images (portfolio)
│   └── stock/                  # Downloaded stock photos (see setup below)
└── download_stock_images.sh    # Script to download all Unsplash images locally
```

---

## 🖼 Image Strategy

The site uses **two types of images**:

### 1. Project Mockups — `/public/work/`
Used in portfolio sections, work page, and featured cases. These are actual screenshots/mockups of Catalyr's delivered projects.

| File | Project |
|---|---|
| `branding.png` | Branding & identity project |
| `ecom.png` | E-commerce storefront |
| `ecomm2.png` | E-commerce variant |
| `hrms-web.png` | HR Management System |
| `journeyride.png` | JourneyRide app |
| `ai2.png` | AI product |
| `foodapp.png` | Food delivery app |

### 2. Stock Photography — Unsplash CDN
Used for contextual imagery (how we work steps, service cards, industry pages, blog covers). These reference external Unsplash URLs for development. For production, download locally using:

```bash
bash download_stock_images.sh
```

This saves all images to `/public/stock/`. After downloading, update image paths from `https://images.unsplash.com/...` to `/stock/<filename>.jpg`.

---

## 🏭 Industry Pages

| Industry | Route | Status | Component |
|---|---|---|---|
| SaaS | `/industries/saas` | ✅ Active | `SaasPage.tsx` |
| Healthcare | `/industries/healthcare` | ✅ Active | `HealthcarePage.tsx` |
| EdTech | `/industries/edtech` | ✅ Active | `EdtechPage.tsx` |
| **E-Commerce** | `/industries/ecommerce` | ✅ **NEW** | `EcommercePage.tsx` |
| **Real Estate** | `/industries/real-estate` | ✅ **NEW** | `RealEstatePage.tsx` |
| **Logistics** | `/industries/logistics` | ✅ **NEW** | `LogisticsPage.tsx` |
| Fintech | `/industries/fintech` | ❌ Returns 404 | — |
| Blockchain | — | ❌ Removed | — |

---

## ✍️ Blog / Insights

Blog data lives in `lib/blogData.ts` as a static seed array (`BLOG_POSTS`). At runtime, `blogStorage.ts` reads/merges this with any persisted posts from the data directory.

### Current Published Posts

| # | Title | Tags | SEO Target |
|---|---|---|---|
| 1 | Corporate Website Development USA | Development | US market |
| 2 | Design System: 30% Lower Costs | Business Intelligence, Design | Product teams |
| 3 | Enterprise Web App Architecture | Development | Enterprise |
| 4 | AI-Assisted Software Development 2026 | BI, Development | AI trend |
| 5 | Total Cost of Ownership: Custom vs SaaS | Development | Buy vs build |
| 6 | Brand Identity Services Guide 2026 | Design | Branding |
| **7** | **Product Development Company in India** | **Development, BI** | **🎯 Primary SEO** |

> **Blog #7** is the primary SEO article targeting the keyword _"product development company in India"_ with full structured content, FAQs, and Catalyr-specific detail. Published: June 26, 2026.

---

## 👥 Leadership Team

| Name | Role | Contact |
|---|---|---|
| Gowtham Pugalenthi | Co-Founder & CEO | Partnership lead |
| Ragul Babu | Co-Founder & CTO | Technical lead |
| Himanshu Ranjan Saravanan | Co-Founder & Head of Partnerships | Project lead |

---

## 🎨 Design System

- **Primary brand color**: Blue (`--accent-blue`)
- **Dark background**: `#0A0A0A`
- **Card radius**: `12px`
- **Section spacing**: `200px` desktop / `100px` mobile
- **Typography**: CSS variable font stack

### Key CSS Classes

| Class | Usage |
|---|---|
| `bg--dark` | Dark section backgrounds |
| `bg--white` | Light section backgrounds |
| `clipped-top / clipped-bottom` | Section clip masks |
| `radius-80 radius-32-mob` | Large section border radius |
| `next_block_sticky` | Sticky footer scroll effect |
| `crossfade-wrapper` | Slow crossfade animation between 2 images |

---

## 🚀 Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Download stock images (run once before deploy)
bash download_stock_images.sh
```

---

## ✅ Completed Tasks (Session Summary)

### Visual Standardization
- [x] Replaced all legacy `<video>` tags site-wide with images
- [x] Homepage Hero: crossfade between `ecomm2.png` and `branding.png`
- [x] "How We Work" section: 6 Unsplash contextual photos (team, code, launch)
- [x] "What We Build" section: 12 unique Unsplash images across 3 service categories
- [x] BestCases impact grid: expanded to **8 cards** with unique icons

### New Industry Pages
- [x] Created `/industries/ecommerce` → `EcommercePage.tsx`
- [x] Created `/industries/real-estate` → `RealEstatePage.tsx`
- [x] Created `/industries/logistics` → `LogisticsPage.tsx`
- [x] All pages include: hero, challenges grid (6 items), solutions grid, CTA

### Career Page
- [x] "OUR KEY STRENGTH" section updated with Catalyr's actual founders
- [x] Row 1: Gowtham Pugalenthi (CEO) — vision, execution, client accountability
- [x] Row 2: Ragul Babu (CTO) — engineering, architecture, AI
- [x] Row 3: Himanshu Ranjan Saravanan (Partnerships) — client trust, scope

### Content Updates
- [x] `Testimonials.tsx` (Core Values): Refreshed with Catalyr-specific, client-facing language
- [x] `Awards.tsx`: Updated with Catalyr Edge positioning and correct CTA links

### Blog / SEO
- [x] Added Blog #7: **"Product Development Company in India"** — full-length, FAQ-rich, Catalyr-branded SEO article targeting global search traffic

### Config
- [x] `next.config.ts`: Added Unsplash to `images.remotePatterns` for external image rendering

---

## ⚠️ Known Issues & Next Steps

1. **Stock image download**: Images currently use Unsplash CDN URLs. Run `bash download_stock_images.sh` to download locally to `/public/stock/`, then update all `https://images.unsplash.com/...` URLs to `/stock/<filename>.jpg` for offline/production use.

2. **Fintech route**: `/industries/fintech` intentionally returns `404`. Do not re-enable.

3. **Industries tab component** (`IndustriesTabs.tsx`): Verify the tabs for E-Commerce, Real Estate, and Logistics link correctly to the new routes.

4. **Blog image #7**: Uses an Unsplash external URL. Replace with a locally stored image after running the download script.

5. **Contact form**: Has location-based currency switching for budget ranges. Ensure the form backend handles the `location` field if leads are being stored.

---

## 🌐 SEO Coverage

| Page | Primary Keyword | Status |
|---|---|---|
| Homepage | Product development agency India | ✅ |
| /industries/saas | SaaS development company | ✅ |
| /industries/healthcare | Healthcare app development | ✅ |
| /industries/edtech | EdTech platform development | ✅ |
| /industries/ecommerce | E-commerce development India | ✅ |
| /industries/real-estate | Real estate software India | ✅ |
| /industries/logistics | Logistics software development | ✅ |
| /insights (blog #7) | Product development company India | 🎯 Primary |

---

*Last updated: June 26, 2026*
