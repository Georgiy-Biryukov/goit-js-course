import fetchCountry from './services/fetchCountries';
import countryListItem from './templates/countryListItem.hbs';
import countryTemplates from './templates/countryTemplates.hbs';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/confirm/dist/PNotifyConfirm.css';
import { info, error, defaults } from '@pnotify/core';

const debounce = require('lodash.debounce');
const refs = {
  searchInput: document.querySelector('.search_input'),
  countryItems: document.querySelector('.country_items'),
  countryInfo: document.querySelector('.country_info'),
};

function clearCountryList() {
  refs.countryItems.innerHTML = '';
  refs.countryItems.classList.remove('hidden-js');
}

function clearCountryInfo() {
  refs.countryInfo.innerHTML = '';
  refs.countryItems.classList.remove('hidden-js');
}

const fetch = debounce(function (search) {
  fetchCountry.fetchCountries(search).then(data => {
    if (data.length > 1 && data.length <= 10) {
      generateCountryList(data);
    } else if (data.length > 10) {
      info({
        text: 'Too many matches found. Please enter a more specific query!',
        delay: 2000,
      });
    } else if (data.status === 404) {
      error({
        text: 'No country has been found. Please enter a more specific query!',
        delay: 2000,
      });
    } else if (data.length === 1) {
      refs.countryItems.classList.add('hidden-js');
      generateCountry(data);
    }
  });
}, 500);

function generateCountryList(countryListArray) {
  const result = countryListArray.map(item => countryListItem(item)).join('');
  refs.countryItems.insertAdjacentHTML('beforeend', result);
}

function generateCountry(countries) {
  const country = countries.map(item => countryTemplates(item)).join('');
  refs.countryInfo.insertAdjacentHTML('beforeend', country);
}

function searchCountry(event) {
  clearCountryInfo();
  clearCountryList();
  const searchValue = event.currentTarget.value;
  if (searchValue === '') {
    return;
  } else {
    fetch(searchValue);
  }
}

refs.searchInput.addEventListener('input', searchCountry);
