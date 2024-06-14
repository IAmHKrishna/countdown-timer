import React, { useState, useEffect } from 'react';
import './timer.css'
const CountdownTimer = ({key, initialTime, timerName, onDelete }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime > 0 ? prevTime - 1 : 0);
      }, 1000);
    }

    if (timeLeft === 0) {
      setIsActive(false);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const handlePauseResume = () => {
    setIsActive(!isActive);
  };

  return (
    <div key={key} className=" timer-card">
      <h2>{timerName}</h2>
      <div>{timeLeft} seconds</div>
      <button onClick={handlePauseResume}>
        {isActive ? 'Pause' : 'Resume'}
      </button>
      <button style={{backgroundColor: 'red'}} onClick={onDelete}>Delete</button>
    </div>
  );
};

export default CountdownTimer;
