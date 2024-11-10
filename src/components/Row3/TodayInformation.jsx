import React from 'react';
import './TodayInformation.css';

const TodayInformation = () => {
  // Dummy data array
  const infoItems = [
    { count: 42, label: 'Today Fee Collection' },
    { count: '06', label: 'Today Employee Absent' },
    { count: 48, label: 'Today Student Absent' },
    { count: 75, label: 'Today Follow up, Emails Sent' },
  ];

  return (
    <div className="today-info-container">
      {/* <h3 className="today-info-title">Today's Information</h3> */}
      <h3 style={{ fontWeight: 'bold', fontSize: '16px', color: '#333', marginBottom: '1rem' }}>Today's Information</h3>

      {infoItems.map((item, index) => (
        <div key={index} className="info-item">
          <span className="info-count">{item.count}</span>
          <span className="divider">|</span>
          <span className="info-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default TodayInformation;
