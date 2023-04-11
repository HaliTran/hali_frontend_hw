const elem = document.querySelector('input');
const response = document.getElementById('response');

const handleInput = function isPalindrome() {
  const numAsString = elem.value;

  if (isNaN(numAsString) || !numAsString) {
    response.innerHTML = '';
  } else if (Number(numAsString) < 0) {
    response.innerHTML = 'Invalid input! Please enter a positive number';
    response.style.color = 'red';
  } else if (numAsString === numAsString.split('').reverse().join('')) {
    response.innerHTML = 'Yes. This is a palindrome!';
    response.style.color = 'green';
  } else {
    response.innerHTML = 'No. Try again!';
    response.style.color = 'red';
  }
};

elem.addEventListener('input', handleInput);
