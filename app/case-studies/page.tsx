import styles from './case-studies.module.css';
import PageHeader from '@/components/PageHeader';
import CTABanner from '@/components/CTABanner';
import CaseStudiesClient from './CaseStudiesClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | GoToGreen',
  description: 'Explore our portfolio of successful projects. See how we have helped businesses achieve their technology goals.',
};

const caseStudies = [
  {
    title: 'Enterprise Resource Planning System',
    category: 'Web Development',
    description: 'A comprehensive ERP system that streamlined operations for a manufacturing company, resulting in 40% efficiency improvement.',
    image: '/images/case-study-1.jpg',
    href: '/case-studies/erp-system',
  },
  {
    title: 'Healthcare Mobile Application',
    category: 'Mobile Apps',
    description: 'Patient management app that improved appointment scheduling by 40% and reduced no-shows by 25%.',
    image: '/images/case-study-2.jpg',
    href: '/case-studies/healthcare-app',
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    category: 'AI Solutions',
    description: 'Real-time analytics platform with predictive insights that increased sales forecasting accuracy by 35%.',
    image: '/images/case-study-3.jpg',
    href: '/case-studies/analytics-dashboard',
  },
  {
    title: 'E-commerce Platform Redesign',
    category: 'Web Development',
    description: 'Complete redesign of an e-commerce platform that increased conversion rates by 60% and improved page load times.',
    image: '/images/case-study-4.jpg',
    href: '/case-studies/ecommerce-redesign',
  },
  {
    title: 'Cloud Infrastructure Migration',
    category: 'DevOps',
    description: 'Migrated legacy infrastructure to AWS, achieving 99.99% uptime and reducing hosting costs by 45%.',
    image: '/images/case-study-5.jpg',
    href: '/case-studies/cloud-migration',
  },
  {
    title: 'Logistics Tracking Application',
    category: 'Mobile Apps',
    description: 'Real-time fleet tracking and route optimization app that reduced delivery times by 30%.',
    image: '/images/case-study-6.jpg',
    href: '/case-studies/logistics-app',
  },
  {
    title: 'Customer Service Automation',
    category: 'AI Solutions',
    description: 'AI-powered chatbot that handles 70% of customer inquiries, reducing support costs significantly.',
    image: '/images/case-study-7.jpg',
    href: '/case-studies/chatbot-automation',
  },
  {
    title: 'Financial Services Portal',
    category: 'Web Development',
    description: 'Secure customer portal for a financial services company with real-time account management features.',
    image: '/images/case-study-8.jpg',
    href: '/case-studies/financial-portal',
  },
  {
    title: 'Team Training Program',
    category: 'Training',
    description: 'Comprehensive training program that upskilled a 50-person development team on modern technologies.',
    image: '/images/case-study-9.jpg',
    href: '/case-studies/training-program',
  },
];

const categories = ['All', 'Web Development', 'Mobile Apps', 'AI Solutions', 'DevOps', 'Training'];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        title="Case Studies"
        description="Explore how we have helped businesses transform their operations and achieve their goals through technology."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Case Studies' },
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
    </>
  );
}
