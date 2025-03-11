// js/script.js
"strict";

document.addEventListener("DOMContentLoaded", () => {
  // Event listener for the "Get Started" button in the navbar
  const navBtn = document.querySelector(".nav__btn");
  if (navBtn) {
    navBtn.addEventListener("click", () => {
      alert("Welcome to SkillBridge! Let's get started.");
    });
  }

  // Example: Event listener for a CTA button (e.g., "Get Started Now" in the CTA section)
  const ctaBtn = document.querySelector(".btn--light");
  if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
      console.log("CTA button clicked.");
      // You could add navigation or further interactive logic here.
    });
  }

  // Mobile Menu Toggle (optional)
  // If you decide to include a mobile menu toggle button in your HTML with the class "nav__toggle"
  const navToggle = document.querySelector(".nav__toggle");
  const navMenu = document.querySelector(".nav__menu");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // Additional functionality can be added here (e.g., form validations, dynamic content loading, etc.)
});
