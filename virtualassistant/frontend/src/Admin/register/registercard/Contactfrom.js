import React, { useState } from 'react';
import { auth, db } from '../../../firebase/firebase'; // Import 'auth' and 'db' from your Firebase configuration
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import "./Contacform.css"
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    usercontact: '',
    industry: '',
    usertype: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleDialogClose = () => {
  // setShowDialog(false);
  //   setSuccess(null);
  //   navigate("/admin_dashboard")
    setShowDialog(false);

    if (success) {
      // If there's a success message, navigate to "/admin_dashboard"
      navigate('/admin_dashboard');
    }
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setError(null);

    // if (formData.password !== formData.confirmPassword) {
    //   setError('Passwords do not match');
    //   return;
    // }

    try {

      setError(null); // Clear any previous error
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      // Create a user with email and password
      const { user } = await createUserWithEmailAndPassword(auth, formData.email, formData.password);

      // Save user data to Firestore using addDoc
      const userCollection = collection(db, 'users');
      const docRef = await addDoc(userCollection, {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        usercontact: formData.usercontact,
        industry: formData.industry,
        usertype: formData.usertype,
      });

     setSuccess('Account created successfully, the new administrator should proceed and login');
     setShowDialog(true);

      // Clear the form data
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        usercontact: '',
        industry: '',
        usertype: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='admin_main_contact_form'>
      <div className='admin_main_register_form_update'>Register a user</div>
      <div className='admin_contact_form_outline'>
        <div className='mcontactimg'>
          <div className='admin_register_form'>
            <p className='admin_contact_form_paragraph'>Provide user details</p>
            <form onSubmit={handleSubmit}>
              <div className='admin_contact_input_field'>
                <input name='firstname' value={formData.firstname} onChange={handleInputChange} placeholder='First name' required type="text" />
              </div>
              <div className='admin_contact_input_field'>
                <input name='lastname' value={formData.lastname} onChange={handleInputChange} placeholder='Last name' required type="text" />
              </div>
              <div className='admin_contact_input_field'>
                <input name='email' value={formData.email} onChange={handleInputChange} placeholder='Admin email' required type="email" />
              </div>
              <div className='admin_contact_input_field'>
                <input name='usercontact' value={formData.usercontact} onChange={handleInputChange} placeholder='Admin contact' required type="number" />
              </div>
              <div className='admin_contact_input_field'>
                <input name='industry' value={formData.industry} onChange={handleInputChange} placeholder='Admin industry portfolio' required type="text" />
              </div>
              <div className='admin_contact_input_field'>
                <input name='usertype' value={formData.usertype} onChange={handleInputChange} placeholder='User type (Admin)' required type="text" />
              </div>
              <div className='admin_contact_input_field'>
                <input name='password' value={formData.password} onChange={handleInputChange} placeholder='Admin Password' required type="password" />
              </div>
              <div className='admin_contact_input_field'>
                <input name='confirmPassword' value={formData.confirmPassword} onChange={handleInputChange} placeholder='Admin Password' required type="password" />
              </div>
              <div className='admins_contact_button'>
                <button className='ton tin admin_contact_form_btn'>Register user</button>
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
