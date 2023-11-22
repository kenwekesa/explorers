import React, { useState } from 'react';
import './MyNewPlanData.css';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import apply from '../../../images/vaco.jpg';
import { db } from '../../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contextr/AuthContext';

const MyNewPlanData = ({ isOpen, onClose, id, service, plan, period, cost, status, language, roleRequirements, roleTitle, timezone, assistants, updateStatus }) => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState({ message: '', isSuccess: false });
  const { state } = useContext(AuthContext);

  const [bidSuccess, setBidSuccess] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [bidPlaced, setBidPlaced] = useState(false); // New state to track if bid is already placed

  const handleTakeRole = async () => {
    try {
      setButtonClicked(true);

      const docRef = await getDoc(doc(db, 'serviced', id));

      if (docRef.exists()) {
        const bidders = docRef.data().bidders || [];

        if (bidders.includes(state.user.uid)) {
          // Bid already placed
          setBidPlaced(true);
          return;
        }

        const updatedBidders = [...bidders, state.user.uid];

        await updateDoc(docRef.ref, {
          bidders: updatedBidders,
        });

        setNotification({ message: 'Role taken successfully', isSuccess: true });
        setBidSuccess(true);

        setTimeout(() => {
          navigate("/mydashboard");
        }, 3000);
      } else {
        console.error('Document does not exist.');
      }
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  return (
    <div className={`dialog-background vadate_dialog-background ${isOpen ? 'show' : ''}`}>
      <div className="dialog-box box_dialog-background">
        <div className="mynewplan_va_data_main_content">
          <div className="mynewplan_va_data_main_profile">
            <div className="mynewplan_va_data_paragraph_title">
              <h5>Role Details</h5>
            </div>
            <div className="mynewplan_va_contact_hr">
              <hr></hr>
            </div>
            <div className="mynewplan_va_contact_data">
              <p>Service:</p>
              <p>{service}</p>
            </div>
            <div className="mynewplan_va_contact_hr">
              <hr></hr>
            </div>
            <div className="mynewplan_va_contact_data">
              <p>Plan:</p>
              <p>${plan / 2} / month</p>
            </div>
            <div className="mynewplan_va_contact_hr">
              <hr></hr>
            </div>
            <div className="mynewplan_va_contact_data">
              <p>Period:</p>
              <p>{period} months</p>
            </div>
            <div className="mynewplan_va_contact_hr">
              <hr></hr>
            </div>
            <div className="mynewplan_va_contact_data">
              <p>Role Title:</p>
              <p>{roleTitle}</p>
            </div>
            <div className="mynewplan_va_contact_hr">
              <hr></hr>
            </div>
            <div className="mynewplan_va_contact_data">
              <p>Language:</p>
              <p>{language}</p>
            </div>
            <div className="mynewplan_va_contact_hr">
              <hr></hr>
            </div>
            <div className="mynewplan_va_contact_data">
              <p>Time zone:</p>
              <p>{timezone}</p>
            </div>
            <div className="mynewplan_va_contact_hr">
              <hr></hr>
            </div>
            <div className="mynewplan_va_contact_data">
              <p>Total cost:</p>
              <p>${cost / 2}</p>
            </div>
          </div>
          <div className="mynewplan_va_data_main_second">
            <div className="mynewplan_va_data_main_document">
              <div className="mynewplan_va_contact_data mynewplan_va_contact_data_paragraph_title">
                <p>Role requirements</p>
              </div>
              <div className="assistant_va_contact_hr">
                <hr></hr>
              </div>
              <div className="mynewplan_va_contact_data mynewplan_va_contact_data_paragraph_body">
                <p>{roleRequirements}</p>
              </div>
              <div className="mynewplan_va_contact_data mynewplan_va_contact_data_btn">
                <div></div>
                {!bidSuccess && !bidPlaced && (
                  <button className='ton tin ton-tin' onClick={handleTakeRole} disabled={buttonClicked}>
                    Bid for Role
                  </button>
                )}
                {bidPlaced && (
                  <div className="success-message_main ton tin ton-tin">
                    You have already placed a bid.
                  </div>
                )}
                {bidSuccess && (
                  <div className="success-message_main">
                    Bidding successful! You will be notified soon.
                  </div>
                )}
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>


      {notification.isSuccess && (
        <div className="notification">
          <p>{notification.message}</p>
        </div>
      )}
    </div>
  );
};

export default MyNewPlanData;
