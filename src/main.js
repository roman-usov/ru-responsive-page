const headerToggleEl = document.querySelector(".header__toggle");
const navigationEl = document.querySelector(".navigation");
const headerHamburgerEl = document.querySelector(".header__hamburger");

const openMobileNavMenu = () => {
  navigationEl.classList.remove("navigation_visibility_invisible");
  navigationEl.classList.add("navigation_visibility_visible");
  headerHamburgerEl.classList.add("header__hamburger_opened");
};

const closeMobileNavMenu = () => {
  navigationEl.classList.remove("navigation_visibility_visible");
  navigationEl.classList.add("navigation_visibility_invisible");
  headerHamburgerEl.classList.remove("header__hamburger_opened");
};

headerToggleEl.addEventListener("click", () => {
  const isClosed = navigationEl.classList.contains(
    "navigation_visibility_invisible"
  );
  if (isClosed) {
    openMobileNavMenu();
  } else {
    closeMobileNavMenu();
  }
});

const changeVisibilityOnResize = () => {
  if (window.innerWidth > 977) {
    navigationEl.classList.remove("navigation_visibility_invisible");
    navigationEl.classList.add("navigation_visibility_visible");
  } else {
    navigationEl.classList.add("navigation_visibility_invisible");
    navigationEl.classList.remove("navigation_visibility_visible");
  }
};

window.addEventListener("resize", changeVisibilityOnResize);
