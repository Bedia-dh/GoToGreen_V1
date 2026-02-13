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
    title: 'Sustainable Technology Solutions for Modern Industries',
    excerpt: 'Explore how green technology is transforming industrial processes and reducing environmental impact while improving efficiency.',
    category: 'GreenTech',
    date: 'January 15, 2026',
    readTime: '8 min',
    image: '/images/blog-1.jpg',
    href: '/blog/sustainable-technology-solutions',
    author: { name: 'David Anderson' },
  },
  {
    title: 'Digital Transformation in Industrial Manufacturing',
    excerpt: 'Best practices for implementing digital solutions in manufacturing environments to optimize production and reduce waste.',
    category: 'Industrie',
    date: 'January 10, 2026',
    readTime: '12 min',
    image: '/images/blog-2.jpg',
    href: '/blog/digital-transformation-manufacturing',
    author: { name: 'Lisa Chen' },
  },
  {
    title: 'Advanced Soil Analysis Technologies',
    excerpt: 'A comprehensive guide to modern geotechnical analysis methods and how they improve construction project outcomes.',
    category: 'Géotechnical',
    date: 'January 5, 2026',
    readTime: '10 min',
    image: '/images/blog-3.jpg',
    href: '/blog/advanced-soil-analysis',
    author: { name: 'Marcus Johnson' },
  },
  {
    title: 'Smart Infrastructure: The Future of Civil Engineering',
    excerpt: 'How IoT and smart sensors are revolutionizing civil engineering projects, from bridges to buildings.',
    category: 'Civil engineering',
    date: 'December 28, 2025',
    readTime: '7 min',
    image: '/images/blog-4.jpg',
    href: '/blog/smart-infrastructure-future',
    author: { name: 'Sarah Williams' },
  },
  {
    title: 'Upskilling Teams for Green Technology Adoption',
    excerpt: 'Practical strategies for training your workforce on sustainable technologies and environmental best practices.',
    category: 'Training',
    date: 'December 20, 2025',
    readTime: '9 min',
    image: '/images/blog-5.jpg',
    href: '/blog/upskilling-green-technology',
    author: { name: 'Sarah Williams' },
  },
  {
    title: 'Carbon Footprint Reduction in Industrial Operations',
    excerpt: 'Technical strategies for measuring and reducing carbon emissions in industrial and manufacturing environments.',
    category: 'GreenTech',
    date: 'December 15, 2025',
    readTime: '15 min',
    image: '/images/blog-6.jpg',
    href: '/blog/carbon-footprint-reduction',
    author: { name: 'Marcus Johnson' },
  },
];

const categories = ['All', 'GreenTech', 'Industrie', 'Géotechnical', 'Civil engineering', 'Training'];

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
