import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.budgetwise.in'
  const pages: Array<{ path: string; frequency: 'weekly' | 'monthly'; priority: number }> = [
    { path: '', frequency: 'weekly', priority: 1 },
    { path: '/about', frequency: 'monthly', priority: 0.7 },
    { path: '/privacy', frequency: 'monthly', priority: 0.6 },
    { path: '/terms', frequency: 'monthly', priority: 0.6 },
    { path: '/contact', frequency: 'monthly', priority: 0.6 },
    { path: '/support', frequency: 'monthly', priority: 0.7 },
    { path: '/roadmap', frequency: 'monthly', priority: 0.7 },
    { path: '/changelog', frequency: 'monthly', priority: 0.7 },
    { path: '/blog', frequency: 'monthly', priority: 0.7 },
  ]

  return pages.map(({ path, frequency, priority }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: frequency,
    priority,
  }))
}
