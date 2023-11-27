// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import img6 from '../../../images/mymessages.png';
// import { collection, where, query, getDocs } from "firebase/firestore"; // Import Firestore functions
// import { db } from '../../../firebase/firebase'; // Import your Firebase config
// import './clientdashcards.css';

// const Clientmessage = () => {
//   const [isHovered, setHovered] = useState(false);
//   const [userCount, setUserCount] = useState("...");

//   const toggleHover = () => {
//     setHovered(!isHovered);
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       // behavior: 'smooth', // Add smooth scrolling behavior
//     });
//   };

//   // Use useEffect to fetch and update the user count
//   useEffect(() => {
//     const fetchUserCount = async () => {
//       // const q = query(collection(db, "users"), where("usetype", "==", "admin"));
//       const q = query(collection(db, "contactInfo"));
//       const querySnapshot = await getDocs(q);
//       setUserCount(querySnapshot.size);
//     };

//     fetchUserCount();
//   }, []);

//   return (
//     <div>
//       <div
//         className={`client_dashcard ${isHovered ? 'hovered' : ''}`}
//         onMouseEnter={toggleHover}
//         onMouseLeave={toggleHover}
//       >
//         <p>Messages</p>
//         <img src={img6} alt="logo" />
//         <p className='client_dashboard_paragraph'>{userCount}</p>
//         {isHovered && (
//           <Link onClick={scrollToTop} to="/messages" className='ton tin ton-tin'>View new messages</Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Clientmessage;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img6 from '../../../images/mymessages.png';
import { collection, where, query, getDocs } from "firebase/firestore"; // Import Firestore functions
import { db } from '../../../firebase/firebase'; // Import your Firebase config
import './clientdashcards.css';
import { useContext } from 'react';
import { AuthContext } from '../../../contextr/AuthContext';

const Clientmessage = () => {
  const [isHovered, setHovered] = useState(false);
  const [userCount, setUserCount] = useState("...");
  const { state } = useContext(AuthContext);

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
      // Query conversations where the user_id is equal to the current logged-in user's ID (state.user.uid)
      const q = query(collection(db, "conversations"), where('user2Id', '==', state.user.uid));
      const querySnapshot = await getDocs(q);
      setUserCount(querySnapshot.size);
    };

    fetchUserCount();
  }, [state.user.uid]); // Include state.user.uid in the dependency array

  return (
    <div>
      <div
        className={`dashcard ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <p>Messages</p>
        <img src={img6} alt="logo" />
        <p className='client_dashboard_paragraph'>{userCount}</p>
        {isHovered && (
          <Link onClick={scrollToTop} to="/support" className='ton tin ton-tin'>View messages</Link>
        )}
      </div>
    </div>
  );
};

export default Clientmessage;