const bodyElem = document.querySelector('body');
const button = document.getElementById('button');
const intervalInput = document.getElementById('interval');

const changeBackground = function changeBackgroundColor() {
  let redColor = Math.floor(Math.random() * 256);
  let greenColor = Math.floor(Math.random() * 256);
  let blueColor = Math.floor(Math.random() * 256);
  let alpha = Math.random();

  bodyElem.style.backgroundColor = `rgba(${redColor},${greenColor},${blueColor},${alpha})`;
};

const repeatChangeBackground = function repeatChangeBackgroundColor() {
  const { value } = intervalInput;
  const interval = value * 1000;
  setInterval(changeBackground, interval);
};

window.addEventListener('load', () => {
  bodyElem.style.backgroundColor = 'green';
  repeatChangeBackground();
});
