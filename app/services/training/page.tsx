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
  title: 'Training & Capacity Building | GoToGreen',
  description: 'Tailored training programs that upskill teams in modern engineering, cloud, and AI practices.',
};

const features = [
  {
    title: 'Tailored Learning Paths',
    description: 'Custom curriculum aligned to your team’s skill gaps and goals.',
  },
  {
    title: 'Hands-On Workshops',
    description: 'Practical labs that build real-world engineering confidence.',
  },
  {
    title: 'Coaching & Mentorship',
    description: 'Embedded experts to guide teams through live projects.',
  },
  {
    title: 'Certification Readiness',
    description: 'Prepare your team for industry-recognized certifications.',
  },
  {
    title: 'Skill Assessments',
    description: 'Measure progress with structured assessments and feedback.',
  },
  {
    title: 'Change Enablement',
    description: 'Adopt new practices with clear adoption and support plans.',
  },
];

const faqItems = [
  {
    question: 'Do you offer on-site or remote training?',
    answer: 'We offer both formats. We can deliver workshops remotely or on-site based on your team’s needs.',
  },
  {
    question: 'Can training be tailored to our tech stack?',
    answer: 'Yes. We customize curriculum based on your tools, project context, and goals.',
  },
  {
    question: 'How do you measure impact?',
    answer: 'We use skill assessments, feedback, and project outcomes to quantify progress.',
  },
  {
    question: 'Do you provide ongoing coaching?',
    answer: 'Yes. We offer mentorship engagements to reinforce adoption and best practices.',
  },
];

export default function TrainingPage() {
  return (
    <>
      <ScrollToTop />
      <PageHeader
        title="Training & Capacity Building"
        description="Upskill teams with structured programs built for measurable outcomes."
        compact
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Training & Capacity Building' },
        ]}
      />

      <section className={styles.overviewSection}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewContent}>
              <h2>Build Confident, High-Performing Teams</h2>
              <p>
                We design training programs that combine theory with hands-on practice so your
                teams can apply skills immediately. Our instructors bring real-world experience
                in modern engineering and product delivery.
              </p>
              <p>
                Whether you’re adopting new technologies or improving delivery practices, we
                help your team level up with measurable impact.
              </p>
              <InteractiveHoverButton href="/contact" className="btn btn-primary">
                Plan Your Training
              </InteractiveHoverButton>
            </div>
              <div className={styles.missionImage}>
                <Image
                  src="/images/services_images/training_1.png"
                  alt="Our taraining mission"
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
            <p>Programs designed for real-world delivery</p>
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
            <p>Structured learning that drives adoption</p>
          </div>
          <div className={styles.processSteps}>
            <MagicCard className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Assessment</h3>
              <p>Evaluate skills and align on outcomes.</p>
            </MagicCard>
            <MagicCard className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Curriculum</h3>
              <p>Design a tailored learning path and schedule.</p>
            </MagicCard>
            <MagicCard className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Delivery</h3>
              <p>Workshops, labs, and real-world exercises.</p>
            </MagicCard>
            <MagicCard className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Reinforcement</h3>
              <p>Coaching and follow-ups for lasting impact.</p>
            </MagicCard>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about training programs</p>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      <CTABanner
        title="Ready to Upskill Your Team?"
        description="Let’s build a training plan tailored to your goals."
        primaryCta={{ text: 'Contact Us', href: '/contact' }}
        secondaryCta={{ text: 'View Services', href: '/services' }}
      />
    </>
  );
}
