const url = 'https://thronesapi.com/api/v2/Characters';

// retrieve throne data as array of json object
const getData = function getData() {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data));
  });
};
