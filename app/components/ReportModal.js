'use client';

import { useCallback, useState } from 'react';
import { useDialogA11y } from '../hooks/useDialogA11y';

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

  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  const panelRef = useDialogA11y({ open: true, onClose: handleClose });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    onReported?.({ reason, details });
    onClose();
    setSubmitting(false);
  };

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-slate-950/70 backdrop-blur-sm p-0 sm:p-4"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="report-dialog-title"
        tabIndex={-1}
        className="max-w-md w-full p-6 rounded-t-3xl sm:rounded-2xl bg-white space-y-4 border border-slate-200/80 max-h-[90dvh] overflow-y-auto outline-none"
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-rose-600">Safety</p>
            <h3 id="report-dialog-title" className="text-lg font-black text-slate-900">
              Report User
            </h3>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
            aria-label="Close report dialog"
          >
            ✕
          </button>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          This user will be blocked and skipped. Nothing is stored on our servers. For serious
          violations, email{' '}
          <a
            href="mailto:safety@parvah.online"
            className="text-teal-700 font-semibold hover:underline"
          >
            safety@parvah.online
          </a>
          .
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="report-reason" className="block text-xs font-bold text-slate-700 mb-1.5">
              Reason
            </label>
            <select
              id="report-reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20"
            >
              {REASONS.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="report-details" className="block text-xs font-bold text-slate-700 mb-1.5">
              Additional details (optional)
            </label>
            <textarea
              id="report-details"
              rows={3}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Describe what happened..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 resize-none"
            />
          </div>

          <div className="flex gap-2 pt-1">
            <button
              type="button"
              onClick={handleClose}
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
