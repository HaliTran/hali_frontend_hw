const bodyElem = document.querySelector('body');
const button = document.getElementById('button');
const intervalInput = document.getElementById('interval');
let repeatingColor = true;
let intervalID;

const changeBackground = function changeBackgroundColor() {
  const redColor = Math.floor(Math.random() * 256);
  const greenColor = Math.floor(Math.random() * 256);
  const blueColor = Math.floor(Math.random() * 256);
  const alpha = Math.random();

  bodyElem.style.backgroundColor = `rgba(${redColor},${greenColor},${blueColor},${alpha})`;
};

const repeatChangeBackground = function repeatChangeBackgroundColor() {
  const { value } = intervalInput;
  const interval = value * 1000;
  intervalID = setInterval(changeBackground, interval);
};

window.addEventListener('load', () => {
  bodyElem.style.backgroundColor = 'green';
  repeatChangeBackground();
});

button.addEventListener('click', () => {
  if (repeatingColor) {
    repeatingColor = false;
    button.setAttribute('class', 'btn btn-primary');
    button.innerText = 'Start';
    clearInterval(intervalID);
  } else {
    repeatingColor = true;
    button.setAttribute('class', 'btn btn-danger');
    button.innerText = 'Stop';
    repeatChangeBackground();
  }
});
