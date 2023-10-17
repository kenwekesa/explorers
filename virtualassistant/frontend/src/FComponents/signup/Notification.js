import React from 'react';
import './Notification.css';

const Notification = ({ message, isSuccess }) => {
  return (
    <div className={`notification ${isSuccess ? 'success' : 'error'}`}>
      {message}
    </div>
  );
};

export default Notification;
