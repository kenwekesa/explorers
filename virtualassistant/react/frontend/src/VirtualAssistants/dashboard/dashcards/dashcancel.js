import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img6 from '../../../images/cancel.png';
import { collection, where, query, getDocs } from "firebase/firestore"; // Import Firestore functions
import { db } from '../../../firebase/firebase'; // Import your Firebase config
import './dashcards.css';
import { useContext } from 'react';
import { AuthContext } from '../../../contextr/AuthContext';

const Dashcancel = () => {
  const [isHovered, setHovered] = useState(false);
  const [userCount, setUserCount] = useState("...");
  const {state} = useContext(AuthContext)

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
      // const q = query(collection(db, "users"), where("usetype", "==", "admin"));
      const q = query(collection(db, "serviced"), where("status", "==", "canceled"), where("user_id", "==", state.user.uid));
      const querySnapshot = await getDocs(q);
      setUserCount(querySnapshot.size);
    };

    fetchUserCount();
  }, []);

  return (
    <div>
      <div
        className={`dashcard ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <p>Canceled orders</p>
        <img src={img6} alt="logo" />
        <p className='client_dashboard_paragraph'>{userCount}</p>
        {isHovered && (
          <Link onClick={scrollToTop} to="/mycanceledorders" className='ton tin ton-tin'>View Canceled orders</Link>
        )}
      </div>
    </div>
  );
};

export default Dashcancel;
