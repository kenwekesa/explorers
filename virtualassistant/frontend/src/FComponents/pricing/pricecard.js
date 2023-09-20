import React, { useState } from 'react';
import './pricecard.css';

const Pricecard = () => {

  const [showOriginalContent, setShowOriginalContent] = useState(true);

  const showOriginal = () => {
    setShowOriginalContent(true);
  };

  const showExtra = () => {
    setShowOriginalContent(false);
  };

  return (
      <div className="card-container">
       <div className="button-container">
        <button onClick={showOriginal}>Web Plan</button>
        <button onClick={showExtra}>Offshore Plan</button>
      </div>
      <div className={`card ${!showOriginalContent ? 'expanded' : ''}`}>
        <h2>Card Title</h2>
        <p>
          {showOriginalContent
            ? 'Card Description'
            : 'Extra Content: This is the additional content of the card.'}
        </p>
      </div>
    </div>
  );
}

export default Pricecard