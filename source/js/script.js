"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const menuBtns = document.querySelectorAll(".menu__btn"),
    menuBlocks = document.querySelectorAll(".menu__mobile-block"),
    greyButtons = document.querySelectorAll(".grey-button"),
    greybuttonBlocks = document.querySelectorAll(".grey-button__block"),
    popup = document.querySelector(".popup"),
    popupClose = popup.querySelector(".popup__close"),
    popupOpenBtn = document.querySelector(".header__links");

  //Mobile
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
      } else {
        hiddenMenuBlocks();
        menuBtns[i]
          .querySelector(".menu__img")
          .classList.add("menu__img--active");
        menuBlocks[i].classList.add("show");
        menuBlocks[i].classList.remove("hidden");
      }
    });
  });

  //grey-button blocks
  function hiddenBlocks() {
    greyButtons.forEach((btn) => {
      btn.classList.remove("grey-button--active");
    });
    greybuttonBlocks.forEach((block) => {
      block.classList.remove("show");
      block.classList.add("hidden");
    });
  }

  greyButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      if (greybuttonBlocks[i].classList.contains("show")) {
        hiddenBlocks();
      } else {
        hiddenBlocks();
        greyButtons[i].classList.add("grey-button--active");
        greybuttonBlocks[i].classList.add("show");
        greybuttonBlocks[i].classList.remove("hidden");
      }
    });
  });

  //popup
  function openPopup() {
    popup.classList.remove("hidden__opacity");
    popup.classList.add("show__opacity");
    document.body.style.overflow = "hidden";
  }

  function closePopup() {
    popup.classList.remove("show__opacity");
    popup.classList.add("hidden__opacity");
    document.body.style.overflow = "";
  }

  popupOpenBtn.addEventListener("click", openPopup);
  popupClose.addEventListener("click", closePopup);
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      closePopup();
    }
  });
});
