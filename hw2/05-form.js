const myForm = document.getElementById('myForm');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const { fullName, email, status, extraInfo } = event.target;

  console.log(`Full Name: ${fullName.value}`);
  console.log(`Email: ${email.value}`);
  console.log(`Registration Status: ${status.value}`);
  console.log(`Have you taken any of the following courses?`);

  checkboxes.forEach((checkbox) => {
    const { value } = checkbox;
    if (checkbox.checked) {
      console.log(value);
    }
  });
  console.log(`Anything else: ${extraInfo.value}`);
});
