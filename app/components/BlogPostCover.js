import BlogCoverArt from './BlogCoverArt';

export default function BlogPostCover({ title, category, readTime, alt }) {
  return (
    <figure className="w-full">
      <div className="relative aspect-[1200/630] w-full overflow-hidden rounded-xl sm:rounded-2xl ring-1 ring-slate-200/80 shadow-lg">
        <BlogCoverArt title={title} category={category} readTime={readTime} className="absolute inset-0 h-full min-h-0" />
      </div>
      {alt && <figcaption className="mt-2 text-center text-xs text-slate-400">{alt}</figcaption>}
    </figure>
  );
}
