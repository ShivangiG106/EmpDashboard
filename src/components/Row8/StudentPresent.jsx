import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Title } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Title);

const StudentPresent = () => {
  const data = {
    labels: [
      '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
    ],
    datasets: [
      {
        label: 'Total',
        data: [800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800], // Total students (constant line at 800)
        borderColor: '#36A2EB', // Blue color
        borderWidth: 2,
        backgroundColor: '#36A2EB', //  blue fill color
        fill: true, // Line without filling
        tension: 0, // No curve, straight line
      },
      {
        label: 'Present',
        data: [600, 580, 100, 180, 550, 590, 110, 170, 530, 600, 560, 120, 580, 500, 590, 530, 150, 600, 540, 110, 570, 520, 590, 100, 560, 580, 150, 600, 530, 120, 590], // Updated Present data

        borderColor: '#FF8C00', // Orange color
        borderWidth: 2,
        backgroundColor: '#FF8C00', //  blue fill color
        fill: true, // Line without filling
        tension: 0, // No curve, straight line
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
          padding: 20,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 800, // Set y-axis max to 800
        ticks: {
          stepSize: 200,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Allows flexibility in container size
  };

  return (
    <div style={{ width: '100%', maxWidth: '600px', height: '250px', margin: '0 auto' }}>
      <h3 style={{ fontWeight: 'bold', fontSize: '16px', color: '#333', marginBottom: '1rem' }}>Student Present Ratio (Monthly)</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default StudentPresent;
