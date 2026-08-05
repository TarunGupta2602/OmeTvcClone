export default function ChatSkeleton() {
  return (
    <div className="flex-1 min-h-[60vh] flex items-center justify-center bg-slate-50 border-b border-slate-200">
      <div className="text-center space-y-3 px-4">
        <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-sm font-semibold text-slate-700">Loading video chat…</p>
        <p className="text-xs text-slate-500">Allow camera access when prompted</p>
      </div>
    </div>
  );
}
