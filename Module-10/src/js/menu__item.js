import menuItem from '../templates/menu__item.hbs';
import menuJson from '../menu.json';

const menuRef = document.querySelector('ul.js-menu');
menuRef.insertAdjacentHTML('beforeend', menuItem(menuJson));
