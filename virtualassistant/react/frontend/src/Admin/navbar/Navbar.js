// import React from 'react'
// import "./Navbar.css"
// import headset from "../../images/headset.png"
// import user from "../../images/users.png"
// import wallet from "../../images/wallets.png"
// import dashboard from "../../images/dashboard.png"
// import message from "../../images/messages.png"
// import assistants from "../../images/assistants.png"
// import cash from "../../images/cash.png"
// import clients from "../../images/clients.png"
// import pending from "../../images/pending.png"
// import plans from "../../images/newplans.png"
// import admin from "../../images/admin.png"
// import { Link } from 'react-router-dom'
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { useEffect, useState } from 'react'
// import { db } from '../../firebase/firebase';
// import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';

// const Navbar = () => {

//   const [totalAmount, setTotalAmount] = useState(0);
//   const [totalCost, setTotalCost] = useState(0);
//   const [totalCanceled, setTotalCanceled] = useState(0);
//   const [userDetails, setUserDetails] = useState(null);

//    const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       // behavior: 'smooth', // Add smooth scrolling behavior
//     });
//    };
  
//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (users) => {
//       if (users) {
//         // User is signed in
//         setUserDetails({
//           firstName: users.firstname, // Replace with the actual property name from your Firebase user object
//           lastName: users.lastname,   // Replace with the actual property name from your Firebase user object
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
//   }, []); // Empty dependency array, so it runs only once on mount
  
//   useEffect(() => {
//     const fetchData = async () => {
//       const banksCollection = collection(db, 'serviced');
//       const querySnapshot = await getDocs(banksCollection);
//       // const querySnapshot = await getDocs(banksCollection);

//       let total = 0;

//       querySnapshot.forEach((doc) => {
//         // Assuming the 'amount' field is stored as a string
//         const amountString = doc.data().totalCost;
//         const amountFloat = parseFloat(amountString);

//         if (!isNaN(amountFloat)) {
//           total += amountFloat;
//         }
//       });

//       // Set the total amount in state
//       setTotalCost(total);
//     };

//     fetchData();
//   }, []); // Empty dependency array, so it runs only once on mount

 

//   useEffect(() => {
//     const fetchData = async () => {
//       const banksCollection = collection(db, 'serviced');
//       const q = query(banksCollection, where('status', '==', 'canceled'));
//       const querySnapshot = await getDocs(q);
//       // const querySnapshot = await getDocs(banksCollection);

//       let total = 0;

//       querySnapshot.forEach((doc) => {
//         // Assuming the 'amount' field is stored as a string
//         const amountString = doc.data().totalCost;
//         const amountFloat = parseFloat(amountString);

//         if (!isNaN(amountFloat)) {
//           total += amountFloat;
//         }
//       });

//       // Set the total amount in state
//       setTotalCanceled(total);
//     };

//     fetchData();
//   }, []); // Empty dependency array, so it runs only once on mount

//   const totalAmounts = totalAmount - totalCost + totalCanceled;

//   return (
//       <div className='adminnavbar'>
//           <div className='adminnavbartop'>
//           <div className="logo">
//             <a className='navlogo'><img src={headset} loading="lazy" alt="Logo" />VA</a>
//               </div>
//             <div className='adminnavbartopleft'>
//             <div className="logo">
//             <p className='adminuser'><img src={wallet} loading="lazy" alt="Logo" /><span>${totalAmounts}</span></p>
//               </div>
//             <div className="logo">
//             <p className='adminuser' ><img src={user} loading="lazy" alt="Logo" /><span>Benard</span></p>
//           </div>
//            </div>    
//           </div>
//           <div className='adminmainnavbarbottom'>
//             {/* <div className="logo">
//             <p className='adminnavusers' ><img src={user} loading="lazy" alt="Logo" /><span>John Doe</span></p>
//               </div> */}
//             <div className="logo adminlogo">
//             <Link to="/admin_dashboard" onClick={scrollToTop}  className='adminlink'><p className='adminuser' ><img src={dashboard} loading="lazy" alt="Logo" /><span>Dashboard</span></p></Link>
//               </div>
//             <div className="logo adminlogo">
//             <Link to="/clients" onClick={scrollToTop}  className='adminlink'><p className='adminuser' ><img src={clients} loading="lazy" alt="Logo" /><span>Clients</span></p></Link>
//               </div>
//             <div className="logo adminlogo">
//             <Link to="/assistants" onClick={scrollToTop}  className='adminlink'><p className='adminuser' ><img src={assistants} loading="lazy" alt="Logo" /><span>Assistants</span></p></Link>
//               </div>
//             <div className="logo adminlogo">
//             <Link to="/plans" onClick={scrollToTop}  className='adminlink'><p className='adminuser' ><img src={plans} loading="lazy" alt="Logo" /><span>Plans</span></p></Link>
//               </div>
//             <div className="logo adminlogo">
//             <Link to="/messages" onClick={scrollToTop}  className='adminlink'><p className='adminuser' ><img src={message} loading="lazy" alt="Logo" /><span>Messages</span></p></Link>
//               </div>
//             <div className="logo adminlogo">
//             <Link to='/funds' onClick={scrollToTop}  className='adminlink'><p className='adminuser' ><img src={cash} loading="lazy" alt="Logo" /><span>Funds</span></p></Link>
//               </div>
//             <div className="logo adminlogo">
//             <Link to="/register" onClick={scrollToTop}  className='adminlink'><p className='adminuser' ><img src={admin} loading="lazy" alt="Logo" /><span>Register</span></p></Link>
//               </div>
//             <div className="logo adminlogo">
//             <Link to="/updates" onClick={scrollToTop}  className='adminlink'><p className='adminuser' ><img src={pending} loading="lazy" alt="Logo" /><span>Updates</span></p></Link>
//               </div>
//               {/* <div className="logo">
//             <p className='adminuser' ><img src={user} loading="lazy" alt="Logo" /><span>John Doe</span></p>
//           </div> */}
//           </div>
//       </div>
//   )
// }

