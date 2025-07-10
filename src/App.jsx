import { useState, useEffect } from 'react'
import Timer from './components/Timer'
import Controls from './components/Controls'
import './App.css'

function App() {
  const [time, setTime] = useState(300); // 5 minutes default
  const [isRunning, setIsRunning] = useState(false);
  const [originalTime, setOriginalTime] = useState(300);

  useEffect(() => {
    let interval = null;
    
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => {
          if (prevTime <= 1) {
            setIsRunning(false);
            // Play a gentle sound or show animation when timer completes
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, time]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = (newTime) => {
    setIsRunning(false);
    const timeToSet = newTime !== undefined ? newTime : originalTime;
    console.log('Resetting timer to:', timeToSet, 'seconds');
    setTime(timeToSet);
    setOriginalTime(timeToSet);
  };

  return (
    <div className="app">
      <div className="ghibli-background">
        <div className="clouds">
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>
        </div>
      </div>
      
      <div className="timer-container">
        <h1 className="app-title">Ghibli Timer</h1>
        <Timer time={time} isRunning={isRunning} />
        <Controls 
          isRunning={isRunning}
          onStart={handleStart}
          onPause={handlePause}
          onReset={handleReset}
          time={time}
        />
      </div>
    </div>
  )
}

export default App
