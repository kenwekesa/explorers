import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img6 from '../../../images/cashinhand.png';
import { collection, where, query, getDocs } from "firebase/firestore"; // Import Firestore functions
import { db } from '../../../firebase/firebase'; // Import your Firebase config
import './clientdashcards.css';
import { AuthContext } from '../../../contextr/AuthContext';
import { useContext } from 'react';

const ClientAvailableFund = () => {
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
      const q = query(collection(db, "banks"), where("user_id", "==", state.user.uid));
      const querySnapshot = await getDocs(q);
      setUserCount(querySnapshot.size);
    };

    fetchUserCount();
  }, []);

  return (
    <div>
      <div
        className={`client_dashcard ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <p>My transactions</p>
        <img src={img6} alt="logo" />
        <p className='client_dashboard_paragraph'>{userCount}</p>
        {isHovered && (
          <Link onClick={scrollToTop} to="/fund" className='ton tin ton-tin'>View transactions</Link>
        )}
      </div>
    </div>
  );
};

export default ClientAvailableFund;
