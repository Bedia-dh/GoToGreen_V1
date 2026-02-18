import styles from './about.module.css';
import PageHeader from '@/components/PageHeader';
import Stats from '@/components/Stats';
import ProgramsMarquee from '@/components/ProgramsMarquee/ProgramsMarquee';
import CTABanner from '@/components/CTABanner';
import Image from 'next/image';
import type { Metadata } from 'next';
import { IconCloud } from '@/components/ui/icon-cloud';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: 'About Us | GoToGreen',
  description: 'Learn about GoToGreen - a technology company delivering innovative solutions with a commitment to efficiency and responsible engineering.',
};

const techImages = [
  'python',
  'tensorflow',
  'pytorch',
  'openai',
  'azure',
  'docker',
  'react',
  'nextjs',
  'nodejs',
  'typescript',
  'postgresql',
  'mongodb',
  'react',
  'aws',
  'python',
  'flutter',
  'git',
  'docker',
  'google',
  'googleanalytics',
  'lighthouse',
  'vercel',
  'typescript',
  'nextjs',
  'react',
  'flutter',
  'swift',
  'kotlin',
  'firebase',
  'android',

];

const stats = [
  { value: '12', suffix: '+', label: 'Projects Delivered' },
  { value: '20', suffix: '+', label: 'Years Combined Experience' },
  { value: '99', suffix: '%', label: 'Client Satisfaction' },
  { value: '3', suffix: '', label: 'Active R&D Tracks' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About GoToGreen"
        description="A technology company built on the principles of excellence, innovation, and responsible engineering."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us' },
        ]}
      />

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className="container">
          <div className={styles.missionContent}>
            <div className={styles.missionText}>
              <h2>Our Mission</h2>
              <p className={styles.missionStatement}>
                GoToGreen’s mission is to accelerate the transition toward a more sustainable economy by empowering companies with technology,
                data, and strategic guidance to measure, manage, and reduce their environmental impact.
              </p>
              <p>
                We aim to make sustainability practical, measurable, and value-driven transforming regulatory and environmental challenges into opportunities for innovation, competitiveness,
                and long-term growth.
              </p>
              <p>
                At GoToGreen, we believe sustainability should not be a constraint, but a strategic advantage.
              </p>
            </div>
            <div className={styles.serviecImage}>
              <Image
                src="/images/about/mission.webp"
                alt="Our Mission"
                width={600}
                height={400}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <Stats stats={stats} />
        </div>
      </section>

      {/* Technologies used */}
      <section className={styles.techSection}>
        <div className="container">
          <div className="section-header">
            <h2>Technologies We Use</h2>
            <p>Modern ML tooling with production-grade practices</p>
          </div>
          <div className="relative overflow-hidden">
            <IconCloud images={techImages} />
          </div>
        </div>
      </section>

      {/* Programs & Partnerships Section */}
      <section className={styles.programsSection}>
        <div className="container">
          <div className="section-header">
            <h2>Trusted Partner Programs</h2>
            <p>Certified and recognized by industry-leading technology providers</p>
          </div>
          <ProgramsMarquee />
        </div>
      </section>          



      {/* Why Choose Us Section */}
      <section className={styles.whySection}>
        <div className="container">
          <div className={styles.whyContent}>
            <h2>Why Work With Us?</h2>
            <div className={styles.whyGrid}>
              <div className={styles.whyItem}>
                <h4>Technical Expertise</h4>
                <p>Our team brings deep expertise across the full technology stack, from frontend frameworks to cloud infrastructure.</p>
              </div>
              <div className={styles.whyItem}>
                <h4>Agile Methodology</h4>
                <p>We use iterative development with regular check-ins, ensuring transparency and flexibility throughout your project.</p>
              </div>
              <div className={styles.whyItem}>
                <h4>Long-term Partnership</h4>
                <p>We don&apos;t just deliver projects—we build relationships and provide ongoing support for sustained success.</p>
              </div>
              <div className={styles.whyItem}>
                <h4>Quality Assurance</h4>
                <p>Rigorous testing, code reviews, and best practices ensure every solution meets the highest standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Let's Build Something Great Together"
        description="Ready to start your next project? We'd love to hear about your challenges and goals."
        primaryCta={{ text: 'Contact Us', href: '/contact' }}
        secondaryCta={{ text: 'View Our Work', href: '/case-studies' }}
      />

      <ScrollToTop />
    </>
  );
}
