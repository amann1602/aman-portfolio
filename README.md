# Aman Mafij Inamdar — Premium Professional Portfolio

A high-performance, light-mode first personal portfolio website engineered for **Aman Mafij Inamdar**, a Computer Science undergraduate specializing in **Artificial Intelligence & Analytics** at MIT ADT University, Pune (CGPA: 8.14).

Designed specifically for hiring managers, technical recruiters, R&D labs, AI/analytics teams, and technology-management opportunities.

---

## 🌟 Key Highlights & Engineering Features

- **Light-First Primary Aesthetic**: Built on clean `#FFFFFF` and `#F8FAFC` backgrounds with slate typography, crisp card borders, and professional indigo/blue accents. Avoids tacky glowing elements and neon templates.
- **Dual-Theme Support**: Light mode is the default; includes a seamless Dark Mode toggle stored in `localStorage`.
- **Verified Resume Data Architecture**: All education scores, internship descriptions, 2 published research papers, 7 industry certifications, and 3 hackathons strictly reflect authentic credentials from Aman's resume.
- **Interactive Project Showcase**:
  - `Smart Traffic and Parking Management System (2026)` (IoT + ML + Real-Time Telemetry)
  - `CrowdFlow Analytics System (2025)` (YOLOv5 + Computer Vision Pipeline)
  - `AyuBarter (2025)` (React.js + AI Recommendation Flow)
  - Instant category filtering (`All`, `AI / ML`, `Analytics`, `Software`, `Research`)
  - Dedicated project case-study detail routes (`/projects/*`)
- **Direct Resume Integration**: 1-click Download & In-Browser View buttons linked directly to `public/resume/Aman_Inamdar_Resume.pdf`.
- **Full SEO & Structured Data**: Pre-configured JSON-LD Schema.org person metadata, OpenGraph tags, Twitter cards, canonical tags, `robots.txt`, and `sitemap.xml`.
- **Accessible & Responsive**: Fully responsive across mobile (375px/390px), tablet (768px), laptop (1024px/1280px), and wide desktop (1440px+).

---

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: TypeScript (Strict data models)
- **Styling**: Tailwind CSS with custom light-first design tokens
- **Motion**: Framer Motion
- **Icons**: Lucide React + Bespoke SVGs (GitHub, LinkedIn, LeetCode)
- **Deployment Ready**: Vercel & custom domain (`amaninamdar.in`)

---

## 📁 Project Architecture

```text
Aman Portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg                      # Profile headshot
│   │   ├── profile-placeholder.svg          # Fallback SVG avatar
│   │   └── projects/                        # Project media assets
│   ├── resume/
│   │   └── Aman_Inamdar_Resume.pdf          # Official resume PDF
│   ├── favicon.svg                          # Site favicon
│   ├── robots.txt                           # Production crawler directives
│   └── sitemap.xml                          # Search engine XML sitemap
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts             # Contact form submission endpoint
│   │   ├── projects/
│   │   │   ├── smart-traffic-parking/       # Case study detail page
│   │   │   ├── crowdflow-analytics/         # Case study detail page
│   │   │   └── ayubarter/                   # Case study detail page
│   │   ├── layout.tsx                       # Root layout, fonts & SEO JSON-LD
│   │   ├── page.tsx                         # Main portfolio landing page
│   │   ├── loading.tsx                      # Minimal loading animation
│   │   └── not-found.tsx                    # Professional 404 page
│   ├── components/
│   │   ├── Navbar.tsx                       # Sticky navbar with theme & resume CTA
│   │   ├── Hero.tsx                         # Main hero with rotating titles & badges
│   │   ├── Stats.tsx                        # 4 factual resume statistics
│   │   ├── About.tsx                        # Introduction & Professional Snapshot
│   │   ├── FocusAreas.tsx                   # "What I Work On" 4 domain cards
│   │   ├── ExperienceTimeline.tsx           # Vertical internship timeline
│   │   ├── ProjectCard.tsx                  # Project display card
│   │   ├── ProjectFilter.tsx                # Category filter buttons
│   │   ├── ProjectGrid.tsx                  # Animated project listing
│   │   ├── ProjectVisuals.tsx               # Tech pipeline diagrams (YOLOv5, IoT)
│   │   ├── Skills.tsx                       # Categorized skills matrix (no fake bars)
│   │   ├── EducationTimeline.tsx            # Academic journey & CGPA
│   │   ├── PublicationCard.tsx              # Research publications section
│   │   ├── CertificationCard.tsx            # 7 verified certifications
│   │   ├── Achievements.tsx                 # Hackathons and milestones
│   │   ├── ResumeCTA.tsx                    # Download & View resume banner
│   │   ├── Contact.tsx                      # Contact form & copy-email action
│   │   ├── Footer.tsx                       # Brand footer & social links
│   │   └── Icons.tsx                        # Custom SVG icons
│   ├── context/
│   │   └── ThemeContext.tsx                 # Dual theme provider (Light default)
│   ├── data/
│   │   ├── profile.ts                       # Personal details, stats & focus areas
│   │   ├── experience.ts                    # Internship details
│   │   ├── projects.ts                      # Project entries & case studies
│   │   ├── skills.ts                        # Skill categories & pills
│   │   ├── education.ts                     # University & school history
│   │   ├── publications.ts                  # Research papers
│   │   ├── certifications.ts                # Certified credentials
│   │   ├── achievements.ts                  # Honors & hackathons
│   │   └── socials.ts                       # Links & contact info
│   └── index.css                            # Base Tailwind styles & utilities
├── .env.example                             # Environment variable template
├── .env.local                               # Local development env
├── next.config.mjs                          # Next.js configuration
├── tailwind.config.js                       # Tailwind tokens & palette
├── tsconfig.json                            # TypeScript config
└── package.json                             # Dependencies & scripts
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js (v18.17+ or v20+)** and **npm** installed.

### 2. Installation
```bash
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Inside `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://amaninamdar.in
RECIPIENT_EMAIL=amaninamdar7775@gmail.com
EMAIL_SERVICE_API_KEY=
```

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Running Linter & Quality Check
```bash
npm run lint
```

