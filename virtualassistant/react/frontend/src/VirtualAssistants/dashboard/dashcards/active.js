import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img6 from '../../../images/inprogress.png';
import { collection, where, query, getDocs } from "firebase/firestore"; // Import Firestore functions
import { db } from '../../../firebase/firebase'; // Import your Firebase config
import './dashcards.css';
import { useContext } from 'react';
import { AuthContext } from '../../../contextr/AuthContext';

const Active = () => {
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
//  useEffect(() => {
//     const fetchUserCount = async () => {
//       const q = query(collection(db, "serviced"), where("status", "==", "active"), where("user_id", "==", state.user.uid));
//       const querySnapshot = await getDocs(q);
//       setUserCount(querySnapshot.size);
//     };

//     fetchUserCount();
//  }, []);
  
//   useEffect(() => {
//   const fetchData = async () => {
//     setIsLoading(true);

//     try {
//       const q = query(collection(db, 'serviced'), where('status', '==', 'active'));
//       const querySnapshot = await getDocs(q);
//       const items = [];

//       const { user } = state; // Assuming that `state` contains the user information
//       const userId = user.uid;

//       querySnapshot.forEach((doc) => {
//         const data = doc.data();
//         const { vas } = data;

//         if (vas && vas.includes(userId)) {
//           items.push({ id: doc.id, ...data });
//         }
//       });

//       setData(items);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   fetchData();
//  }, [state]);

  useEffect(() => {
  const fetchData = async () => {
    // setIsLoading(true);

    try {
      const q = query(collection(db, 'serviced'), where('status', '==', 'active'));
      const querySnapshot = await getDocs(q);
      const items = [];

      const { user } = state; // Assuming that `state` contains the user information
      const userId = user.uid;

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const { vas } = data;

        if (vas && vas.includes(userId)) {
          items.push({ id: doc.id, ...data });
        }
      });

      // setData(items);
      setUserCount(querySnapshot.size);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      // setIsLoading(false);
    }
  };

  fetchData();
}, [state]);

  return (
    <div>
      <div
        className={`dashcard ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <p>Active orders</p>
        <img src={img6} alt="logo" />
        <p className='client_dashboard_paragraph'>{userCount}</p>
        {isHovered && (
          <Link onClick={scrollToTop} to="/myactiveorders" className='ton tin ton-tin'>View active orders</Link>
        )}
      </div>
    </div>
  );
};

export default Active;
