(function () {
  "use strict";
  // --- Theme (light / dark) ---
  const THEME_KEY = "portfolio-theme";
  const root = document.documentElement;

  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }

  function setTheme(theme) {
    if (theme !== "light" && theme !== "dark") return;

    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {}

    updateParticles(theme);
  }

  function initTheme() {
    const stored = getStoredTheme();
    setTheme(stored === "light" || stored === "dark" ? stored : "dark");
  }

  function toggleTheme() {
    const current = root.getAttribute("data-theme") || "dark";
    setTheme(current === "dark" ? "light" : "dark");
  }

  // --- Update particles for theme ---
  function updateParticles(theme) {
    if (!window.pJSDom || window.pJSDom.length === 0) return;
    const pJS = window.pJSDom[0].pJS;

    if (theme === "dark") {
      pJS.particles.color.value = "#fdf9ec";
      pJS.particles.size.value = 11;
      pJS.particles.size.random = true;
    } else {
      pJS.particles.color.value = "#f7f3f5";
      pJS.particles.size.value = 23;
      pJS.particles.size.random = true;
    }

    for (let i = 0; i < pJS.particles.array.length; i++) {
      const p = pJS.particles.array[i];
      p.radius = pJS.particles.size.random
        ? Math.random() * pJS.particles.size.value
        : pJS.particles.size.value;
    }

    pJS.fn.particlesDraw();
  }

  initTheme();

  // Theme toggle button
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  // --- Current year in footer ---
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- Mobile nav toggle ---
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("is-open");
      navToggle.setAttribute(
        "aria-expanded",
        navLinks.classList.contains("is-open"),
      );
    });
  }

  // --- Copy email button ---
  const copyEmailBtn = document.getElementById("copyEmailBtn");
  const copyFeedback = document.getElementById("copyFeedback");
  const email = "thiri.jewel.14@gmail.com";

  if (copyEmailBtn && copyFeedback) {
    copyEmailBtn.addEventListener("click", function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(
          function () {
            copyFeedback.textContent = "Email copied to clipboard!";
            setTimeout(() => (copyFeedback.textContent = ""), 2500);
          },
          function () {
            copyFeedback.textContent = "Could not copy. Email: " + email;
          },
        );
      } else {
        copyFeedback.textContent = "Email: " + email;
      }
    });
  }

  // --- Close mobile menu on link click ---
  if (navLinks) {
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        if (navToggle) navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // --- Smooth scroll for contact button ---
  const contactBtn = document.getElementById("contactBtn");
  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
  }
  const tags = [
    "Product Management",
    "ML Engineer",
    "Data Science",
    "Software Engineering",
    "Data & Business Analysis",
  ];

  let tagIndex = 0;
  const taglineElement = document.getElementById("rotatingTagline");

  function rotateTagline() {
    taglineElement.classList.remove("fade-slide-in");
    taglineElement.classList.add("fade-slide-out");

    setTimeout(() => {
      tagIndex = (tagIndex + 1) % tags.length;
      taglineElement.textContent = tags[tagIndex];
      taglineElement.classList.remove("fade-slide-out");
      taglineElement.classList.add("fade-slide-in");
    }, 800);
  }

  taglineElement.textContent = tags[tagIndex];
  taglineElement.classList.add("fade-slide-in");
  setInterval(rotateTagline, 2000);

  // About cards animation
  const aboutCards = document.querySelectorAll(".about-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 120);
        }
      });
    },
    { threshold: 0.5 },
  );

  aboutCards.forEach((card) => observer.observe(card));
})();
