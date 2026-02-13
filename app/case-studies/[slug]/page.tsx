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
    slug: 'carbon-monitoring',
    title: 'Carbon Emission Monitoring Platform',
    category: 'GreenTech',
    description: 'Real-time carbon tracking system for a manufacturing facility, enabling 30% reduction in emissions through data-driven optimization.',
    fullDescription: 'We developed a comprehensive carbon monitoring platform that tracks emissions across all production processes. The system integrates with existing industrial sensors and provides real-time dashboards, alerts, and reporting tools to help facilities meet their sustainability goals.',
    image: '/images/case-study-1.jpg',
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
    slug: 'process-automation',
    title: 'Industrial Process Automation',
    category: 'Industrie',
    description: 'Automated production line management system that improved throughput by 45% and reduced operational costs.',
    fullDescription: 'A complete industrial automation solution featuring PLC integration, SCADA systems, and real-time production monitoring. The system automates quality control, inventory management, and production scheduling.',
    image: '/images/case-study-2.jpg',
    client: 'Industrial Corp',
    duration: '8 months',
    year: '2025',
    technologies: ['PLC Programming', 'SCADA', 'Node.js', 'MongoDB'],
    results: [
      '45% improvement in throughput',
      '35% reduction in operational costs',
      'Zero unplanned downtime',
      'Automated quality control',
    ],
  },
  {
    slug: 'geotechnical-survey',
    title: 'Geotechnical Survey Management System',
    category: 'Géotechnical',
    description: 'Digital platform for soil analysis data collection, processing, and reporting for construction projects.',
    fullDescription: 'A specialized platform for geotechnical engineers to manage soil surveys, conduct analysis, and generate comprehensive reports. Features include GPS-enabled data collection, automated calculations, and standardized reporting.',
    image: '/images/case-study-3.jpg',
    client: 'GeoTech Solutions',
    duration: '5 months',
    year: '2025',
    technologies: ['React Native', 'Python', 'GIS Integration', 'AWS'],
    results: [
      '60% faster survey processing',
      'Standardized reporting format',
      'GPS-enabled field data collection',
      'Integrated analysis tools',
    ],
  },
  {
    slug: 'bridge-monitoring',
    title: 'Smart Bridge Monitoring Solution',
    category: 'Civil engineering',
    description: 'IoT-based structural health monitoring system for bridges with real-time alerts and predictive maintenance.',
    fullDescription: 'An advanced structural health monitoring system using IoT sensors to track bridge conditions including vibration, strain, temperature, and displacement. The system provides real-time alerts and predictive maintenance recommendations.',
    image: '/images/case-study-4.jpg',
    client: 'City Infrastructure Dept',
    duration: '7 months',
    year: '2024',
    technologies: ['IoT Sensors', 'Machine Learning', 'React', 'TimescaleDB'],
    results: [
      'Real-time structural monitoring',
      'Predictive maintenance alerts',
      '50% reduction in inspection costs',
      'Extended infrastructure lifespan',
    ],
  },
  {
    slug: 'renewable-energy',
    title: 'Renewable Energy Dashboard',
    category: 'GreenTech',
    description: 'Comprehensive monitoring dashboard for solar and wind energy installations with performance analytics.',
    fullDescription: 'A unified dashboard for monitoring multiple renewable energy installations. Features include real-time power generation tracking, weather correlation analysis, maintenance scheduling, and ROI calculations.',
    image: '/images/case-study-5.jpg',
    client: 'GreenPower Inc',
    duration: '4 months',
    year: '2024',
    technologies: ['Next.js', 'Python', 'InfluxDB', 'Grafana'],
    results: [
      '15% improvement in energy yield',
      'Unified multi-site monitoring',
      'Predictive performance analytics',
      'Automated maintenance alerts',
    ],
  },
  {
    slug: 'factory-digitalization',
    title: 'Factory Floor Digitalization',
    category: 'Industrie',
    description: 'Complete digital transformation of factory operations including inventory, quality control, and logistics.',
    fullDescription: 'A comprehensive Industry 4.0 implementation covering the entire factory floor. The solution includes digital twins, real-time inventory tracking, automated quality inspection, and integrated logistics management.',
    image: '/images/case-study-6.jpg',
    client: 'ModernFactory SA',
    duration: '10 months',
    year: '2024',
    technologies: ['Digital Twin', 'Computer Vision', 'SAP Integration', 'Azure'],
    results: [
      'Complete digital visibility',
      '40% reduction in defects',
      'Real-time inventory accuracy',
      'Optimized logistics flow',
    ],
  },
  {
    slug: 'foundation-analysis',
    title: 'Foundation Analysis Software',
    category: 'Géotechnical',
    description: 'Custom software for analyzing soil bearing capacity and foundation design recommendations.',
    fullDescription: 'Specialized engineering software that calculates soil bearing capacity, settlement predictions, and provides foundation design recommendations based on geotechnical survey data and building loads.',
    image: '/images/case-study-7.jpg',
    client: 'StructureFirst Engineering',
    duration: '6 months',
    year: '2024',
    technologies: ['Python', 'NumPy', 'React', 'PostgreSQL'],
    results: [
      'Automated calculations',
      'Code-compliant designs',
      '70% faster analysis time',
      'Integrated reporting',
    ],
  },
  {
    slug: 'construction-management',
    title: 'Construction Project Management Portal',
    category: 'Civil engineering',
    description: 'Integrated platform for managing civil engineering projects, from planning to execution and handover.',
    fullDescription: 'A complete project management solution for civil engineering firms featuring project scheduling, resource allocation, document management, progress tracking, and stakeholder communication tools.',
    image: '/images/case-study-8.jpg',
    client: 'BuildRight Construction',
    duration: '8 months',
    year: '2023',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    results: [
      'Centralized project data',
      '25% improvement in on-time delivery',
      'Real-time progress tracking',
      'Streamlined documentation',
    ],
  },
  {
    slug: 'environmental-training',
    title: 'Environmental Compliance Training Program',
    category: 'Training',
    description: 'Comprehensive training program on environmental regulations and sustainable practices for industrial teams.',
    fullDescription: 'A tailored training program covering environmental regulations, sustainable practices, carbon footprint reduction, and compliance requirements. Includes e-learning modules, workshops, and certification assessments.',
    image: '/images/case-study-9.jpg',
    client: 'MultiIndustry Group',
    duration: '4 months',
    year: '2023',
    technologies: ['LMS Platform', 'Video Production', 'Assessment Tools', 'Analytics'],
    results: [
      '200+ employees certified',
      '100% compliance achieved',
      'Improved environmental practices',
      'Reduced regulatory risks',
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
