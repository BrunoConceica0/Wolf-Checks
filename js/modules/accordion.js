export default function initAccordion() {
  const elementDt = document.querySelectorAll("[data-accordion] dt");
  if (elementDt.length) {
    elementDt[0].classList.toggle("active");
    elementDt[0].nextElementSibling.classList.toggle("active");

    elementDt.forEach((list) => {
      list.addEventListener("click", accordionList);
    });

    function accordionList() {
      this.nextElementSibling.classList.toggle("active");
      this.classList.toggle("active");
    }
  }
}
