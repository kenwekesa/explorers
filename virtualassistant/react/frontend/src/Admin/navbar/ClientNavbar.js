// import React from 'react'
// import "./Navbar.css"
// import headset from "../../images/headset.png"
// import user from "../../images/users.png"
// import wallet from "../../images/wallets.png"
// import dashboard from "../../images/dashboard.png"
// import message from "../../images/customer.png"
// import assistants from "../../images/orderhistory.png"
// import cash from "../../images/todolist.png"
// import coins from "../../images/coins.png"
// import pending from "../../images/pending.png"
// import plans from "../../images/newplans.png"
// import admin from "../../images/help.png"
// import { Link } from 'react-router-dom'
// import { useState } from 'react'

// const ClientNavbar = () => {
//     // State to track the visibility of the list
//   const [isListVisible, setListVisible] = useState(false);

//     // Function to toggle the list visibility
//   const toggleListVisibility = () => {
//     setListVisible(!isListVisible);
//   };

//    const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       // behavior: 'smooth', // Add smooth scrolling behavior
//     });
//   };

//   return (
//       <div className='adminnavbar'>
//           <div className='adminnavbartop'>
//           <div className="logo">
//             <a className='navlogo'><img src={headset} loading="lazy" alt="Logo" />VA</a>
//               </div>
//             <div className='adminnavbartopleft'>
//             <div className="logo">
//              <p className='adminuser'><img src={wallet} loading="lazy" alt="Logo" /><span>$100.00</span></p>
//               </div>
//           <div className="logo toggle-btn" onClick={toggleListVisibility}>
//             <p className='adminuser' ><img src={user} loading="lazy" alt="Logo" /><span>John Doe</span></p>
//                   </div>
//           <div className='toggle-nav-btn'>
//           {isListVisible && (
//                 <ul>
//                 <li>Item 1</li>
//                 <li>Item 2</li>
//                 <li>Item 3</li>
//                 </ul>
//                       )}
//            </div>
//            </div>    
//           </div>
//           <div className='adminnavbarbottom'>
//             {/* <div className="logo">
//             <p className='adminnavusers' ><img src={user} loading="lazy" alt="Logo" /><span>John Doe</span></p>
//               </div> */}
//             <div className="logo adminlogo">
//             <Link to="/dashboard" onClick={scrollToTop}  className='adminlink'><p className='adminuser' ><img src={dashboard} loading="lazy" alt="Logo" /><span>Dashboard</span></p></Link>
//               </div>
//             <div className="logo adminlogo">
//             <Link to="/newplan" onClick={scrollToTop}  className='adminlink'><p className='adminuser' ><img src={plans} loading="lazy" alt="Logo" /><span>New Plan</span></p></Link>
//               </div>
//             <div className="logo adminlogo">
//             <Link to="/orderhistory" onClick={scrollToTop}  className='adminlink'><p className='adminuser' ><img src={assistants} loading="lazy" alt="Logo" /><span>My Orders</span></p></Link>
//               </div>
//             <div className="logo adminlogo">
//             <Link to="/addfunds" onClick={scrollToTop}  className='adminlink'><p className='adminuser' ><img src={coins} loading="lazy" alt="Logo" /><span>Add Funds</span></p></Link>
//               </div>
//             <div className="logo adminlogo">
//             <Link to="/support" onClick={scrollToTop}  className='adminlink'><p className='adminuser' ><img src={message} loading="lazy" alt="Logo" /><span>Support</span></p></Link>
//               </div>
//             <div className="logo adminlogo">
//             <Link to='/servicelist' onClick={scrollToTop}  className='adminlink'><p className='adminuser' ><img src={cash} loading="lazy" alt="Logo" /><span>Service List</span></p></Link>
//               </div>
//             <div className="logo adminlogo">
//             <Link to="/FAQS" onClick={scrollToTop} className='adminlink'><p className='adminuser adminuserlast' ><img src={admin} loading="lazy" alt="Logo" /><span>Faqs</span></p></Link>
//               </div>
//             {/* <div className="logo adminlogo">
//             <Link to="/updates" className='adminlink'><p className='adminuser' ><img src={pending} loading="lazy" alt="Logo" /><span>Updates</span></p></Link>
//               </div> */}
//               {/* <div className="logo">
//             <p className='adminuser' ><img src={user} loading="lazy" alt="Logo" /><span>John Doe</span></p>
//           </div> */}
//           </div>
//       </div>
//   )
// }

// export default ClientNavbar

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import "./Navbar.css";
import headset from "../../images/headset.png";
import userIcon from "../../images/users.png";
import wallet from "../../images/wallets.png";
import dashboard from "../../images/dashboard.png";
import message from "../../images/customer.png";
import assistants from "../../images/orderhistory.png";
import cash from "../../images/todolist.png";
import coins from "../../images/coins.png";
import plans from "../../images/newplans.png";
import admin from "../../images/help.png";
import { db } from '../../firebase/firebase';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { findUser } from '../../services/api/DataApi';
import { useContext } from 'react';
import { AuthContext } from '../../contextr/AuthContext';

