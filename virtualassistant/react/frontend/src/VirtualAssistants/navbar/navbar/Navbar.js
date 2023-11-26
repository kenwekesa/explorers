import React from 'react'
import "./Navbar.css"
import headset from "../../../images/headset.png"
import user from "../../../images/users.png"
import wallet from "../../../images/wallets.png"
import dashboard from "../../../images/dashboard.png"
import message from "../../../images/customer.png"
import cash from "../../../images/cash.png"
import clients from "../../../images/clients.png"
import pending from "../../../images/pending.png"
import plans from "../../../images/newplans.png"
import admin from "../../../images/admin.png"
import help from "../../../images/help.png"
import { Link } from 'react-router-dom'
import setting from "../../../images/settingss.png"
import logout  from "../../../images/logout.png"
import { useState} from 'react'
import { db } from '../../../firebase/firebase';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { useEffect } from 'react'
import { findUser } from '../../../services/api/DataApi'
import { useContext } from 'react'
import { AuthContext } from '../../../contextr/AuthContext'
import { useNavigate } from 'react-router-dom'
import Assistantprofile from '../../../pages/profiles/Assistantprofile'

const Navbar = () => {
  const { state } = useContext(AuthContext);
  const [currentuser, setCurrentuser] = useState(null);
  const [totalCanceled, setTotalCanceled] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isListVisible, setListVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await findUser(state.user.uid);
      setCurrentuser(res[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [state]);

  const {dispatch}=useContext(AuthContext)
  const handlelogout=()=>{
    dispatch({type:'LOGOUT'})
    navigate('/login')
  }

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

   const toggleListVisibility = () => {
    setListVisible(!isListVisible);
  };

  useEffect(() => {
  const fetchTotalCanceled = async () => {
    try {
      const { user } = state;
      const userId = user.uid;
      const q = query(collection(db, 'serviced'), where('status', '==', 'completed'));
      const querySnapshot = await getDocs(q);
      let total = 0;

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const { vas, totalCost, assistants } = data;

        if (vas && vas.includes(userId)) {
          const amountString = totalCost;
          const amountFloat = parseFloat(amountString);

          if (!isNaN(amountFloat) && assistants) {
            // Update the total calculation based on the number of assistants
            total += amountFloat / (2 * assistants);
          }
        }
      });

      setTotalCanceled(total);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchTotalCanceled();
}, [state]);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
};

  const totalAmounts = loading ? '...' : totalCanceled;

  return (
    <div className='adminnavbar'>
      <div className='adminnavbartop'>
        <div className="logo">
          <a className='navlogo'>
            <img src={headset} loading="lazy" alt="Logo" />
            VA
          </a>
        </div>
        <div className='adminnavbartopleft'>
          <div className="logo">
            <p className='adminuser'>
              <img src={wallet} loading="lazy" alt="Logo" />
              <span>${totalAmounts}</span>
            </p>
          </div>
          <div className="logo toggle-btn username_logo_main" onClick={toggleListVisibility}>
            <p className='adminuser adminuser_logo' >
              <img src={user} loading="lazy" alt="Logo" />
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
          <Assistantprofile
              isOpen={isDialogOpen}
              onClose={closeDialog} 
          />
        </div>
        </div>
      <div className='virtualassistantnavbarbottom'>
        <div className="logo adminlogo">
          <Link to="/mydashboard" onClick={scrollToTop} className='adminlink'>
            <p className='adminuser'>
              <img src={dashboard} loading="lazy" alt="Logo" />
              <span>Dashboard</span>
            </p>
          </Link>
        </div>
        <div className="logo adminlogo">
          <Link to="/myplans" onClick={scrollToTop} className='adminlink linkalignleft'>
            <p className='adminuser'>
              <img src={plans} loading="lazy" alt="Logo" />
              <span>My orders</span>
            </p>
          </Link>
        </div>
        <div className="logo adminlogo">
          <Link to="/myfunds" onClick={scrollToTop} className='adminlink linkalignleft'>
            <p className='adminuser'>
              <img src={cash} loading="lazy" alt="Logo" />
              <span>My funds</span>
            </p>
          </Link>
        </div>
        <div className="logo adminlogo">
          <Link to="/csupport" onClick={scrollToTop} className='adminlink linkalignleft'>
            <p className='adminuser'>
              <img src={message} loading="lazy" alt="Logo" />
              <span>Support</span>
            </p>
          </Link>
        </div>
        <div className="logo adminlogo">
          <Link to="/cfqas" onClick={scrollToTop} className='adminlink linkalignleft'>
            <p className='adminuser linkalignleft'>
              <img src={help} loading="lazy" alt="Logo" />
              <span>Faqs</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
