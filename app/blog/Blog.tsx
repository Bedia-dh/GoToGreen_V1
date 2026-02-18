'use client';

import { useMemo, useState } from 'react';
import BlogCard from '@/components/BlogCard';
import CTABanner from '@/components/CTABanner';
import styles from './blog.module.css';
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"

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

interface BlogClientProps {
  blogCards: BlogCardProps[];
  categories: string[];
}

export default function BlogClient({ blogCards, categories }: BlogClientProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    if (activeCategory === 'All') {
      return blogCards;
    }
    return blogCards.filter((post) => post.category === activeCategory);
  }, [blogCards, activeCategory]);

  const featuredPost = filtered[0];
  const gridPosts = filtered.slice(1);

  return (
    <>
    <section className={styles.blogSection}>
      <div className="container">
        <div className={styles.categories}>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`${styles.categoryBtn} ${category === activeCategory ? styles.active : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {featuredPost ? (
          <>
            <div className={styles.featuredPost}>
              <div
                className={styles.featuredImage}
                style={{ backgroundImage: `url(${featuredPost.image})` }}
              >
                <span className={styles.featuredBadge}>Featured</span>
              </div>
              <div className={styles.featuredContent}>
                <span className={styles.featuredCategory}>{featuredPost.category}</span>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.excerpt}</p>
                <div className={styles.featuredMeta}>
                  <span>{featuredPost.author?.name ?? 'GoToGreen Team'}</span>
                  <span className={styles.separator}>•</span>
                  <span>{featuredPost.date}</span>
                  <span className={styles.separator}>•</span>
                  <span>{featuredPost.readTime} read</span>
                </div>
                <InteractiveHoverButton href={featuredPost.href} className="btn btn-primary">
                  Read Full Article
                </InteractiveHoverButton>
              </div>
            </div>

            <div className={styles.grid}>
              {gridPosts.map((post) => (
                <BlogCard key={post.title} {...post} />
              ))}
            </div>

            {gridPosts.length > 0 && (
              <div className={styles.loadMore}>
                <button className="btn btn-outline">Load More Articles</button>
              </div>
            )}
          </>
        ) : (
          <div className={styles.loadMore}>
            <p>No articles found for this category.</p>
          </div>
        )}
      </div>
    </section>

    <CTABanner
      title="Have a Story to Share?"
      description="We're always looking for fresh perspectives on technology, development, and digital transformation."
      primaryCta={{ text: 'Contact Us', href: '/contact' }}
      secondaryCta={{ text: 'View Services', href: '/services' }}
    />
  </>
  );
}