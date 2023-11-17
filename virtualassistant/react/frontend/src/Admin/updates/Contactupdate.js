import React, { useState } from 'react';
import { db } from '../../firebase/firebase'; // Import 'db' from your Firebase configuration
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import "./Contacform.css";

const Contactupdate = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError(null);
      setIsLoading(true);

      const updateCollection = collection(db, 'updates');
      const updateData = {
        title: formData.title,
        timestamp: serverTimestamp(),
        content: formData.content,
        status: "assistant",
      };

      const docRef = await addDoc(updateCollection, updateData);

      setSuccess('Update submitted successfully');
      setShowDialog(true);

      setFormData({
        title: '',
        content: '',
      });

      setIsLoading(false);
    } catch (error) {
      setError(`An error occurred: ${error.message}`);
      setShowDialog(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='admin_main_contact_form'>
      <div className='mcontactforms'>
        <div className='mcontactimg'>
          <form className='admin_contact_form' onSubmit={handleSubmit}>
            <p className='admin_contact_form_paragraph'>Provide assistant's updates</p>
            <div className='admin_update_input_field'>
              <input
                name='title'
                value={formData.title}
                onChange={handleInputChange}
                placeholder='Update title - 100 words'
                type="text"
                required
              />
            </div>
            <div className='admin_contact_textarea'>
              <textarea
                name='content'
                value={formData.content}
                onChange={handleInputChange}
                placeholder='Update content - 500 words'
                className='contacttextareainput'
                required
              />
            </div>
            <div className='admin_contact_button'>
              <button className='ton tin admin_contact_form_btn' type="submit" disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Submit assistant update'}
              </button>
              {isLoading && <p style={{ color: 'green' }}>Submission in progress</p>}
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
  );
}

export default Contactupdate;
