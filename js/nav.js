/*
  nav.js
  Handles sticky nav shadow, mobile side panel toggle, and smooth anchor scrolling.
*/

document.addEventListener('DOMContentLoaded', () => {
  const nav      = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav_hamburger');
  const panel    = document.querySelector('.nav_panel');
  const backdrop = document.querySelector('.nav_backdrop');
  const closeBtn = document.querySelector('.nav_panel-close');

  // Add shadow to nav once the user scrolls past the fold
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (hamburger && panel) {
    // Open panel
    hamburger.addEventListener('click', () => {
      openPanel();
    });

    // Close via the X button inside the panel
    if (closeBtn) closeBtn.addEventListener('click', closePanel);

    // Close via backdrop tap
    if (backdrop) backdrop.addEventListener('click', closePanel);

    // Close when a nav link is tapped
    panel.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closePanel);
    });

    // Close on Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closePanel();
    });
  }

  function openPanel() {
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    backdrop.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closePanel() {
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    backdrop.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // Smooth scroll to anchor targets, offset by nav height
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const navHeight = nav ? nav.offsetHeight : 72;
      const targetY = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    });
  });
});