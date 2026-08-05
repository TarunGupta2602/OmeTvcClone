import Link from 'next/link';
import { SITE_NAME } from '../../lib/constants';

export default function BlogAuthorCard({ author, date, modifiedDate }) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200">
      <div className="w-11 h-11 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
        P
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-slate-900">{author || `${SITE_NAME} Team`}</p>
        <p className="text-sm text-slate-500 mt-0.5 leading-relaxed">
          Guides on video chat safety, privacy, and tips for using {SITE_NAME}.
        </p>
        <p className="text-xs text-slate-400 mt-2">
          {date}
          {modifiedDate !== date && ` · Updated ${modifiedDate}`}
        </p>
      </div>
      <Link
        href="/blog"
        className="flex-shrink-0 text-xs font-semibold text-indigo-600 hover:text-indigo-700 whitespace-nowrap"
      >
        All posts →
      </Link>
    </div>
  );
}
