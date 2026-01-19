# GoToGreen Website - Copilot Instructions

## Project Overview

GoToGreen is a multi-page corporate website for a technology solutions company. The site delivers a professional, tech-forward, and trustworthy experience.

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** CSS Modules with CSS Variables
- **Font:** Poppins (Google Fonts)

## Design Tokens

Use the following CSS variables defined in `globals.css`:

- `--color-primary`: #0F3D23 (Dark Green - headers, buttons, footer)
- `--color-accent`: #6EA843 (Light Green - CTAs, highlights)
- `--color-bg`: #FFFFFF (Background)
- `--color-bg-soft`: #F7F9F7 (Soft section backgrounds)
- `--color-text-main`: #1E1E1E (Primary text)
- `--color-text-secondary`: #5F6B63 (Secondary text)

## Component Guidelines

- All components are in `/components` folder with their own CSS modules
- Use the existing reusable components: Hero, ServiceCard, CaseStudyCard, BlogCard, etc.
- Follow the established naming conventions

## Adding New Pages

1. Create a new folder in `/app` with the page route name
2. Add `page.tsx` and a corresponding CSS module
3. Import and use existing components where possible
4. Use `PageHeader` component for internal pages

## Typography Rules

- Body text: Regular (16-18px)
- Navigation & labels: Medium
- Section headings: SemiBold
- CTAs: Bold
- Hero headlines: ExtraBold

## Development Commands

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm start       # Start production server
npm run lint    # Run ESLint
```

## Content Guidelines

- Technology-driven, business-focused language
- Avoid exaggerated eco-marketing terms
- Green identity is subtle, not dominant
- Professional and enterprise-grade messaging
