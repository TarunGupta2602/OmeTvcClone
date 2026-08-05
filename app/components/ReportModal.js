'use client';

import { useState } from 'react';

const REASONS = [
  'Inappropriate content or nudity',
  'Harassment or hate speech',
  'Spam or scam attempt',
  'Underage user suspected',
  'Other safety concern',
];

export default function ReportModal({ onClose, onReported }) {
  const [reason, setReason] = useState(REASONS[0]);
  const [details, setDetails] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // No server storage — block/skip is handled by the parent via onReported
    onReported?.({ reason, details });
    onClose();
    setSubmitting(false);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4">
      <div className="max-w-md w-full p-6 rounded-2xl bg-white shadow-2xl space-y-4 ring-1 ring-slate-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-black text-slate-900">Report User</h3>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
            aria-label="Close report dialog"
          >
            ✕
          </button>
        </div>

        <p className="text-xs text-slate-600">
          This user will be blocked and skipped. Nothing is stored on our servers. For serious violations, email{' '}
          <a href="mailto:safety@parvah.online" className="text-indigo-600 font-semibold hover:underline">
            safety@parvah.online
          </a>
          .
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Reason</label>
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            >
              {REASONS.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Additional details (optional)</label>
            <textarea
              rows={3}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Describe what happened..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 resize-none"
            />
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl font-semibold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 py-2.5 rounded-xl font-black text-xs text-white bg-rose-600 hover:bg-rose-700 disabled:opacity-50 transition"
            >
              Block & Skip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
