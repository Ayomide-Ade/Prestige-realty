/*
  nav.js
  Handles sticky nav shadow, mobile drawer toggle, and smooth anchor scrolling.
*/

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const hamburger = document.querySelector(".nav_hamburger");
  const drawer = document.querySelector(".nav_drawer");

  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (hamburger && drawer) {
    hamburger.addEventListener("click", () => {
      const isOpen = hamburger.classList.toggle("open");
      drawer.classList.toggle("open", isOpen);
      hamburger.setAttribute("aria-expanded", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    drawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => closeDrawer());
    });

    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !drawer.contains(e.target)) {
        closeDrawer();
      }
    });
  }

  function closeDrawer() {
    hamburger.classList.remove("open");
    drawer.classList.remove("open");
    hamburger.setAttribute("aria-expanded", false);
    document.body.style.overflow = "";
  }

  // Smooth scroll to anchor targets, offset by nav height
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const navHeight = nav ? nav.offsetHeight : 72;
      const targetY =
        target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    });
  });
});
