import React, { useState, useEffect } from 'react';
import TimeZoneClock from './timeZoneClock';

import './timer.css';

const WorldClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time-zone-container">
      <span className="time-zone-container">

      <h1>Clock krishna1</h1>
      <h1>{time}</h1>
      </span>
      <span className="time-zone-container">
      <div>

      <TimeZoneClock />
      </div>
      </span>
    </div>
  );
};

export default WorldClock;
