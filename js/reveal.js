/*
  reveal.js
  Handles scroll-based reveal animations.

  Elements with the `.reveal` class are observed using IntersectionObserver.
  When they enter the viewport, `.visible` is applied to trigger the CSS transition.
*/

(() => {
  'use strict';

  const revealEls = document.querySelectorAll('.reveal');

  // Respect user preference, skip animation and show elements immediately
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealEls.forEach(el => el.classList.add('visible'));
    return;
  }

  // Fallback for browsers without IntersectionObserver support
  if (!('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting === true) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    // Trigger when ~12% of the element is visible
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  });

  // Observe all elements that should animate on scroll
  revealEls.forEach(el => observer.observe(el));
})();