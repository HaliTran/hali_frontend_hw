const pattern = document.querySelector('input');
const text = document.getElementById('given-text');
const addSpace = text.innerText.replaceAll(',', ' ,').replace('—', ' — ');
const textArray = addSpace.split(' ');

const checkPattern = function checkMatchingPattern() {
  const { value } = pattern;
  let textToReplace = [];

  for (let i = 0; i < textArray.length; ++i) {
    if (value === textArray[i]) {
      textToReplace[i] = `<span class="bg-success">${value}</span>`;
    } else {
      textToReplace[i] = textArray[i];
    }
  }

  textToReplace = textToReplace.join(' ');
  textToReplace = textToReplace.replaceAll(' , ', ', ').replaceAll(' — ', '—');
  text.innerHTML = textToReplace;
};

pattern.addEventListener('keyup', checkPattern);
