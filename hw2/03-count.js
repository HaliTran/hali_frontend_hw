const pattern = document.querySelector('input');
const text = document.getElementById('given-text');
const addSpace = text.innerText.replaceAll(',', ' ,').replace('—', ' — ');
const textArray = addSpace.split(' ');

const checkPattern = function checkMatchingPattern() {
  const { value } = pattern;
  let textToReplace = textArray.map((word) => {
    return word === value ? `<span class="bg-success">${value}</span>` : word;
  });

  textToReplace = textToReplace.join(' ');
  textToReplace = textToReplace.replaceAll(' , ', ', ').replaceAll(' — ', '—');
  text.innerHTML = textToReplace;
};

pattern.addEventListener('keyup', checkPattern);
