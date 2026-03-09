# Merna Hesham — Portfolio

Personal portfolio of **Merna Hesham**, a Software Engineer specializing in AI and Mobile Development.

---

## About

A futuristic, dark-themed portfolio built with **Next.js**, **TypeScript**, and **Once UI**. It features section-based architecture, scroll-triggered animations, and a consistent brand identity.

**Live sections:**
- Hero
- About Me
- Experience
- Projects
- Skills
- Education
- Services
- Testimonials
- Achievements
- Contact

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| UI System | Once UI |
| Icons | React Icons (Heroicons, Phosphor, SI) |
| Styling | CSS Variables + Inline Styles |
| Deployment | Vercel |

---

## Getting Started

**1. Clone the repository**
```bash
git clone https://github.com/Merna-Hesham/portfolio.git
cd portfolio
```

**2. Install dependencies**
```bash
npm install
```

**3. Set up environment variables**
```bash
cp .env.example .env.local
# Fill in your values
```

**4. Run the dev server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

---

## Project Structure

```
src/
├── app/                  # Next.js App Router pages & API routes
│   └── api/contact/      # Contact form API (Web3Forms)
├── components/
│   └── sections/         # One component per portfolio section
├── resources/
│   ├── content.tsx       # All portfolio content (name, skills, projects…)
│   ├── icons.ts          # Custom icon registry
│   └── once-ui.config.ts # Theme configuration
└── styles/               # Global CSS
```

---

## Customization

All content lives in [`src/resources/content.tsx`](src/resources/content.tsx) — edit it to update any text, links, or data without touching component code.

Icons are registered in [`src/resources/icons.ts`](src/resources/icons.ts). Add any `react-icons` icon there and reference it by name anywhere in the app.

---

## Contact

- **Email:** mernahesham.dev@gmail.com
- **LinkedIn:** [linkedin.com/in/merna-hesham](https://www.linkedin.com/in/merna-hesham-8a94b92b5/)
- **GitHub:** [github.com/Merna-Hesham](https://github.com/Merna-Hesham)
