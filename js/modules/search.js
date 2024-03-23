export default function initSearch() {
  const searchBox = document.querySelector(".search-box");
  const search = document.querySelector(".search-magnifying");
  const closer = document.querySelector(".closer");
  const eventUser = ["change", "touhstart", "click"];

  eventUser.forEach((events) => {
    search.addEventListener(events, () => {
      searchBox.classList.add("active");
      search.classList.add("active");
    });
  });

  eventUser.forEach((events) => {
    closer.addEventListener(events, () => {
      searchBox.classList.remove("active");
      search.classList.remove("active");
    });
  });
}
