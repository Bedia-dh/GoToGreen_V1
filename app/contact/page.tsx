import styles from './contact.module.css';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import ScrollToTop from '@/components/ScrollToTop';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

import type { Metadata } from 'next';

function MapEmbed() {
  const mapSrc =
    "https://www.google.com/maps?q=Immeuble+Alya+M%C3%A9dicale,+rue+des+Olivier,+4001+Khzema,+Sousse&output=embed";
  
  return (
    <iframe
      src={mapSrc}
      className={styles.mapFrame}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="GoToGreen Location"
    />
  );
}

export const metadata: Metadata = {
  title: 'Contact Us | GoToGreen',
  description: 'Get in touch with GoToGreen. Let us discuss how we can help with your technology needs.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Have a project in mind? Let's talk about how we can help bring your vision to life."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' },
        ]}
      />

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2>Get in Touch</h2>
              <p>
                Whether you have a specific project in mind or just want to explore 
                possibilities, we&apos;re here to help. Reach out and let&apos;s start a conversation.
              </p>

              <div className={styles.infoCards}>
                <div className={styles.infoCard}>
                  <span className={styles.infoIcon}><Mail size={24} /></span>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:contact@gotogreen.tn">contact@gotogreen.tn</a>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <span className={styles.infoIcon}><Phone size={24} /></span>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+216 52 373 375">+216 52 373 375</a>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <span className={styles.infoIcon}><MapPin size={24} /></span>
                  <div>
                    <h4>Location</h4>
                    <p>Immeuble Alya Médicale, rue des Olivier · 4001 Khzema, Sousse</p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <span className={styles.infoIcon}><Clock size={24} /></span>
                  <div>
                    <h4>Business Hours</h4>
                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className={styles.socialSection}>
                <h4>Follow Us</h4>
                <div className={styles.socialLinks}>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.contactFormWrapper}>
              <h2>Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <MapEmbed />
      </section>
      <ScrollToTop />
    </>
  );
}
