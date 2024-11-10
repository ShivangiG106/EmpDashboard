import React from 'react';
import WeekSelector from './WeekSelector ';

const WeeklyTaskPanel = () => {
  const weekTasks = [
    { day: '01', status: 'P', tasks: ['🌐', '🧪', '📘', '🟡', '🟢'] },
    { day: '02', status: 'P', tasks: ['🌐', '🧪', '📘', '🟡', '🟢'] },
    { day: '03', status: 'A', tasks: ['🌐', '🧪', '📘'] },
    { day: '04', status: 'P', tasks: ['🌐', '🧪', '📘', '🟡', '🔵'] },
    { day: '05', status: 'P', tasks: ['🌐', '🧪', '📘'] },
    { day: '06', status: 'P', tasks: ['🌐', '🟡', '🔵'] },
    { day: '07', status: 'H', tasks: ['🧪'] },
  ];

  return (
    <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Dropdown and Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' , marginTop: "-0.9rem" }}>
      
      <h3 style={{ fontWeight: 'bold', fontSize: '16px', color: '#333', marginBottom: '1rem' }}>Weekly Task</h3>
    
        <WeekSelector/>
      </div>
      
      {/* Task List */}
      <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
        {weekTasks.map((task, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              // padding:"10px",              
              borderBottom: index !== weekTasks.length - 1 ? '1px solid #e0e0e0' : 'none',
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              marginBottom: '8px',
                justifyContent: 'space-between',
               alignItems: 'center'
            }}
          >
            {/* Day and Status */}
            <div style={{display:"flex",justifyContent:"flex-start" , alignItems:"flex-start"}}>
            <span style={{ width: '30px', fontWeight: 'bold', color: '#666' }}>{task.day}</span>
            <span style={{ marginRight: '15px', fontWeight: 'bold', color: task.status === 'P' ? 'green' : task.status === 'A' ? 'red' : 'orange' }}>
              {task.status}
            </span>
              </div>
            
            {/* Task Icons */}
            <div style={{ display: 'flex',
               gap: '8px',
                flexWrap: 'wrap' 
            
                }}>
              {task.tasks.map((icon, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '20px',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '50%',
                    marginTop:"10px",
                   marginBottom: '8px',

                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                    color: '#333',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '36px',
                    height: '36px',
                  }}
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyTaskPanel;
