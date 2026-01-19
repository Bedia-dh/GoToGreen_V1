import Link from 'next/link';
import styles from './service-detail.module.css';
import PageHeader from '@/components/PageHeader';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO & Digital Growth | GoToGreen',
  description: 'Technical SEO, content strategy, and growth optimization to improve visibility and conversions.',
};

const technologies = [
  { name: 'GA4', icon: '📊' },
  { name: 'Search Console', icon: '🔎' },
  { name: 'Core Web Vitals', icon: '⚡' },
  { name: 'Ahrefs', icon: '🧭' },
  { name: 'Semrush', icon: '📈' },
  { name: 'Heatmaps', icon: '🔥' },
];

const features = [
  {
    title: 'Technical SEO',
    description: 'Site audits, crawlability, indexation, and performance improvements.',
  },
  {
    title: 'Content Strategy',
    description: 'Keyword planning and content that builds authority and relevance.',
  },
  {
    title: 'Conversion Optimization',
    description: 'Improve funnels and user journeys to increase conversions.',
  },
  {
    title: 'Analytics & Reporting',
    description: 'Clear performance dashboards and actionable insights.',
  },
  {
    title: 'Local SEO',
    description: 'Location-based visibility for services and retail businesses.',
  },
  {
    title: 'Performance Improvements',
    description: 'Faster load times to boost rankings and user engagement.',
  },
];

const faqItems = [
  {
    question: 'How long before we see results?',
    answer: 'SEO is a long-term investment. Most clients see meaningful impact within 8–12 weeks depending on competitiveness.',
  },
  {
    question: 'Do you work with existing websites?',
    answer: 'Yes. We can audit and optimize existing sites or support a full redesign with SEO baked in.',
  },
  {
    question: 'How do you measure success?',
    answer: 'We track rankings, traffic quality, conversions, and revenue impact aligned to your KPIs.',
  },
  {
    question: 'Do you provide ongoing optimization?',
    answer: 'Yes. We offer monthly growth programs with continuous monitoring and iteration.',
  },
];

export default function SeoPage() {
  return (
    <>
      <PageHeader
        title="SEO & Digital Growth"
        description="Increase visibility, traffic, and conversions with a structured growth strategy."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'SEO & Digital Growth' },
        ]}
      />

      <section className={styles.overviewSection}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewContent}>
              <h2>Drive Consistent, Measurable Growth</h2>
              <p>
                We combine technical SEO, content strategy, and conversion optimization to help
                your business grow sustainably. Our approach focuses on visibility, performance,
                and user experience.
              </p>
              <p>
                From audits to ongoing optimization, we deliver clear insights and measurable
                outcomes across your digital channels.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Improve Your Growth
              </Link>
            </div>
            <div className={styles.overviewImage}>
              <span className={styles.imagePlaceholder}>📈</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className="container">
          <div className="section-header">
            <h2>What We Offer</h2>
            <p>Growth services focused on performance and ROI</p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feature) => (
              <div key={feature.title} className={styles.featureCard}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.techSection}>
        <div className="container">
          <div className="section-header">
            <h2>Tools & Platforms</h2>
            <p>Analytics and optimization stack</p>
          </div>
          <div className={styles.techGrid}>
            {technologies.map((tech) => (
              <div key={tech.name} className={styles.techCard}>
                <span className={styles.techIcon}>{tech.icon}</span>
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className="container">
          <div className="section-header">
            <h2>Our Delivery Process</h2>
            <p>Evidence-based optimization and iteration</p>
          </div>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Audit</h3>
              <p>Technical and content analysis to identify opportunities.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Plan</h3>
              <p>Keyword and content strategy aligned to business goals.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Optimize</h3>
              <p>On-page, technical, and performance improvements.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Measure</h3>
              <p>Track outcomes and iterate for continuous gains.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about SEO and growth</p>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      <CTABanner
        title="Want to Grow Faster?"
        description="Let’s build a strategy that drives consistent growth."
        primaryCta={{ text: 'Start a Project', href: '/contact' }}
        secondaryCta={{ text: 'View Services', href: '/services' }}
      />
    </>
  );
}
