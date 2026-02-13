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
    title: 'Carbon Emission Monitoring Platform',
    category: 'GreenTech',
    description: 'Real-time carbon tracking system for a manufacturing facility, enabling 30% reduction in emissions through data-driven optimization.',
    image: '/images/case-study-1.jpg',
    href: '/case-studies/carbon-monitoring',
  },
  {
    title: 'Industrial Process Automation',
    category: 'Industrie',
    description: 'Automated production line management system that improved throughput by 45% and reduced operational costs.',
    image: '/images/case-study-2.jpg',
    href: '/case-studies/process-automation',
  },
  {
    title: 'Geotechnical Survey Management System',
    category: 'Géotechnical',
    description: 'Digital platform for soil analysis data collection, processing, and reporting for construction projects.',
    image: '/images/case-study-3.jpg',
    href: '/case-studies/geotechnical-survey',
  },
  {
    title: 'Smart Bridge Monitoring Solution',
    category: 'Civil engineering',
    description: 'IoT-based structural health monitoring system for bridges with real-time alerts and predictive maintenance.',
    image: '/images/case-study-4.jpg',
    href: '/case-studies/bridge-monitoring',
  },
  {
    title: 'Renewable Energy Dashboard',
    category: 'GreenTech',
    description: 'Comprehensive monitoring dashboard for solar and wind energy installations with performance analytics.',
    image: '/images/case-study-5.jpg',
    href: '/case-studies/renewable-energy',
  },
  {
    title: 'Factory Floor Digitalization',
    category: 'Industrie',
    description: 'Complete digital transformation of factory operations including inventory, quality control, and logistics.',
    image: '/images/case-study-6.jpg',
    href: '/case-studies/factory-digitalization',
  },
  {
    title: 'Foundation Analysis Software',
    category: 'Géotechnical',
    description: 'Custom software for analyzing soil bearing capacity and foundation design recommendations.',
    image: '/images/case-study-7.jpg',
    href: '/case-studies/foundation-analysis',
  },
  {
    title: 'Construction Project Management Portal',
    category: 'Civil engineering',
    description: 'Integrated platform for managing civil engineering projects, from planning to execution and handover.',
    image: '/images/case-study-8.jpg',
    href: '/case-studies/construction-management',
  },
  {
    title: 'Environmental Compliance Training Program',
    category: 'Training',
    description: 'Comprehensive training program on environmental regulations and sustainable practices for industrial teams.',
    image: '/images/case-study-9.jpg',
    href: '/case-studies/environmental-training',
  },
];

const categories = ['All', 'GreenTech', 'Industrie', 'Géotechnical', 'Civil engineering', 'Training'];

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
