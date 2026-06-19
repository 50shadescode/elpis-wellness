import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.elpiswellness.co.ke';

  // Core routes mapping out Julie's pages
  const routes = [
    '',
    '/about',
    '/services',
    '/meet-jullie',
    '/organizations',
    '/self-assessment',
    '/programs/ignite',
    '/programs/guilt-free'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}