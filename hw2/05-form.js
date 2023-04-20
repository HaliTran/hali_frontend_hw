const myForm = document.getElementById('myForm');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const regStatus = document.getElementById('status');
const info = document.getElementById('extra-info');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

myForm.addEventListener('submit', (event) => {
  event.preventDefault();

  console.log(`Full Name: ${fullName.value}`);
  console.log(`Email: ${email.value}`);
  console.log(`Registration Status: ${regStatus.value}`);
  console.log(`Have you taken any of the following courses?`);

  checkboxes.forEach((checkbox) => {
    const { value } = checkbox;
    if (checkbox.checked) {
      console.log(value);
    }
  });

  console.log(`Anything else: ${info.value}`);
});
