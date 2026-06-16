export function normalizePath(pathname = window.location.pathname) {
  return pathname.replace(/\/$/, '') || '/';
}

export function navigateTo(path) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function isExternalLink(path) {
  return /^https?:\/\//.test(path) || path?.startsWith('mailto:') || path?.startsWith('tel:');
}
