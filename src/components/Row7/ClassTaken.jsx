import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ClassTaken = () => {
  const data = {
    labels: ['VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'], // Class levels
    datasets: [
      {
        label: 'Classes',
        data: [9, 8, 9, 9, 9, 8, 9], // Classes data
        backgroundColor: '#FF8C00', // Orange color
        borderRadius: 5, // Rounded corners
        barPercentage: 0.5, // Adjust bar width
      },
      {
        label: 'Taken',
        data: [7, 8, 6, 7, 8, 8, 8], // Taken data
        backgroundColor: '#32CD32', // Green color
        borderRadius: 5, // Rounded corners
        barPercentage: 0.5, // Adjust bar width
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          usePointStyle: true,
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 10, // Set y-axis max to 10
        ticks: {
          stepSize: 1,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Allows flexibility in container size
  };

  return (
    <div style={{ width: '100%',height:"80%" }}>
      <h3 style={{ fontWeight: 'bold', fontSize: '16px', color: '#333', marginBottom: '1rem' }}>Class Taken</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ClassTaken;
