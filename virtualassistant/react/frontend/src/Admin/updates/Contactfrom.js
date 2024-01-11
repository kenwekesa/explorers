// import React, { useState } from 'react';
// import { db } from '../../firebase/firebase'; // Import 'db' from your Firebase configuration
// import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
// import "./Contacform.css";
// import Axios from 'axios';

// const Contactform = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     content: '',
//   });

//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const [showDialog, setShowDialog] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleDialogClose = () => {
//     setShowDialog(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setError(null);
//       setIsLoading(true);

//       const updateCollection = collection(db, 'updates');
//       const updateData = {
//         title: formData.title,
//         timestamp: serverTimestamp(),
//         content: formData.content,
//         status: "client",
//       };

//       const docRef = await addDoc(updateCollection, updateData);

//       setSuccess('Update submitted successfully');
//       setShowDialog(true);

//       setFormData({
//         title: '',
//         content: '',
//       });

//       setIsLoading(false);
//     } catch (error) {
//       setError(`An error occurred: ${error.message}`);
//       setShowDialog(true);
//     } finally {
//       setIsLoading(false);
//     }


//     const apiUrl = 'http://localhost:5000/users/email/';
//         console.log('Making request to: ', apiUrl); 

//         const sendEmail = async (subject, message, recipient) => {

//           const response = await Axios.post(apiUrl, {
//             subject:subject,
//             message:message, 
//             email:recipient
//           });

//           return response;

//         }

//         // Usage

//         const email = formData.email  
        

//         const subject = 'Registration successful';
//         const message = 'Include the reason for the success — confirm what action someone has taken or what task has been completed. If someone has created something give them an opportunity to view it. Avoid repeating content from the title. Keep messages to 1 to 2 sentences.';

//       //  try {

//        await sendEmail(subject, message, email);
//       //  const response = await sendEmail(subject, message, email);

//       //    console.log(response);

//       //  } catch (error) {

//       //    console.error(error);
//       //  }
//   };
//********************************************************************************************************* */
// import React, { useState, useEffect } from 'react';
// import { db } from '../../firebase/firebase';
// import { addDoc, collection, serverTimestamp, getDocs, query, where } from 'firebase/firestore';
// import "./Contacform.css";
// import Axios from 'axios';

// const Contactform = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     content: '',
//   });

//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const [showDialog, setShowDialog] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [clientEmails, setClientEmails] = useState([]);

//   // Fetch client emails and set them in state
//   useEffect(() => {
//     const fetchClientEmails = async () => {
//       try {
//         const usersCollection = collection(db, 'users');
//         const querySnapshot = await getDocs(query(usersCollection, where('usertype', '==', 'client')));

//         const emails = querySnapshot.docs.map(doc => doc.data().email);
//         setClientEmails(emails);
//       } catch (error) {
//         console.error('Error fetching client emails:', error);
//       }
//     };

//     fetchClientEmails();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleDialogClose = () => {
//     setShowDialog(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setError(null);
//       setIsLoading(true);

//       const updateCollection = collection(db, 'updates');
//       const updateData = {
//         title: formData.title,
//         timestamp: serverTimestamp(),
//         content: formData.content,
//         status: "client",
//       };

//       await addDoc(updateCollection, updateData);

//       setSuccess('Update submitted successfully');
//       setShowDialog(true);

//       setFormData({
//         title: '',
//         content: '',
//       });

//       setIsLoading(false);
//     } catch (error) {
//       setError(`An error occurred: ${error.message}`);
//       setShowDialog(true);
//     } finally {
//       setIsLoading(false);
//     }

//     const apiUrl = 'http://localhost:5000/users/email/';
//     console.log('Making request to: ', apiUrl);

//     const sendEmail = async (subject, message, recipient) => {
//       try {
//         const response = await Axios.post(apiUrl, {
//           subject: subject,
//           message: message,
//           email: recipient
//         });

//         return response;
//       } catch (error) {
//         console.error('Error sending email:', error);
//       }
//     };

//     // Use the array of client emails obtained from the database
//     const emails = clientEmails;
//     const subject = 'Registration successful';
//     const message = 'Include the reason for the success — confirm what action someone has taken or what task has been completed. If someone has created something give them an opportunity to view it. Avoid repeating content from the title. Keep messages to 1 to 2 sentences.';

