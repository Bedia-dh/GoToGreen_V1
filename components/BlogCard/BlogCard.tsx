import Link from 'next/link';
import styles from './BlogCard.module.css';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  href: string;
  author?: {
    name: string;
    avatar?: string;
  };
}

export default function BlogCard({
  title,
  excerpt,
  category,
  date,
  readTime,
  image,
  href,
  author,
}: BlogCardProps) {
  return (
    <article className={styles.card}>
      <Link href={href} className={styles.imageLink}>
        <div 
          className={styles.image}
          style={{ backgroundImage: `url(${image})` }}
        />
        <span className={styles.category}>{category}</span>
      </Link>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span>{date}</span>
          <span className={styles.separator}>•</span>
          <span>{readTime} read</span>
        </div>
        <h3 className={styles.title}>
          <Link href={href}>{title}</Link>
        </h3>
        <p className={styles.excerpt}>{excerpt}</p>
        {author && (
          <div className={styles.author}>
            <div className={styles.avatar}>
              {author.avatar ? (
                <img src={author.avatar} alt={author.name} />
              ) : (
                <span>{author.name.charAt(0)}</span>
              )}
            </div>
            <span className={styles.authorName}>{author.name}</span>
          </div>
        )}
      </div>
    </article>
  );
}
