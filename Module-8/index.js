import images from "./gallery-items.js";

const gallery = document.querySelector(".js-gallery");
const lightboxImg = document.querySelector(".lightbox__image");
const lightboxContent = document.querySelector(".lightbox__content");
const lightboxOverlay = document.querySelector(".lightbox__overlay");
const lightbox = document.querySelector(".lightbox");
const closeButton = document.querySelector(
  'button[data-action="close-lightbox"]'
);

const createItem = images.map((image) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const a = document.createElement("a");

  li.classList.add("gallery__item");
  img.classList.add("gallery__image");
  a.classList.add("gallery__link");

  img.setAttribute("src", image.preview);
  img.setAttribute("data-source", image.original);
  img.setAttribute("alt", image.description);
  a.setAttribute("href", image.original);

  a.append(img);
  li.append(a);
  return li;
});

gallery.append(...createItem);

const openModal = ({ target }) => {
  if (target.classList.contains("gallery__image")) {
    event.preventDefault();
    lightboxImg.src = target.dataset.source;
    lightboxImg.alt = target.alt;
    lightbox.classList.add("is-open");
  }
};

const closeModal = () => {
  lightboxImg.src = "";
  lightbox.classList.remove("is-open");
};

function clickOverlay(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

gallery.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
lightboxOverlay.addEventListener("click", clickOverlay);
