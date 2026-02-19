import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image'; 
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { ShineBorder } from '@/components/ui/shine-border';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import ClientLogos from '@/components/ClientLogos';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import SlidingCards from '@/components/lightswind/sliding-cards';
import ExpandableText from '@/components/ExpandableText';

const services = [
  {
    title: 'Web Development',
    description: 'Modern, responsive websites tailored to your brand, flexible CMS solutions, and full-cycle software products from ideation to deployment.',
    href: '/services/web-development',
    image: '/images/homepage/web_dev.avif',
  },
  {
    title: 'Mobile Apps',
    description: 'Custom iOS and Android apps built for performance, usability, and scale—native or cross-platform with seamless integrations.',
    href: '/services/mobile-apps',
    image: '/images/homepage/mobile.jpeg',
  },
  {
    title: 'AI Solutions',
    description: 'Smart automation, predictive analytics, and AI-driven digital tools that enhance your business.',
    href: '/services/ai-solutions',
    image: '/images/homepage/ai_solutions.jpeg',
  },
  {
    title: 'DevOps & Infrastructure',
    description: 'Streamlined deployment, continuous integration, and efficient cloud infrastructure management.',
    href: '/services/devops',
    image: '/images/homepage/devops.jpeg',
  },
  {

    title: 'Training & Capacity Building',
    description: 'Practical, tailored training on sustainability, EU regulatory compliance, and digital best practices delivered by experienced trainers.',
    href: '/services/training',
    image: '/images/homepage/training.jpeg',
  },
  {
    title: 'SEO & Digital Growth',
    description: 'SEO & geo optimization to reach the right audience, plus maintenance and support to keep your digital presence secure and smooth.',
    href: '/services/seo',
    image: '/images/homepage/seo.jpeg',
  },
  {
    title: 'PCF Calculator',
    description: 'Measure your product carbon footprint accurately with our standards-compliant calculator aligned with GHG Protocol and trusted databases.',
    href: '/services/pcf-calculator',
    image: '/images/services_images/Co2.png',
  },
  
];

const cardItems = [
  { 
    id: 1, 
    icon: <Image src="/images/icons/hand-shake.png" alt="Expertise" width={32} height={32} />,
    bgClass: 'bg-gradient-to-br from-green-400 to-emerald-600',
    title: "End-to-End Expertise",
    description: "We guide your project from initial concept through architecture, development, testing, launch, and ongoing maintenance — so you always have a trusted partner at every stage."
  },
  { 
    id: 2, 
    icon: <Image src="/images/icons/technology (1).png" alt="Technology" width={32} height={32} />,
    bgClass: 'bg-gradient-to-br from-blue-400 to-indigo-600',
    title: "Advanced Technology",
    description: "Built on Next.js, React, Node.js, Python, and cloud-native infrastructure — our stack is engineered for performance, security, and seamless scalability as you grow."
  },
  { 
    id: 3, 
    icon: <Image src="/images/icons/recycle (1).png" alt="Sustainability" width={32} height={32} />,
    bgClass: 'bg-gradient-to-br from-teal-400 to-cyan-500',
    title: "Sustainability by Design",
    description: "Every solution we build factors in energy efficiency, optimized resource usage, and reduced digital waste — because responsible tech is better tech."
  },
  { 
    id: 4, 
    icon: <Image src="/images/icons/medal.png" alt="Excellence" width={32} height={32} />,
    bgClass: 'bg-gradient-to-br from-purple-400 to-pink-500',
    title: "Client-First Mindset",
    description: "Your goals drive every decision. We listen, adapt, and deliver tailored solutions with transparent communication, on-time milestones, and measurable business outcomes."
  },
];

const stats = [
  { value: '12', suffix: '+', label: 'Projects Delivered' },
  { value: '20', suffix: '+', label: 'Years Combined Experience' },
  { value: '99', suffix: '%', label: 'Client Satisfaction' },
  { value: '1', suffix: '', label: 'Active R&D Tracks' },
];

const testimonials = [
  {
    quote: 'Excellent technical expertise, great attention to detail, and truly pleasant collaboration. The project ran smoothly thanks to your professionalism. I look forward to future projects together.',
    author: 'Soumaya Elkamel',
    role: 'CEO',
    company: 'FondaSolution',
    rating: 5,
  },
  {
    quote: 'Your work on our GEO & AI Optimization project has been outstanding. High quality, responsive, and impactful. We value your partnership and look forward to the next phases.',
    author: 'Jihen Ben Jrad',
    role: 'Communication & Marketing Responsible',
    company: 'Amphenol Automotive',
    rating: 5,
  },
  {
    quote: 'Professional, efficient, and reliable. Your team delivered clear, structured, and high-quality results during the SDC Congress challenge. Excellent collaboration.',
    author: 'Rima Fathallah',
    role: 'Executive Member',
    company: 'IEEE SIGHT',
    rating: 5,
  },
];