//     console.log(emails)

//     try {
//       await sendEmail(subject, message, emails);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className='admin_main_contact_form'>
//       <div className='mcontactforms'>
//         <div className='mcontactimg'>
//           <form className='admin_contact_form' onSubmit={handleSubmit}>
//             <p className='admin_contact_form_paragraph'>Provide client's updates</p>
//             <div className='admin_update_input_field'>
//               <input
//                 name='title'
//                 value={formData.title}
//                 onChange={handleInputChange}
//                 placeholder='Update title - 100 words'
//                 type="text"
//                 required
//               />
//             </div>
//             <div className='admin_contact_textarea'>
//               <textarea
//                 name='content'
//                 value={formData.content}
//                 onChange={handleInputChange}
//                 placeholder='Update content - 500 words'
//                 className='contacttextareainput'
//                 required
//               />
//             </div>
//             <div className='admin_contact_button'>
//               <button className='ton tin admin_contact_form_btn' type="submit" disabled={isLoading}>
//                 {isLoading ? 'Submitting...' : 'Submit client update'}
//               </button>
//               {isLoading && <p style={{ color: 'green' }}>Submission in progress</p>}
//             </div>
//           </form>
//           {error && <p className='contact_form_paragraph_error' style={{ color: 'red' }}>{error}</p>}
//           <div className={`dialog ${showDialog ? 'show' : ''}`}>
//             <div className='dialog-content'>
//               <span onClick={handleDialogClose} className='close'>&times;</span>
//               <p style={{ color: 'green' }}>{success}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contactform;
//********************************************************************************************************* */

// import React, { useState, useEffect } from 'react';
// import { db } from '../../firebase/firebase';
// import { addDoc, collection, serverTimestamp, getDocs, query, where } from 'firebase/firestore';
// import Axios from 'axios';
// import "./Contacform.css";

// const Contactform = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     content: '',
//   });

//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const [showDialog, setShowDialog] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [clientEmails, setClientEmails] = useState([]);

//   useEffect(() => {
//     const fetchClientEmails = async () => {
//       try {
//         const usersCollection = collection(db, 'users');
//         const querySnapshot = await getDocs(query(usersCollection, where('type', '==', 'client')));

//         const emails = querySnapshot.docs.map((doc) => doc.data().email);
//         setClientEmails(emails);
//       } catch (error) {
//         console.error('Error fetching client emails:', error);
//       }
//     };

//     fetchClientEmails();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleDialogClose = () => {
//     setShowDialog(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setError(null);
//       setIsLoading(true);

//       const updateCollection = collection(db, 'updates');
//       const updateData = {
//         title: formData.title,
//         timestamp: serverTimestamp(),
//         content: formData.content,
//         status: "client",
//       };

//       await addDoc(updateCollection, updateData);

//       setSuccess('Update submitted successfully');
//       setShowDialog(true);

//       setFormData({
//         title: '',
//         content: '',
//       });

//       setIsLoading(false);
//     } catch (error) {
//       setError(`An error occurred: ${error.message}`);
//       setShowDialog(true);
//     } finally {
//       setIsLoading(false);
//     }

//     const apiUrl = 'http://localhost:5000/users/email/';
//     console.log('Making request to: ', apiUrl);

//     // const sendEmails = async (subject, message, recipients) => {
//     //   try {
//     //     const response = await Axios.post(apiUrl, {
//     //       subject: subject,
//     //       message: message,
//     //       emails: recipients,
//     //     });

//     //     return response;
//     //   } catch (error) {
//     //     console.error('Error sending emails:', error);
//     //   }
//     // };

//     // // Use the array of client emails obtained from the database
//     // const emails = clientEmails;
//     // const subject = 'Registration successful';
//     // const message = 'Include the reason for the success — confirm what action someone has taken or what task has been completed. If someone has created something give them an opportunity to view it. Avoid repeating content from the title. Keep messages to 1 to 2 sentences.';

//     // try {
//     //   await sendEmails(subject, message, emails);
//     // } catch (error) {
//     //   console.error(error);
//     // }
//   const sendEmails = async (subject, message, recipients) => {
//   try {
//     if (!recipients || recipients.length === 0) {
//       throw new Error('No recipients defined');
//     }

