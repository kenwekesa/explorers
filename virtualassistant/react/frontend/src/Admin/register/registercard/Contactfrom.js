import React, { useState } from 'react';
import { auth, db } from '../../../firebase/firebase'; // Import 'auth' and 'db' from your Firebase configuration
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import "./Contacform.css"
import { useNavigate } from 'react-router-dom';
import Sservice from '../selection/Sservice';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    usercontact: '',
    service: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleServicesChange = (selectedServices) => {
    setFormData({
      ...formData,
      service: selectedServices,
    });
  };

  const handleDialogClose = () => {
    setShowDialog(false);

    if (success) {
      // If there's a success message, navigate to "/admin_dashboard"
      navigate('/admin_dashboard');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError(null);
      setIsLoading(true); // Set loading state to true

      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        setIsLoading(false); // Set loading state to false
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);

      const user = userCredential.user;
      // Set the default 'usertype' as 'Admin'
      if (user) {
        const userData = {
          user_id: user.uid,
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          usercontact: formData.usercontact,
          service: formData.service,
          usertype: 'admin', // Set 'usertype' as 'Admin' by default
        };

        // Create a user with email and password
      

        // Save user data to Firestore using addDoc
        const userCollection = collection(db, 'users');
        const docRef = await addDoc(userCollection, userData);

        setSuccess('Account created successfully, the new administrator should proceed and login');
        setShowDialog(true);

        // Clear the form data
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          usercontact: '',
          service: '',
          password: '',
          confirmPassword: '',
        });

        setIsLoading(false); // Set loading state to false
      }
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
      // setShowDialog(true);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className='register_main_contact_form'>
      <div className='register_main_register_form_update'>
       Register an admin
      </div>
      <div className='register_contact_form_outline'>
        <div className='mcontactimg'>
          <div className='register_register_form'>
            <p className='register_contact_form_paragraph'>Provide admin details</p>
            <form onSubmit={handleSubmit}>
              <div className='register_contact_input_field'>
                <input name='firstname' value={formData.firstname} onChange={handleInputChange} placeholder='First name' required type="text" />
              </div>
              <div className='register_contact_input_field'>
                <input name='lastname' value={formData.lastname} onChange={handleInputChange} placeholder='Last name' required type="text" />
              </div>
              <div className='register_contact_input_field'>
                <input name='email' value={formData.email} onChange={handleInputChange} placeholder='Admin email' required type="email" />
              </div>
              <div className='register_contact_input_field'>
                <input name='usercontact' value={formData.usercontact} onChange={handleInputChange} placeholder='Admin contact' required type="number" />
              </div>
              <div className='admin_signcardcontent'>
                <div>
                  <Sservice selectedServices={formData.service} onChange={handleServicesChange} />
                </div>
              </div>
              <div className='register_contact_input_field'>
                <input name='password' value={formData.password} onChange={handleInputChange} placeholder='Admin Password' required type="password" />
              </div>
              <div className='register_contact_input_field'>
                <input name='confirmPassword' value={formData.confirmPassword} onChange={handleInputChange} placeholder='Admin Password' required type="password" />
              </div>
              <div className='register_contact_button'>
                <button className='ton tin admin_contact_form_btn' type="submit" disabled={isLoading}>
                  {isLoading ? 'Submitting...' : 'Submit User'} {/* Change button text */}
                </button>
                {isLoading && <p style={{ color: 'green' }}>Submission in progress</p>} {/* Show loading message */}
              </div>
            </form>
            {error && <p className='contact_form_paragraph_error' style={{ color: 'red' }}>{error}</p>}
            <div className={`dialog ${showDialog ? 'show' : ''}`}>
              <div className='dialog-content'>
                <span onClick={handleDialogClose} className='close'>&times;</span>
                <p style={{ color: 'green' }}>{success}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
