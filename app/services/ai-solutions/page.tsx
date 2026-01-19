import Link from 'next/link';
import styles from './service-detail.module.css';
import PageHeader from '@/components/PageHeader';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Solutions | GoToGreen',
  description: 'Applied AI solutions to automate workflows, generate insights, and improve decision-making at scale.',
};

const technologies = [
  { name: 'Python', icon: '🐍' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'PyTorch', icon: '🔥' },
  { name: 'OpenAI', icon: '✨' },
  { name: 'Azure AI', icon: '☁️' },
  { name: 'MLOps', icon: '⚙️' },
];

const features = [
  {
    title: 'Process Automation',
    description: 'Reduce manual work with intelligent automation across operations and support.',
  },
  {
    title: 'Natural Language Solutions',
    description: 'Chatbots, summarization, and knowledge retrieval tailored to your business.',
  },
  {
    title: 'Predictive Analytics',
    description: 'Forecast demand, optimize inventory, and improve planning accuracy.',
  },
  {
    title: 'Computer Vision',
    description: 'Image and video intelligence for inspection, safety, and compliance.',
  },
  {
    title: 'Data Pipelines',
    description: 'Reliable data ingestion and preparation for model training and insights.',
  },
  {
    title: 'Model Monitoring',
    description: 'Production-ready MLOps for performance, drift, and governance.',
  },
];

const faqItems = [
  {
    question: 'How do you determine if AI is the right solution?',
    answer: 'We assess data readiness, business impact, and feasibility. If AI isn’t the right fit, we recommend alternative approaches.',
  },
  {
    question: 'Do you build custom models or use existing APIs?',
    answer: 'Both. We evaluate use cases and leverage APIs when suitable, or build custom models when required for accuracy and control.',
  },
  {
    question: 'How do you handle data privacy?',
    answer: 'We implement strict access controls, anonymization, and compliance practices aligned with your requirements.',
  },
  {
    question: 'Can you integrate AI into our existing systems?',
    answer: 'Yes. We integrate with your apps, CRMs, data warehouses, and workflows via secure APIs.',
  },
];

export default function AiSolutionsPage() {
  return (
    <>
      <PageHeader
        title="AI Solutions"
        description="Automation and intelligence that drive efficiency and better decisions."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'AI Solutions' },
        ]}
      />

      <section className={styles.overviewSection}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewContent}>
              <h2>Turn Data Into Action</h2>
              <p>
                We apply AI where it delivers measurable impact—streamlining operations, enhancing
                customer experiences, and unlocking insights across your organization.
              </p>
              <p>
                From discovery to deployment, we deliver scalable AI systems with monitoring,
                governance, and continuous improvement.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Explore AI Use Cases
              </Link>
            </div>
            <div className={styles.overviewImage}>
              <span className={styles.imagePlaceholder}>🤖</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className="container">
          <div className="section-header">
            <h2>What We Offer</h2>
            <p>Applied AI designed to solve real business problems</p>
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
            <p>Modern ML tooling with production-grade practices</p>
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
            <p>From data readiness to production deployment</p>
          </div>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Discovery</h3>
              <p>Define outcomes, assess data, and validate feasibility.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Prototype</h3>
              <p>Build quick experiments to prove value and accuracy.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Production</h3>
              <p>Deploy scalable pipelines and model services.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Optimize</h3>
              <p>Monitor, retrain, and iterate for long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our AI services</p>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      <CTABanner
        title="Ready to Apply AI to Your Business?"
        description="Let’s identify the highest-impact use cases and build a roadmap."
        primaryCta={{ text: 'Schedule a Call', href: '/contact' }}
        secondaryCta={{ text: 'View Case Studies', href: '/case-studies' }}
      />
    </>
  );
}