//     const response = await Axios.post(apiUrl, {
//       subject: subject,
//       message: message,
//       emails: recipients,
//     });

//     return response;
//   } catch (error) {
//     console.error('Error sending emails:', error);
//     throw error; // Re-throw the error to handle it in the calling code
//   }
// };

// // Use the array of client emails obtained from the database
// const emails = clientEmails;
// const subject = 'Registration successful';
// const message = 'Include the reason for the success — confirm what action someone has taken or what task has been completed. If someone has created something give them an opportunity to view it. Avoid repeating content from the title. Keep messages to 1 to 2 sentences.';

// try {
//   await sendEmails(subject, message, emails);
// } catch (error) {
//   console.error(error);
//   setError(`Error sending email: ${error.message}`);
//   setShowDialog(true);
// }

//   };

//   return (
//     <div className='admin_main_contact_form'>
//       <div className='mcontactforms'>
//         <div className='mcontactimg'>
//           <form className='admin_contact_form' onSubmit={handleSubmit}>
//             <p className='admin_contact_form_paragraph'>Provide client's updates</p>
//             <div className='admin_update_input_field'>
//               <input
//                 name='title'
//                 value={formData.title}
//                 onChange={handleInputChange}
//                 placeholder='Update title - 100 words'
//                 type="text"
//                 required
//               />
//             </div>
//             <div className='admin_contact_textarea'>
//               <textarea
//                 name='content'
//                 value={formData.content}
//                 onChange={handleInputChange}
//                 placeholder='Update content - 500 words'
//                 className='contacttextareainput'
//                 required
//               />
//             </div>
//             <div className='admin_contact_button'>
//               <button className='ton tin admin_contact_form_btn' type="submit" disabled={isLoading}>
//                 {isLoading ? 'Submitting...' : 'Submit client update'}
//               </button>
//               {isLoading && <p style={{ color: 'green' }}>Submission in progress</p>}
//             </div>
//           </form>
//           {error && <p className='contact_form_paragraph_error' style={{ color: 'red' }}>{error}</p>}
//           <div className={`dialog ${showDialog ? 'show' : ''}`}>
//             <div className='dialog-content'>
//               <span onClick={handleDialogClose} className='close'>&times;</span>
//               <p style={{ color: 'green' }}>{success}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contactform;

//******************************************************************************** */

import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase';
import { addDoc, collection, serverTimestamp, getDocs, query, where } from 'firebase/firestore';
import Axios from 'axios';
import "./Contacform.css";

const Contactform = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [clientEmails, setClientEmails] = useState([]);

  useEffect(() => {
    const fetchClientEmails = async () => {
      try {
        const usersCollection = collection(db, 'users');
        const querySnapshot = await getDocs(query(usersCollection, where('type', '==', 'client')));

        const emails = querySnapshot.docs.map((doc) => doc.data().email);
        setClientEmails(emails);
      } catch (error) {
        console.error('Error fetching client emails:', error);
      }
    };

    fetchClientEmails();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  const sendEmails = async (subject, message, recipients) => {
    try {
      if (!recipients || recipients.length === 0) {
        throw new Error('No recipients defined');
      }

      const apiUrl = 'http://localhost:5000/users/email/';
      console.log('Making request to: ', apiUrl);

      const response = await Axios.post(apiUrl, {
        subject: subject,
        message: message,
        emails: recipients,
      });

      return response;
    } catch (error) {
      console.error('Error sending emails:', error);
      throw error; // Re-throw the error to handle it in the calling code
    }
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
        status: "client",
      };

      await addDoc(updateCollection, updateData);

      setSuccess('Update submitted successfully');
      setShowDialog(true);

      setFormData({
        title: '',
        content: '',
      });

      // Sending emails after successfully submitting the update
      if (clientEmails.length > 0) {
        const subject = 'Update submitted';
        const message = 'Your update has been successfully submitted.';

        try {
          await sendEmails(subject, message, clientEmails);
        } catch (error) {
          console.error(error);
          setError(`Error sending email: ${error.message}`);
          setShowDialog(true);
        }
      } else {
        console.error('No clients to send emails to');
      }
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
            <p className='admin_contact_form_paragraph'>Provide client's updates</p>
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
                {isLoading ? 'Submitting...' : 'Submit client update'}
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

export default Contactform;


