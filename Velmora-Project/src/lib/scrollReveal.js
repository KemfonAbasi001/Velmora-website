// === SCROLL REVEAL OBSERVER ===
// Watches all [data-reveal] elements and adds .is-visible when they
// enter the viewport. Supports optional stagger via data-delay (ms).
//
// Usage:
//   <div data-reveal>...</div>
//   <div data-reveal data-delay="80">...</div>
//
// Call initScrollReveal() once on app mount, and call it again
// (or use the refreshScrollReveal export) whenever new content
// is added to the DOM, e.g. after a route change.

let observer = null;

function revealElement(el) {
  const delay = el.getAttribute('data-delay');
  if (delay) {
    el.style.transitionDelay = `${delay}ms`;
  }
  el.classList.add('is-visible');
}

function getObserver() {
  if (observer) return observer;

  observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealElement(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  return observer;
}

export function initScrollReveal(root = document) {
  const obs = getObserver();
  const els = root.querySelectorAll('[data-reveal]:not(.is-visible)');

  els.forEach((el) => {
    obs.observe(el);
  });
}

// Re-scan the DOM for new [data-reveal] elements (e.g. after route change).
// Slight delay ensures the new page's DOM has painted before we measure it.
export function refreshScrollReveal(root = document) {
  requestAnimationFrame(() => {
    initScrollReveal(root);
  });
}