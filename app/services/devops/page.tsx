import Link from 'next/link';
import styles from './service-detail.module.css';
import PageHeader from '@/components/PageHeader';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DevOps & Infrastructure | GoToGreen',
  description: 'Cloud infrastructure, automation, and CI/CD pipelines to deliver reliable and secure systems at scale.',
};

const technologies = [
  { name: 'AWS', icon: '☁️' },
  { name: 'Azure', icon: '🔷' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Kubernetes', icon: '☸️' },
  { name: 'Terraform', icon: '🏗️' },
  { name: 'GitHub Actions', icon: '✅' },
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
      <PageHeader
        title="DevOps & Infrastructure"
        description="Automated delivery pipelines and resilient cloud infrastructure."
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
              <Link href="/contact" className="btn btn-primary">
                Optimize Your Stack
              </Link>
            </div>
            <div className={styles.overviewImage}>
              <span className={styles.imagePlaceholder}>⚙️</span>
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
            <h2>Technologies We Use</h2>
            <p>Industry-standard tooling for modern cloud platforms</p>
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
            <p>Structured implementation with minimal risk</p>
          </div>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Assessment</h3>
              <p>Review current infrastructure and deployment flow.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Design</h3>
              <p>Define architecture and automation requirements.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Implementation</h3>
              <p>Build pipelines and IaC with security best practices.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Operate</h3>
              <p>Monitoring, optimization, and continuous improvements.</p>
            </div>
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
