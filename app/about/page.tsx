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


const team = [
  {
    name: 'David Anderson',
    role: 'CEO & Founder',
    bio: '15+ years in technology leadership',
  },
  {
    name: 'Lisa Chen',
    role: 'CTO',
    bio: 'Expert in scalable architecture',
  },
  {
    name: 'Marcus Johnson',
    role: 'Head of Engineering',
    bio: 'Full-stack development specialist',
  },
  {
    name: 'Sarah Williams',
    role: 'Head of Design',
    bio: 'UX/UI and product design expert',
  },
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
                To empower businesses with technology solutions that drive growth, 
                efficiency, and lasting competitive advantage.
              </p>
              <p>
                Founded with a vision to bridge the gap between complex technology 
                and real business value, GoToGreen has grown into a trusted partner 
                for organizations seeking digital transformation.
              </p>
              <p>
                We believe that great technology should be accessible, sustainable, 
                and built to last. Our approach combines technical excellence with 
                deep understanding of business challenges, delivering solutions that 
                make a real difference.
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
