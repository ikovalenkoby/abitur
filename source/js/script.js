"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const menuBtns = document.querySelectorAll(".menu__btn"),
    menuBlocks = document.querySelectorAll(".menu__mobile-block");

  function hiddenMenuBlocks() {
    menuBtns.forEach((btn) => {
      btn.querySelector(".menu__img").classList.remove("menu__img--active");
    });
    menuBlocks.forEach((block) => {
      block.classList.remove("show");
      block.classList.add("hidden");
    });
  }

  menuBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      if (menuBlocks[i].classList.contains("show")) {
        hiddenMenuBlocks();
        console.log("remove");
      } else {
        hiddenMenuBlocks();
        console.log("add");
        menuBtns[i]
          .querySelector(".menu__img")
          .classList.add("menu__img--active");
        menuBlocks[i].classList.add("show");
        menuBlocks[i].classList.remove("hidden");
      }
    });
  });
});