const clients = [
  { name: 'Partner 1', logo: '/images/pics/Partners1/1._image_2026-01-28_145321199-removebg-preview.png' },
  { name: 'Partner 2', logo: '/images/pics/Partners1/2._image_2026-01-28_145714510-removebg-preview.png' },
  { name: 'Partner 3', logo: '/images/pics/Partners1/3. image_2026-01-28_145826402.png' },
  { name: 'Partner 4', logo: '/images/pics/Partners1/4._image_2026-01-28_145041663-removebg-preview.png' },
  { name: 'Partner 5', logo: '/images/pics/Partners1/6.-removebg-preview.png' },
  { name: 'Partner 6', logo: '/images/pics/Partners1/image_2026-01-28_145339185-removebg-preview.png' },
  { name: 'Partner 7', logo: '/images/pics/Partners1/image_2026-01-28_145519074-removebg-preview.png' },
  { name: 'Partner 8', logo: '/images/pics/Partners1/image_2026-01-28_145635964-removebg-preview.png' },
  { name: 'Partner 9', logo: '/images/pics/Partners1/image_2026-01-28_145744703.png' },
  { name: 'Partner 10', logo: '/images/pics/Partners1/image_2026-01-28_145917303-removebg-preview.png' },
  { name: 'Partner 11', logo: '/images/pics/Partners1/image_2026-01-28_150305216.png' },
  { name: 'Partner 12', logo: '/images/pics/Partners1/image_2026-01-28_150416084-removebg-preview.png' },
  { name: 'Partner 13', logo: '/images/pics/Partners1/image_2026-01-28_150434909.png' },
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
        title="Digital Solutions with Purpose"
        subtitle="Innovation & Efficiency"
        primaryCta={{ text: 'Start Your Project', href: '/contact' }}
        secondaryCta={{ text: 'View Our Work', href: '/case-studies' }}
        videoSrc="/video/Hero-Video-compression.mp4"
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
                We support every phase of your product lifecycle with clear processes, reliable execution, and continuous improvement.
                Our solutions are built to last—fast, secure, and ready for long-term growth.
              </p>
              <InteractiveHoverButton href="/about" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                Learn More About Us
              </InteractiveHoverButton>
            </div>
            <div className={styles.aboutCards}>
              <SlidingCards cards={cardItems} />
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

      {/* Our Projects Section */}
      <section className={styles.caseStudiesSection}>
        <div className="container">
          <div className="section-header">
            <h2>Featured Work</h2>
            <p>Explore how we&apos;ve helped businesses achieve their goals</p>
          </div>
          
          {/* Pass2Green Project Highlight */}
          <div className={styles.pass2greenHighlight}>
            <div className={styles.pass2greenContent}>
              <div className={styles.pass2greenLogo}>
                <ShineBorder color="rgba(110, 168, 67, 0.8)" borderRadius={19} borderWidth={4}>
                  <a href="https://pass2green.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/images/homepage/pass2green.png"
                      alt="Pass2Green" 
                      height={300}
                      width={300} 
                    /> 
                  </a>
                </ShineBorder>
              </div>
              <div className={styles.pass2greenText}>
                <h3>Pass2Green - Our Flagship Project</h3>
                <ExpandableText
                  preview="Pass2Green is GoToGreen's flagship project, designed to help organizations move from sustainability intent to measurable impact. Through DPP generation, Product Carbon Footprint Calculator and AI environmental consultancy."
                  rest="It's a digital ecosystem that simplifies environmental responsibility by turning complex sustainability requirements into clear, actionable steps; from carbon awareness to responsible operations and compliance readiness. Pass2Green operates as an independent platform with its own dedicated website, while remaining fully aligned with GoToGreen's mission: making sustainability practical, scalable, and accessible for businesses and institutions."
                />
                <div className={styles.pass2greenCtas}>
                  <InteractiveHoverButton 
                    href="https://pass2green.vercel.app/" 
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Visit Pass2Green
                  </InteractiveHoverButton>
                  <Link href="/case-studies" className="btn btn-outline">
                    View All Projects
                  </Link>
                </div>
              </div>
            </div>
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
