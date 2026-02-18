import Image from 'next/image';
import styles from './service-detail.module.css';
import PageHeader from '@/components/PageHeader';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import { MagicCard } from '@/components/ui/magic-card';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import ScrollToTop from '@/components/ScrollToTop';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App Development | GoToGreen',
  description: 'Native and cross-platform mobile apps designed for performance, engagement, and scale across iOS and Android.',
};

const features = [
  {
    title: 'Native iOS & Android Apps',
    description: 'High-performance apps built with platform-native technologies and best practices.',
  },
  {
    title: 'Cross-Platform Development',
    description: 'Efficient delivery with shared codebases while preserving native quality.',
  },
  {
    title: 'UX/UI Design for Mobile',
    description: 'Intuitive interfaces focused on usability, retention, and conversion.',
  },
  {
    title: 'Backend & API Integration',
    description: 'Secure data flows with scalable APIs, authentication, and analytics.',
  },
  {
    title: 'App Store Launch',
    description: 'Submission, compliance, and optimization for public releases.',
  },
  {
    title: 'Maintenance & Growth',
    description: 'Ongoing updates, performance monitoring, and feature enhancements.',
  },
];

const faqItems = [
  {
    question: 'Do you build native or cross-platform apps?',
    answer: 'We build both. The choice depends on performance needs, budget, and time-to-market. We help you select the right approach during discovery.',
  },
  {
    question: 'How long does a mobile app project take?',
    answer: 'A focused MVP typically takes 8–12 weeks. Larger apps may require 3–6 months depending on scope and integrations.',
  },
  {
    question: 'Can you handle app store submission?',
    answer: 'Yes. We manage the full release process, including compliance, metadata, and launch assets.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer: 'Absolutely. We provide monitoring, bug fixes, OS updates, and feature iterations.',
  },
];

export default function MobileAppsPage() {
  return (
    <>
      <ScrollToTop />
      <PageHeader
        title="Mobile App Development"
        description="Native and cross-platform apps engineered for performance and customer engagement."
        compact
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Mobile Apps' },
        ]}
      />

      <section className={styles.overviewSection}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewContent}>
              <h2>Deliver Experiences Users Love</h2>
              <p>
                We design and build mobile applications that feel fast, reliable, and intuitive. From
                consumer apps to enterprise tools, our teams focus on performance, stability, and
                the details that make people keep using your product.
              </p>
              <p>
                Our delivery includes UX/UI design, development, integrations, testing, and launch
                support so your app reaches the market with confidence.
              </p>
              <InteractiveHoverButton href="/contact" className="btn btn-primary">
                Start Your App
              </InteractiveHoverButton>
            </div>
              <div className={styles.missionImage}>
                <Image
                  src="/images/services_images/mobile_1.png"
                  alt="Our Mission"
                  width={600}
                  height={400}
                  className={styles.image}
                />
              </div>
          </div>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className="container">
          <div className="section-header">
            <h2>What We Offer</h2>
            <p>End-to-end mobile development built for scale</p>
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

      <section className={styles.processSection}>
        <div className="container">
          <div className="section-header">
            <h2>Our Development Process</h2>
            <p>Clear milestones and transparent delivery</p>
          </div>
          <div className={styles.processSteps}>
            <MagicCard className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Discovery</h3>
              <p>Define goals, users, and technical requirements.</p>
            </MagicCard>
            <MagicCard className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Design</h3>
              <p>Prototype key flows and validate UI/UX decisions.</p>
            </MagicCard>
            <MagicCard className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Build</h3>
              <p>Agile development with continuous QA and testing.</p>
            </MagicCard>
            <MagicCard className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Launch</h3>
              <p>App store release, monitoring, and iteration.</p>
            </MagicCard>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our mobile app services</p>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      <CTABanner
        title="Ready to Build a Mobile App?"
        description="Let’s discuss your product and craft a plan for launch and growth."
        primaryCta={{ text: 'Get in Touch', href: '/contact' }}
        secondaryCta={{ text: 'View Case Studies', href: '/case-studies' }}
      />
    </>
  );
}
