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
import setting from "../../images/settingss.png"
import logout from "../../images/logout.png"
import { db } from '../../firebase/firebase';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { findUser } from '../../services/api/DataApi';
import { useContext } from 'react';
import { AuthContext } from '../../contextr/AuthContext';
import { useNavigate } from 'react-router-dom';
import Clientprofile from '../../pages/profiles/Clientprofile';

const ClientNavbar = () => {
  const [isListVisible, setListVisible] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [totalAmount, setTotalAmount] = useState('...'); // Initial state set to '...'
  const [totalCost, setTotalCost] = useState(0);
  const [totalCanceled, setTotalCanceled] = useState(0);
  const [loading, setLoading] = useState(true); // Loading state
  const {state} = useContext(AuthContext)
  const [currentuser, setCurrentuser] = useState(null)
  const navigate = useNavigate()
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const {dispatch}=useContext(AuthContext)
  const handlelogout=()=>{
    dispatch({type:'LOGOUT'})
    navigate('/login')
  }

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
      const banksCollection = query(collection(db, 'banks'), where("user_id", "==", state.user.uid));
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
      const banksCollection = query(collection(db, 'serviced'), where("user_id", "==", state.user.uid));
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
      const banksCollection = query(collection(db, 'serviced'), where("user_id", "==", state.user.uid));
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
            <p className='adminuser adminuser_logo' >
              <img src={userIcon} loading="lazy" alt="Logo" />
              <span>{currentuser ? `${currentuser.firstname} ${currentuser.lastname}` : '...'}</span>
            </p>
          </div>
          <div className='toggle-nav-btn'>
            {isListVisible && (
              <div className='toggle-nav-btn_body'>
                <p onClick={openDialog} className="toggle-nav-btn_body_main">
                  <img src={setting} alt="" />
                  <span>Profile</span>
                </p>
                <p onClick={handlelogout}  className="toggle-nav-btn_body_main">
                  <img src={logout} alt="" />
                  <span>Logout</span>
                </p>
              </div>
            )}
          </div>
          <Clientprofile
              isOpen={isDialogOpen}
              onClose={closeDialog} 
          />
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
          <Link to="/orderhistory" onClick={scrollToTop} className='adminlink'><p className='adminuser' ><img src={assistants} loading="lazy" alt="Logo" /><span>My Plans</span></p></Link>
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