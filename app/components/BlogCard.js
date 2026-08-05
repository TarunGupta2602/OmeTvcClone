import Image from 'next/image';
import Link from 'next/link';

export function BlogCardThumbnail({ slug, alt, className = '', compact = false }) {
  const src = `/blog/${slug}/opengraph-image`;

  if (compact) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        sizes="96px"
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <div className={`relative aspect-[1200/630] overflow-hidden rounded-lg bg-slate-100 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        sizes="(max-width: 768px) 100vw, 400px"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}

export function BlogCard({ post, featured = false }) {
  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group block overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all"
      >
        <BlogCardThumbnail slug={post.slug} alt={post.title} className="rounded-none rounded-t-2xl" />
        <div className="p-6 sm:p-8 space-y-3">
          <span className="inline-flex px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-semibold ring-1 ring-indigo-200">
            Featured · {post.category}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-indigo-600 leading-snug">
            {post.title}
          </h2>
          <p className="text-sm text-slate-600 line-clamp-2">{post.excerpt}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-white border border-slate-200 hover:border-indigo-200 hover:shadow-lg transition-all"
    >
      <BlogCardThumbnail slug={post.slug} alt={post.title} className="rounded-none rounded-t-xl" />
      <div className="p-5 flex flex-col flex-1">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-indigo-600">{post.category}</span>
        <h3 className="mt-2 text-base font-bold text-slate-900 group-hover:text-indigo-600 line-clamp-2 leading-snug">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 line-clamp-2 flex-1">{post.excerpt}</p>
        <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between text-xs text-slate-500">
          <span>{post.readTime}</span>
          <span className="font-semibold text-indigo-600">Read →</span>
        </div>
      </div>
    </Link>
  );
}
