import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './case-study-detail.module.css';
import PageHeader from '@/components/PageHeader';
import CTABanner from '@/components/CTABanner';
import ScrollToTop from '@/components/ScrollToTop';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import type { Metadata } from 'next';

// Project data with full details
const projects = [
  {
    slug: 'fonda-solution',
    title: 'Fonda Solution – Geotechnical Engineering Website',
    category: 'Géotechnical',
    description: 'A professional corporate website for a geotechnical engineering firm, built with Next.js — featuring SEO optimization, modern UI, and clear service presentation.',
    fullDescription: 'GoToGreen designed and developed the full corporate website for Fonda Solution, a geotechnical engineering company based in France specializing in soil studies, foundation design, structural reinforcement, and ground improvement. Built with the same tech stack as GoToGreen (Next.js, TypeScript, CSS Modules), the site delivers a fast, SEO-optimized, and visually professional experience. We worked to ensure every service — from soil investigation and geotechnical surveys to deep foundation solutions and retaining structures — is clearly presented with dedicated pages, intuitive navigation, and compelling visuals. The UI was enhanced with smooth animations, structured content hierarchy, and a mobile-first responsive design that reflects the credibility and expertise of the brand.',
    image: '/images/projects/Fonda.webp',
    client: 'Fonda Solution',
    duration: '2 months',
    year: '2025',
    technologies: ['Next.js', 'TypeScript', 'CSS Modules', 'SEO Optimization', 'Responsive Design', 'Framer Motion'],
    results: [
      'Fully live and operational at fondasolution.fr',
      'SEO-optimized with structured metadata and semantic HTML',
      'Professional UI with smooth animations and modern design',
      'All geotechnical services clearly presented with dedicated pages',
      'Mobile-first responsive design across all devices',
      'Fast load times with Next.js static generation',
    ],
  },
  {
    slug: 'amphenol-automotive',
    title: 'Amphenol Automotive – GEO, AI Search Optimization & Content Structuring',
    category: 'SEO & Digital Growth',
    description: 'Complete website restructuring to prepare for AI-driven search engines, transforming a traditional product-centered site into an AI-readable digital ecosystem.',
    fullDescription: 'Amphenol Automotive partnered with us to prepare their corporate website for the new generation of AI-driven search engines such as ChatGPT, Perplexity, and Gemini. The objective was to transform a traditional product-centered website into a structured, AI-readable digital ecosystem capable of clearly communicating expertise in high-voltage connectors, interconnect systems, automotive applications, and innovation capabilities. We led a full-scale content restructuring initiative focused on semantic clarity, logical hierarchy, and AI-intent alignment, ensuring that Amphenol Automotive\'s expertise can be accurately interpreted, extracted, and recommended by generative search systems.',
    image: '/images/projects/Amphenol-automotive.webp',
    client: 'Amphenol Automotive',
    duration: '3 months',
    year: '2026',
    technologies: ['WordPress CMS', 'Structured FAQ Blocks', 'Semantic Content Architecture', 'AI-Assisted Content Modeling', 'Generative Search Testing', 'On-page SEO Structuring'],
    results: [
      'Complete restructuring of core website pages',
      'Development of strategic AI-intent question framework',
      'Implementation of clear H1/H2/H3 semantic hierarchy',
      'Integration of structured FAQ modules across key pages',
      'Improved contextual clarity across automotive and e-mobility segments',
      'Strengthened internal linking architecture',
      'Creation of AI-ready content blocks for generative search systems',
      'Deployment of scalable framework for future AI-driven expansion',
    ],
  },
  {
    slug: 'carbon-monitoring',
    title: 'Carbon Emission Monitoring Platform',
    category: 'GreenTech',
    description: 'Real-time carbon tracking system for a manufacturing facility, enabling 30% reduction in emissions through data-driven optimization.',
    fullDescription: 'We developed a comprehensive carbon monitoring platform that tracks emissions across all production processes. The system integrates with existing industrial sensors and provides real-time dashboards, alerts, and reporting tools to help facilities meet their sustainability goals.',
    image: '/images/projects/CO2-emission.webp',
    client: 'EcoManufacturing Ltd',
    duration: '6 months',
    year: '2025',
    technologies: ['IoT Sensors', 'Python', 'React', 'PostgreSQL'],
    results: [
      '30% reduction in carbon emissions',
      'Real-time emission monitoring',
      'Automated compliance reporting',
      'Predictive maintenance alerts',
    ],
  },
  {
    slug: 'nird-navigator',
    title: 'NIRD Navigator – Digital Responsibility Extension',
    category: 'GreenTech',
    description: 'A Manifest V3 browser extension designed to transform everyday web browsing into an act of digital citizenship through responsible digital practices.',
    fullDescription: 'The NIRD Navigator is a comprehensive browser extension that addresses resource consumption, personal data protection, accessibility, and digital well-being. Aligning with the three pillars of the NIRD initiative: Inclusive, Responsible, and Sustainable Digital Practices, this extension empowers students and citizens with an all-in-one digital "control panel" to regain autonomy over their online environment. The solution promotes energy-aware browsing habits while enhancing user control over personal data and tracking.',
    image: '/images/projects/nird-navigator.webp',
    client: 'NIRD Initiative',
    duration: '4 months',
    year: '2026',
    technologies: ['Chrome Extension – Manifest V3', 'JavaScript (Vanilla JS)', 'HTML5 & CSS3', 'Browser APIs', 'Privacy & Tracking Control', 'Performance Optimization'],
    results: [
      'Promoted responsible and energy-aware browsing habits',
      'Enhanced user control over personal data and tracking',
      'Improved accessibility features for inclusive web usage',
      'Encouraged healthier digital behaviors and reduced cognitive overload',
      'Positioned digital sustainability as a practical, everyday action',
    ],
  },

  
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: 'Project Not Found | GoToGreen',
    };
  }

  return {
    title: `${project.title} | GoToGreen`,
    description: project.description,
  };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ScrollToTop />
      <PageHeader
        title={project.title}
        description={project.description}
        compact
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Projects', href: '/case-studies' },
          { label: project.title },
        ]}
      />

      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroImage}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <span className={styles.categoryBadge}>{project.category}</span>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Project Overview</h2>
              <p>{project.fullDescription}</p>

              <h3>Key Results</h3>
              <ul className={styles.resultsList}>
                {project.results.map((result, index) => (
                  <li key={index}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M16.5 5.5L7.5 14.5L3.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.infoCard}>
                <h4>Project Details</h4>
                <div className={styles.infoItem}>
                  <span className={styles.label}>Client</span>
                  <span className={styles.value}>{project.client}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>Duration</span>
                  <span className={styles.value}>{project.duration}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>Year</span>
                  <span className={styles.value}>{project.year}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>Category</span>
                  <span className={styles.value}>{project.category}</span>
                </div>
              </div>

              <div className={styles.techCard}>
                <h4>Technologies Used</h4>
                <div className={styles.techTags}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>

              <InteractiveHoverButton href="/contact" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                Start a Similar Project
              </InteractiveHoverButton>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.navSection}>
        <div className="container">
          <Link href="/case-studies" className={styles.backLink}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 16L6 10L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to All Projects
          </Link>
        </div>
      </section>

      <CTABanner
        title="Have a Similar Project in Mind?"
        description="Let us discuss how we can help you achieve similar results for your business."
        primaryCta={{ text: 'Start a Project', href: '/contact' }}
        variant="accent"
      />
    </>
  );
}
