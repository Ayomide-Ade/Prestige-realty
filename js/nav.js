/*
NAV.JS — Sticky nav shadow, mobile drawer, smooth scroll
*/

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const hamburger = document.querySelector(".nav_hamburger");
  const drawer = document.querySelector(".nav_drawer");

  /* 
  Scroll shadow 
  */
  function onScroll() {
    if (window.scrollY > 20) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // run once on load

  /* 
  Mobile hamburger toggle 
  */
  if (hamburger && drawer) {
    hamburger.addEventListener("click", () => {
      const isOpen = hamburger.classList.toggle("open");
      drawer.classList.toggle("open", isOpen);
      // Prevent body scroll when drawer is open
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    // Close drawer when a link is clicked
    drawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        drawer.classList.remove("open");
        document.body.style.overflow = "";
      });
    });

    // Close drawer on outside click
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !drawer.contains(e.target)) {
        hamburger.classList.remove("open");
        drawer.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  }

  /* 
  Smooth anchor scroll with nav offset 
  */
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
