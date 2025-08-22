window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  const main = document.getElementById("main-content");

  setTimeout(() => {
    splash.style.display = "none";
    main.classList.remove("hidden");
  }, 3000); // 3 sec splash screen
});

// Reveal services on scroll
const serviceCards = document.querySelectorAll('.service-card');

const revealOnScroll = () => {
  serviceCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight - 100) {
      card.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
