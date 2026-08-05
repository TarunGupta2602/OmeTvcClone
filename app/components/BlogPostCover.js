import Image from 'next/image';

export default function BlogPostCover({ slug, alt, title, priority = true }) {
  const src = `/blog/${slug}/opengraph-image`;

  return (
    <figure className="w-full">
      <div className="relative aspect-[1200/630] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-slate-100 ring-1 ring-slate-200/80 shadow-lg">
        <Image
          src={src}
          alt={alt}
          title={title}
          fill
          priority={priority}
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
          className="object-cover"
        />
      </div>
      {alt && (
        <figcaption className="mt-2 text-center text-xs text-slate-400">
          {alt}
        </figcaption>
      )}
    </figure>
  );
}
