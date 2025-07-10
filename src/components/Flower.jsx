import React, { useState, useRef } from 'react';

const Flower = ({ id, initialX, initialY, color, size }) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const flowerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = flowerRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const newX = e.clientX - dragOffset.x;
    const newY = e.clientY - dragOffset.y;
    
    // Keep flower within viewport bounds
    const maxX = window.innerWidth - 80;
    const maxY = window.innerHeight - 80;
    
    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY))
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Add event listeners to window for smooth dragging
  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  const flowerStyles = {
    position: 'absolute',
    left: position.x,
    top: position.y,
    cursor: isDragging ? 'grabbing' : 'grab',
    transform: isDragging ? 'scale(1.1)' : 'scale(1)',
    transition: isDragging ? 'none' : 'transform 0.2s ease',
    zIndex: isDragging ? 1000 : 5,
    userSelect: 'none',
    touchAction: 'none'
  };

  return (
    <div
      ref={flowerRef}
      style={flowerStyles}
      onMouseDown={handleMouseDown}
      className={`flower flower-${color} flower-${size}`}
    >
      <div className="flower-center"></div>
      <div className="petals">
        <div className="petal petal-1"></div>
        <div className="petal petal-2"></div>
        <div className="petal petal-3"></div>
        <div className="petal petal-4"></div>
        <div className="petal petal-5"></div>
        <div className="petal petal-6"></div>
        <div className="petal petal-7"></div>
        <div className="petal petal-8"></div>
      </div>
    </div>
  );
};

export default Flower; 