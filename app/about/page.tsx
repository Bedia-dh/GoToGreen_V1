import styles from './about.module.css';
import PageHeader from '@/components/PageHeader';
import Stats from '@/components/Stats';
import CTABanner from '@/components/CTABanner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | GoToGreen',
  description: 'Learn about GoToGreen - a technology company delivering innovative solutions with a commitment to efficiency and responsible engineering.',
};

const stats = [
  { value: '150', suffix: '+', label: 'Projects Delivered' },
  { value: '50', suffix: '+', label: 'Happy Clients' },
  { value: '15', suffix: '+', label: 'Years Experience' },
  { value: '25', suffix: '+', label: 'Team Members' },
];

const values = [
  {
    icon: '🎯',
    title: 'Excellence',
    description: 'We strive for excellence in every line of code, every design decision, and every client interaction.',
  },
  {
    icon: '🤝',
    title: 'Partnership',
    description: 'We work as an extension of your team, aligned with your goals and invested in your success.',
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'We embrace new technologies and approaches to deliver cutting-edge solutions.',
  },
  {
    icon: '⚡',
    title: 'Efficiency',
    description: 'We build solutions that optimize performance and resources for long-term sustainability.',
  },
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
            <div className={styles.missionImage}>
              <span className={styles.imagePlaceholder}>🌱</span>
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

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <div key={value.title} className={styles.valueCard}>
                <span className={styles.valueIcon}>{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className="container">
          <div className="section-header">
            <h2>Leadership Team</h2>
            <p>Meet the people driving our vision forward</p>
          </div>
          <div className={styles.teamGrid}>
            {team.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                <div className={styles.teamAvatar}>
                  <span>{member.name.charAt(0)}</span>
                </div>
                <h3>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
                <p className={styles.teamBio}>{member.bio}</p>
              </div>
            ))}
          </div>
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
    </>
  );
}
