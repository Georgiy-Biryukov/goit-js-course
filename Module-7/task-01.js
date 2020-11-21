document.addEventListener("DOMContentLoaded", () => {
  let category = document.querySelectorAll("li.item");

  console.log(`В списке ${category.length} категории`);

  for (let elem of category) {
    let categ = elem.querySelector("h2").textContent;
    let quantityElem = elem.lastElementChild.children.length;
    console.log(`Категория: ${categ}, количество элементов: ${quantityElem}.`);
  }
});
