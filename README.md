# GoToGreen Website

A professional multi-page corporate website for GoToGreen, a technology solutions company. Built with Next.js 16, TypeScript, and CSS Modules.

## About the Project

GoToGreen delivers technology solutions (web, mobile, AI, DevOps, training) with a focus on excellence and responsible engineering. The website is designed to be:

- **Professional** - Enterprise-grade UI with clean, minimal design
- **Tech-forward** - Modern technologies and best practices
- **Trustworthy** - Clear messaging and transparent communication
- **Scalable** - Modular component architecture

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** CSS Modules with CSS Variables (Design Tokens)
- **Font:** Poppins (Google Fonts)

## Project Structure

```
gotogreen/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog listing page
│   ├── case-studies/      # Case studies page
│   ├── contact/           # Contact page
│   ├── services/          # Services pages
│   │   └── web-development/  # Service detail page
│   ├── globals.css        # Global styles & design tokens
│   ├── layout.tsx         # Root layout with Header/Footer
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── BlogCard/
│   ├── CaseStudyCard/
│   ├── ClientLogos/
│   ├── ContactForm/
│   ├── CTABanner/
│   ├── FAQ/
│   ├── Footer/
│   ├── Header/
│   ├── Hero/
│   ├── PageHeader/
│   ├── ServiceCard/
│   ├── Stats/
│   └── Testimonials/
└── public/                # Static assets
```

## Design System

### Color Palette

| Token                    | Value   | Usage                    |
| ------------------------ | ------- | ------------------------ |
| `--color-primary`        | #0F3D23 | Headers, buttons, footer |
| `--color-accent`         | #6EA843 | CTAs, highlights, icons  |
| `--color-bg`             | #FFFFFF | Background               |
| `--color-bg-soft`        | #F7F9F7 | Soft sections            |
| `--color-text-main`      | #1E1E1E | Primary text             |
| `--color-text-secondary` | #5F6B63 | Secondary text           |

### Typography

- **Font Family:** Poppins
- **Body:** Regular (16-18px)
- **Headings:** SemiBold to ExtraBold
- **CTAs:** Bold

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm start
```

## Pages

| Page           | Route              | Description                                    |
| -------------- | ------------------ | ---------------------------------------------- |
| Home           | `/`                | Landing page with hero, services, case studies |
| About          | `/about`           | Company information, team, values              |
| Services       | `/services`        | Overview of all services                       |
| Service Detail | `/services/[slug]` | Individual service pages                       |
| Case Studies   | `/case-studies`    | Portfolio of projects                          |
| Blog           | `/blog`            | Articles and insights                          |
| Contact        | `/contact`         | Contact form and information                   |

## Components

All components are built with CSS Modules and are fully reusable:

- **Header** - Responsive navigation with mobile menu
- **Footer** - Site links, contact info, social links
- **Hero** - Video/image background with overlay
- **ServiceCard** - Service preview with link
- **CaseStudyCard** - Project showcase card
- **BlogCard** - Article preview card
- **Testimonials** - Slider with client quotes
- **Stats** - Metrics/numbers display
- **FAQ** - Accordion-style Q&A
- **CTABanner** - Call-to-action section
- **ContactForm** - Full contact form with validation
- **PageHeader** - Page title with breadcrumbs

## Deployment

This project can be deployed on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting**

```bash
# Build and export
npm run build
```

## License

Private - All rights reserved.
