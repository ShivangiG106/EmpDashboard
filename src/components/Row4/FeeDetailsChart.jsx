import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Title } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Title);

const FeeDetailsChart = () => {
  const data = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Total Fees',
        data: [45, 40, 45, 40,44], // Sample data in Lakh (to match expected higher range)
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        tension: 0.4,
        pointBackgroundColor: 'blue',
      },
      {
        label: 'Total Collection',
        data: [55, 59, 50, 52, 54],
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 0, 0.1)',
        tension: 0.4,
        pointBackgroundColor: 'green',
      },
      {
        label: 'Outstanding Fee',
        data: [25, 22, 20, 23, 21],
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        tension: 0.4,
        pointBackgroundColor: 'red',
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
        max: 60, // Set y-axis maximum to 100 Lakh
        ticks: {
          stepSize: 20, // Adjust y-axis ticks to better fit the data range
          callback: function (value) {
            return value + ' Lk';
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to fit within the container
  };

  return (
    <div style={{ width: '100%', maxWidth: '900px', height: '300px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <h3 style={{ fontWeight: 'bold', fontSize: '16px', color: '#333', margin: 0 }}>Fee Details</h3>
        <select style={{ padding: '5px 10px', fontSize: '14px', borderRadius: '15px',width:"20%", border: '1px solid #ddd', outline: 'none', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)' }}>

          <option>Select Class</option>
          <option>Class 1</option>
          <option>Class 2</option>
          <option>Class 3</option>
          {/* Add more classes as needed */}
        </select>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default FeeDetailsChart;
