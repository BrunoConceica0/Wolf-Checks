export default function initMenuMobile() {}
const btn = document.querySelector('[data-menu="button"]');
const lista = document.querySelector('[data-menu="lista"]');

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  lista.classList.toggle("active");
});
