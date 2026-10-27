'use client';

import {
  ADSTERRA_BANNER_KEY,
  ADSTERRA_BANNER_SRC,
} from '../../lib/adsterra';

const SRCDOC = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>html,body{margin:0;padding:0;overflow:hidden;background:transparent;}</style></head><body>
<script>
  atOptions = {
    'key': '${ADSTERRA_BANNER_KEY}',
    'format': 'iframe',
    'height': 250,
    'width': 300,
    'params': {}
  };
</script>
<script src="${ADSTERRA_BANNER_SRC}"></script>
</body></html>`;

export default function AdsterraBanner300x250({ className = '' }) {
  return (
    <aside
      className={`mx-auto flex w-[300px] max-w-full flex-col items-center ${className}`}
      aria-label="Advertisement"
    >
      <p className="mb-1 text-[10px] uppercase tracking-wider text-slate-500">Advertisement</p>
      <iframe
        title="Advertisement"
        srcDoc={SRCDOC}
        width={300}
        height={250}
        scrolling="no"
        frameBorder="0"
        sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin"
        className="h-[250px] w-[300px] max-w-full bg-transparent"
      />
    </aside>
  );
}
