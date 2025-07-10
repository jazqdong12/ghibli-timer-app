import React, { useState } from 'react';
import Flower from './Flower';

const FlowerGarden = () => {
  const [flowers, setFlowers] = useState([
    { id: 1, x: 100, y: 150, color: 'pink', size: 'small' },
    { id: 2, x: 300, y: 200, color: 'purple', size: 'medium' },
    { id: 3, x: 500, y: 100, color: 'yellow', size: 'large' },
    { id: 4, x: 200, y: 400, color: 'blue', size: 'small' },
    { id: 5, x: 600, y: 350, color: 'pink', size: 'medium' },
  ]);

  const addFlower = () => {
    const colors = ['pink', 'purple', 'yellow', 'blue', 'white'];
    const sizes = ['small', 'medium', 'large'];
    
    const newFlower = {
      id: Date.now(),
      x: Math.random() * (window.innerWidth - 100),
      y: Math.random() * (window.innerHeight - 100),
      color: colors[Math.floor(Math.random() * colors.length)],
      size: sizes[Math.floor(Math.random() * sizes.length)]
    };
    
    setFlowers([...flowers, newFlower]);
  };

  return (
    <div className="flower-garden">
      {flowers.map(flower => (
        <Flower
          key={flower.id}
          id={flower.id}
          initialX={flower.x}
          initialY={flower.y}
          color={flower.color}
          size={flower.size}
        />
      ))}
      
      <button 
        className="add-flower-btn"
        onClick={addFlower}
        title="Add a new flower"
      >
        🌸
      </button>
    </div>
  );
};

export default FlowerGarden; 