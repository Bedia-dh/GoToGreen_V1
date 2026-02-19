import styles from './case-studies.module.css';
import PageHeader from '@/components/PageHeader';
import CTABanner from '@/components/CTABanner';
import CaseStudiesClient from './CaseStudiesClient';
import ScrollToTop from '@/components/ScrollToTop';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects| GoToGreen',
  description: 'Explore our portfolio of successful projects. See how we have helped businesses achieve their technology goals.',
};

const caseStudies = [
  {
    title: 'Fonda Solution – Geotechnical Engineering Website',
    category: 'Géotechnical',
    description: 'A professional corporate website for a geotechnical engineering firm, built with Next.js — featuring SEO optimization, modern UI, and clear service presentation.',
    image: '/images/projects/Fonda.webp',
    href: '/case-studies/fonda-solution',
  },
  {
    title: 'NIRD Navigator – Digital Responsibility Extension',
    category: 'GreenTech',
    description: 'A Manifest V3 browser extension designed to transform everyday web browsing into an act of digital citizenship through responsible digital practices.',
    image: '/images/projects/nird-navigator.webp',
    href: '/case-studies/nird-navigator',
  },
  {
    title: 'Amphenol Automotive – GEO, AI Search Optimization',
    category: 'SEO & Digital Growth',
    description: 'Complete website restructuring to prepare for AI-driven search engines, transforming a traditional product-centered site into an AI-readable digital ecosystem.',
    image: '/images/projects/Amphenol-automotive.webp',
    href: '/case-studies/amphenol-automotive',
  },
  {
    title: 'Carbon Emission Monitoring Platform',
    category: 'GreenTech',
    description: 'Real-time carbon tracking system for a manufacturing facility, enabling 30% reduction in emissions through data-driven optimization.',
    image: '/images/projects/CO2-emission.webp',
    href: '/case-studies/carbon-monitoring',
  },

];

const categories = ['All', 'GreenTech', 'SEO & Digital Growth', 'Industrie', 'Géotechnical', 'Civil engineering', 'Training'];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        title="Our Projects"
        description="Explore how we have helped businesses transform their operations and achieve their goals through technology."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Projects' },
        ]}
      />

      <section className={styles.caseStudiesSection}>
        <CaseStudiesClient caseStudies={caseStudies} categories={categories} />
      </section>

      <CTABanner
        title="Have a Similar Project in Mind?"
        description="Let us discuss how we can help you achieve similar results for your business."
        primaryCta={{ text: 'Start a Project', href: '/contact' }}
        variant="accent"
      />

      <ScrollToTop />
    </>
  );
}
