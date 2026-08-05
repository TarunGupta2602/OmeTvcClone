export const CATEGORY_THEMES = {
  Safety: { from: '#e11d48', to: '#be123c', accent: '#fecdd3', icon: '🛡️' },
  Comparison: { from: '#2563eb', to: '#0891b2', accent: '#bfdbfe', icon: '⚖️' },
  Tips: { from: '#059669', to: '#0d9488', accent: '#a7f3d0', icon: '💡' },
  Technology: { from: '#7c3aed', to: '#9333ea', accent: '#ddd6fe', icon: '⚡' },
  Technical: { from: '#d97706', to: '#ea580c', accent: '#fed7aa', icon: '🔧' },
  Privacy: { from: '#4f46e5', to: '#2563eb', accent: '#c7d2fe', icon: '🔒' },
};

export function getBlogCoverTheme(category) {
  return CATEGORY_THEMES[category] || { from: '#4f46e5', to: '#7c3aed', accent: '#c7d2fe', icon: '📹' };
}

export function getBlogCoverPath(slug) {
  return `/blog/${slug}/opengraph-image`;
}

/** Split title into max 3 lines for OG image rendering */
export function wrapTitleLines(title, maxCharsPerLine = 36) {
  const words = title.split(' ');
  const lines = [];
  let current = '';

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length <= maxCharsPerLine) {
      current = next;
    } else {
      if (current) lines.push(current);
      current = word;
    }
    if (lines.length >= 2) break;
  }
  if (current) lines.push(current);

  if (lines.length === 3) return lines;
  const used = lines.join(' ').split(' ').length;
  const rest = words.slice(used).join(' ');
  if (rest && lines.length < 3) {
    lines.push(rest.length > maxCharsPerLine + 10 ? `${rest.slice(0, maxCharsPerLine)}…` : rest);
  }
  return lines.slice(0, 3);
}

export function parseReadTimeToIsoDuration(readTime) {
  const match = readTime?.match(/(\d+)/);
  return match ? `PT${match[1]}M` : 'PT8M';
}
