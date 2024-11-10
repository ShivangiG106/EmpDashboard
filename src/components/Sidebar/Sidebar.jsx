import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  // Dummy data array
  const items = [
    { count: 20, label: 'School' },
    { count: 35, label: 'Course' },
    { count: 36, label: 'Subject' },
    { count: 400, label: 'Video' },
    { count: '3K', label: 'Questions' },
    { count: 360, label: 'e-Material' },
    { count: 112, label: 'Total Class Test' },
    { count: 174, label: 'Total Challenges' },
    { count: 214, label: 'Total Competitions' },
    { count: 120, label: 'Assignments' },
    { count: 112, label: 'Doubt' },
    { count: 120, label: 'Collaboration' },
    { count: 20, label: 'Total Enquiry' },
    { count: 180, label: 'Total Follow up' },
    { count: 110, label: 'Fee Outstanding' },
    { count: 118, label: 'Collected Fees' },
    { count: 120, label: 'Parent Teacher Meet' },
    { count: 112, label: 'Visitor' },
    { count: 120, label: 'Syllabus not Created' },
    { count: 123, label: 'Employee Birthday' },
    { count: 214, label: 'Student Birthday' },
    { count: 20, label: 'Polls' },
    { count: 15, label: 'Workshops' },
    { count: 90, label: 'Events' },
    { count: 85, label: 'Achievements' },
    { count: 50, label: 'Certificates Issued' },
    { count: 70, label: 'PTM Feedback' },
    { count: 250, label: 'Performance Reports' },
    { count: 310, label: 'Monthly Tests' },
    { count: 40, label: 'Awards' },
    { count: 72, label: 'Staff Meetings' },
    { count: 55, label: 'Library Books' },
    { count: 200, label: 'Online Classes' },
   
  ];
  

  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <div key={index} className="sidebar-item">
          <div className="sidebar-circle">{item.count}</div>
          <span className="sidebar-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
