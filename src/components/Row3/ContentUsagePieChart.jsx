import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import data labels plugin

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const ContentUsagePieChart = () => {
  const data = {
    labels: ['Mp3', 'Mp4', 'HTML5', 'Youtube', 'E-Content'],
    datasets: [
      {
        data: [17, 19, 24, 24, 26], // Percentage values for each category based on Figure 1
        backgroundColor: ['#36A2EB', '#4B51FF', '#FF6384', '#FF3D67', '#4BC0C0'],
        hoverBackgroundColor: ['#5AA3F7', '#6C7AFF', '#FF85A1', '#FF5C80', '#66D4C7'],
        borderWidth: 0,
       
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
        formatter: (value) => `${value}%`, // Display percentages directly on the chart
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    cutout: '10%', // Adjust for a more donut-like appearance
  };

  return (
    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h3 style={{ fontWeight: 'bold', fontSize: '16px', color: '#333', marginBottom: '1rem' }}>Content Usage</h3>
      <Doughnut data={data} options={options} height={null} width={null} />
    </div>
  );
};

export default ContentUsagePieChart;
