import React, { useState } from 'react'
import "./Signupcard.css"
import { Link } from 'react-router-dom'
import Scounntry from './selection/Scounntry'
import Sservice from './selection/Sservice'
import Shear from './selection/Shear'
import { async } from '@firebase/util'
import { database } from '../../firebase/firebase'
import Notification from './Notification'
import { auth, db } from '../../firebase/firebase'; // Import 'auth' and 'db' from your Firebase configuration
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'


const Signupcard = () => {
 const [termsChecked, setTermsChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    org_name: '',
    contact: '',
    location: '',
    service: '',
    about: '',
    password: '',
    match_password: '',
  });
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState({ message: '', isSuccess: false });
  const [showDialog, setShowDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New loading state

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTermsChange = () => {
    setTermsChecked(!termsChecked);
  };

  const handleLocationChange = (selectedLocation) => {
    setFormData({
      ...formData,
      location: selectedLocation,
    });
  };

  const handleServicesChange = (selectedServices) => {
    setFormData({
      ...formData,
      service: selectedServices,
    });
  };

  const handleAboutChange = (selectedAbout) => {
    setFormData({
      ...formData,
      about: selectedAbout,
    });
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    if (notification.isSuccess) {
      navigate("/login");
      window.scrollTo(0, 0);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.match_password) {
      setError('Passwords do not match.');
      return;
    }

    setIsLoading(true); // Set loading state

    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);

      const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        org_name: formData.org_name,
        contact: formData.contact,
        location: formData.location,
        service: formData.service,
        about: formData.about,
        usertype: 'client', // Set 'usertype' as 'Admin' by default
      };

      await addDoc(collection(db, 'clients'), userData);

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        org_name: '',
        contact: '',
        location: '',
        service: '',
        about: '',
        password: '',
        match_password: '',
      });

      setTermsChecked(false);

      setNotification({ message: `Registration successful and a verification email has been sent to ${formData.email}!`, isSuccess: true });

      setShowDialog(true);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('Email is already in use.');
      } else if (error.code === 'auth/network-request-failed') {
        setError('Check your internet connection and try again.');
      } else if (error.code === 'auth/invalid-email') {
        setError('Incorrect email format.');
      } else {
        setError(`An error occurred: ${error.message}`);
      }
      setShowDialog(true);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };


  return (
   <div className='cardsignupone'>
      <p className='cardmainsip'>All  fields are required</p>
         <form onSubmit={handleRegister}>
            <div className='signcardcontent'>
              <p>First Name <span>(required)</span></p>
              <input type="text" name='firstName' value={formData.firstName} onChange={handleInputChange} className='signcardiinput' required/>
            </div>
            <div className='signcardcontent'>
              <p>Last Name <span>(required)</span></p>
              <input type="text" name='lastName' value={formData.lastName} onChange={handleInputChange}  className='signcardiinput' required/>
            </div>
            <div className='signcardcontent'>
              <p>Email Address <span>(required)</span></p>
              <input type="email" name='email' value={formData.email} onChange={handleInputChange}  className='signcardiinput' required/>
            </div>
            <div className='signcardcontent'>
              <p>Organization's Name <span>(required)</span></p>
              <input type="text" name='org_name' value={formData.org_name} onChange={handleInputChange}  className='signcardiinput' required/>
            </div>
            <div className='signcardcontent'>
              <p>Phone Number <span>(required)</span></p>
              <input name='contact' value={formData.contact} onChange={handleInputChange} type="number" className='signcardiinput' required/>
            </div>
            <div className='signcardcontent'>
              <p>Where are you located ?<span>(required)</span></p>
              {/* <input className='signcardiinput' required/> */}
              <div>
                <Scounntry selectedLocation={formData.location}
                 onChange={handleLocationChange} />
              </div>
            </div>
            <div className='signcardcontent'>
              <p>What services are you most interested in ? <span>(required)</span></p>
              {/* <input className='signcardiinput' required/> */}
              <div>
                  <Sservice selectedServices={formData.service}
                   onChange={handleServicesChange} />
              </div>
            </div>
            <div className='signcardcontent'>
              <p>How did you hear about us <span>(required)</span></p>
              {/* <input className='signcardiinput' required/> */}
              <Shear selectedAbout={formData.about} onChange={handleAboutChange}  />
            </div>
            <div className='signcardcontent'>
              <p>Set account password <span>(required)</span></p>
              <input type="password" name='password' value={formData.password} onChange={handleInputChange} className='signcardiinput' required/>
            </div>
            <div className='signcardcontent'>
              <p>Match account password <span>(required)</span></p>
              <input type="password" name='match_password' value={formData.match_password} onChange={handleInputChange}  className='signcardiinput' required />
              {/* <CountrySelector /> */}
            </div>
            <div className='signcardcontentir'>
              <p> <input type="checkbox" onChange={handleTermsChange} /> By checking this box I agree to the <Link>Terms</Link> and <Link>privacy policy</Link></p>
            </div>
            <div className='signcardsub'>
              <button className='ton tin' type='submit' disabled={!termsChecked}>Submit</button>
           </div>
      </form>
       {isLoading ? (
        <p style={{ color: 'green' }} className="contact_form_paragraph_loading">Registration in progress...</p>
      ) : (
        <div>
          {error && (
            <p className="contact_form_paragraph_error" style={{ color: 'red' }}>
              {error}
            </p>
          )}
          <div className={`dialog ${showDialog ? 'show' : ''}`}>
            <div className="dialog-content">
              <span onClick={handleDialogClose} className="close">
                &times;
              </span>
              <p style={{ color: 'green' }}>{notification.message}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Signupcard