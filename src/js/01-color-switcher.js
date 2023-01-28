'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function makeRandomColor(domEl) {
  domEl.style.backgroundColor = getRandomHexColor();
}
const TIMER = 1000;

let intervalId;
const body = document.querySelector('body');
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

stopButton.toggleAttribute('disabled');

startButton.addEventListener('click', e => {
  e.target.toggleAttribute('disabled');
  stopButton.toggleAttribute('disabled');
  intervalId = setInterval(makeRandomColor, TIMER, body);
});

stopButton.addEventListener('click', e => {
  e.target.toggleAttribute('disabled');
  startButton.toggleAttribute('disabled');
  clearInterval(intervalId);
});
