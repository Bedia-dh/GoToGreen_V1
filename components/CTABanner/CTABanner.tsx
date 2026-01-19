import Link from 'next/link';
import styles from './CTABanner.module.css';

interface CTABannerProps {
  title: string;
  description?: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  variant?: 'primary' | 'accent' | 'soft';
}

export default function CTABanner({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = 'primary',
}: CTABannerProps) {
  return (
    <section className={`${styles.banner} ${styles[variant]}`}>
      <div className={`container ${styles.content}`}>
        <div className={styles.text}>
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        <div className={styles.actions}>
          <Link 
            href={primaryCta.href} 
            className={`btn ${variant === 'primary' ? 'btn-white' : 'btn-primary'} btn-lg`}
          >
            {primaryCta.text}
          </Link>
          {secondaryCta && (
            <Link 
              href={secondaryCta.href} 
              className={`btn btn-outline btn-lg ${styles.secondaryBtn}`}
            >
              {secondaryCta.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
