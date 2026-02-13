import Link from 'next/link';
import Image from 'next/image';
import styles from './services.module.css';
import PageHeader from '@/components/PageHeader';
import CTABanner from '@/components/CTABanner';
import ScrollToTop from '@/components/ScrollToTop';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | GoToGreen',
  description: 'Explore our comprehensive technology services: Web Development, Mobile Apps, AI Solutions, DevOps, Training, and more.',
};

const services = [
  {
    image: '/images/homepage/web_dev.avif',
    title: 'Web Design & Development',
    description: 'Modern, responsive websites tailored to your brand, flexible CMS solutions, and full-cycle digital tools from ideation to deployment.',
    features: [
      'Web Design & Development',
      'CMS Solutions',
      'Digital Tools & Software Products',
      'Responsive UX/UI',
      'API Integrations',
      'Performance Optimization',
    ],
    href: '/services/web-development',
  },
  {
    image: '/images/services_images/mobile_2.png',
    title: 'Mobile Application Development',
    description: 'Custom iOS and Android apps built for performance, usability, and scale. From concept to launch, we deliver mobile experiences users love.',
    features: [
      'Native iOS & Android Apps',
      'Cross-platform Efficiency',
      'Intuitive Interfaces',
      'Seamless System Integration',
      'App Store Launch',
      'Performance Optimization',
    ],
    href: '/services/mobile-apps',
  },
  {
    image: '/images/homepage/ai_solutions.jpeg',
    title: 'Intelligent Solutions (AI & Automation)',
    description: 'Smart automation, predictive analytics, and AI-driven digital tools that enhance decision-making and efficiency.',
    features: [
      'AI-powered Solutions',
      'Predictive Analytics',
      'Workflow Automation',
      'Data-driven Insights',
      'Intelligent Assistants',
      'Custom AI Integrations',
    ],
    href: '/services/ai-solutions',
  },
  {
    image: '/images/services_images/devops_2.png',
    title: 'DevOps & Infrastructure',
    description: 'Streamlined deployment, continuous integration, and efficient cloud infrastructure management.',
    features: [
      'DevOps & Deployment',
      'CI/CD Automation',
      'Infrastructure Management',
      'Monitoring & Observability',
      'Security Best Practices',
      'Cost Optimization',
    ],
    href: '/services/devops',
  },
  {
    image: '/images/services_images/training_2.png',
    title: 'Training & Capacity Building',
    description: 'Practical, tailored training on sustainability, EU regulatory compliance, and digital best practices delivered by experienced trainers.',
    features: [
      'Tailored Training Programs',
      'Sustainability Foundations',
      'EU Regulatory Compliance',
      'Digital Best Practices',
      'Hands-on Workshops',
      'Team Enablement',
    ],
    href: '/services/training',
  },
  {
    image: '/images/services_images/seo_growth.avif',
    title: 'GEO & Digital Growth',
    description: 'GEO and SEO optimization to improve visibility, plus maintenance and support to keep your presence secure and smooth.',
    features: [
      'GEO & SEO Optimization',
      'Audience Targeting',
      'Performance Improvements',
      'Analytics & Insights',
      'Maintenance & Support',
      'Ongoing Optimization',
    ],
    href: '/services/seo',
  },
  {
    image: '/images/services_images/it_support.png',
    title: 'Maintenance & Support',
    description: 'Keep your digital presence secure, updated, and smooth with proactive monitoring, updates, and rapid issue resolution.',
    features: [
      '24/7 Monitoring',
      'Bug Fixes & Updates',
      'Security Patches',
      'Performance Tuning',
      'Backup Management',
      'SLA-based Support',
    ],
    href: '/services/support',
  },
  {
    image: '/images/services_images/Co2.png',
    title: 'Product Carbon Footprint Calculator',
    description: 'Measure the environmental impact of your products accurately, transparently, and in line with international standards.',
    features: [
      'GHG Protocol Compliant',
      'Lifecycle Assessment',
      'Emission Factor Databases',
      'CO₂e Calculations',
      'Hotspot Identification',
      'Reporting Ready',
    ],
    href: '/services/pcf-calculator',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Comprehensive technology solutions tailored to your business needs. From ideation to deployment and beyond."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
        ]}
      />

      {/* Services List */}
      <section className={styles.servicesSection}>
        <div className="container">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className={`${styles.serviceItem} ${index % 2 === 1 ? styles.reversed : ''}`}
            >
              <div className={styles.serviceContent}>
                <h2>{service.title}</h2>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.featureList}>
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className="btn btn-primary">
                  Learn More
                </Link>
              </div>
              <div className={styles.serviceVisual}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={styles.serviceImage}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className="container">
          <div className="section-header">
            <h2>Our Process</h2>
            <p>A structured approach to delivering successful projects</p>
          </div>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>01</span>
              <h3>Discovery</h3>
              <p>We analyze your requirements, goals, and challenges to create a solid project foundation.</p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>02</span>
              <h3>Planning</h3>
              <p>Detailed project roadmap, architecture design, and resource allocation.</p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>03</span>
              <h3>Development</h3>
              <p>Agile development with regular sprints, testing, and client feedback loops.</p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>04</span>
              <h3>Delivery</h3>
              <p>Thorough QA, deployment, training, and ongoing support for lasting success.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Get Started?"
        description="Let's discuss your project and explore how we can help you achieve your goals."
        primaryCta={{ text: 'Contact Us', href: '/contact' }}
        secondaryCta={{ text: 'View Case Studies', href: '/case-studies' }}
      />

      <ScrollToTop />
    </>
  );
}
