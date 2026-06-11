document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".main-nav");

  if (!hamburger || !nav) return;

  hamburger.addEventListener("click", function () {
    nav.classList.toggle("is-open");

    const isOpen = nav.classList.contains("is-open");
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
});