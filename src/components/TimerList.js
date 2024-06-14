import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountdownTimer from './CountdownTimer';
import './timer.css';
const TimerList = () => {
  const [timers, setTimers] = useState([]);
  const [timerName, setTimerName] = useState('');
  const [startTime, setStartTime] = useState(0);

  useEffect(() => {
    const fetchTimers = async () => {
      const response = await axios.get('http://localhost:5000/api/timers');
      setTimers(response.data);
    };

    fetchTimers();
  }, []);

  const addTimer = async () => {
    if (!timerName || !startTime) return alert('Please enter timer name and start time');
    const newTimer = {
      name: timerName,
      duration: startTime,
      isActive: true,
    };
    const response = await axios.post('http://localhost:5000/api/timers', newTimer);
    setTimers([...timers, response.data]);
  };

  const deleteTimer = async (id) => {
    await axios.delete(`http://localhost:5000/api/timers/${id}`);
    setTimers(timers.filter((timer) => timer._id !== id));
  };

  return (
    <div>
      <h1>Countdown Timers</h1>
      <div className="form-container">
      <input
        type="text"
        value={timerName}
        onChange={(e) => setTimerName(e.target.value)}
        placeholder="Timer Name"
      />
      <input
        type="number"
        value={startTime}
        onChange={(e) => setStartTime(Number(e.target.value))}
        placeholder="Start Time (seconds)"
      />
      <button onClick={addTimer}>Add Timer</button>
    </div>
      <div className="grid-container">
      {timers.map((timer) => (
        <CountdownTimer
          key={timer._id}
          initialTime={timer.duration}
          timerName={timer.name}
          onDelete={() => deleteTimer(timer._id)}
        />
      ))}
      </div>
    </div>
  );
};

export default TimerList;
