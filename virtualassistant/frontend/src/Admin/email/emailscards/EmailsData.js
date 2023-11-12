import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import apply from '../../../images/vaco.jpg';
import { db } from '../../../firebase/firebase';
import { useNavigate } from 'react-router-dom';

const EmailsData = ({ isOpen, onClose, id, contact, country, email, firstName, lastName, message, subject, roleTitle, timezone, assistants, updateStatus }) => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState({ message: '', isSuccess: false });

  const handleTakeRole = async () => {
    try {
      // Update the status to "active" in Firestore using the ID prop
      const docRef = doc(db, 'serviced', id);
      await updateDoc(docRef, { status: 'pending' });

      // Call the parent component's updateStatus function (if needed)
      if (updateStatus) {
        updateStatus('pending');
      }

      // Set the success notification
      setNotification({ message: 'Role taken successfully', isSuccess: true });

      // Close the current dialog
      // onClose();
      navigate("/admin_dashboard");
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

   const handleReassignRole = async () => {
    try {
      // Update the status to "active" in Firestore using the ID prop
      const docRef = doc(db, 'serviced', id);
      await updateDoc(docRef, { status: 'pending' });

      // Call the parent component's updateStatus function (if needed)
      if (updateStatus) {
        updateStatus('pending');
      }

      // Set the success notification
      setNotification({ message: 'Role taken successfully', isSuccess: true });

      // Close the current dialog
      // onClose();
      navigate("/admin_dashboard");
    } catch (error) {
      console.error('Error updating document:', error);
    }
   };
  
   const handleCancelRole = async () => {
    try {
      // Update the status to "active" in Firestore using the ID prop
      const docRef = doc(db, 'serviced', id);
      await updateDoc(docRef, { status: 'canceled' });

      // Call the parent component's updateStatus function (if needed)
      if (updateStatus) {
        updateStatus('canceled');
      }

      // Set the success notification
      setNotification({ message: 'Role taken successfully', isSuccess: true });

      // Close the current dialog
      // onClose();
      navigate("/admin_dashboard");
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
              <h5>Email details</h5>
            </div>
            <div className="mynewplan_va_contact_hr">
              <hr></hr>
            </div>
            <div className="mynewplan_va_contact_data">
              <p>Subject:</p>
              <p>{subject}</p>
            </div>
            <div className="mynewplan_va_contact_hr">
              <hr></hr>
            </div>
            <div className="mynewplan_va_contact_data">
              <p>Name:</p>
              <p>{firstName} {lastName }</p>
            </div>
            <div className="mynewplan_va_contact_hr">
              <hr></hr>
            </div>
            <div className="mynewplan_va_contact_data">
              <p>Contact:</p>
              <p>{contact}</p>
            </div>
            <div className="mynewplan_va_contact_hr">
              <hr></hr>
            </div>
            <div className="mynewplan_va_contact_data">
              <p>Country:</p>
              <p>{country}</p>
            </div>
            <div className="mynewplan_va_contact_hr">
              <hr></hr>
            </div>
            <div className="mynewplan_va_contact_data">
              <p>Email:</p>
              <p>{email}</p>
            </div>
          </div>
          <div className="mynewplan_va_data_main_second">
            <div className="mynewplan_va_data_main_document">
              <div className="mynewplan_va_contact_data mynewplan_va_contact_data_paragraph_title">
                <p>Message content</p>
              </div>
              <div className="assistant_va_contact_hr">
                <hr></hr>
              </div>
              <div className="mynewplan_va_contact_data mynewplan_va_contact_data_paragraph_body">
                <p>{message}</p>
              </div>
              <div className="mynewplan_va_contact_data mynewplan_va_contact_data_btn">
                <div>
                </div>
                <button className="ton tin ton-tin" onClick={handleReassignRole}>
                  Reply email
                </button>
                <div>
                </div>
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

export default EmailsData