import Link from 'next/link';
import styles from './Footer.module.css';
import Image from 'next/image';
import Newsletter from '@/components/Newsletter/Newsletter';

const services = [
  { name: 'Product Carbon Footprint Calculator', href: '/services/pcf-calculator' },
  { name: 'Web Development', href: '/services/web-development' },
  { name: 'Mobile Apps', href: '/services/mobile-apps' },
  { name: 'AI Solutions', href: '/services/ai-solutions' },
  { name: 'DevOps', href: '/services/devops' },
  { name: 'Training', href: '/services/training' },
];

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

const legal = [
  { name: 'Privacy Policy', href: '/legal/privacy' },
  { name: 'Terms of Use', href: '/legal/terms' },
  { name: 'Legal Notice', href: '/legal/legal-notice' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <Link href='/' className={styles.logo}>
              <Image
                src="/Frame5.png"
                width={160}
                height={80}
                alt="GoToGreen Logo"
              />
            </Link>
            <p className={styles.brandDescription}>
              Delivering innovative technology solutions with a commitment to 
              efficiency and responsible engineering practices.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://www.linkedin.com/company/gotogreen" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

            </div>
          </div>

          <div className={styles.footerLinks}>
            <h4>Services</h4>
            <ul>
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerLinks}>
            <h4>Company</h4>
            <ul>
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerContact}>
            <h4>Contact Us</h4>
            <address>
              <p>
                <strong>Email:</strong><br />
                <a href="mailto:contact@gotogreen.tn">contact@gotogreen.tn</a>
              </p>
              <p>
                <strong>Phone:</strong><br />
                <a href="tel:+21652373375">+216 52 373 375</a>
              </p>
              <p>
                <strong>Location:</strong><br />
                Immeuble Alya Médicale, rue des Olivier · 4001 Khzema, Sousse
              </p>
            </address>
          </div>
        </div>

        <div className={styles.newsletterSection}>
          <Newsletter />
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} GoToGreen. All rights reserved.</p>
          <div className={styles.legalLinks}>
            {legal.map((item) => (
              <Link key={item.name} href={item.href}>{item.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
