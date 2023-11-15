import React from 'react'
import { useSpring, animated } from 'react-spring';
import "./Mlandacard.css"

const Mlandacard = () => {

 const [hovered, setHovered] = React.useState(false);

  // Define the animation properties for the top card
  const topCardProps = useSpring({
    transform: hovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: hovered ? '0px 4px 8px rgba(0, 0, 0, 0.2)' : '0px 2px 4px rgba(0, 0, 0, 0.2)',
  });

  return (
    <div className="mlcard-stack">
      <div
        className="mlcard mlbottom-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* <h2>Bottom Card</h2>
        <p>This is the bottom card.</p> */}
      </div>
      <animated.div
        className="mlcard mltop-card"
        style={topCardProps}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* <h2>Top Card</h2>
        <p>This is the top card.</p> */}
      </animated.div>
    </div>
  );
}

export default Mlandacard