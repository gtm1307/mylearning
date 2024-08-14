import React, { useState } from 'react';
import './ColorBox.css';

const ColorBox = () => {
  const [color, setColor] = useState('');

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a color"
          onChange={handleChange}
          value={color}
        />
      </div>
      <div
        className="color-box"
        style={{
          backgroundColor: color,
        }}
      />
    </div>
  );
};

export default ColorBox;
