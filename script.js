// This file keeps the page interactive without any libraries.

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Smooth scrolling for navigation links and hero buttons.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start"
    });
  });
});

// Artwork filter buttons.
const filterButtons = document.querySelectorAll(".filter-button");
const artCards = document.querySelectorAll(".art-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((otherButton) => {
      const isSelected = otherButton === button;
      otherButton.classList.toggle("is-active", isSelected);
      otherButton.setAttribute("aria-pressed", String(isSelected));
    });

    artCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.hidden = !shouldShow;
    });
  });
});

// Show a pretty fallback when a sample artwork image has not been added yet.
document.querySelectorAll(".art-image").forEach((image) => {
  const markMissing = () => {
    image.classList.add("is-missing");
    image.closest(".art-image-frame").classList.add("missing-image");
  };

  image.addEventListener("error", markMissing);

  if (image.complete && image.naturalWidth === 0) {
    markMissing();
  }
});

// Back-to-top button.
const backToTopButton = document.querySelector(".back-to-top");

const updateBackToTopButton = () => {
  backToTopButton.classList.toggle("is-visible", window.scrollY > 420);
};

window.addEventListener("scroll", updateBackToTopButton, { passive: true });
updateBackToTopButton();

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion ? "auto" : "smooth"
  });
});
