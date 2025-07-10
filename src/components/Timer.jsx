import React from 'react';

const Timer = ({ time, isRunning }) => {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer-display">
      <div className={`timer-digits ${isRunning ? 'running' : ''}`}>
        {formatTime(time)}
      </div>
      <div className="timer-label">
        {isRunning ? 'Time is flowing...' : 'Ready to begin?'}
      </div>
    </div>
  );
};

export default Timer; 