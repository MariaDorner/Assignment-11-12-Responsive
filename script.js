"use strict";
const btn = document.querySelector(".btn-dots");
const mobile = document.querySelectorAll(".mobile");

const showLinks = function () {
  for (let i = 0; i < mobile.length; i++) {
    if (!mobile[i].classList.contains("hidden")) {
      mobile[i].classList.add("hidden");
    } else {
      mobile[i].classList.remove("hidden");
    }
  }
};

btn.addEventListener("click", showLinks);
