import React, { useState, useEffect, useContext } from 'react';
// import "./ClientsData.css";
import "./Profiles.css"
import apply from "../../images/vmainpage.jpg";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { AuthContext } from '../../contextr/AuthContext';

const Clientprofile = ({ isOpen, onClose }) => {
  const [userData, setUserData] = useState(null);
  const { state } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userQuery = query(collection(db, 'users'), where('user_id', '==', state.user.uid));
        const querySnapshot = await getDocs(userQuery);

        if (!querySnapshot.empty) {
          const user = querySnapshot.docs[0].data();
          setUserData(user);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (isOpen) {
      fetchUserData();
    }
  }, [isOpen, state.user.uid]);

  if (!isOpen || !userData) return null;

  const { firstname, lastname, email, location, org_name, contact } = userData;

  return (
    <div className="dialog-background">
      {/* vadate_dialog-background vadate_dialog-background_profile_main vadate_dialog-background_profile */}
      <div className="dialog-box box_dialog-background">
        <div className='va_data_main_content'>
          <div className='va_data_main_profile va_data_main_profile_main_profile'>
            <div className='client_va_data_image'>
              <img src={apply} alt='profile'/>
            </div>
            <div className='assistant_va_data_paragraph_title'>
            <p>{firstname}’s Profile</p>
            </div>
            <div className='assistant_va_contact_data'>
              <p>Name:</p>
              <p>{firstname} {lastname}</p>
            </div>
            <div className='assistant_va_contact_hr'>
              <hr></hr>
            </div>
            <div className='assistant_va_contact_data'>
              <p>Email:</p>
              <p>{email}</p>
            </div>
            <div className='assistant_va_contact_hr'>
              <hr></hr>
            </div>
            <div className='assistant_va_contact_data'>
              <p>Country:</p>
              <p>{location}</p>
                      </div>
            <div className='assistant_va_contact_hr'>
              <hr></hr>
            </div>
            <div className='assistant_va_contact_data'>
              <p>Organization:</p>
              <p>{org_name}</p>
            </div>
            <div className='assistant_va_contact_hr'>
              <hr></hr>
            </div>
            <div className='assistant_va_contact_data'>
              <p>Contact:</p>
              <p>{contact}</p>
            </div>
            <div className='assistant_va_contact_hr'>
              <hr></hr>
            </div>
          </div>
        </div>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Clientprofile