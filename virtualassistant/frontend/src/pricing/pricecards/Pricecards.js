import React, { useState } from 'react';
import './Pricecards.css';
import Webplan from './Webplan';
import Servicecard from '../../services/servicecard';

const Pricecards = () => {

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
        <a onClick={showOriginal} className='butprice'>Offshore Plan</a>
        <a onClick={showExtra} className='butprice'>Web Plan</a>
      </div>
      <div className={`cardpricem ${!showOriginalContent ? 'expanded' : ''}`}>
        <div>
          {showOriginalContent
            ? <Servicecard/>
            : <Servicecard />}
        </div>
      </div>
    </div>
  );
}

export default Pricecards