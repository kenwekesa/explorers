import React, { useState } from 'react';
import './Contacform.css';
import image from '../../images/vaone.jpg';
import { Link } from 'react-router-dom';
import { db } from '../../firebase/firebase'; // Import your Firebase configuration and 'db'
import CountrySelector from './Contactcountry'; // Import your CountrySelector component
import { addDoc, collection } from 'firebase/firestore';

const Contactfrom = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    country: '', // Initialize the 'country' field in formData
    subject: '',
    message: '',
  });

  const [error, setError] = useState(null);
  const [notification, setNotification] = useState({ message: '', isSuccess: false });
  const [showDialog, setShowDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    if (notification.isSuccess) {
      // Redirect the user after a successful submission
      // You can use react-router-dom for this
      // Example: history.push('/success');
      // Or implement your own desired behavior.
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send the form data to the 'contactinfo' collection in your Firebase Firestore database
      // await db.collection('contactinfo').add(formData);

      await addDoc(collection(db, 'contactInfo'), formData);

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        country: '', // Clear the 'country' field in formData
        subject: '',
        message: '',
      });

      setIsSubmitting(false);

      setNotification({
        message: `Your message has been submitted successfully, we will get in touch with you through ${formData.email}!`,
        isSuccess: true,
      });

      setShowDialog(true);
    } catch (error) {
      setError(`An error occurred: ${error.message}`);
      setShowDialog(true);
    }
  };

  return (
    <div className="mcontactform">
      <div className="mcontactimg">
        <img src={image} alt="logo" loading="lazy" />
      </div>
      <div>
        <p className="mtpfi">We would love to hear from you</p>
        <div className="mcontfrm">
          <p className="mcontfrmpara">Get started with our virtual assistant services</p>
          <form onSubmit={handleContactSubmit}>
            <div className="contactinputfield">
              <input
                placeholder="First name"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              <input
                placeholder="Last name"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="contactinputfield">
              <input
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                placeholder="Contact"
                type="phone"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='contactform_country_select'>
              {/* Use the CountrySelector component for country selection */}
              <CountrySelector
                selectedCountry={formData.country}
                onCountryChange={(selectedCountry) =>
                  setFormData({ ...formData, country: selectedCountry })
                }
              />
            </div>
            <div className="contactinputfield contat_subject_field">
              <input
                placeholder="Subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="contacttext">
              <textarea
                placeholder="Message"
                className="contacttextareainput"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="contactpara_main_form">
              <p>
                <span className="contactsrpasno">Looking for a job?</span>
                <Link onClick={scrollToTop} to="/careers" className="contact_scroll_to_top">
                  Apply Here
                </Link>
              </p>
            </div>
            <div className="contabutton contact_form_btn_main">
              <button className="ton tin" type="submit">
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
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
  );
};

export default Contactfrom;
