"use strict";

let counterValue = 0;
let span = document.querySelector("#value");

const decrement = document.querySelector("[data-action='decrement']");
decrement.addEventListener("click", () => {
  span.textContent = --counterValue;
  console.log(counterValue);
});

const increment = document.querySelector("[data-action='increment']");
increment.addEventListener("click", () => {
  span.textContent = ++counterValue;
  console.log(counterValue);
});
