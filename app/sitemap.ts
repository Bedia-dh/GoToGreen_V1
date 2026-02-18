import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://gotogreen.tech'
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/case-studies',
    '/blog',
    '/contact',
    '/legal/privacy',
    '/legal/terms',
    '/legal/legal-notice',
  ]
  
  // Service pages
  const servicePages = [
    '/services/web-development',
    '/services/mobile-apps',
    '/services/ai-solutions',
    '/services/devops',
    '/services/training',
    '/services/seo',
    '/services/pcf-calculator',
  ]
  
  // Case study pages
  const caseStudyPages = [
    '/case-studies/fonda-solution',
  ]

  const allPages = [...staticPages, ...servicePages, ...caseStudyPages]
  
  return allPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route.includes('/services') ? 0.8 : 0.6,
  }))
}