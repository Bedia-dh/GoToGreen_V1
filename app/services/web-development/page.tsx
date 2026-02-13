import Link from 'next/link';
import Image from 'next/image';
import styles from './service-detail.module.css';
import PageHeader from '@/components/PageHeader';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import { IconCloud } from '@/components/ui/icon-cloud';
import { MagicCard } from '@/components/ui/magic-card';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import ScrollToTop from '@/components/ScrollToTop';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development Services | GoToGreen',
  description: 'Custom web applications and websites built with modern technologies for performance, scalability, and exceptional user experience.',
};

const techImages = [
  'react',
  'nextjs',
  'nodejs',
  'typescript',
  'postgresql',
  'mongodb',
];

const features = [
  {
    title: 'Custom Web Applications',
    description: 'Tailored solutions built from the ground up to meet your specific business requirements and workflows.',
  },
  {
    title: 'E-commerce Platforms',
    description: 'Scalable online stores with secure payment processing, inventory management, and customer analytics.',
  },
  {
    title: 'Content Management Systems',
    description: 'Easy-to-use CMS solutions that empower your team to manage content without technical expertise.',
  },
  {
    title: 'Progressive Web Apps',
    description: 'Web applications that work offline, load instantly, and provide app-like experiences.',
  },
  {
    title: 'API Development',
    description: 'Robust APIs that connect your systems, enable integrations, and power your digital ecosystem.',
  },
  {
    title: 'Performance Optimization',
    description: 'Speed improvements that enhance user experience and boost search engine rankings.',
  },
];

const faqItems = [
  {
    question: 'What technologies do you use for web development?',
    answer: 'We primarily work with React, Next.js, Node.js, and TypeScript for modern web applications. For databases, we use PostgreSQL and MongoDB depending on project requirements. We stay current with industry trends to deliver cutting-edge solutions.',
  },
  {
    question: 'How long does a typical web development project take?',
    answer: 'Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We provide detailed timelines during our discovery phase.',
  },
  {
    question: 'Do you provide ongoing maintenance and support?',
    answer: 'Yes, we offer comprehensive support and maintenance packages. This includes bug fixes, security updates, performance monitoring, and feature enhancements to keep your application running smoothly.',
  },
  {
    question: 'Can you work with our existing systems?',
    answer: 'Absolutely. We specialize in integrating new solutions with existing systems, whether that means building APIs, migrating data, or creating bridges between legacy and modern systems.',
  },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <ScrollToTop />
      <PageHeader
        title="Web Development"
        description="Custom web applications built with modern technologies for performance, scalability, and exceptional user experience."
        compact
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Web Development' },
        ]}
      />

      {/* Overview Section */}
      <section className={styles.overviewSection}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewContent}>
              <h2>Build Your Digital Presence</h2>
              <p>
                In today&apos;s digital landscape, your web presence is often the first 
                impression customers have of your business. We create web applications 
                that not only look great but also deliver exceptional performance and 
                user experience.
              </p>
              <p>
                Our team combines technical expertise with a deep understanding of 
                business needs to deliver solutions that drive real results. From 
                simple websites to complex enterprise applications, we have the 
                skills and experience to bring your vision to life.
              </p>
              <InteractiveHoverButton href="/contact" className="btn btn-primary">
                Start Your Project
              </InteractiveHoverButton>
            </div>
              <div className={styles.missionImage}>
                <Image
                  src="/images/services_images/web_dev1.png"
                  alt="Our Mission"
                  width={600}
                  height={400}
                  className={styles.image}
                />
              </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className="container">
          <div className="section-header">
            <h2>What We Offer</h2>
            <p>Comprehensive web development services tailored to your needs</p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feature) => (
              <MagicCard key={feature.title} className={styles.featureCard}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </MagicCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className="container">
          <div className="section-header">
            <h2>Our Development Process</h2>
            <p>A structured approach to delivering successful projects</p>
          </div>
          <div className={styles.processSteps}>
            <MagicCard className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Discovery & Planning</h3>
              <p>We analyze your requirements, define project scope, and create a detailed roadmap.</p>
            </MagicCard>
            <MagicCard className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Design & Prototyping</h3>
              <p>Creating wireframes and interactive prototypes to visualize the final product.</p>
            </MagicCard>
            <MagicCard className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Development</h3>
              <p>Agile development with regular sprints, testing, and client feedback loops.</p>
            </MagicCard>
            <MagicCard className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Launch & Support</h3>
              <p>Thorough QA, deployment, and ongoing maintenance for lasting success.</p>
            </MagicCard>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our web development services</p>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      <CTABanner
        title="Ready to Build Your Web Application?"
        description="Let's discuss your project and explore how we can help you succeed online."
        primaryCta={{ text: 'Get in Touch', href: '/contact' }}
        secondaryCta={{ text: 'View Case Studies', href: '/case-studies' }}
      />
    </>
  );
}
