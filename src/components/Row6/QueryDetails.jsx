import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import data labels plugin

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const QueryDetails = () => {
  const data = {
    labels: ['Open Query', 'Assign Query', 'Resolve Query', 'Feedback Query'],
    datasets: [
      {
        data: [3, 21, 51, 26], // Percentage values for each category
        backgroundColor: ['#FF3D67', '#FFDD56', '#4BC0C0', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#FFCE56', '#4BC0C0', '#36A2EB'],
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
            size: 12,
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
    cutout: '10%', // Adjust for a more donut-like appearance
  };

  return (
    <div style={{ width: '100%', height: '85%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>

      <h3 style={{ fontWeight: 'bold', fontSize: '16px', color: '#333', marginBottom: '1rem',marginTop: "0.1rem" }}>Query Details</h3>
      <Doughnut data={data} options={options} height={null}/>
    </div>
  );
};

export default QueryDetails;
