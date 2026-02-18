import PageHeader from '@/components/PageHeader';
import BlogClient from './Blog';
import ScrollToTop from '@/components/ScrollToTop';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Blog & Insights | GoToGreen',
  description: 'Stay updated with the latest in technology, development best practices, and industry insights from the GoToGreen team.',
};

const blogPosts = [
    {
    title: 'Digital Product Passport: A Pathway to Circularity and Sustainability',
    excerpt: 'Discover how Digital Product Passports (DPP) are revolutionizing manufacturing by enhancing transparency, traceability, and sustainability throughout the product lifecycle.',
    category: 'GreenTech',
    date: 'February 18, 2026',
    readTime: '15 min',
    image: '/images/blogs/dpp.jpg',
    href: '/blog/digital-product-passport-circularity-sustainability',
    author: { name: 'Foivos Psarommatis' },
  },
  {
    title: 'Sustainable Technology Solutions for Modern Industries',
    excerpt: 'Explore how green technology is transforming industrial processes and reducing environmental impact while improving efficiency.',
    category: 'GreenTech',
    date: 'January 15, 2026',
    readTime: '8 min',
    image: '/images/blogs/blog-1.webp',
    href: '/blog/sustainable-technology-solutions',
    author: { name: 'David Anderson' },
  },

  {
    title: 'Sustainable Technology: Putting Technology at the Heart of Your CSR Strategy',
    excerpt: 'Learn how to integrate sustainable technology practices into your CSR strategy with PwC\'s comprehensive approach to responsible digital transformation.',
    category: 'Sustainable Tech',
    date: 'February 17, 2026',
    readTime: '12 min',
    image: '/images/blogs/csr.jpg',
    href: '/blog/sustainable-technology-csr-strategy',
    author: { name: 'Sylvain Lambert' },
  },
];

const categories = ['All', 'GreenTech', 'Sustainable Tech', 'Industrie', 'Géotechnical', 'Civil engineering', 'Training'];

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

      <BlogClient blogCards={blogPosts} categories={categories} />

      <ScrollToTop />
    </>
  );
}
