import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img6 from '../../../images/inprogress.png';
import { collection, query, getDocs } from "firebase/firestore"; // Import Firestore functions
import { db } from '../../../firebase/firebase'; // Import your Firebase config
import './dashcards.css';

const Active = () => {
  const [isHovered, setHovered] = useState(false);
  const [userCount, setUserCount] = useState("...");

  const toggleHover = () => {
    setHovered(!isHovered);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  // Use useEffect to fetch and update the user count
  useEffect(() => {
    const fetchUserCount = async () => {
      const q = query(collection(db, "serviced"));
      const querySnapshot = await getDocs(q);
      setUserCount(querySnapshot.size);
    };

    fetchUserCount();
  }, []);

  return (
    <div>
      <div
        className={`admin_dashcard ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <p>Active Plans</p>
        <img src={img6} alt="logo" />
        <p className='admin_dashboard_paragraph'>{userCount}</p>
        {isHovered && (
          <Link onClick={scrollToTop} to="/activeplans" className='ton tin ton-tin'>View all active plans</Link>
        )}
      </div>
    </div>
  );
};

export default Active;
