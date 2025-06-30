export default function scrollToTop() {
  if (typeof window === 'undefined') return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (document.scrollingElement) {
    document.scrollingElement.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (document.documentElement) {
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (document.body) {
    document.body.scrollTo({ top: 0, behavior: 'smooth' });
  }
} 