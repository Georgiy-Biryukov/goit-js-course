import service from './services/apiService';
import imageCard from '../templates/imageCard.hbs';
// import * as basicLightbox from 'basiclightbox';

const refs = {
  searchForm: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.form-button'),
};

function searchInputHandler(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const input = form.elements.query;

  clearList();
  service.resetPage();
  service.searchQuery = input.value;
  service.fetchGallery().then(hits => {
    const markup = buildListTemplate(hits);
    insertList(markup);
  });
  input.value = '';
}

function loadMoreBtnHandler() {
  service.fetchGallery().then(hits => {
    const markup = buildListTemplate(hits);
    insertList(markup);

    if (refs.gallery.children.length > 0) {
      window.scrollBy(0, -window.innerHeight);
    }
  });
}

function insertList(items) {
  refs.gallery.insertAdjacentHTML('beforeend', items);
}

function buildListTemplate(items) {
  return imageCard(items);
}

function clearList() {
  refs.gallery.innerHTML = '';
}

// -------------- модальное окно ----------------
// function createModal(img) {
//   const instance = basicLightbox.create(`
//     <img src="${img}" width="800" height="600">
//   `);
//   instance.show();
// }

// function openModal({ target }) {
//   if (target.nodeName !== 'photo-card') {
//     return;
//   }
//   const largeImageURL = target.dataset.source;

//   const instance = basicLightbox.create(`
//   <img src="${largeImageURL}" width="800" height="600">
// `);
//   instance.show();
//   createModal(largeImageURL);
// }
// refs.gallery.addEventListener('click', openModal);

refs.searchForm.addEventListener('submit', searchInputHandler);
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);
