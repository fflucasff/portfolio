// Ano automático no rodapé
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const prefersReducedMotion =
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// 1) Animação inicial do HERO com Anime.js
function runHeroIntro() {
  if (prefersReducedMotion || typeof anime === "undefined") return;

  const targets = [
    ".hero-tag",
    ".hero-title",
    ".hero-subtitle",
    ".hero-actions",
    ".hero-badges",
    ".hero-micro",
    ".hero-photo",
    ".hero-mini-cards .mini-card",
  ];

  anime
    .timeline({
      easing: "easeOutExpo",
    })
    .add({
      targets,
      opacity: [0, 1],
      translateY: [18, 0],
      delay: anime.stagger(90),
      duration: 750,
    });
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const message = document.getElementById("message")?.value.trim() || "";

    const textLines = [];

    textLines.push(`Olá, aqui é ${name || "um interessado"} falando via site da LFF Industries.`);
    if (email) {
      textLines.push(`E-mail: ${email}`);
    }
    if (message) {
      textLines.push("");
      textLines.push("Contexto do projeto:");
      textLines.push(message);
    }

    const finalText = encodeURIComponent(textLines.join("\n"));
    const whatsappUrl = `https://wa.me/5535991796968?text=${finalText}`;

    window.open(whatsappUrl, "_blank");
  });
}


// 2) Reveal on scroll
function setupReveal() {
  const revealElements = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        el.classList.add("is-visible");

        if (!prefersReducedMotion && typeof anime !== "undefined") {
          anime({
            targets: el,
            opacity: [0, 1],
            translateY: [22, 0],
            duration: 650,
            easing: "easeOutCubic",
          });
        }

        obs.unobserve(el);
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((el) => observer.observe(el));
}

// 3) Tilt em cards e elementos marcados
function setupTilt() {
  if (prefersReducedMotion) return;

  const tiltEls = document.querySelectorAll(".tilt");
  tiltEls.forEach((el) => {
    const maxTilt = 8;

    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const rotateY = (x - 0.5) * (maxTilt * 2);
      const rotateX = (0.5 - y) * (maxTilt * 2);

      el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
    }

    function onLeave() {
      el.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
  });
}

// 4) Botões magnéticos
function setupMagneticButtons() {
  if (prefersReducedMotion) return;

  const btns = document.querySelectorAll(".magnetic");
  btns.forEach((btn) => {
    const strength = 12;

    function onMove(e) {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x / strength}px, ${
        y / strength
      }px)`;
    }

    function onLeave() {
      btn.style.transform = "translate(0px, 0px)";
    }

    btn.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", onLeave);
  });
}

// Boot
document.addEventListener("DOMContentLoaded", () => {
  setupReveal();
  setupTilt();
  setupMagneticButtons();
  setupContactForm();
  runHeroIntro();
});

