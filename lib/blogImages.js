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

/** Build SVG string for static cover files (used at build time) */
export function buildCoverSvg({ title, category, readTime }) {
  const theme = getBlogCoverTheme(category);
  const lines = wrapTitleLines(title, 32);
  const lineYs = [280, 340, 400].slice(0, lines.length);

  const escapeXml = (text) =>
    text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  const titleSvg = lines
    .map(
      (line, i) =>
        `<text x="64" y="${lineYs[i]}" fill="white" font-size="${line.length > 30 ? 44 : 52}" font-weight="800" font-family="system-ui,sans-serif">${escapeXml(line)}</text>`
    )
    .join('\n    ');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${theme.from}"/>
      <stop offset="100%" stop-color="${theme.to}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1040" cy="80" r="160" fill="rgba(255,255,255,0.08)"/>
  <circle cx="400" cy="580" r="120" fill="rgba(255,255,255,0.06)"/>
  <rect x="64" y="56" rx="20" ry="20" width="280" height="44" fill="rgba(255,255,255,0.2)"/>
  <text x="84" y="86" fill="white" font-size="20" font-weight="700" font-family="system-ui,sans-serif">${escapeXml(category.toUpperCase())}</text>
  <text x="360" y="86" fill="rgba(255,255,255,0.75)" font-size="18" font-family="system-ui,sans-serif">${escapeXml(readTime || '')}</text>
  ${titleSvg}
  <rect x="64" y="520" width="48" height="48" rx="12" fill="rgba(255,255,255,0.25)"/>
  <text x="88" y="552" fill="white" font-size="24" font-weight="800" text-anchor="middle" font-family="system-ui,sans-serif">P</text>
  <text x="128" y="540" fill="white" font-size="20" font-weight="700" font-family="system-ui,sans-serif">Parvah Blog</text>
  <text x="128" y="564" fill="rgba(255,255,255,0.8)" font-size="16" font-family="system-ui,sans-serif">parvah.online</text>
</svg>`;
}

export function getBlogCoverPath(slug) {
  return `/blog/covers/${slug}.svg`;
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
