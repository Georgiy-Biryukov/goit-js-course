"use strict";

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  output.textContent = event.target.value;
  if (event.target.value === "") {
    output.textContent = "незнакомец";
  }
});
