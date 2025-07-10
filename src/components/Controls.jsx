import React from 'react';

const Controls = ({ isRunning, onStart, onPause, onReset, time }) => {
  return (
    <div className="controls-container">
      <div className="controls-buttons">
        {!isRunning ? (
          <button 
            className="control-btn start-btn" 
            onClick={onStart}
            disabled={time === 0}
          >
            <span className="btn-icon">▶</span>
            Start
          </button>
        ) : (
          <button 
            className="control-btn pause-btn" 
            onClick={onPause}
          >
            <span className="btn-icon">⏸</span>
            Pause
          </button>
        )}
        
        <button 
          className="control-btn reset-btn" 
          onClick={() => onReset()}
        >
          <span className="btn-icon">🔄</span>
          Reset
        </button>
      </div>
      
      <div className="time-presets">
        <button 
          className="preset-btn" 
          onClick={() => onReset(60)}
        >
          1 min
        </button>
        <button 
          className="preset-btn" 
          onClick={() => onReset(300)}
        >
          5 min
        </button>
        <button 
          className="preset-btn" 
          onClick={() => onReset(600)}
        >
          10 min
        </button>
      </div>
    </div>
  );
};

export default Controls; 