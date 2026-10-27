/** HilltopAds zone scripts for parvah.online (site 926420) */

export const HILLTOP_POPUNDER_SRC = '/hilltopads-pop.js';

/** Parvah in-page push — MULTITAG INPAGE */
export const HILLTOP_INPAGE_PUSH_SRC =
  '//unfortunateheart.com/bOX/V.sTdVGzlH0tYzWAcD/PewmA9ouXZSUJl/kyPtT/cQ1-NaTMQOzHO/TicJt/NmzpUI1bNhDjQQwkMVQI';

/** Parvah Multitag — MULTITAG BANNER (desktop) */
export const HILLTOP_MULTITAG_BANNER_SRC =
  '//unfortunateheart.com/b/XXV.sKddG/l/0lYqWScE/QeamZ9/u/ZsUJlmk/P_Tqcx1pNLTRQ_0uMbzOMCtHNiz-Ua1eNfD/QfzGNhwP';

/** Parvah mmultitag — MULTITAG BANNER (mobile) */
export const HILLTOP_MULTITAG_MOBILE_BANNER_SRC =
  '//unfortunateheart.com/brXxV.sRdTGXli0AYeWFco/_e/mv9runZeUClrkIPCT/cb1QN/T/Q_0UMAjxEGtpNfzhUo1ZNDDHQdygN/Qt';

/** Parvah video — MULTITAG VAST (desktop) */
export const HILLTOP_VAST_VIDEO_SRC =
  '//unfortunateheart.com/btXqV/sjd.Gjlr0aY/WCcX/geymP9ku_ZeUjlokIPjTIcE1ENzTkQ_0TNjD/kpt/NtzhUB1/NqD/Qu1oMdwz';

export function injectHilltopAdScript(key, src, container) {
  if (typeof document === 'undefined') return;
  if (document.querySelector(`script[data-htads="${key}"]`)) return;

  const script = document.createElement('script');
  script.settings = {};
  script.src = src;
  script.async = true;
  script.referrerPolicy = 'no-referrer-when-downgrade';
  script.setAttribute('data-htads', key);
  (container || document.body).appendChild(script);
}
