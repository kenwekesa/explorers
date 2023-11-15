import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img6 from '../../../images/emails.png';
import { collection, query, getDocs, where, Timestamp, serverTimestamp } from 'firebase/firestore'; // Import Firestore functions, including Timestamp
import { db } from '../../../firebase/firebase'; // Import your Firebase config
import './dashcards.css';

const Emails = () => {
  const [isHovered, setHovered] = useState(false);
  const [userCount, setUserCount] = useState('...');
  const [timestamp, setTimestamp] = useState(null); // State to hold the timestamp

  const toggleHover = () => {
    setHovered(!isHovered);
  };

  const fetchUserCount = async () => {
    if (timestamp) {
      const q = query(
        collection(db, 'contactInfo'),
        where('timestamp', '>', timestamp), // Query data based on timestamp
        where('timestamp', '<=', serverTimestamp()) // Data up to the current time
      );
      const querySnapshot = await getDocs(q);
      setUserCount(querySnapshot.size);
    }
  };

  useEffect(() => {
    fetchUserCount();
    window.scrollTo({
      top: 0,
      // behavior: 'smooth', // Add smooth scrolling behavior
    });
  }, [timestamp]); // Fetch data whenever the timestamp changes

  return (
    <div>
      <div
        className={`admin_dashcard ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <p>New emails</p>
        <img src={img6} alt="logo" />
        <p className="admin_dashboard_paragraph">{userCount}</p>
        {isHovered && (
          <div>
            <Link
              to="/emails"
              className="ton tin ton-tin"
              onClick={() => setTimestamp(Timestamp.now())}
            >
              View all new emails
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Emails;
