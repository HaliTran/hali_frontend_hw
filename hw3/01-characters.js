const url = 'https://thronesapi.com/api/v2/Characters';
const container = document.getElementById('container');

const getData = function getData() {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data));
  });
};

const createElements = function createThroneElements() {
  const throneElement = getData();
  throneElement.then((data) => {
    data.forEach((element) => {
      const parentElement = document.createElement('div');
      const imgElement = document.createElement('img');
      const nameElement = document.createElement('h4');
      const titleElement = document.createElement('h5');

      imgElement.src = element.imageUrl;
      imgElement.setAttribute(
        'alt',
        `photo of GOT character ${element.fullName}`
      );

      nameElement.innerText = element.fullName;
      titleElement.innerText = element.title;

      parentElement.appendChild(imgElement);
      parentElement.appendChild(nameElement);
      parentElement.appendChild(titleElement);

      container.appendChild(parentElement);
    });
  });
};

createElements();
