import Link from 'next/link';
import Image from 'next/image';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  icon?: string;
  title: string;
  description: string;
  href: string;
  image?: string;
}

export default function ServiceCard({ icon, title, description, href, image }: ServiceCardProps) {
  return (
    <Link href={href} className={styles.card}>
      {image ? (
        <div className={styles.imageContainer}>
          <Image
            src={image}
            alt={title}
            fill
            className={styles.image}
          />
          <div className={styles.overlay}>
            <h3 className={styles.overlayTitle}>{title}</h3>
            <p className={styles.overlayDescription}>{description}</p>
            <span className={styles.overlayLink}>
              Learn more
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>
      ) : (
        <>
          {icon && (
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>{icon}</span>
            </div>
          )}
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <span className={styles.link}>
            Learn more
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </>
      )}
    </Link>
  );
}
