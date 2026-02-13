import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './article.module.css';
import ScrollToTop from '@/components/ScrollToTop';
import CTABanner from '@/components/CTABanner';
import type { Metadata } from 'next';

// Article data
const articles = [
  {
    slug: 'sustainable-technology-solutions',
    title: 'Sustainable Technology Solutions for Modern Industries',
    excerpt: 'Explore how green technology is transforming industrial processes and reducing environmental impact while improving efficiency.',
    category: 'GreenTech',
    date: 'January 15, 2026',
    readTime: '8 min',
    image: '/images/blogs/blog-1.webp',
    author: {
      name: 'David Anderson',
      role: 'Senior Consultant',
      avatar: '/images/team/avatar-1.webp',
    },
    content: `
      <p class="lead">The industrial sector is undergoing a profound transformation as businesses recognize that sustainability and profitability are not mutually exclusive. In fact, green technology solutions are proving to be catalysts for innovation, efficiency, and long-term competitive advantage.</p>

      <h2 id="understanding-greentech">Understanding GreenTech in Industry</h2>
      <p>Green technology, or GreenTech, refers to the use of technology and science to reduce human impacts on the natural environment. In industrial settings, this encompasses everything from energy-efficient manufacturing processes to waste reduction systems and renewable energy integration.</p>
      <p>The adoption of sustainable technology is no longer just about corporate responsibility—it's becoming a business imperative driven by regulatory requirements, consumer expectations, and economic benefits.</p>

      <h2 id="key-technologies">Key Technologies Driving Change</h2>
      <p>Several technologies are at the forefront of the industrial sustainability revolution:</p>
      <ul>
        <li><strong>IoT-enabled monitoring systems</strong> that track energy consumption and emissions in real-time</li>
        <li><strong>AI-powered optimization</strong> algorithms that reduce waste and improve resource utilization</li>
        <li><strong>Renewable energy integration</strong> including solar, wind, and energy storage solutions</li>
        <li><strong>Circular economy platforms</strong> that enable material recovery and recycling</li>
      </ul>

      <h2 id="implementation-strategies">Implementation Strategies</h2>
      <p>Successfully implementing sustainable technology requires a strategic approach. Organizations should begin with a comprehensive assessment of their current environmental footprint, identifying the areas with the greatest potential for improvement.</p>
      <blockquote>
        <p>"The most successful sustainability initiatives are those that align environmental goals with business objectives, creating value for both the company and the planet."</p>
      </blockquote>
      <p>A phased implementation approach allows organizations to build momentum, demonstrate ROI, and secure buy-in for larger initiatives.</p>

      <h2 id="measuring-impact">Measuring Environmental Impact</h2>
      <p>Effective measurement is crucial for any sustainability initiative. Key performance indicators should include:</p>
      <ul>
        <li>Carbon emissions per unit of production</li>
        <li>Energy consumption and efficiency ratios</li>
        <li>Water usage and recycling rates</li>
        <li>Waste diversion from landfill</li>
        <li>Supply chain sustainability metrics</li>
      </ul>

      <h2 id="future-outlook">Future Outlook</h2>
      <p>The future of industrial sustainability is promising. Emerging technologies like green hydrogen, advanced battery storage, and carbon capture are opening new possibilities for decarbonization. Companies that invest in sustainable technology today will be better positioned to meet tomorrow's challenges and opportunities.</p>
      <p>As regulations tighten and stakeholder expectations evolve, sustainable technology will transition from competitive advantage to baseline requirement. The time to act is now.</p>
    `,
    tableOfContents: [
      { id: 'understanding-greentech', title: 'Understanding GreenTech in Industry' },
      { id: 'key-technologies', title: 'Key Technologies Driving Change' },
      { id: 'implementation-strategies', title: 'Implementation Strategies' },
      { id: 'measuring-impact', title: 'Measuring Environmental Impact' },
      { id: 'future-outlook', title: 'Future Outlook' },
    ],
  },
  {
    slug: 'digital-transformation-manufacturing',
    title: 'Digital Transformation in Industrial Manufacturing',
    excerpt: 'Best practices for implementing digital solutions in manufacturing environments to optimize production and reduce waste.',
    category: 'Industrie',
    date: 'January 10, 2026',
    readTime: '12 min',
    image: '/images/blog-2.jpg',
    author: {
      name: 'Lisa Chen',
      role: 'Industry 4.0 Specialist',
      avatar: '/images/team/avatar-2.jpg',
    },
    content: `
      <p class="lead">Digital transformation is reshaping the manufacturing landscape, enabling unprecedented levels of efficiency, quality, and agility. This guide explores the key strategies for successful digitalization.</p>

      <h2 id="digital-manufacturing">The Digital Manufacturing Revolution</h2>
      <p>Industry 4.0 represents the fourth industrial revolution, characterized by the integration of digital technologies into manufacturing processes. This transformation goes beyond automation—it creates intelligent, connected systems that can learn, adapt, and optimize themselves.</p>

      <h2 id="core-technologies">Core Technologies</h2>
      <p>The foundation of digital manufacturing rests on several key technologies:</p>
      <ul>
        <li><strong>Industrial IoT (IIoT)</strong> - Connected sensors and devices that provide real-time visibility</li>
        <li><strong>Digital Twins</strong> - Virtual replicas of physical systems for simulation and optimization</li>
        <li><strong>Advanced Analytics</strong> - Data-driven insights for predictive maintenance and quality control</li>
        <li><strong>Cloud Computing</strong> - Scalable infrastructure for data storage and processing</li>
      </ul>

      <h2 id="implementation-roadmap">Implementation Roadmap</h2>
      <p>A successful digital transformation requires careful planning and execution. Start with pilot projects that demonstrate value, then scale systematically across the organization.</p>
      <blockquote>
        <p>"Digital transformation is not about technology—it's about reimagining how you create value for your customers."</p>
      </blockquote>

      <h2 id="overcoming-challenges">Overcoming Challenges</h2>
      <p>Common challenges include legacy system integration, workforce upskilling, and change management. Address these proactively with clear communication, training programs, and phased implementation.</p>

      <h2 id="future-trends">Future Trends</h2>
      <p>Emerging trends include AI-driven autonomous systems, edge computing for real-time decision making, and sustainable manufacturing practices integrated into digital platforms.</p>
    `,
    tableOfContents: [
      { id: 'digital-manufacturing', title: 'The Digital Manufacturing Revolution' },
      { id: 'core-technologies', title: 'Core Technologies' },
      { id: 'implementation-roadmap', title: 'Implementation Roadmap' },
      { id: 'overcoming-challenges', title: 'Overcoming Challenges' },
      { id: 'future-trends', title: 'Future Trends' },
    ],
  },
];

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return { title: 'Article Not Found | GoToGreen' };
  }

  return {
    title: `${article.title} | GoToGreen Blog`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Get related articles (same category, excluding current)
  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 2);

  return (
    <>
      <ScrollToTop />
      
      {/* Article Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/blog" className={styles.backLink}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 16L6 10L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Blog
          </Link>
          
          <div className={styles.meta}>
            <span className={styles.category}>{article.category}</span>
            <span className={styles.separator}>•</span>
            <span>{article.date}</span>
            <span className={styles.separator}>•</span>
            <span>{article.readTime} read</span>
          </div>

          <h1 className={styles.title}>{article.title}</h1>
          <p className={styles.excerpt}>{article.excerpt}</p>

          <div className={styles.author}>
            <div className={styles.authorAvatar}>
              {article.author.name.charAt(0)}
            </div>
            <div className={styles.authorInfo}>
              <span className={styles.authorName}>{article.author.name}</span>
              <span className={styles.authorRole}>{article.author.role}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className={styles.featuredImage}>
        <Image
          src={article.image}
          alt={article.title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Article Content */}
      <article className={styles.article}>
        <div className={styles.articleContainer}>
          {/* Table of Contents - Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.toc}>
              <h4>Table of Contents</h4>
              <nav>
                {article.tableOfContents.map((item) => (
                  <a key={item.id} href={`#${item.id}`} className={styles.tocLink}>
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Share */}
            <div className={styles.share}>
              <h4>Share this article</h4>
              <div className={styles.shareButtons}>
                <button className={styles.shareBtn} aria-label="Share on LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </button>
                <button className={styles.shareBtn} aria-label="Share on Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className={styles.shareBtn} aria-label="Copy link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div 
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </article>

      {/* Author Bio */}
      <section className={styles.authorBio}>
        <div className="container">
          <div className={styles.authorBioCard}>
            <div className={styles.authorBioAvatar}>
              {article.author.name.charAt(0)}
            </div>
            <div className={styles.authorBioContent}>
              <h4>Written by {article.author.name}</h4>
              <p className={styles.authorBioRole}>{article.author.role}</p>
              <p className={styles.authorBioDescription}>
                Expert in sustainable technology solutions with over 10 years of experience helping organizations implement green initiatives and digital transformation strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className={styles.relatedSection}>
          <div className="container">
            <h3>Related Articles</h3>
            <div className={styles.relatedGrid}>
              {relatedArticles.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`} className={styles.relatedCard}>
                  <div className={styles.relatedImage}>
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className={styles.relatedContent}>
                    <span className={styles.relatedCategory}>{related.category}</span>
                    <h4>{related.title}</h4>
                    <span className={styles.relatedMeta}>{related.readTime} read</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title="Want to Learn More?"
        description="Subscribe to our newsletter for the latest insights on sustainable technology and industry trends."
        primaryCta={{ text: 'Contact Us', href: '/contact' }}
        secondaryCta={{ text: 'View Services', href: '/services' }}
      />
    </>
  );
}
