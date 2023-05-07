const allMenus = document.querySelectorAll(".mega-menu-mobile li.has-submenu");
const menuIcon = document.querySelector(".mega-menu-mobile .menu-icon");
const closeIcon = document.querySelector(".mega-menu-mobile .close-icon");
const mobileMenu = document.querySelector(".mega-menu-mobile > ul");
const submenuContainers = document.querySelectorAll(
  ".mega-menu-mobile .submenu-container"
);

const removeAllActiveClasses = () => {
  submenuContainers.forEach((s) => {
    s.classList.remove("active");
    s.style.height = "0px";
  });
};

menuIcon.addEventListener("click", () => {
  menuIcon.classList.remove("active");
  closeIcon.classList.add("active");
  mobileMenu.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  closeIcon.classList.remove("active");
  menuIcon.classList.add("active");
  mobileMenu.classList.remove("active");

  removeAllActiveClasses();
});

const displaySubmenu = (submenu) => {
  submenu.classList.toggle("active");

  if (submenu.classList.contains("active")) {
    submenu.style.height = `${submenu.scrollHeight}px`;
    return;
  }

  submenu.style.height = "0px";
};

allMenus.forEach((menu) => {
  menu.addEventListener("click", () => {
    const submenu = menu.querySelector(".submenu-container");
    displaySubmenu(submenu);
  });
});
