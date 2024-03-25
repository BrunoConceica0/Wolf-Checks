export default function initModal() {
  const openLogin = document.querySelector("[data-modal='open'] a");
  const modal = document.querySelector("[data-modal='box']");
  const close = document.querySelector("[data-modal='close']");
  const eventUser = ["click", "touchstart", "change"];

  eventUser.forEach((events) => {
    openLogin.addEventListener(events, () => {
      modal.classList.add("active");
    });
  });

  eventUser.forEach((events) => {
    close.addEventListener(events, () => {
      modal.classList.remove("active");
    });
  });
}
