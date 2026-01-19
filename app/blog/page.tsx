import styles from './blog.module.css';
import PageHeader from '@/components/PageHeader';
import BlogCard from '@/components/BlogCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Insights | GoToGreen',
  description: 'Stay updated with the latest in technology, development best practices, and industry insights from the GoToGreen team.',
};

const blogPosts = [
  {
    title: 'The Future of Web Development: Trends to Watch in 2026',
    excerpt: 'Explore the emerging technologies and methodologies that are shaping the future of web development, from AI-assisted coding to edge computing.',
    category: 'Technology',
    date: 'January 15, 2026',
    readTime: '8 min',
    image: '/images/blog-1.jpg',
    href: '/blog/future-web-development-2026',
    author: { name: 'David Anderson' },
  },
  {
    title: 'Building Scalable Mobile Applications with React Native',
    excerpt: 'Best practices and architectural patterns for building enterprise-grade mobile applications that scale with your business.',
    category: 'Mobile Development',
    date: 'January 10, 2026',
    readTime: '12 min',
    image: '/images/blog-2.jpg',
    href: '/blog/scalable-react-native-apps',
    author: { name: 'Lisa Chen' },
  },
  {
    title: 'Implementing AI in Your Business: A Practical Guide',
    excerpt: 'A step-by-step guide to identifying AI opportunities, selecting the right solutions, and implementing them effectively.',
    category: 'AI & Automation',
    date: 'January 5, 2026',
    readTime: '10 min',
    image: '/images/blog-3.jpg',
    href: '/blog/implementing-ai-business-guide',
    author: { name: 'Marcus Johnson' },
  },
  {
    title: 'DevOps Best Practices for Startups',
    excerpt: 'How startups can implement DevOps practices without overwhelming their small teams, focusing on high-impact, low-effort wins.',
    category: 'DevOps',
    date: 'December 28, 2025',
    readTime: '7 min',
    image: '/images/blog-4.jpg',
    href: '/blog/devops-best-practices-startups',
    author: { name: 'Sarah Williams' },
  },
  {
    title: 'Designing for Accessibility: Beyond Compliance',
    excerpt: 'Why accessibility should be at the core of your design process, and how to create truly inclusive digital experiences.',
    category: 'Design',
    date: 'December 20, 2025',
    readTime: '9 min',
    image: '/images/blog-5.jpg',
    href: '/blog/designing-for-accessibility',
    author: { name: 'Sarah Williams' },
  },
  {
    title: 'Optimizing Application Performance: A Deep Dive',
    excerpt: 'Technical strategies for improving application performance, from code optimization to infrastructure tuning.',
    category: 'Technology',
    date: 'December 15, 2025',
    readTime: '15 min',
    image: '/images/blog-6.jpg',
    href: '/blog/optimizing-application-performance',
    author: { name: 'Marcus Johnson' },
  },
];

const categories = ['All', 'Technology', 'Mobile Development', 'AI & Automation', 'DevOps', 'Design'];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog & Insights"
        description="Thoughts, tutorials, and insights from our team on technology, development, and digital transformation."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog' },
        ]}
      />

      <section className={styles.blogSection}>
        <div className="container">
          {/* Categories */}
          <div className={styles.categories}>
            {categories.map((category) => (
              <button 
                key={category} 
                className={`${styles.categoryBtn} ${category === 'All' ? styles.active : ''}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className={styles.featuredPost}>
            <div 
              className={styles.featuredImage}
              style={{ backgroundImage: `url(${blogPosts[0].image})` }}
            >
              <span className={styles.featuredBadge}>Featured</span>
            </div>
            <div className={styles.featuredContent}>
              <span className={styles.featuredCategory}>{blogPosts[0].category}</span>
              <h2>{blogPosts[0].title}</h2>
              <p>{blogPosts[0].excerpt}</p>
              <div className={styles.featuredMeta}>
                <span>{blogPosts[0].author.name}</span>
                <span className={styles.separator}>•</span>
                <span>{blogPosts[0].date}</span>
                <span className={styles.separator}>•</span>
                <span>{blogPosts[0].readTime} read</span>
              </div>
              <a href={blogPosts[0].href} className="btn btn-primary">
                Read Article
              </a>
            </div>
          </div>

          {/* Posts Grid */}
          <div className={styles.grid}>
            {blogPosts.slice(1).map((post) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>

          {/* Load More */}
          <div className={styles.loadMore}>
            <button className="btn btn-outline">Load More Articles</button>
          </div>
        </div>
      </section>
    </>
  );
}
