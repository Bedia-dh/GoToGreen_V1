import styles from '../legal.module.css';
import PageHeader from '@/components/PageHeader';
import ScrollToTop from '@/components/ScrollToTop';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Notice | GoToGreen',
  description: 'Legal information about GoToGreen SARL, including company registration, intellectual property, and liability details.',
};

export default function LegalNoticePage() {
  return (
    <>
      <ScrollToTop />
      <PageHeader
        title="Legal Notice"
        description="Legal information about GoToGreen and this website."
        compact
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Legal Notice' },
        ]}
      />

      <section className={styles.legalPage}>
        <div className="container">
          <div className={styles.legalContent}>
            <h2>Website Publisher</h2>
            <div className={styles.infoBlock}>
              <p><strong>GoToGreen</strong></p>
              <p>SARL</p>
              <p>Alya Medical Residence, Khzema Est, Sousse, Tunisia</p>
              <p>Email: <a href="mailto:contact@gotogreen.tn">contact@gotogreen.tn</a></p>
              <p>Website: <a href="https://www.gotogreen.tn" target="_blank" rel="noopener noreferrer">www.gotogreen.tn</a></p>
              <p>Company registration number: 1945917Z</p>
              <p>Tax identification number: 1945917Z/A/M/000</p>
            </div>

            <h2>Intellectual Property</h2>
            <p>
              All content published on this website (texts, visuals, graphics, logos, branding elements, 
              documents and downloadable materials) is protected under applicable intellectual property laws.
            </p>
            <p>
              Any reproduction, distribution, modification, or use — in whole or in part — without prior 
              written authorization from GoToGreen is strictly prohibited.
            </p>

            <h2>Liability</h2>
            <p>
              The information provided on this website is for general informational purposes only. While 
              GoToGreen strives to ensure accuracy and regular updates, we cannot guarantee that all 
              information is complete, accurate, or up to date at all times.
            </p>
            <p>
              GoToGreen shall not be held liable for any direct or indirect damages resulting from the 
              use of the website or reliance on the information provided.
            </p>

            <h2>Applicable Law</h2>
            <p>
              This website is governed by Tunisian law. Any dispute arising from its use shall fall 
              under the jurisdiction of the competent Tunisian courts.
            </p>

            <p className={styles.lastUpdated}>Last updated: February 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
