import React from "react";

const TimeTable = () => {
  // Dummy data for timetable entries
  const timetableEntries = [
    {
      time: "09:10 AM - 10:24 AM",
      className: "Hindi Class",
      details: "7th Class",
    },
    {
      time: "10:40 AM - 11:30 AM",
      className: "Hindi Class",
      details: "5th Class",
    },
    {
      time: "11:40 AM - 12:15 PM",
      className: "Hindi Class",
      details: "Meeting",
    },
    {
      time: "12:30 PM - 01:15 PM",
      className: "Math Class",
      details: "8th Class",
    },
    {
      time: "01:30 PM - 02:15 PM",
      className: "Science Class",
      details: "9th Class",
    },
    {
      time: "02:30 PM - 03:15 PM",
      className: "English Class",
      details: "10th Class",
    },
    {
      time: "03:30 PM - 04:15 PM",
      className: "History Class",
      details: "6th Class",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
  
            {/* Dropdown and Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
      <h3 style={{ fontWeight: 'bold', fontSize: '16px', color: '#333', marginBottom: '1rem' }}>Timetable</h3>

        <select style={{ padding: '5px 10px', fontSize: '14px', borderRadius: '15px',width:"35%", border: '1px solid #ddd', outline: 'none', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)' }}>
          <option>Faculty 1</option>
          <option>Faculty 2</option>
          <option>Faculty 3</option>
          <option>Faculty 4</option>
        </select>
      </div>

      <div
        style={{
          overflowY: "auto",
          maxHeight: "160px",
          scrollbarWidth: "thin", // For Firefox
          scrollbarColor: "#ccc #f8f8f8", // For Firefox
        }}
      >
        {timetableEntries.map((entry, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.75rem 1rem",
              marginBottom: "1rem",
              color: index % 2 === 0 ? "#666" : "#1d4ed8",
              borderRadius: "8px",
              // boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",

            }}
          >
            <span style={{ fontSize: "12px" }}>{entry.time}</span>
            <span style={{ fontSize: "12px" }}>
              {entry.className} / {entry.details}
            </span>
          </div>
        ))}
      </div>

      {/* Inline scrollbar styling for webkit browsers */}
      <style>
        {`
          /* For webkit browsers */
          div::-webkit-scrollbar {
            width: 6px;
          }
          div::-webkit-scrollbar-track {
            background: #f8f8f8;
          }
          div::-webkit-scrollbar-thumb {
            background-color: #ccc;
            border-radius: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default TimeTable;
