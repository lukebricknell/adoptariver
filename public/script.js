"use strict";
const phoneMenu = document.querySelector("#phone-menu");
const menuButton = document.querySelector("#menu-btn");
const creditCard = document.querySelector("#credit-card");
const creditCardBtn = document.querySelector("#credit-card-btn");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", function () {
  if (phoneMenu.classList.contains("hidden")) {
    phoneMenu.classList.remove("hidden");
    phoneMenu.classList.add("flex");
  } else if (!phoneMenu.classList.contains("hidden")) {
    phoneMenu.classList.remove("flex");
    phoneMenu.classList.add("hidden");
  }
});

document.addEventListener("keydown", function (e) {
  if (!phoneMenu.classList.contains("hidden") && e.key == "Escape") {
    phoneMenu.classList.remove("flex");
    phoneMenu.classList.add("hidden");
  }
});

creditCardBtn.addEventListener("click", function () {
  if (creditCard.classList.contains("hidden")) {
    creditCard.classList.remove("hidden");
  } else if (!creditCard.classList.contains("hidden")) {
    creditCard.classList.add("hidden");
  }
});

overlay.addEventListener("click", function () {
  if (!creditCard.classList.contains("hidden")) {
    creditCard.classList.add("hidden");
  }
});
