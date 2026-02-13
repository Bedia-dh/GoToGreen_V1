import styles from '../legal.module.css';
import PageHeader from '@/components/PageHeader';
import ScrollToTop from '@/components/ScrollToTop';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | GoToGreen',
  description: 'Terms and conditions governing the use of the GoToGreen website.',
};

export default function TermsPage() {
  return (
    <>
      <ScrollToTop />
      <PageHeader
        title="Terms of Use"
        description="Conditions governing your access and use of our website."
        compact
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Terms of Use' },
        ]}
      />

      <section className={styles.legalPage}>
        <div className="container">
          <div className={styles.legalContent}>
            <h2>1. Purpose</h2>
            <p>
              These Terms of Use define the conditions under which users access and browse the 
              GoToGreen website. By accessing this website, you agree to comply with these terms.
            </p>

            <h2>2. Access</h2>
            <p>
              The website is accessible free of charge to any user with internet access. GoToGreen 
              reserves the right to suspend or modify access to the website at any time without 
              prior notice.
            </p>

            <h2>3. Nature of Information</h2>
            <p>
              The website provides general information about GoToGreen, its sustainability services, 
              and its flagship platform Pass2Green.
            </p>
            <p>
              The content does not constitute legal, regulatory, or financial advice. For formal 
              advisory services, a contractual agreement must be established.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              All website content remains the exclusive property of GoToGreen. Any unauthorized use, 
              reproduction, or distribution is prohibited.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>GoToGreen does not guarantee uninterrupted access to the website.</p>
            <p>GoToGreen shall not be liable for:</p>
            <ul>
              <li>Temporary service interruptions</li>
              <li>Technical issues</li>
              <li>External links to third-party websites</li>
            </ul>

            <h2>6. External Links</h2>
            <p>
              The website may contain links to third-party websites (including Pass2Green). GoToGreen 
              is not responsible for the content or privacy practices of those external platforms.
            </p>

            <h2>7. Applicable Law</h2>
            <p>
              These Terms of Use are governed by Tunisian law.
            </p>

            <p className={styles.lastUpdated}>Last updated: February 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
