/*
   reveal.js — Scroll-triggered animations
   Uses IntersectionObserver to add the
   .visible class when elements enter the
   viewport, triggering the CSS transition
   defined in animations.css
*/

(function () {
  "use strict";

  /* 
  Check for browser support 
  */
  if (!("IntersectionObserver" in window)) {
    /* Fallback: just make everything visible */
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          /* Unobserve after reveal — no need to watch it further */
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  /* 
  Observe every element with the .reveal class 
  */
  document.querySelectorAll(".reveal").forEach(function (el) {
    observer.observe(el);
  });

  /*
  Save / wishlist toggle on property cards 
  */
  document.querySelectorAll(".card-save").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      var isSaved = this.classList.toggle("saved");
      this.textContent = isSaved ? "♥" : "♡";
      this.setAttribute(
        "aria-label",
        isSaved ? "Remove from saved" : "Save listing",
      );
    });
  });
})();
