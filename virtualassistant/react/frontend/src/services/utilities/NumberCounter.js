import React, { useState, useEffect } from 'react';
import "./countdownview.css"

const NumberCounter = ({ targetNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrameId = null;

    const startCounting = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsedTime = timestamp - startTime;
      const progress = elapsedTime / 2000; // 2 seconds duration
      const currentCount = Math.floor(progress * targetNumber);

      setCount(currentCount);

      if (elapsedTime < 2000) {
        animationFrameId = requestAnimationFrame(startCounting);
      }
    };

    animationFrameId = requestAnimationFrame(startCounting);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [targetNumber]);

  return <p className='pcountes'>{count}</p>;
};

export default NumberCounter;
