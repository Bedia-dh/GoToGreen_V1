import styles from './service-detail.module.css';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import { MagicCard } from '@/components/ui/magic-card';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import ScrollToTop from '@/components/ScrollToTop';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO & GEO Optimization | GoToGreen',
  description: 'Combine traditional SEO with cutting-edge Generative Engine Optimization (GEO) to dominate both search engines and AI-powered discovery platforms.',
};

const features = [
  {
    title: 'Generative Engine Optimization (GEO)',
    description: 'Optimize your content to appear in AI-generated responses from ChatGPT, Perplexity, Google AI, and other generative platforms.',
  },
  {
    title: 'Technical SEO',
    description: 'Site audits, crawlability, indexation, structured data, and Core Web Vitals optimization.',
  },
  {
    title: 'AI-Ready Content Strategy',
    description: 'Create authoritative, well-structured content that AI engines cite and recommend.',
  },
  {
    title: 'Conversion Optimization',
    description: 'Improve funnels and user journeys to maximize conversions from all traffic sources.',
  },
  {
    title: 'Local & Voice Search',
    description: 'Location-based visibility and voice search optimization for modern discovery patterns.',
  },
  {
    title: 'Analytics & AI Insights',
    description: 'Track performance across traditional search and AI referrals with actionable dashboards.',
  },
];

const faqItems = [
  {
    question: 'What is GEO (Generative Engine Optimization)?',
    answer: 'GEO is the practice of optimizing your content to appear in AI-generated responses. As users increasingly rely on ChatGPT, Perplexity, and Google AI Overviews for answers, GEO ensures your brand is cited and recommended by these platforms.',
  },
  {
    question: 'How is GEO different from traditional SEO?',
    answer: 'While SEO focuses on ranking in search engine results pages, GEO focuses on being referenced by AI models. This requires authoritative content, clear expertise signals, proper structured data, and citation-worthy information that AI can confidently recommend.',
  },
  {
    question: 'How long before we see results?',
    answer: 'SEO typically shows impact within 8–12 weeks. GEO results can vary based on how quickly AI models update their training data, but early signals often appear within similar timeframes.',
  },
  {
    question: 'Do you provide ongoing optimization?',
    answer: 'Yes. We offer monthly growth programs with continuous monitoring, A/B testing, and iteration across both SEO and GEO strategies.',
  },
];

export default function SeoPage() {
  return (
    <>
      <ScrollToTop />
      <PageHeader
        title="SEO & GEO Optimization"
        description="Dominate search engines and AI-powered platforms with our dual optimization strategy for the future of digital discovery."
        compact
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'SEO & GEO Optimization' },
        ]}
      />

      <section className={styles.overviewSection}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewContent}>
              <h2>The Future of Digital Visibility</h2>
              <p>
                Traditional SEO is no longer enough. With AI-powered search engines and generative 
                platforms reshaping how users find information, your business needs a dual strategy: 
                <strong> SEO + GEO</strong>.
              </p>
              <p>
                <strong>Generative Engine Optimization (GEO)</strong> ensures your brand appears when 
                users ask ChatGPT, Perplexity, Google AI Overviews, or other AI assistants for recommendations. 
                Combined with proven SEO techniques, we position your business at the forefront of digital discovery.
              </p>
              <InteractiveHoverButton href="/contact" className="btn btn-primary">
                Future-Proof Your Visibility
              </InteractiveHoverButton>
            </div>
              <div className={styles.missionImage}>
                <Image
                  src="/images/services_images/geo.jpeg"
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
            <h2>Our SEO & GEO Services</h2>
            <p>Comprehensive optimization for search engines and AI platforms</p>
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
            <h2>Our Optimization Process</h2>
            <p>Data-driven strategy for search and AI visibility</p>
          </div>
          <div className={styles.processSteps}>
            <MagicCard className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Discovery Audit</h3>
              <p>Analyze your presence across search engines and AI platforms.</p>
            </MagicCard>
            <MagicCard className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Dual Strategy</h3>
              <p>Develop SEO + GEO roadmap tailored to your industry.</p>
            </MagicCard>
            <MagicCard className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Implementation</h3>
              <p>Optimize content for both traditional search and AI citations.</p>
            </MagicCard>
            <MagicCard className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>AI Monitoring</h3>
              <p>Track rankings and AI responses for continuous refinement.</p>
            </MagicCard>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Learn about SEO, GEO, and the future of digital discovery</p>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      <CTABanner
        title="Ready for the AI Search Era?"
        description="Get found by both Google and AI assistants. Future-proof your digital presence today."
        primaryCta={{ text: 'Get SEO & GEO Strategy', href: '/contact' }}
        secondaryCta={{ text: 'View All Services', href: '/services' }}
      />
    </>
  );
}
