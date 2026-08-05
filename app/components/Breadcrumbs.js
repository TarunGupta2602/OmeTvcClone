import Link from 'next/link';
import { SITE_URL } from '../../lib/constants';

export default function Breadcrumbs({ items, light = false }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `${SITE_URL}${item.href}` : undefined,
    })),
  };

  const linkClass = light
    ? 'font-semibold text-white/80 hover:text-white transition'
    : 'font-semibold text-slate-500 hover:text-indigo-600 transition';
  const currentClass = light ? 'font-semibold text-white' : 'font-semibold text-slate-900';
  const separatorClass = light ? 'text-white/40' : 'text-slate-300';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => (
            <li key={item.label} className="flex items-center gap-2">
              {index > 0 && <span className={separatorClass}>/</span>}
              {item.href ? (
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              ) : (
                <span className={currentClass}>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
