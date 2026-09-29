/** True for laptops/desktops; false for phones and tablets (incl. iPadOS). */
export function isDesktopComputer() {
  if (typeof navigator === 'undefined') return false;

  const ua = navigator.userAgent || '';
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i.test(ua)) {
    return false;
  }

  // iPadOS 13+ can report as MacIntel with touch
  if (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) {
    return false;
  }

  return true;
}

export function shouldRedirectUSStart() {
  if (typeof sessionStorage === 'undefined') return false;
  return sessionStorage.getItem('isUSVisitor') === 'true' && isDesktopComputer();
}
