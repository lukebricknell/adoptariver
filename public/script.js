"use strict";
const phoneMenu = document.querySelector("#phone-menu");
const menuButton = document.querySelector("#menu-btn");
const creditCard = document.querySelector("#credit-card");
const creditCardBtn = document.querySelector("#credit-card-btn");
const zapperBtn = document.querySelector("#zapper-btn");
const zapperWindow = document.querySelector("#zapper-window");

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
  if (!zapperWindow.classList.contains("hidden")) {
    zapperWindow.classList.add("hidden");
  }
  if (creditCard.classList.contains("hidden"))
    creditCard.classList.remove("hidden");
});

overlay.addEventListener("click", function () {
  if (!creditCard.classList.contains("hidden")) {
    creditCard.classList.add("hidden");
  }
});

zapperBtn.addEventListener("click", function () {
  if (!creditCard.classList.contains("hidden")) {
    creditCard.classList.add("hidden");
  }
  if (zapperWindow.classList.contains("hidden")) {
    zapperWindow.classList.remove("hidden");
  } else if (!zapperWindow.classList.contains("hidden")) {
    zapperWindow.classList.add("hidden");
  }
});

overlay.addEventListener("click", function () {
  if (!zapperWindow.classList.contains("hidden")) {
    zapperWindow.classList.add("hidden");
  }
});

// WATER SAMPLING

const waterSampling = document.getElementById("water-sampling");
const waterSamplingOpen = document.getElementById("open-water-sampling");
const waterSamplingExit = document.getElementById("exit-water-sampling");

waterSamplingOpen.addEventListener("click", function () {
  if (waterSampling.classList.contains("hidden")) {
    waterSampling.classList.remove("hidden");
  }
});

waterSamplingExit.addEventListener("click", function () {
  if (!waterSampling.classList.contains("hidden")) {
    waterSampling.classList.add("hidden");
  }
});

document.getElementById("year").innerHTML = new Date().getFullYear();
