import Image from 'next/image';
import styles from './pcf-calculator.module.css';
import PageHeader from '@/components/PageHeader';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import { MagicCard } from '@/components/ui/magic-card';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import ScrollToTop from '@/components/ScrollToTop';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Carbon Footprint Calculator | GoToGreen',
  description: 'Measure the environmental impact of your products accurately, transparently, and in line with international standards like GHG Protocol.',
};

const features = [
  {
    title: 'Scope Definition',
    description: 'Define product boundaries and lifecycle stages (raw materials, manufacturing, transport, use, end-of-life) with methodological clarity.',
  },
  {
    title: 'Data Collection & Structuring',
    description: 'Provide activity data (materials, energy, transport) — we structure and validate inputs for consistency and traceability.',
  },
  {
    title: 'Emission Factor Integration',
    description: 'Calculations use GHG Protocol, ADEME, Ecoinvent, and IPCC databases for scientific robustness and comparability.',
  },
  {
    title: 'Carbon Footprint Calculation',
    description: 'Convert your data into CO₂-equivalent (CO₂e) emissions per product and per functional unit.',
  },
  {
    title: 'Results & Insights',
    description: 'Get clear outputs: carbon footprint by lifecycle stage, main emission hotspots, and actionable reduction insights.',
  },
  {
    title: 'Documentation & Reporting',
    description: 'Results formatted for internal decisions, sustainability reporting, and future compliance requirements.',
  },
];

const benefits = [
  'Aligned with GHG Protocol Product Standard',
  'Based on trusted scientific databases',
  'Transparent and auditable methodology',
  'Suitable for SMEs and large organizations',
  'Supports eco-design and sustainability strategies',
  'Actionable insights for decision-making'
];

const faqItems = [
  {
    question: 'What is a Product Carbon Footprint (PCF)?',
    answer: 'A PCF measures the total greenhouse gas emissions associated with a product throughout its lifecycle, expressed in CO₂-equivalent.',
  },
  {
    question: 'Which standards does the calculator follow?',
    answer: 'Our methodology is aligned with the GHG Protocol Product Life Cycle Accounting and Reporting Standard, using emission factors from ADEME, Ecoinvent, and IPCC.',
  },
  {
    question: 'Do I need advanced technical knowledge to use it?',
    answer: 'No. The process is designed to be guided and accessible. We support you in defining boundaries, collecting data, and interpreting results.',
  },
  {
    question: 'Is this suitable for reporting or compliance purposes?',
    answer: 'Yes. The outputs are structured to support sustainability reporting and to prepare for evolving regulatory and market requirements.',
  },
  {
    question: 'Can this help reduce my product\'s carbon footprint?',
    answer: 'Absolutely. Beyond measurement, the calculator identifies emission hotspots, helping you prioritize reduction actions.',
  },
];

export default function PCFCalculatorPage() {
  return (
    <>
      <ScrollToTop />
      <PageHeader
        title="Product Carbon Footprint Calculator"
        description="Measure the environmental impact of your products accurately, transparently, and in line with international standards."
        compact
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'PCF Calculator' },
        ]}
      />

      <section className={styles.overviewSection}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewContent}>
              <h2>Turn Carbon Accounting Into Action</h2>
              <p>
                Our Product Carbon Footprint (PCF) Calculator helps companies quantify the greenhouse 
                gas emissions associated with their products across their lifecycle.
              </p>
              <p>
                Built on recognized methodologies and trusted emission databases, it turns carbon 
                accounting into a clear, actionable process not a headache.
              </p>
              <InteractiveHoverButton href="/contact" className="btn btn-primary">
                Get Started
              </InteractiveHoverButton>
            </div>
            <div className={styles.missionImage}>
              <Image
                src="/images/services_images/Co2.png"
                alt="Product Carbon Footprint Calculator"
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
            <p>A Standard-Compliant, End-to-End PCF Process</p>
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
            <h2>Our Process</h2>
            <p>From scope definition to actionable insights</p>
          </div>
          <div className={styles.processSteps}>
            <MagicCard className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Define Scope</h3>
              <p>Set product boundaries and lifecycle stages.</p>
            </MagicCard>
            <MagicCard className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Collect Data</h3>
              <p>Gather materials, energy, and transport data.</p>
            </MagicCard>
            <MagicCard className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Calculate</h3>
              <p>Apply emission factors and compute CO₂e.</p>
            </MagicCard>
            <MagicCard className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Report</h3>
              <p>Deliver insights and compliance-ready outputs.</p>
            </MagicCard>
          </div>
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className="container">
          <div className="section-header">
            <h2>Why Use Our PCF Calculator?</h2>
            <p>Built for accuracy, transparency, and real-world business use</p>
          </div>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit) => (
              <div key={benefit} className={styles.benefitCard}>
                <div className={styles.benefitContent}>
                  <div className={styles.benefitIcon}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M16.5 5.5L7.5 14.5L3.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className={styles.benefitText}>{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our PCF Calculator</p>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      <CTABanner
        title="Ready to Measure Your Product's Carbon Footprint?"
        description="Let's help you understand and reduce your environmental impact."
        primaryCta={{ text: 'Start Your Assessment', href: '/contact' }}
        secondaryCta={{ text: 'View Case Studies', href: '/case-studies' }}
      />
    </>
  );
}