### 6. Creating a Production Build
```bash
npm run build
npm run start
```

---

## 📝 How to Update Content

All content is cleanly decoupled from UI components inside `src/data/`:

### Updating Projects
Open [`src/data/projects.ts`](file:///c:/Projects/Aman%20Portfolio/src/data/projects.ts):
- Add a new project object with `title`, `year`, `category`, `technologies`, `features`, and `sections`.
- To attach GitHub or Live URLs, populate `githubUrl` and `liveUrl`.

### Updating Certifications
Open [`src/data/certifications.ts`](file:///c:/Projects/Aman%20Portfolio/src/data/certifications.ts):
- Add or modify certification cards with `name`, `issuer`, `domain`, and optional `url`.

### Updating Resume
Replace the file at:
```text
public/resume/Aman_Inamdar_Resume.pdf
```
Both the navbar CTA and the Resume CTA automatically serve this exact PDF.

### Updating Profile Photo
Place your professional photo at:
```text
public/images/profile.jpg
```
The site automatically renders this image in the Hero section, OpenGraph preview, and provides a graceful SVG fallback avatar if the image is missing.

### Updating Social URLs
Open [`src/data/socials.ts`](file:///c:/Projects/Aman%20Portfolio/src/data/socials.ts):
- Replace placeholder URLs with your personal LinkedIn, GitHub, and LeetCode handles.

---

## 🚢 Deployment Guide

### A. Deploy to GitHub
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "feat: complete production portfolio for Aman Inamdar"
   ```
2. Create a repository on GitHub (e.g. `aman-portfolio`) and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/aman-portfolio.git
   git branch -M main
   git push -u origin main
   ```

### B. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New Project"** and import your `aman-portfolio` GitHub repository.
3. Framework Preset: **Next.js** (detected automatically).
4. Root Directory: `./`.
5. Under **Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_URL`: `https://amaninamdar.in`
   - `RECIPIENT_EMAIL`: `amaninamdar7775@gmail.com`
6. Click **Deploy**. Vercel will build and deploy the production bundle.

### C. Custom Domain Setup (`amaninamdar.in`)
1. In your Vercel project dashboard, navigate to **Settings** → **Domains**.
2. Enter `amaninamdar.in` and click **Add**.
3. In your domain registrar (GoDaddy, Namecheap, Hostinger, etc.), add the DNS records provided by Vercel:
   - **A Record**: Host `@` → Points to `76.76.21.21`
   - **CNAME Record**: Host `www` → Points to `cname.vercel-dns.com`
4. Once DNS propagates (typically 5–30 minutes), Vercel will automatically provision a free SSL certificate.

---

## 📄 License & Credits
© 2026 **Aman Mafij Inamdar**. All rights reserved.
Developed for professional recruitment, academic research, and engineering showcase.
