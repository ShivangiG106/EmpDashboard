import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Title } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Title);

const SyllabusChart = () => {
  const data = {
    labels: ['VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'],
    datasets: [
      {
        label: 'Total',
        data: [80, 85, 75, 65, 90, 70, 60],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
        tension: 0.4,
        pointBackgroundColor: 'blue',
      },
      {
        label: 'Completed',
        data: [65, 70, 60, 55, 80, 65, 50],
        borderColor: 'green',
        backgroundColor: 'rgba(0, 128, 0, 0.2)',
        tension: 0.4,
        pointBackgroundColor: 'green',
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
        max: 100,
      },
    },
  };

  return (
    <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
      <div style={{marginTop:"1rem"}}>

      <span  style={{
          fontWeight: "bold",
          fontSize: "16px",
          color: "#333",
          
          textAlign: "left",
        }}>Syllabus</span>
      </div>
        <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , marginTop :"1rem" }}>

      <Line data={data} options={options} />
        </div>
    </div>
  );
};

export default SyllabusChart;
