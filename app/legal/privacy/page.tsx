import styles from '../legal.module.css';
import PageHeader from '@/components/PageHeader';
import ScrollToTop from '@/components/ScrollToTop';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | GoToGreen',
  description: 'Learn how GoToGreen collects, uses, and protects your personal data.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <ScrollToTop />
      <PageHeader
        title="Privacy Policy"
        description="How we collect, use, and protect your personal information."
        compact
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy' },
        ]}
      />

      <section className={styles.legalPage}>
        <div className="container">
          <div className={styles.legalContent}>
            <h2>1. Data Controller</h2>
            <div className={styles.infoBlock}>
              <p><strong>GoToGreen</strong></p>
              <p>Email: <a href="mailto:contact@gotogreen.tn">contact@gotogreen.tn</a></p>
            </div>

            <h2>2. Data We Collect</h2>
            <p>
              GoToGreen does not collect personal data through browsing. Personal data is collected 
              only when you voluntarily submit it via the contact form. This may include:
            </p>
            <ul>
              <li>Full name</li>
              <li>Email address</li>
              <li>Company name</li>
              <li>Phone number (if provided)</li>
              <li>Message content</li>
            </ul>
            <p>No user accounts are created. No payments are processed on this website.</p>

            <h2>3. Purpose of Data Processing</h2>
            <p>The collected data is used solely for:</p>
            <ul>
              <li>Responding to your inquiries</li>
              <li>Providing information about our services</li>
              <li>Establishing initial business communication</li>
            </ul>
            <p>
              We do not sell, rent, or share your personal data with third parties for marketing purposes.
            </p>

            <h2>4. External Platforms (Pass2Green)</h2>
            <p>
              Some services presented on this website — such as the Product Carbon Footprint Calculator 
              and Digital Product Passport generation — are provided through the Pass2Green platform, 
              which operates under its own website and may have its own privacy policy.
            </p>
            <p>
              Users interacting directly with Pass2Green services are subject to the terms and policies 
              of that platform.
            </p>

            <h2>5. Data Retention</h2>
            <p>
              Personal data submitted via the contact form is retained only for the time necessary to 
              handle your request and maintain professional communication, unless a contractual 
              relationship is established.
            </p>

            <h2>6. Your Rights</h2>
            <p>In accordance with applicable data protection laws, you may request:</p>
            <ul>
              <li>Access to your data</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your data</li>
            </ul>
            <p>
              To exercise your rights, contact us at: <a href="mailto:contact@gotogreen.tn">contact@gotogreen.tn</a>
            </p>

            <h2>7. Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your data 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <p className={styles.lastUpdated}>Last updated: February 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
