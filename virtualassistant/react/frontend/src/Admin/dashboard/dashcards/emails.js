// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import img6 from '../../../images/emails.png';
// import { collection, query, getDocs, doc, where, Timestamp, serverTimestamp } from 'firebase/firestore'; // Import Firestore functions, including Timestamp
// import { db } from '../../../firebase/firebase'; // Import your Firebase config
// import './dashcards.css';

// const Emails = () => {
//   const [isHovered, setHovered] = useState(false);
//   const [userCount, setUserCount] = useState('...');
//   const [timestamp, setTimestamp] = useState(null); // State to hold the timestamp
//   const [newEmailCount, setNewEmailCount] = useState(0); 
//   const [lastFetched, setLastFetched] = useState(null);

//   const toggleHover = () => {
//     setHovered(!isHovered);
//   };

//   // const fetchUserCount = async () => {
//   //   if (timestamp) {
//   //     const q = query(
//   //       collection(db, 'contactInfo'),
//   //       where('timestamp', '>', timestamp), // Query data based on timestamp
//   //       where('timestamp', '<=', serverTimestamp()) // Data up to the current time
//   //     );
//   //     const querySnapshot = await getDocs(q);
//   //     setUserCount(querySnapshot.size);
//   //   }
//   // };

//   // useEffect(() => {
//   //   fetchUserCount();
//   //   window.scrollTo({
//   //     top: 0,
//   //     // behavior: 'smooth', // Add smooth scrolling behavior
//   //   });
//   // }, [timestamp]); // Fetch data whenever the timestamp changes

//   useEffect(() => {
//     const emailsRef = collection(db, 'emails');

//     const q = query(
//       emailsRef,
//       where('timestamp', '>=', lastFetched || 0), 
//       orderBy('timestamp')
//     );

//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       const newEmails = snapshot.docs.filter(doc) => 
//         doc.data().timestamp > (lastFetched || 0)
//       );

//       setNewEmailCount(newEmails.length); 
//     });

//     return unsubscribe;

//   }, [lastFetched]); 

//   return (
//     <div>
//       <div
//         className={`admin_dashcard ${isHovered ? 'hovered' : ''}`}
//         onMouseEnter={toggleHover}
//         onMouseLeave={toggleHover}
//       >
//         <p>New emails</p>
//         <img src={img6} alt="logo" />
//         <p className="admin_dashboard_paragraph">{userCount}</p>
//         {isHovered && (
//           <div>
//             <Link
//               to="/emails"
//               className="ton tin ton-tin"
//               onClick={() => setTimestamp(Timestamp.now())}
//             >
//               View all new emails
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Emails;

// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import { collection, query, getDocs, where, orderBy, doc, onSnapshot } from 'firebase/firestore'; 
// // import { db } from '../../../firebase/firebase';

// // const Emails = () => {
// //   const [userCount, setUserCount] = useState(0);
// //   const [lastDoc, setLastDoc] = useState(null);

// //   useEffect(() => {
// //     const q = query(
// //       collection(db, 'emails'), 
// //       where('timestamp', '>', lastDoc || 0),
// //       orderBy('timestamp', 'asc')
// //     );

// //     const unsubscribe = onSnapshot(q, (snapshot) => {
// //       setUserCount(snapshot.size);
// //       setLastDoc(snapshot.docs[snapshot.size - 1]);
// //     });

// //     return unsubscribe;
// //   }, [lastDoc]);

// //   return (
// //     <div>
// //       <p className="admin_dashboard_paragraph">{userCount}</p>
// //       <Link 
// //         to="/emails"
// //         onClick={() => setLastDoc(doc(db, 'emails', `${Date.now()}`))}  
// //        >
// //         View New Emails
// //       </Link>
// //     </div>
// //   );
// // };

// // export default Emails;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore'; 
// import { db } from '../../../firebase/firebase';
// import img6 from '../../../images/emails.png';
// import './dashcards.css';

// const Emails = () => {
//   const [isHovered, setHovered] = useState(false);
//   const [userCount, setUserCount] = useState('...');
//   const [newEmailCount, setNewEmailCount] = useState(0); 
//   const [lastFetched, setLastFetched] = useState(null);

//   const toggleHover = () => {
//     setHovered(!isHovered);
//   };

//   useEffect(() => {
//     const emailsRef = collection(db, 'emails');

//     const q = query(
//       emailsRef,
//       where('timestamp', '>=', lastFetched || 0), 
//     );

//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       const newEmails = snapshot.docs.filter((doc) => 
//         doc.data().timestamp > (lastFetched || 0)
//       );

//       setUserCount(newEmails.length); 
//     });

//     return unsubscribe;
//   }, [lastFetched]); 

//   return (
//     <div>
//       <div
//         className={`admin_dashcard ${isHovered ? 'hovered' : ''}`}
//         onMouseEnter={toggleHover}
//         onMouseLeave={toggleHover}
//       >
//         <p>New emails</p>
//         {/* Replace img6 with your actual image */}
//         <img src={img6} alt="logo" />
//         <p className="admin_dashboard_paragraph">{userCount}</p>
//         {isHovered && (
//           <div>
//             <Link
//               to="/emails"
//               className="ton tin ton-tin"
//               // onClick={() => setLastFetched(Date.now())}
//             >
//               View all new emails
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Emails;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, query, getDocs } from 'firebase/firestore'; 
import { db } from '../../../firebase/firebase';
import img6 from '../../../images/emails.png';
import './dashcards.css';

const Emails = () => {
  const [isHovered, setHovered] = useState(false);
  const [userCount, setUserCount] = useState('...');
  const [lastFetched, setLastFetched] = useState(null);

  const toggleHover = () => {
    setHovered(!isHovered);
  };

  useEffect(() => {
    const fetchEmailCount = async () => {
      const emailsRef = collection(db, 'emails');
      const q = query(emailsRef);

      try {
        const querySnapshot = await getDocs(q);
        setUserCount(querySnapshot.size);
      } catch (error) {
        console.error('Error fetching email count:', error);
      }
    };

    fetchEmailCount();
  }, []); 

  return (
    <div>
      <div
        className={`admin_dashcard ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <p>New emails</p>
        {/* Replace img6 with your actual image */}
        <img src={img6} alt="logo" />
        <p className="admin_dashboard_paragraph">{userCount}</p>
        {isHovered && (
          <div>
            <Link to="/emails" className="ton tin ton-tin">
              View all emails
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Emails;


