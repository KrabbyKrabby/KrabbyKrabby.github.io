const navToggle = document.querySelector(".site-nav__toggle");
const navList = document.querySelector(".site-nav__list");
const yearTarget = document.querySelector("#year");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isExpanded));
    navList.classList.toggle("is-open");
  });

  navList.addEventListener("click", (event) => {
    if (
      event.target instanceof HTMLAnchorElement &&
      event.target.getAttribute("href")?.startsWith("#")
    ) {
      navToggle.setAttribute("aria-expanded", "false");
      navList.classList.remove("is-open");
    }
  });
}

if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}

