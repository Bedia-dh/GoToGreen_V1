'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';

const services = [
  { title: 'Web Development', description: 'Custom web applications and platforms.', href: '/services/web-development' },
  { title: 'Mobile Apps', description: 'Native and cross-platform experiences.', href: '/services/mobile-apps' },
  { title: 'AI Solutions', description: 'Automation, ML, and predictive insights.', href: '/services/ai-solutions' },
  { title: 'DevOps & Infrastructure', description: 'Cloud, CI/CD, and reliable delivery.', href: '/services/devops' },
  { title: 'Training & Capacity', description: 'Upskill teams with tailored programs.', href: '/services/training' },
  { title: 'SEO & GEO Growth', description: 'Win visibility across search engines and AI platforms with one future-ready optimization strategy.', href: '/services/seo' },
  { title: 'PCF Calculator', description: 'Product carbon footprint measurement.', href: '/services/pcf-calculator' },
];
const navigation = [
  { name: 'Our Projects', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setIsServicesOpen(true);
  };

  const handleLeave = () => {
    dropdownTimeout.current = setTimeout(() => setIsServicesOpen(false), 120);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
       <Link href='/' className={styles.logo}>
            <Image
            src="/gotogreen_light.png"
              width={160}
              height={80}
              alt="GoToGreen Logo"
            />
        </Link> 
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li 
              className={styles.dropdown}
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <button
                className={`${styles.navLink} ${styles.dropdownTrigger} ${isServicesOpen ? styles.dropdownOpen : ''}`}
                onClick={() => setIsServicesOpen((open) => !open)}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                Services
                <span className={`${styles.caret} ${isServicesOpen ? styles.caretOpen : ''}`}>▾</span>
              </button>
              <div className={`${styles.dropdownMenu} ${isServicesOpen ? styles.dropdownMenuOpen : ''}`}>
                <div className={styles.dropdownGrid}>
                  {/* Column 1 */}
                  <div className={styles.dropdownColumn}>
                    {services.slice(0, 2).map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        className={styles.dropdownItem}
                        onClick={() => {
                          setIsServicesOpen(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        <div className={styles.dropdownDot} />
                        <div className={styles.dropdownText}>
                          <div className={styles.dropdownTitle}>{service.title}</div>
                          <div className={styles.dropdownDescription}>{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  {/* Column 2 */}
                  <div className={styles.dropdownColumn}>
                    {services.slice(2, 4).map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        className={styles.dropdownItem}
                        onClick={() => {
                          setIsServicesOpen(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        <div className={styles.dropdownDot} />
                        <div className={styles.dropdownText}>
                          <div className={styles.dropdownTitle}>{service.title}</div>
                          <div className={styles.dropdownDescription}>{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  {/* Column 3 */}
                  <div className={styles.dropdownColumn}>
                    {services.slice(4, 6).map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        className={styles.dropdownItem}
                        onClick={() => {
                          setIsServicesOpen(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        <div className={styles.dropdownDot} />
                        <div className={styles.dropdownText}>
                          <div className={styles.dropdownTitle}>{service.title}</div>
                          <div className={styles.dropdownDescription}>{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  {/* Column 4 */}
                  <div className={styles.dropdownColumn}>
                    {services.slice(6, 7).map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        className={styles.dropdownItem}
                        onClick={() => {
                          setIsServicesOpen(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        <div className={styles.dropdownDot} />
                        <div className={styles.dropdownText}>
                          <div className={styles.dropdownTitle}>{service.title}</div>
                          <div className={styles.dropdownDescription}>{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className={styles.dropdownFooter}>
                  <Link
                    href="/services"
                    className={styles.dropdownFooterLink}
                    onClick={() => {
                      setIsServicesOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    View all services →
                  </Link>
                </div>
              </div>
            </li>
            {navigation.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href} 
                  className={styles.navLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.headerActions}>
          <InteractiveHoverButton href="/contact" className="btn btn-accent">
            Get Started
          </InteractiveHoverButton>
          
          <button 
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.menuBar} ${isMenuOpen ? styles.menuBarOpen : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
}
