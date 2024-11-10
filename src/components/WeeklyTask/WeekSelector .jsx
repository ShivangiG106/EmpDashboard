import React, { useState } from 'react';

const WeekSelector = () => {
  const [week, setWeek] = useState(1);

  const handlePrevious = () => {
    setWeek((prevWeek) => (prevWeek > 1 ? prevWeek - 1 : prevWeek));
  };

  const handleNext = () => {
    setWeek((prevWeek) => prevWeek + 1);
  };

  return (
    <div style={styles.container}>
      <button onClick={handlePrevious} style={styles.arrowButton}>‹</button>
      <span style={styles.weekLabel}>Week {week}</span>
      <button onClick={handleNext} style={styles.arrowButton}>›</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: '24px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '8px 16px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    color: '#333',
    maxWidth: '120px',
  },
  arrowButton: {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '20px',
    color: '#333',
    cursor: 'pointer',
    padding: '0 8px',
  },
  weekLabel: {
    fontWeight: 'bold',
    margin: '0 8px',
  }
};

export default WeekSelector;
