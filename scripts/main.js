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
  // clickChange
let slideId = 1;
const sliderActivator = document.querySelector('.slider__dots');

sliderActivator.addEventListener('click', (ev) => {
  const sliderItems = [...document.querySelectorAll('.slider__item')]
  const targetDot = ev.target;
  const sliderItemsId = targetDot.id.split('sliderDot_')[1];

  if (targetDot.id.indexOf('sliderDot_') !== -1) {

    slideId = sliderItemsId - 1;

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

  // intervalChange
setInterval(() => {
  const sliderItems = [...document.querySelectorAll('.slider__item')];
  const miniSliderItems = [...document.querySelectorAll('.mini-slider__item')];
  const sliderDots = [...document.querySelectorAll('.slider__dot')];

  if (slideId > 2) {slideId = 0}

  for (const item of sliderItems) {
    item.className = `slider__item slider__item_active-${slideId + 1}`;
  }

  for (const item of miniSliderItems) {
    item.className = `
      mini-slider__item mini-slider__item_active-${slideId + 1}
    `;
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

// Responds
const slideResponds = document.querySelector('.respond');
const respondCardsBlock = document.querySelector('.respond__cards');
const respondCards = [...respondCardsBlock.children];
const distanceDifference = 400;
const rightBtn = document.querySelector('.respond__slide_right');
const leftBtn = document.querySelector('.respond__slide_left');
let distanceCurrent = 0;

if (respondCards.length <= 3) {leftBtn.style = 'display: none'}
respondCardsBlock.style = `width: ${respondCards.length * 100}%`;

slideResponds.addEventListener('click', (ev) => {
  const btnHide = (current) => {
    const hiddenCardsLength = distanceDifference
    * ((respondCards.length - 3) - (respondCards.length - 3) * 2);

    current >= 0
      ? (rightBtn.style = 'display: none')
      : (rightBtn.style = 'display: block');

    current <= hiddenCardsLength
      ? (leftBtn.style = 'display: none')
      : (leftBtn.style = 'display: block');
  };

  if (ev.target.classList.contains('respond__slide')) {
    // rightBtn
    if (ev.target === rightBtn) {
      distanceCurrent += distanceDifference;
      btnHide(distanceCurrent);
    }

    // leftBtn
    if (ev.target === leftBtn) {
      distanceCurrent -= distanceDifference;
      btnHide(distanceCurrent);
    }

    for (const card of respondCards) {
      card.style = `left: ${distanceCurrent}px `;
    }
  }
});

// fixed navigation
document.addEventListener('scroll', () => {
  const navigations = [
    ...document.querySelector('.fixed-navigation__list').children,
  ];

  const sections = {
    headerTop: [document.querySelector('#header'), 0],
    testsTop: [document.querySelector('#tests'), 1],
    benefitsTop: [document.querySelector('#benefits'), 2],
    hworksTop: [document.querySelector('#hworks'), 3],
    aboutTop: [document.querySelector('#about'), 4],
    reviewsTop: [document.querySelector('#reviews'), 5],
    joinTop: [document.querySelector('#join'), 6],
  };

  for (const sectionUnit in sections) {
    const distance = Math.floor(
      (sections[sectionUnit][0].offsetTop)
        - (document.documentElement.scrollTop)
    );

    if (distance > -100 && distance < 100) {
      navigations[sections[sectionUnit][1]]
        .classList.add('fixed-navigation__element_active');

      for (const i of navigations) {
        if (i !== navigations[sections[sectionUnit][1]]) {
          i.classList.remove('fixed-navigation__element_active');
        }
      }
    }
  }
});

let rotate = false;
let deg = 180;

document
  .querySelector('.fixed-navigation__show')
  .addEventListener('click', (ev) => {
    if (rotate === false) {
      ev.target.style = `transform: rotate(${deg}deg)`;
      rotate = true;
      deg += 180;
    }

    else {
      ev.target.style = `transform: rotate(${deg}deg)`;
      rotate = false;
      deg += 180;
    }
  });
