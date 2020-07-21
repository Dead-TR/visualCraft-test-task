'use strict';

const input = document.querySelector('.roof__search-item');
const checker = document.querySelector('#search-activator');

input.addEventListener('focus', () => {
  checker.checked = true;
});

input.addEventListener('blur', () => {
  checker.checked = false;
});
