import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Title } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Title);

const EmployeePresent = () => {
  const data = {
    labels: [
      '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
    ],
    datasets: [
      {
        label: 'Total',
        data: Array(31).fill(85), // Total employees (constant line at 85)
        borderColor: '#36A2EB', // Blue color
        borderWidth: 2,
        backgroundColor: '#36A2EB', // Light blue fill color
        fill: true, // Fill under the line
        tension: 0, // No curve, straight line
      },
      {
        label: 'Present',
        data: [70, 72, 68, 65, 75, 74, 60, 50, 72, 80, 78, 79, 75, 70, 68, 72, 70, 69, 65, 66, 74, 73, 70, 68, 67, 72, 75, 74, 73, 72, 71], // Variable data for Present employees
        borderColor: '#FF8C00', // Orange color
        backgroundColor: '#FF8C00', // Light orange fill color
        borderWidth: 2,
        fill: true, // Fill under the line
        tension: 0.4, // Slight curve for smooth line
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
        max: 85, // Set y-axis max to 85 to match the chart in the image
        ticks: {
          stepSize: 20, // Smaller step size for better granularity
          callback: function(value) {
            return value; // Display y-axis values as-is
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Allows flexibility in container size
  };

  return (
    <div style={{ width: '100%', maxWidth: '600px', height: '250px', margin: '0 auto' }}>
      <h3 style={{ fontWeight: 'bold', fontSize: '16px', color: '#333', marginBottom: '1rem' }}>Employee Present Ratio (Monthly)</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default EmployeePresent;