const ClientNavbar = () => {
  const [isListVisible, setListVisible] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [totalAmount, setTotalAmount] = useState('...'); // Initial state set to '...'
  const [totalCost, setTotalCost] = useState(0);
  const [totalCanceled, setTotalCanceled] = useState(0);
  const [loading, setLoading] = useState(true); // Loading state
  const {state} = useContext(AuthContext)
  const [currentuser, setCurrentuser] = useState(null)
  


  const fetchData = async () => {
    
    try{
     console.log(state.user.uid)
   
    const res = await findUser(state.user.uid)
  
    setCurrentuser(res[0])
    console.log(res)
    }
    catch(error)
    {
      console.log(error)
    }
    
  }
  
  useEffect(() => {
    fetchData()
  }, [])


  const toggleListVisibility = () => {
    setListVisible(!isListVisible);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth',
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const banksCollection = collection(db, 'banks');
      const querySnapshot = await getDocs(banksCollection);

      let total = 0;

      querySnapshot.forEach((doc) => {
        const amountString = doc.data().amount;
        const amountFloat = parseFloat(amountString);

        if (!isNaN(amountFloat)) {
          total += amountFloat;
        }
      });

      setTotalAmount(total);
      setLoading(false); // Set loading to false once data is retrieved
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const banksCollection = collection(db, 'serviced');
      const querySnapshot = await getDocs(banksCollection);

      let total = 0;

      querySnapshot.forEach((doc) => {
        const amountString = doc.data().totalCost;
        const amountFloat = parseFloat(amountString);

        if (!isNaN(amountFloat)) {
          total += amountFloat;
        }
      });

      setTotalCost(total);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const banksCollection = collection(db, 'serviced');
      const q = query(banksCollection, where('status', '==', 'canceled'));
      const querySnapshot = await getDocs(q);

      let total = 0;

      querySnapshot.forEach((doc) => {
        const amountString = doc.data().totalCost;
        const amountFloat = parseFloat(amountString);

        if (!isNaN(amountFloat)) {
          total += amountFloat;
        }
      });

      setTotalCanceled(total);
    };

    fetchData();
  }, []);

  const totalAmounts = loading
    ? '...' // Display '...' during the loading period
    : totalAmount - totalCost + totalCanceled;

  return (
    <div className='adminnavbar'>
      <div className='adminnavbartop'>
        <div className="logo">
          <a className='navlogo'><img src={headset} loading="lazy" alt="Logo" />VA</a>
        </div>
        <div className='adminnavbartopleft'>
          <div className="logo">
            <p className='adminuser'><img src={wallet} loading="lazy" alt="Logo" /><span> ${totalAmounts}</span></p>
          </div>
          <div className="logo toggle-btn username_logo_main" onClick={toggleListVisibility}>
            <p className='adminuser' >
              <img src={userIcon} loading="lazy" alt="Logo" />
              <span>{currentuser ? `${currentuser.firstname} ${currentuser.lastname}` : '...'}</span>
            </p>
          </div>
          <div className='toggle-nav-btn'>
            {isListVisible && (
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className='adminnavbarbottom'>
        <div className="logo adminlogo">
          <Link to="/dashboard" onClick={scrollToTop} className='adminlink'><p className='adminuser' ><img src={dashboard} loading="lazy" alt="Logo" /><span>Dashboard</span></p></Link>
        </div>
        <div className="logo adminlogo">
          <Link to="/newplan" onClick={scrollToTop} className='adminlink'><p className='adminuser' ><img src={plans} loading="lazy" alt="Logo" /><span>New Plan</span></p></Link>
        </div>
        <div className="logo adminlogo">
          <Link to="/orderhistory" onClick={scrollToTop} className='adminlink'><p className='adminuser' ><img src={assistants} loading="lazy" alt="Logo" /><span>My Orders</span></p></Link>
        </div>
        <div className="logo adminlogo">
          <Link to="/addfunds" onClick={scrollToTop} className='adminlink'><p className='adminuser' ><img src={coins} loading="lazy" alt="Logo" /><span>Add Funds</span></p></Link>
        </div>
        <div className="logo adminlogo">
          <Link to="/support" onClick={scrollToTop} className='adminlink'><p className='adminuser' ><img src={message} loading="lazy" alt="Logo" /><span>Support</span></p></Link>
        </div>
        <div className="logo adminlogo">
          <Link to='/servicelist' onClick={scrollToTop} className='adminlink'><p className='adminuser' ><img src={cash} loading="lazy" alt="Logo" /><span>Service List</span></p></Link>
        </div>
        <div className="logo adminlogo">
          <Link to="/FAQS" onClick={scrollToTop} className='adminlink'><p className='adminuser adminuserlast' ><img src={admin} loading="lazy" alt="Logo" /><span>Faqs</span></p></Link>
        </div>
      </div>
    </div>
  );
};

export default ClientNavbar;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import "./Navbar.css";
// import headset from "../../images/headset.png";
// import userIcon from "../../images/users.png";
// import wallet from "../../images/wallets.png";
// import dashboard from "../../images/dashboard.png";
// import message from "../../images/customer.png";
// import assistants from "../../images/orderhistory.png";
// import cash from "../../images/todolist.png";
// import coins from "../../images/coins.png";
// import plans from "../../images/newplans.png";
// import admin from "../../images/help.png";
// import { db } from '../../firebase/firebase';
// import { collection, getDocs } from 'firebase/firestore';
// // import Addfirstcard from './Addfirstcard';  // Import Addfirstcard component
// import Addadmincard from '../../pages/addfunds/Addadmincard';
// import Addfirstcard from "../../pages/ad"

// const ClientNavbar = () => {
//   const [isListVisible, setListVisible] = useState(false);
//   const [userDetails, setUserDetails] = useState(null);
//   const [totalAmount, setTotalAmount] = useState(0);

//   const toggleListVisibility = () => {
//     setListVisible(!isListVisible);
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       // behavior: 'smooth',
//     });
//   };

//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in
//         setUserDetails({
//           firstName: user.firstName, // Replace with the actual property name from your Firebase user object
//           lastName: user.lastName,   // Replace with the actual property name from your Firebase user object
//         });
//       } else {
//         // User is signed out
//         setUserDetails(null);
//       }
//     });

//     return () => unsubscribe(); // Cleanup function to unsubscribe from the auth state observer
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       const banksCollection = collection(db, 'banks');
//       const querySnapshot = await getDocs(banksCollection);

//       let total = 0;

//       querySnapshot.forEach((doc) => {
//         // Assuming the 'amount' field is stored as a string
//         const amountString = doc.data().amount;
//         const amountFloat = parseFloat(amountString);

//         if (!isNaN(amountFloat)) {
//           total += amountFloat;
//         }
//       });

//       // Set the total amount in state
//       setTotalAmount(total);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className='adminnavbar'>
//       <div className='adminnavbartop'>
//         <div className="logo">
//           <a className='navlogo'><img src={headset} loading="lazy" alt="Logo" />VA</a>
//         </div>
//         <div className='adminnavbartopleft'>
//           <div className="logo">
//             <p className='adminuser'><img src={wallet} loading="lazy" alt="Logo" /><span> ${totalAmount.toFixed(2)}</span></p>
//           </div>
//           <div className="logo toggle-btn" onClick={toggleListVisibility}>
//             <p className='adminuser' ><img src={userIcon} loading="lazy" alt="Logo" /><span>Joe Bilado</span></p>
//           </div>
//           <div className='toggle-nav-btn'>
//             {isListVisible && (
//               <ul>
//                 <li>Item 1</li>
//                 <li>Item 2</li>
//                 <li>Item 3</li>
//               </ul>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className='adminnavbarbottom'>
//         <div className="logo adminlogo">
//           <Link to="/dashboard" onClick={scrollToTop} className='adminlink'><p className='adminuser' ><img src={dashboard} loading="lazy" alt="Logo" /><span>Dashboard</span></p></Link>
//         </div>
//         <div className="logo adminlogo">
//           <Link to="/newplan" onClick={scrollToTop} className='adminlink'><p className='adminuser' ><img src={plans} loading="lazy" alt="Logo" /><span>New Plan</span></p></Link>
//         </div>
//         <div className="logo adminlogo">
//           <Link to="/orderhistory" onClick={scrollToTop} className='adminlink'><p className='adminuser' ><img src={assistants} loading="lazy" alt="Logo" /><span>My Orders</span></p></Link>
//         </div>
//         <div className="logo adminlogo">
//           <Link to="/addfunds" onClick={scrollToTop} className='adminlink'><p className='adminuser' ><img src={coins} loading="lazy" alt="Logo" /><span>Add Funds</span></p></Link>
//         </div>
//         <div className="logo adminlogo">
//           <Link to="/support" onClick={scrollToTop} className='adminlink'><p className='adminuser' ><img src={message} loading="lazy" alt="Logo" /><span>Support</span></p></Link>
//         </div>
//         <div className="logo adminlogo">
//           <Link to='/servicelist' onClick={scrollToTop} className='adminlink'><p className='adminuser' ><img src={cash} loading="lazy" alt="Logo" /><span>Service List</span></p></Link>
//         </div>
//         <div className="logo adminlogo">
//           <Link to="/FAQS" onClick={scrollToTop} className='adminlink'><p className='adminuser adminuserlast' ><img src={admin} loading="lazy" alt="Logo" /><span>Faqs</span></p></Link>
//         </div>
//         <Addfirstcard totalAmount={totalAmount} /> {/* Pass totalAmount as a prop */}
//       </div>
//     </div>
//   );
// };

// export default ClientNavbar;

