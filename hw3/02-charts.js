const backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

const borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
];

// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';
let throneHouses;
let throneHousesCharacterNum;

const getThroneData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const storeThroneData = async () => {
  const data = await getThroneData();
  throneHouses = data.map((character) => character.family);

  throneHouses = [...new Set(throneHouses)].filter((character) => {
    return character && character.includes('House');
  });

  throneHousesCharacterNum = throneHouses.map(() => 0);
  data.forEach((character) => {
    const familyIdx = throneHouses.indexOf(character.family);
    if (familyIdx !== -1) {
      throneHousesCharacterNum[familyIdx] += 1;
    }
  });
};

const renderChart = (xValues, yValues) => {
  const donutChart = document.querySelector('.donut-chart');

  new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: xValues,
      datasets: [
        {
          label: 'Game of Thrones Houses',
          data: yValues,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
  });
};

const createThroneChart = async () => {
  await storeThroneData();
  renderChart(throneHouses, throneHousesCharacterNum);
};

createThroneChart();
