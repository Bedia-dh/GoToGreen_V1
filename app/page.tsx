import Link from 'next/link';
import styles from './page.module.css';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import CaseStudyCard from '@/components/CaseStudyCard';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import ClientLogos from '@/components/ClientLogos';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies for performance, scalability, and exceptional user experience.',
    href: '/services/web-development',
    image: '/images/web_dev.avif',
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android.',
    href: '/services/mobile-apps',
    image: '/images/mobile.jpeg',
  },
  {
    title: 'AI Solutions',
    description: 'Intelligent automation and machine learning solutions that transform your business processes and decision-making.',
    href: '/services/ai-solutions',
    image: '/images/ai_solutions.jpeg',
  },
  {
    title: 'DevOps & Infrastructure',
    description: 'Cloud architecture, CI/CD pipelines, and infrastructure automation for reliable and efficient deployments.',
    href: '/services/devops',
    image: '/images/devops.jpeg',
  },
  {

    title: 'Training & Capacity Building',
    description: 'Technical training programs to upskill your team and build sustainable in-house capabilities.',
    href: '/services/training',
    image: '/images/training.jpeg',
  },
  {
    title: 'SEO & Digital Growth',
    description: 'Data-driven strategies to increase visibility, drive traffic, and convert visitors into customers.',
    href: '/services/seo',
    image: '/images/seo.jpg',
  },
];

const caseStudies = [
  {
    title: 'Enterprise Resource Planning System',
    category: 'Web Development',
    description: 'A comprehensive ERP system that streamlined operations for a manufacturing company.',
    image: '/images/case-study-1.jpg',
    href: '/case-studies/erp-system ',
  },
  {
    title: 'Healthcare Mobile Application',
    category: 'Mobile Apps',
    description: 'Patient management app that improved appointment scheduling by 40%.',
    image: '/images/case-study-2.jpg',
    href: '/case-studies/healthcare-app',
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    category: 'AI Solutions',
    description: 'Real-time analytics platform with predictive insights for retail operations.',
    image: '/images/case-study-3.jpg',
    href: '/case-studies/analytics-dashboard',
  },
];

const stats = [
  { value: '150', suffix: '+', label: 'Projects Delivered' },
  { value: '50', suffix: '+', label: 'Happy Clients' },
  { value: '15', suffix: '+', label: 'Years Experience' },
  { value: '99', suffix: '%', label: 'Client Satisfaction' },
];

const testimonials = [
  {
    quote: 'GoToGreen transformed our digital infrastructure. Their technical expertise and commitment to quality exceeded our expectations. The new system has improved our efficiency by 60%.',
    author: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechCorp Industries',
  },
  {
    quote: 'Working with GoToGreen was a game-changer for our business. They delivered a mobile app that our customers love, and the ongoing support has been exceptional.',
    author: 'Michael Chen',
    role: 'CEO',
    company: 'RetailPlus',
  },
  {
    quote: 'The AI solution they built for us has automated 70% of our manual processes. Their team understood our needs and delivered beyond what we imagined possible.',
    author: 'Emma Williams',
    role: 'Operations Director',
    company: 'HealthFirst',
  },
];

const clients = [
  { name: 'TechCorp' },
  { name: 'Innovate Inc' },
  { name: 'FutureLabs' },
  { name: 'DataDrive' },
  { name: 'CloudNine' },
  { name: 'NextGen' },
];

const faqItems = [
  {
    question: 'What technologies do you specialize in?',
    answer: 'We work with a wide range of modern technologies including React, Next.js, Node.js, Python, React Native, Flutter, AWS, Azure, and more. Our team stays current with industry trends to deliver cutting-edge solutions.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex enterprise application could take 3-6 months. We provide detailed timelines during our discovery phase.',
  },
  {
    question: 'Do you offer ongoing support and maintenance?',
    answer: 'Yes, we offer comprehensive support and maintenance packages to ensure your applications remain secure, up-to-date, and performing optimally. Our team is available for bug fixes, updates, and feature enhancements.',
  },
  {
    question: 'What is your development process?',
    answer: 'We follow an agile methodology with regular sprints, client check-ins, and iterative development. This ensures transparency, flexibility, and alignment with your business goals throughout the project.',
  },
];

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <Hero
        title="Technology Solutions for Modern Business"
        subtitle="Innovation & Efficiency"
       //description="We deliver cutting-edge web, mobile, and AI solutions that drive growth and operational excellence. Built with precision, designed for impact."
        primaryCta={{ text: 'Start Your Project', href: '/contact' }}
        secondaryCta={{ text: 'View Our Work', href: '/case-studies' }}
        videoSrc="/video/hero_video - Made with Clipchamp.mp4"
        size="large"
      />

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive technology solutions tailored to your business needs</p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <br />
          <br />
          <div className={styles.viewAll}>
            <Link href="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2>Why Choose GoToGreen?</h2>
              <p>
                We combine technical excellence with a deep understanding of business 
                challenges. Our solutions are built for performance, scalability, and 
                long-term value—engineered with responsibility and efficiency in mind.
              </p>
              <div className={styles.aboutFeatures}>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>
                  <div className={styles.featureText}>
                    <h4>Expert Team</h4>
                    <p>Skilled developers and architects</p>
                  </div>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>
                  <div className={styles.featureText}>
                    <h4>Agile Process</h4>
                    <p>Flexible and transparent workflow</p>
                  </div>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>
                  <div className={styles.featureText}>
                    <h4>Quality Focus</h4>
                    <p>Rigorous testing and best practices</p>
                  </div>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>
                  <div className={styles.featureText}>
                    <h4>Ongoing Support</h4>
                    <p>Reliable maintenance and updates</p>
                  </div>
                </div>
              </div>
              <Link href="/about" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                Learn More About Us
              </Link>
            </div>
            <div className={styles.aboutImage}>
              <span className={styles.aboutImagePlaceholder}>🚀</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <h2 className={styles.statsTitle}>Trusted by Businesses Worldwide</h2>
          <Stats stats={stats} />
        </div>
      </section>

      {/* Case Studies Section */}
      <section className={styles.caseStudiesSection}>
        <div className="container">
          <div className="section-header">
            <h2>Featured Work</h2>
            <p>Explore how we&apos;ve helped businesses achieve their goals</p>
          </div>
          <div className={styles.caseStudiesGrid}>
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.title} {...study} />
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link href="/case-studies" className="btn btn-outline">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Real feedback from businesses we&apos;ve partnered with</p>
          </div>
          <Testimonials testimonials={testimonials} />
        </div>
      </section>

      {/* Client Logos Section */}
      <section className={styles.clientsSection}>
        <div className="container">
          <ClientLogos 
            clients={clients} 
            title="Trusted by innovative companies" 
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Get answers to common questions about working with us</p>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Start Your Project?"
        description="Let's discuss how we can help bring your vision to life with technology solutions that deliver results."
        primaryCta={{ text: 'Get in Touch', href: '/contact' }}
        secondaryCta={{ text: 'View Services', href: '/services' }}
      />
    </div>
  );
}
