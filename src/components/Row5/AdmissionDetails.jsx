import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Legend);

const AdmissionDetails = () => {
  const data = {
    labels: ['VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'All Classes Avg'],
    datasets: [
      {
        label: 'Enquiry',
        data: [900, 850, 870, 920, 860, 840, 830, 870],
        backgroundColor: 'blue',
      },
      {
        label: 'Follow',
        data: [700, 650, 670, 720, 660, 640, 630, 670],
        backgroundColor: '#00BFFF', // Light blue color
      },
      {
        label: 'Confirm',
        data: [600, 550, 570, 620, 560, 540, 530, 570],
        backgroundColor: 'red',
      },
      {
        label: 'Admission',
        data: [500, 480, 490, 510, 500, 490, 480, 495],
        backgroundColor: 'orange',
      },
      {
        label: 'Final Students',
        data: [400, 420, 430, 450, 440, 430, 420, 435],
        backgroundColor: 'green',
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
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 1000, // Set maximum value for y-axis to match 999 range
        ticks: {
          stepSize: 200, // y-axis step interval
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to resize within the container
  };

  return (
    <div style={{ width: '100%', maxWidth: '900px', height: '400px', margin: '0 auto' }}>
      <h3 style={{ fontWeight: 'bold', fontSize: '16px', color: '#333', marginBottom: '1rem' }}>Admission Details</h3>
      <div style={{ display: "flex", justifyContent: "center", alignContent: "center", padding: "10px" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default AdmissionDetails;
