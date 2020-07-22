'use strict';

// input
const input = document.querySelector('.roof__search-item');
const checker = document.querySelector('#search-activator');

input.addEventListener('focus', () => {
  checker.checked = true;
});

input.addEventListener('blur', () => {
  checker.checked = false;
});

// slider
let slideId = 1;

const sliderActivator = document.querySelector('.slider__dots');

sliderActivator.addEventListener('click', (ev) => {
  const sliderItems = [...document.querySelectorAll('.slider__item')]
  const targetDot = event.target;
  const sliderItemsId = targetDot.id.split('sliderDot_')[1];

  slideId = sliderItemsId - 1;

  if (targetDot.className.indexOf('slider__dot') !== -1) {

    for (const dot of [...sliderActivator.children]) {
      const check = (dot === targetDot);

      if (!check) {
        dot.className = 'slider__dot';
      }

      if (dot === targetDot) {
        dot.className = 'slider__dot slider__dot_active';
      }

    }

    for (const item of sliderItems) {
      item.className = `slider__item slider__item_active-${sliderItemsId}`;
    }
  }
});

setInterval(() => {
  const sliderItems = [...document.querySelectorAll('.slider__item')];
  const sliderDots = [...document.querySelectorAll('.slider__dot')];

  if (slideId > 2) {slideId = 0}

  for (const item of sliderItems) {
    item.className = `slider__item slider__item_active-${slideId + 1}`;
  }

  for (let i = 0; i < sliderDots.length; i++) {
    if (i !== slideId) {

      sliderDots[i].className = 'slider__dot';
    }

    if (i === slideId) {
      sliderDots[i].className = 'slider__dot slider__dot_active';
    }
  }

  slideId++;

}, 5000);
