import React from 'react'
import { useState } from 'react';


function Hidediv1() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Toggle Div</button>
      {isVisible && (
        <div style={{ display: 'block' }}>
          This is a hidden div that becomes visible when you click the button.
        </div>
      )}
    </div>
  );
}

export default Hidediv1