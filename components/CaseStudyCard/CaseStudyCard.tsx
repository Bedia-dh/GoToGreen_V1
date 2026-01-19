import Link from 'next/link';
import styles from './CaseStudyCard.module.css';

interface CaseStudyCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
}

export default function CaseStudyCard({ 
  title, 
  category, 
  description, 
  image, 
  href 
}: CaseStudyCardProps) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.imageWrapper}>
        <div 
          className={styles.image}
          style={{ backgroundImage: `url(${image})` }}
        />
        <span className={styles.category}>{category}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.link}>
          View Case Study
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </Link>
  );
}
