const url = 'https://thronesapi.com/api/v2/Characters';
const container = document.getElementById('container');

const getData = () => {
  return new Promise((resolve) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('There was an error fetching the data.');
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => console.error(error));
  });
};

const createElements = () => {
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
