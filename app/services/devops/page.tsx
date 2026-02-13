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
  title: 'DevOps & Infrastructure | GoToGreen',
  description: 'Cloud infrastructure, automation, and CI/CD pipelines to deliver reliable and secure systems at scale.',
};

const techImages = [
  'aws',
  'azure',
  'docker',
  'kubernetes',
  'terraform',
  'github',
];

const features = [
  {
    title: 'CI/CD Pipelines',
    description: 'Automated build, test, and deploy pipelines for faster releases.',
  },
  {
    title: 'Infrastructure as Code',
    description: 'Reusable, versioned infrastructure with consistent environments.',
  },
  {
    title: 'Cloud Migration',
    description: 'Move from on-prem to cloud with minimal downtime and risk.',
  },
  {
    title: 'Monitoring & Observability',
    description: 'Proactive alerting, logging, and tracing for reliability.',
  },
  {
    title: 'Security & Compliance',
    description: 'Hardened infrastructure with policy-based controls.',
  },
  {
    title: 'Cost Optimization',
    description: 'Right-size resources and reduce cloud spend.',
  },
];

const faqItems = [
  {
    question: 'Can you improve our current deployment process?',
    answer: 'Yes. We audit your pipeline, identify bottlenecks, and implement automation for safer and faster releases.',
  },
  {
    question: 'Do you support multi-cloud environments?',
    answer: 'Absolutely. We design cloud-agnostic architectures and deployment strategies when needed.',
  },
  {
    question: 'How do you handle uptime and reliability?',
    answer: 'We set up monitoring, alerting, and SRE practices to keep services healthy and resilient.',
  },
  {
    question: 'Can you reduce our cloud costs?',
    answer: 'Yes. We analyze usage patterns and optimize infrastructure for performance and savings.',
  },
];

export default function DevOpsPage() {
  return (
    <>
      <ScrollToTop />
      <PageHeader
        title="DevOps & Infrastructure"
        description="Automated delivery pipelines and resilient cloud infrastructure."
        compact
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'DevOps & Infrastructure' },
        ]}
      />

      <section className={styles.overviewSection}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewContent}>
              <h2>Build for Reliability and Speed</h2>
              <p>
                We help teams ship faster with automation and stable infrastructure. From CI/CD
                to scalable cloud environments, we build the foundation for dependable delivery.
              </p>
              <p>
                Our DevOps practices improve deployment confidence, reduce downtime, and provide
                clear visibility across your systems.
              </p>
              <InteractiveHoverButton href="/contact" className="btn btn-primary">
                Optimize Your Stack
              </InteractiveHoverButton>
            </div>
              <div className={styles.missionImage}>
                <Image
                  src="/images/services_images/devops_1.png"
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
            <p>Infrastructure services designed for scale and reliability</p>
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
            <h2>Our Delivery Process</h2>
            <p>Structured implementation with minimal risk</p>
          </div>
          <div className={styles.processSteps}>
            <MagicCard className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Assessment</h3>
              <p>Review current infrastructure and deployment flow.</p>
            </MagicCard>
            <MagicCard className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Design</h3>
              <p>Define architecture and automation requirements.</p>
            </MagicCard>
            <MagicCard className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Implementation</h3>
              <p>Build pipelines and IaC with security best practices.</p>
            </MagicCard>
            <MagicCard className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Operate</h3>
              <p>Monitoring, optimization, and continuous improvements.</p>
            </MagicCard>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about DevOps and infrastructure</p>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      <CTABanner
        title="Need Reliable Infrastructure?"
        description="Let’s build a scalable, secure, and automated delivery pipeline."
        primaryCta={{ text: 'Talk to an Expert', href: '/contact' }}
        secondaryCta={{ text: 'View Case Studies', href: '/case-studies' }}
      />
    </>
  );
}
