export const BLOG_CATEGORIES = [
  { slug: 'safety', label: 'Safety', description: 'Stay safe while video chatting with strangers on Parvah.' },
  { slug: 'comparison', label: 'Comparison', description: 'Compare Parvah with Omegle, OmeTV, and other random video chat platforms.' },
  { slug: 'tips', label: 'Tips', description: 'Tips for better conversations and connections on random video chat.' },
  { slug: 'technology', label: 'Technology', description: 'WebRTC, peer-to-peer video, and how Parvah works under the hood.' },
  { slug: 'technical', label: 'Technical', description: 'Troubleshooting guides for webcam, connection, and browser issues.' },
  { slug: 'privacy', label: 'Privacy', description: 'Privacy guides for anonymous random video chat on Parvah.' },
];

export function categoryLabelToSlug(label) {
  return label.toLowerCase();
}

export function getCategoryBySlug(slug) {
  return BLOG_CATEGORIES.find((c) => c.slug === slug);
}

export function filterPostsByCategory(posts, categorySlug) {
  const cat = getCategoryBySlug(categorySlug);
  if (!cat) return [];
  return posts.filter((p) => p.category.toLowerCase() === cat.slug);
}
