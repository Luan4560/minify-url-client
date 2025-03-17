import { MetadataRoute } from 'next';

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://minifyurl.net/',
      lastModified: new Date(),
    },
    {
      url: 'https://minifyurl.net/about',
      lastModified: new Date(),
    },
  ];
}
