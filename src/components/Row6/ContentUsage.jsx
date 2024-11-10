import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Title } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Title);

const ContentUsage = () => {
  const data = {
    labels: [
      '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', 
      '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', 
      '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
    ],
    datasets: [
      {
        label: 'E-Content',
        data: [2, 3, 2.5, 3.5, 2, 3, 3.5, 4, 3, 4.5, 5, 6, 5.5, 5, 6, 7, 6.5, 6, 7.5, 6, 5, 5.5, 4, 4.5, 3.5, 3, 2.5, 3, 2, 2.5, 3],
        borderColor: '#00BFFF',
        backgroundColor: 'rgba(0, 191, 255, 0.1)',
        tension: 0.4,
        pointBackgroundColor: '#00BFFF',
      },
      {
        label: 'YouTube',
        data: [4, 4.5, 5, 5.5, 4, 4.5, 6, 5.5, 5, 6, 7, 8, 7.5, 8.5, 7, 8.5, 8, 7.5, 8.5, 8, 7, 6.5, 5.5, 6, 5.5, 5, 4.5, 4, 3.5, 4.5, 5],
        borderColor: '#FF69B4',
        backgroundColor: 'rgba(255, 105, 180, 0.1)',
        tension: 0.4,
        pointBackgroundColor: '#FF69B4',
      },
      // {
      //   label: 'HTML5',
      //   data: [3, 3.5, 4, 4.5, 3.5, 4, 5, 4.5, 4, 5.5, 6, 7, 6.5, 7.5, 6, 7, 7.5, 7, 7.5, 7, 6.5, 6, 5, 5.5, 4.5, 4, 3.5, 4, 3, 3.5, 4],
      //   borderColor: '#BA55D3',
      //   backgroundColor: 'rgba(186, 85, 211, 0.1)',
      //   tension: 0.4,
      //   pointBackgroundColor: '#BA55D3',
      // },
      // {
      //   label: 'MP4',
      //   data: [6, 6.5, 7, 7.5, 6, 7, 8, 7.5, 7, 8.5, 9, 9.5, 9, 8.5, 9.5, 9, 8.5, 9.5, 8, 9, 8.5, 8, 7, 7.5, 6.5, 6, 5.5, 5, 4.5, 5.5, 6],
      //   borderColor: 'green',
      //   backgroundColor: 'rgba(0, 255, 0, 0.1)',
      //   tension: 0.4,
      //   pointBackgroundColor: 'green',
      // },
      {
        label: 'MP3',
        data: [1, 1.5, 1, 2, 1.5, 2, 1.5, 2.5, 2, 2.5, 3, 2.5, 3, 2.5, 3.5, 3, 2.5, 3, 3.5, 3, 2.5, 2, 1.5, 2.5, 1.5, 1, 1.5, 1, 2, 1.5, 1],
        borderColor: '#87CEFA',
        backgroundColor: 'rgba(135, 206, 250, 0.1)',
        tension: 0.4,
        pointBackgroundColor: '#87CEFA',
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
        max: 9, // Adjust y-axis maximum to 9 hours
        ticks: {
          stepSize: 1, // Set tick intervals for y-axis
          callback: function (value) {
            return value + ' hr';
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Allows the chart to adjust within the container
  };

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <h3 style={{ fontWeight: 'bold', fontSize: '16px', color: '#333', margin: 0 }}>Content Usage</h3>
     
        <select style={{ padding: '5px 10px', fontSize: '14px', borderRadius: '15px',width:"20%", border: '1px solid #ddd', outline: 'none', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)' }}>
        <option>Employee</option>
          <option>Manager</option>
          <option>Admin</option>
        </select>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignContent: "center", padding: "10px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ContentUsage;