// export default Navbar

import React from 'react'
import "./Navbar.css"
import headset from "../../images/headset.png"
import user from "../../images/users.png"
import wallet from "../../images/wallets.png"
import dashboard from "../../images/dashboard.png"
import message from "../../images/messages.png"
import assistants from "../../images/assistants.png"
import cash from "../../images/cash.png"
import clients from "../../images/clients.png"
import pending from "../../images/pending.png"
import plans from "../../images/newplans.png"
import admin from "../../images/admin.png"
import { Link } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react'
import { db } from '../../firebase/firebase';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { useContext } from 'react'
import { AuthContext } from '../../contextr/AuthContext'
import { findUser } from '../../services/api/DataApi'

const Navbar = () => {
  const [totalAmount, setTotalAmount] = useState('...'); // Initial state set to '...'
  const [totalCost, setTotalCost] = useState(0);
  const [totalCanceled, setTotalCanceled] = useState(0);
  const [userDetails, setUserDetails] = useState(null);
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth', // Add smooth scrolling behavior
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
        <div className='logo'>
          <a className='navlogo'>
            <img src={headset} loading='lazy' alt='Logo' />
            VA
          </a>
        </div>
        <div className='adminnavbartopleft'>
          <div className='logo'>
            <p className='adminuser'>
              <img src={wallet} loading='lazy' alt='Logo' />
              <span>${totalAmounts}</span>
            </p>
          </div>
          <div className='logo username_logo_main'>
            <p className='adminuser'>
              <img src={user} loading='lazy' alt='Logo' />
              <span>{currentuser ? `${currentuser.firstname} ${currentuser.lastname}` : '...'}</span>
            </p>
          </div>
        </div>
      </div>
        <div className='adminmainnavbarbottom'>
            <div className="logo adminlogo">
            <Link to="/admin_dashboard" onClick={scrollToTop}  className='adminlink'><p className='adminuser' ><img src={dashboard} loading="lazy" alt="Logo" /><span>Dashboard</span></p></Link>
              </div>
            <div className="logo adminlogo">
            <Link to="/clients" onClick={scrollToTop}  className='adminlink'><p className='adminuser' ><img src={clients} loading="lazy" alt="Logo" /><span>Clients</span></p></Link>
              </div>
            <div className="logo adminlogo">
            <Link to="/assistants" onClick={scrollToTop}  className='adminlink'><p className='adminuser' ><img src={assistants} loading="lazy" alt="Logo" /><span>Assistants</span></p></Link>
              </div>
            <div className="logo adminlogo">
            <Link to="/plans" onClick={scrollToTop}  className='adminlink'><p className='adminuser' ><img src={plans} loading="lazy" alt="Logo" /><span>Plans</span></p></Link>
              </div>
            <div className="logo adminlogo">
            <Link to="/messages" onClick={scrollToTop}  className='adminlink'><p className='adminuser' ><img src={message} loading="lazy" alt="Logo" /><span>Messages</span></p></Link>
              </div>
            <div className="logo adminlogo">
            <Link to='/funds' onClick={scrollToTop}  className='adminlink'><p className='adminuser' ><img src={cash} loading="lazy" alt="Logo" /><span>Funds</span></p></Link>
              </div>
            <div className="logo adminlogo">
            <Link to="/register" onClick={scrollToTop}  className='adminlink'><p className='adminuser' ><img src={admin} loading="lazy" alt="Logo" /><span>Register</span></p></Link>
              </div>
            <div className="logo adminlogo">
            <Link to="/updates" onClick={scrollToTop}  className='adminlink'><p className='adminuser' ><img src={pending} loading="lazy" alt="Logo" /><span>Updates</span></p></Link>
              </div>
              {/* <div className="logo">
            <p className='adminuser' ><img src={user} loading="lazy" alt="Logo" /><span>John Doe</span></p>
          </div> */}
          </div>
      </div>
  )
}

export default Navbar
