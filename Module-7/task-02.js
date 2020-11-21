const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

let ul = document.querySelector("#ingredients");

const createList = ingredients.map((ingredient) => {
  let li = document.createElement("li");
  li.textContent = ingredient;
  return li;
});

ul.append(...createList);
