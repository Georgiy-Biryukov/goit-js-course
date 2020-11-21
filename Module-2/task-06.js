"use strict";

let input;
const numbers = [];

do {
  input = prompt('Введите число');

  if (input !== null) {
    if (Number.isNaN(Number(input))) {
      alert("Было введено не число, повторите попытку");
      continue;
  };


  numbers.push(+input);
  }
} while (input !== null);
if (numbers.length) {
  let total = 0;
  for (let number of numbers) {
    total += +number;
  }
console.log(`Общая сумма чисел равна ${total}`);
}