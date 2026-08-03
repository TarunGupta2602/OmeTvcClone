export default function sitemap() {
  const baseUrl = 'https://parvah.online';
  const currentDate = new Date().toISOString();

  const blogPosts = [
    'how-to-stay-safe-on-video-chat-platforms',
    'omegle-alternatives-why-strangerlive-is-better',
    'tips-for-making-meaningful-connections-online',
    'understanding-webrtc-technology',
    'video-chat-etiquette-guide',
  ];

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/safety`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/community-guidelines`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...blogPosts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    })),
  ];
}
