import { useState, useEffect } from 'react';
// import axios from 'axios';

const WorldClock = () => {
  const [timeZone, setTimeZone] = useState('Asia/Kolkata');
  // const [time, setTime] = useState('');

  useEffect(() => {
    // const fetchTime = async () => {
    //   const response = await axios.get(`http://worldtimeapi.org/api/timezone/${timeZone}`);
    //   setTime(response.data.datetime);
    // };

    // fetchTime();
    // const interval = setInterval(fetchTime, 1000);

    // return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <div>
      <select onChange={(e) => setTimeZone(e.target.value)} value={timeZone}>
        <option value="asia/manila">PST</option>
        <option value="Asia/Kolkata">IST</option>
      </select>
      {/* <p>Current time in {timeZone}: {new Date(time).toLocaleString()}</p> */}
    </div>
  );
};

export default WorldClock;
