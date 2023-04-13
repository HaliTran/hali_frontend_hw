const elem = document.querySelector('input');
const response = document.getElementById('response');

const isPalindrome = function checkIfPalindrome(input) {
  if (input === input.split('').reverse().join('')) {
    return true;
  }
  return false;
};

const handleInput = function handleUserInput() {
  const { value } = elem;

  if (isNaN(value) || !value) {
    response.innerHTML = '';
  } else if (Number(value) < 0) {
    response.innerHTML = 'Invalid input! Please enter a positive number';
    response.style.color = 'red';
  } else if (isPalindrome(value)) {
    response.innerHTML = 'Yes. This is a palindrome!';
    response.style.color = 'green';
  } else {
    response.innerHTML = 'No. Try again!';
    response.style.color = 'red';
  }
};

elem.addEventListener('input', handleInput);
