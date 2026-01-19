import Link from 'next/link';
import styles from './services.module.css';
import PageHeader from '@/components/PageHeader';
import CTABanner from '@/components/CTABanner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | GoToGreen',
  description: 'Explore our comprehensive technology services: Web Development, Mobile Apps, AI Solutions, DevOps, Training, and more.',
};

const services = [
  {
    icon: '💻',
    title: 'Web Design & Development',
    description: 'Custom web applications and websites built with modern technologies. From corporate sites to complex platforms, we create responsive, performant, and scalable solutions.',
    features: [
      'Custom Web Applications',
      'E-commerce Platforms',
      'Content Management Systems',
      'Progressive Web Apps',
      'API Development',
      'Performance Optimization',
    ],
    href: '/services/web-development',
  },
  {
    icon: '📱',
    title: 'Mobile Application Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences. We build apps that users love and businesses rely on.',
    features: [
      'iOS Development',
      'Android Development',
      'Cross-platform Apps',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality',
    ],
    href: '/services/mobile-apps',
  },
  {
    icon: '🤖',
    title: 'Intelligent Solutions (AI & Automation)',
    description: 'Leverage artificial intelligence and automation to transform your business processes. From chatbots to predictive analytics, we build smart solutions.',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Process Automation',
      'Predictive Analytics',
      'AI-powered Chatbots',
    ],
    href: '/services/ai-solutions',
  },
  {
    icon: '⚙️',
    title: 'DevOps & Infrastructure',
    description: 'Streamline your development pipeline and infrastructure. We implement robust CI/CD pipelines, cloud architecture, and monitoring solutions.',
    features: [
      'Cloud Migration',
      'CI/CD Pipelines',
      'Container Orchestration',
      'Infrastructure as Code',
      'Monitoring & Logging',
      'Security Implementation',
    ],
    href: '/services/devops',
  },
  {
    icon: '📚',
    title: 'Training & Capacity Building',
    description: 'Invest in your team with our technical training programs. We offer hands-on workshops and courses to build sustainable in-house capabilities.',
    features: [
      'Technical Workshops',
      'Team Training Programs',
      'Code Review Sessions',
      'Best Practices Coaching',
      'Technology Assessment',
      'Custom Curriculum',
    ],
    href: '/services/training',
  },
  {
    icon: '📈',
    title: 'SEO & Digital Growth',
    description: 'Data-driven strategies to increase your online visibility and drive business growth. From technical SEO to content strategy, we help you reach your audience.',
    features: [
      'Technical SEO Audit',
      'Content Strategy',
      'Analytics Setup',
      'Conversion Optimization',
      'Performance Tracking',
      'Competitive Analysis',
    ],
    href: '/services/seo',
  },
  {
    icon: '🛠️',
    title: 'Support & Maintenance',
    description: 'Keep your applications running smoothly with our comprehensive support services. We provide proactive maintenance, updates, and rapid issue resolution.',
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
                <span className={styles.serviceIcon}>{service.icon}</span>
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
                <span className={styles.visualIcon}>{service.icon}</span>
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
    </>
  );
}
