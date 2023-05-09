import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import Home from './Home';

Chart.register(ArcElement, Tooltip, Legend);

export default function Houses(prop) {
  const { character } = prop;

  let houses = character.map((character) => character.family);
  houses = [...new Set(houses)].filter((character) => {
    return character && character.includes('House');
  });

  const characterPerHouse = houses.map(() => 0);

  character.forEach((character) => {
    const familyIdx = houses.indexOf(character.family);
    if (familyIdx !== -1) {
      ++characterPerHouse[familyIdx];
    }
  });

  const throneDataObject = {
    labels: houses,
    datasets: [
      {
        label: '# of characters',
        data: characterPerHouse,
        backgroundColor: [
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
        ],
        borderColor: [
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
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    animation: {
      animateRotate: true,
      duration: 1000,
    },
  };

  return (
    <div>
      <Home />
      <h1 className='text-center'>Game of Thrones Houses</h1>
      <Doughnut
        className='w-50 h-50 m-auto'
        data={throneDataObject}
        options={options}
      />
    </div>
  );
}
