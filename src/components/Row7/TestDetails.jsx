import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import data labels plugin

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const TestDetails = () => {
  const data = {
    labels: ['Practical', 'Challenge', 'Class Test', 'Competition'],
    datasets: [
      {
        data: [34, 26, 22, 18], // Percentage values for each category
        backgroundColor: ['#194eca', '#15cae0', '#1dbf1d', '#e7e716'],
        hoverBackgroundColor: ['#194eca', '#15cae0', '#1dbf1d', '#e7e716'],
        borderWidth: 0,
        // borderColor: '#FFFFFF',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'left',
        labels: {
          usePointStyle: true,
          font: {
            size: 10,
          },
          padding: 20,
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
      datalabels: {
        color: '#FFFFFF',
        font: {
          weight: 'bold',
          size: 16,
        },
        formatter: (value, context) => `${value}%`, // Display percentages directly on the chart
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    cutout: '50%', // Adjust for a more donut-like appearance
  };

  return (
    <div style={{ width: '100%', height: '80%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>

      <h3 style={{ fontWeight: 'bold', fontSize: '16px', color: '#333', marginBottom: '1rem' }}>Test Details</h3>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default TestDetails;
