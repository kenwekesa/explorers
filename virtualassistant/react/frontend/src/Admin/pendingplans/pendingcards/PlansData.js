import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import apply from '../../../images/vaco.jpg';
import { db } from '../../../firebase/firebase';
import { useNavigate } from 'react-router-dom';

const PendingData = ({ isOpen, onClose, id, service, plan, period, cost, status, language, roleRequirements, roleTitle, timezone, assistants, updateStatus }) => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState({ message: '', isSuccess: false });

  const handleTakeRole = async () => {
    try {
      // Update the status to "active" in Firestore using the ID prop
      const docRef = doc(db, 'serviced', id);
      await updateDoc(docRef, { status: 'active' });

      // Call the parent component's updateStatus function (if needed)
      if (updateStatus) {
        updateStatus('active');
      }

      // Set the success notification
      setNotification({ message: 'Role taken successfully', isSuccess: true });

      // Close the current dialog
      // onClose();
      navigate("/mydashboard");
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
              <p>${plan} / month</p>
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
              <p>${cost}</p>
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
                <button className="ton tin ton-tin" onClick={handleTakeRole}>
                  Assign Plan
                </button>
                <button className="ton tin ton-tin" onClick={handleTakeRole}>
                  Cancel Plan
                </button>
                <button className="ton tin ton-tin" onClick={handleTakeRole}>
                  Assign Bids
                </button>
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

export default PendingData