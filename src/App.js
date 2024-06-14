import React from 'react';
import TimerList from './components/TimerList';
import WorldClock from './components/WorldClock';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <WorldClock />
      <TimerList />
    </div>
  );
};

export default App;