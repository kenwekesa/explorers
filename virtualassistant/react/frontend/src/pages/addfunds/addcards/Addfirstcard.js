// import React, { useState, useEffect } from 'react';
// import Sservice from '../selection/Sservice';
// import Splan from '../selection/Splan';
// import Slanguage from '../selection/Slanguage';
// import TimezoneSelector from '../selection/TimeZoneselector';
// import { addDoc, collection, getDocs, where, query, orderBy, serverTimestamp } from 'firebase/firestore';
// import { db } from '../../../firebase/firebase';
// import "./addcard.css";
// import { useNavigate } from 'react-router-dom';

// const Addfirstcard = () => {
//   const [formData, setFormData] = useState({
//     service: '',
//     plan: '',
//     assistants: '',
//     period: '',
//     roleTitle: '',
//     timezone: '',
//     language: '',
//     roleRequirements: '',
//     totalCost: 0,
//   });

//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [notification, setNotification] = useState({ message: '', isSuccess: false });
//   const [showDialog, setShowDialog] = useState(false);
//   const navigate = useNavigate();
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [totalCost, setTotalCost] = useState(0);
//   const [totalCanceled, setTotalCanceled] = useState(0);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     const sanitizedValue = value < 0 ? 0 : value;
//     // Update the form data
//     setFormData({
//       ...formData,
//       [name]: sanitizedValue,
//     });
//   };

//   // Add an effect to update the total cost when assistants or period change
//   useEffect(() => {
//     const assistants = parseInt(formData.assistants);
//     const period = parseInt(formData.period);
//     const plan = parseInt(formData.plan);

//     if (!isNaN(assistants) && !isNaN(period) && !isNaN(plan)) {
//       const totalCost = assistants * period * plan;
//       setFormData({
//         ...formData,
//         totalCost,
//       });
//     }
//   }, [formData.assistants, formData.period, formData.plan]);

//   const onTimezoneChange = (selectedTimezone) => {
//     setFormData({
//       ...formData,
//       timezone: selectedTimezone,
//     });
//   };

//   const handleServiceChange = (selectedServices) => {
//     setFormData({
//       ...formData,
//       service: selectedServices,
//     });
//   };

//   const handleLanguangeChange = (selectedLanguage) => {
//     setFormData({
//       ...formData,
//       language: selectedLanguage,
//     });
//   };

//   const handlePlanChange = (selectedPlan) => {
//     setFormData({
//       ...formData,
//       plan: selectedPlan,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setIsLoading(true);

//     try {
//       // Simulate some asynchronous operation (replace with your actual logic)
//       await new Promise((resolve) => setTimeout(resolve, 2000));

//       // Calculate account balance
//       const accountBalance = totalAmount.toFixed(2) - formData.totalCost.toFixed(2);

//       if (accountBalance <= 0) {
//         throw new Error("Your account balance is limited. Please add funds to your account.");
//       }

//       // Add data to Firestore (replace with your Firestore logic)
//       const documentData = {
//         ...formData,
//         // Set the status variable here
//         status: 'pending', // Set the status to 'pending'
//         accountBalance,
//         timestamp: serverTimestamp(),
//       };

//       await addDoc(collection(db, 'serviced'), documentData);

//       setFormData({
//         service: '',
//         plan: '',
//         assistants: '',
//         period: '',
//         roleTitle: '',
//         timezone: '',
//         language: '',
//         roleRequirements: '',
//         totalCost: 0,
//       });

//       setNotification({ message: 'Application submitted successfully!', isSuccess: true });
//       setShowDialog(true);
//     } catch (error) {
//       setError(error.message || 'Error submitting application. Please try again.');
//       setShowDialog(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDialogClose = () => {
//     setShowDialog(false);
//     if (notification.isSuccess) {
//       navigate("/dashboard");
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       const banksCollection = collection(db, 'banks');
//       const querySnapshot = await getDocs(banksCollection);

//       let total = 0;

//       querySnapshot.forEach((doc) => {
//         // Assuming the 'amount' field is stored as a string
//         const amountString = doc.data().amount;
//         const amountFloat = parseFloat(amountString);

//         if (!isNaN(amountFloat)) {
//           total += amountFloat;
//         }
//       });

//       // Set the total amount in state
//       setTotalAmount(total);
//     };

//     fetchData();
//   }, []); // Empty dependency array, so it runs only once on mount


//   useEffect(() => {
//     const fetchData = async () => {
//       const banksCollection = collection(db, 'serviced');
//       const querySnapshot = await getDocs(banksCollection);

//       let total = 0;

//       querySnapshot.forEach((doc) => {
//         // Assuming the 'amount' field is stored as a string
//         const amountString = doc.data().totalCost;
//         const amountFloat = parseFloat(amountString);

//         if (!isNaN(amountFloat)) {
//           total += amountFloat;
//         }
//       });

//       // Set the total amount in state
//       setTotalCost(total);
//     };

//     fetchData();
//   }, []); // Empty dependency array, so it runs only once on mount


//   useEffect(() => {
//     const fetchData = async () => {
//       const banksCollection = collection(db, 'serviced');
//       const q = query(banksCollection, where('status', '==', 'canceled'));
//       const querySnapshot = await getDocs(q);
//       // const querySnapshot = await getDocs(banksCollection);

//       let total = 0;

//       querySnapshot.forEach((doc) => {
//         // Assuming the 'amount' field is stored as a string
//         const amountString = doc.data().totalCost;
//         const amountFloat = parseFloat(amountString);

//         if (!isNaN(amountFloat)) {
//           total += amountFloat;
//         }
//       });

//       // Set the total amount in state
//       setTotalCanceled(total);
//     };

//     fetchData();
//   }, []); // Empty dependency array, so it runs only once on mount


//   const totalAmounts = totalAmount - totalCost + totalCanceled - formData.totalCost;

//   const isAccountBalanceLimited = totalAmounts - formData.totalCost <= 0;

//   return (
//     <div className='afcontactform'>
//       <div className='ascontactimg'></div>
//       <form className='service_main_content' onSubmit={handleSubmit}>
//         <div>
//           <div className='add_contact_form'>
//             <p className='ascontfrmpara'>Finish the hiring process</p>
//             <div className='ascontactinputfield'>
//               <p className='aspcontfrmpara_top'>Service</p>
//               <div className='application_components'>
//                 <Sservice
//                   selectedServices={formData.service}
//                   onChange={handleServiceChange}
//                 />
//               </div>
//               <p className='aspcontfrmpara'>Plan</p>
//               <div className='application_components'>
//                 <Splan
//                   selectedPlan={formData.plan}
//                   onChange={handlePlanChange}
//                 />
//               </div>
//             </div>
//             <div className='ascontactinputfield'>
//               <p className='aspcontfrmpara'>Assistants</p>
//               <input
//                 placeholder={`Enter number of virtual assistants ${formData.assistants}`}
//                 type="number"
//                 required
//                 name="assistants"
//                 value={formData.assistants}
//                 onChange={handleInputChange}
//                 min="0"
//               />
//               <p className='aspcontfrmpara'>Period</p>
//               <input
//                 placeholder={`Enter period of hire in months ${formData.period}`}
//                 type="number"
//                 name="period"
//                 value={formData.period}
//                 onChange={handleInputChange}
//                 required
//                 min="0"
//               />

//               <p className='aspcontfrmpara'>Role Title</p>
//               <input
//                 placeholder="Enter the virtual assistant's position"
//                 type="text"
//                 name="roleTitle"
//                 value={formData.roleTitle}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//           </div>
//         </div>

//         <div>
//           <div className='add_contact_form'>
//             <div className='ascontactinputfield'>
//               <p className='aspcontfrmpara'>Time Zone</p>
//               <div className='application_components'>
//                 <TimezoneSelector
//                   selectedTimezone={formData.timezone}
//                   onTimezoneChange={onTimezoneChange}
//                 />
//               </div>
//               <p className='aspcontfrmpara'>Language</p>
//               <div className='application_components'>
//                 <Slanguage
//                   selectedLanguage={formData.language}
//                   onChange={handleLanguangeChange}
//                 />
//               </div>
//             </div>
//             <div className='ascontactinputfield'>
//               <p className='aspcontfrmpara'>Role Requirements</p>
//               <div className='ascontacttext'>
//                 <textarea
//                   placeholder='Write/Past role requirements'
//                   className='textarea_role_input'
//                   name="roleRequirements"
//                   value={formData.roleRequirements}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//               <div className='ascost'>
//                 <p>Total Cost: <span>${formData.totalCost}</span></p>
//                 <p>
//                   Account Balance: <span>${totalAmounts}</span>
//                   {isAccountBalanceLimited && <span style={{ color: 'red' }}></span>}
//                 </p>
//               </div>
//               <div className='ascontabutton'>
//                 <button className='ton tin' type='submit' disabled={isLoading || isAccountBalanceLimited}>
//                   {isLoading ? 'Submitting...' : isAccountBalanceLimited ? 'Add funds to your account' : 'Submit Application'}
//                 </button>
//                 {isLoading && (
//                   <p style={{ color: 'green' }} className="contact_form_paragraph_loading">
//                     Application in progress...
//                   </p>
//                 )}
//                 {isAccountBalanceLimited && (
//                   <p style={{ color: 'red' }}>
//                     Your account balance is limited. Please recharge your account.
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//       <div>
//         {error && (
//           <p className="contact_form_paragraph_error" style={{ color: 'red' }}>
//             {error}
//           </p>
//         )}
//         <div className={`dialog ${showDialog ? 'show' : ''}`}>
//           <div className="dialog-content">
//             <span onClick={handleDialogClose} className="close">
//               &times;
//             </span>
//             <p style={{ color: notification.isSuccess ? 'green' : 'red' }}>
//               {notification.message}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Addfirstcard;

// import React, { useState, useEffect } from 'react';
// import Sservice from '../selection/Sservice';
// import Splan from '../selection/Splan';
// import Slanguage from '../selection/Slanguage';
// import TimezoneSelector from '../selection/TimeZoneselector';
// import { addDoc, collection, getDocs, where, query, orderBy, serverTimestamp } from 'firebase/firestore';
// import { db } from '../../../firebase/firebase';
// import "./addcard.css";
// import { useNavigate } from 'react-router-dom';

// const Addfirstcard = () => {
//   const [formData, setFormData] = useState({
//     service: '',
//     plan: '',
//     assistants: '',
//     period: '',
//     roleTitle: '',
//     timezone: '',
//     language: '',
//     roleRequirements: '',
//     totalCost: 0,
//   });

//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [notification, setNotification] = useState({ message: '', isSuccess: false });
//   const [showDialog, setShowDialog] = useState(false);
//   const navigate = useNavigate();
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [totalCost, setTotalCost] = useState(0);
//   const [totalCanceled, setTotalCanceled] = useState(0);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     const sanitizedValue = value < 0 ? 0 : value;
//     // Update the form data
//     setFormData({
//       ...formData,
//       [name]: sanitizedValue,
//     });
//   };

//   // Add an effect to update the total cost when assistants or period change
//   useEffect(() => {
//     const assistants = parseInt(formData.assistants);
//     const period = parseInt(formData.period);
//     const plan = parseInt(formData.plan);

//     if (!isNaN(assistants) && !isNaN(period) && !isNaN(plan)) {
//       const totalCost = assistants * period * plan;
//       setFormData({
//         ...formData,
//         totalCost,
//       });
//     }
//   }, [formData.assistants, formData.period, formData.plan]);

//   const onTimezoneChange = (selectedTimezone) => {
//     setFormData({
//       ...formData,
//       timezone: selectedTimezone,
//     });
//   };

//   const handleServiceChange = (selectedServices) => {
//     setFormData({
//       ...formData,
//       service: selectedServices,
//     });
//   };

//   const handleLanguangeChange = (selectedLanguage) => {
//     setFormData({
//       ...formData,
//       language: selectedLanguage,
//     });
//   };

//   const handlePlanChange = (selectedPlan) => {
//     setFormData({
//       ...formData,
//       plan: selectedPlan,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setIsLoading(true);

//     try {
//       // Simulate some asynchronous operation (replace with your actual logic)
//       await new Promise((resolve) => setTimeout(resolve, 2000));

//       // Calculate account balance
//       const accountBalance = totalAmount - formData.totalCost;

//       if (accountBalance <= 0) {
//         throw new Error("Your account balance is limited. Please add funds to your account.");
//       }

//       // Add data to Firestore (replace with your Firestore logic)
//       const documentData = {
//         ...formData,
//         // Set the status variable here
//         status: 'pending', // Set the status to 'pending'
//         accountBalance,
//         timestamp: serverTimestamp(),
//         remainingBalance,
//       };

//       await addDoc(collection(db, 'serviced'), documentData);

//       setFormData({
//         service: '',
//         plan: '',
//         assistants: '',
//         period: '',
//         roleTitle: '',
//         timezone: '',
//         language: '',
//         roleRequirements: '',
//         totalCost: 0,
//       });

//       setNotification({ message: 'Application submitted successfully!', isSuccess: true });
//       setShowDialog(true);
//     } catch (error) {
//       setError(error.message || 'Error submitting application. Please try again.');
//       setShowDialog(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDialogClose = () => {
//     setShowDialog(false);
//     if (notification.isSuccess) {
//       navigate("/dashboard");
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       const banksCollection = collection(db, 'banks');
//       const querySnapshot = await getDocs(banksCollection);

//       let total = 0;

//       querySnapshot.forEach((doc) => {
//         // Assuming the 'amount' field is stored as a string
//         const amountString = doc.data().amount;
//         const amountFloat = parseFloat(amountString);

//         if (!isNaN(amountFloat)) {
//           total += amountFloat;
//         }
//       });

//       // Set the total amount in state
//       setTotalAmount(total);
//     };

//     fetchData();
//   }, []); // Empty dependency array, so it runs only once on mount

//   useEffect(() => {
//     const fetchData = async () => {
//       const banksCollection = collection(db, 'serviced');
//       const querySnapshot = await getDocs(banksCollection);

//       let total = 0;

//       querySnapshot.forEach((doc) => {
//         // Assuming the 'amount' field is stored as a string
//         const amountString = doc.data().totalCost;
//         const amountFloat = parseFloat(amountString);

//         if (!isNaN(amountFloat)) {
//           total += amountFloat;
//         }
//       });

//       // Set the total amount in state
//       setTotalCost(total);
//     };

//     fetchData();
//   }, []); // Empty dependency array, so it runs only once on mount

//   useEffect(() => {
//     const fetchData = async () => {
//       const banksCollection = collection(db, 'serviced');
//       const q = query(banksCollection, where('status', '==', 'canceled'));
//       const querySnapshot = await getDocs(q);
//       // const querySnapshot = await getDocs(banksCollection);

//       let total = 0;

//       querySnapshot.forEach((doc) => {
//         // Assuming the 'amount' field is stored as a string
//         const amountString = doc.data().totalCost;
//         const amountFloat = parseFloat(amountString);

//         if (!isNaN(amountFloat)) {
//           total += amountFloat;
//         }
//       });

//       // Set the total amount in state
//       setTotalCanceled(total);
//     };

//     fetchData();
//   }, []); // Empty dependency array, so it runs only once on mount

//   const remainingBalance = totalAmount - totalCost + totalCanceled - formData.totalCost;

//   const isAccountBalanceLimited = remainingBalance <= 0;

//   return (
//     <div className='afcontactform'>
//       <div className='ascontactimg'></div>
//       <form className='service_main_content' onSubmit={handleSubmit}>
//         <div>
//           <div className='add_contact_form'>
//             <p className='ascontfrmpara'>Finish the hiring process</p>
//             <div className='ascontactinputfield'>
//               <p className='aspcontfrmpara_top'>Service</p>
//               <div className='application_components'>
//                 <Sservice
//                   selectedServices={formData.service}
//                   onChange={handleServiceChange}
//                 />
//               </div>
//               <p className='aspcontfrmpara'>Plan</p>
//               <div className='application_components'>
//                 <Splan
//                   selectedPlan={formData.plan}
//                   onChange={handlePlanChange}
//                 />
//               </div>
//             </div>
//             <div className='ascontactinputfield'>
//               <p className='aspcontfrmpara'>Assistants</p>
//               <input
//                 placeholder={`Enter number of virtual assistants ${formData.assistants}`}
//                 type="number"
//                 required
//                 name="assistants"
//                 value={formData.assistants}
//                 onChange={handleInputChange}
//                 min="0"
//               />
//               <p className='aspcontfrmpara'>Period</p>
//               <input
//                 placeholder={`Enter period of hire in months ${formData.period}`}
//                 type="number"
//                 name="period"
//                 value={formData.period}
//                 onChange={handleInputChange}
//                 required
//                 min="0"
//               />

//               <p className='aspcontfrmpara'>Role Title</p>
//               <input
//                 placeholder="Enter the virtual assistant's position"
//                 type="text"
//                 name="roleTitle"
//                 value={formData.roleTitle}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//           </div>
//         </div>

//         <div>
//           <div className='add_contact_form'>
//             <div className='ascontactinputfield'>
//               <p className='aspcontfrmpara'>Time Zone</p>
//               <div className='application_components'>
//                 <TimezoneSelector
//                   selectedTimezone={formData.timezone}
//                   onTimezoneChange={onTimezoneChange}
//                 />
//               </div>
//               <p className='aspcontfrmpara'>Language</p>
//               <div className='application_components'>
//                 <Slanguage
//                   selectedLanguage={formData.language}
//                   onChange={handleLanguangeChange}
//                 />
//               </div>
//             </div>
//             <div className='ascontactinputfield'>
//               <p className='aspcontfrmpara'>Role Requirements</p>
//               <div className='ascontacttext'>
//                 <textarea
//                   placeholder='Write/Past role requirements'
//                   className='textarea_role_input'
//                   name="roleRequirements"
//                   value={formData.roleRequirements}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//               <div className='ascost'>
//               <p>Total Cost: <span>${formData.totalCost}</span></p>
//               <p>
//                 Account Balance: <span>${remainingBalance}</span>
//                   {isAccountBalanceLimited && <span style={{ color: 'red' }}></span>}
//                   {/* {isAccountBalanceLimited && <span style={{ color: 'red' }}>Your account balance is limited. Please recharge your account.</span>} */}
//               </p>
//             </div>
//             <div className='ascontabutton'>
//               <button className='ton tin' type='submit' disabled={isLoading || isAccountBalanceLimited}>
//                 {isLoading ? 'Submitting...' : isAccountBalanceLimited ? 'Add funds to your account' : 'Submit Application'}
//               </button>
//               {isLoading && (
//                 <p style={{ color: 'green' }} className="contact_form_paragraph_loading">
//                   Application in progress...
//                 </p>
//               )}
//             </div>
//             {isAccountBalanceLimited && (
//               <p style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>
//                 Your account balance is limited. Please recharge your account.
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//      </form>
//       <div>
//         {error && (
//           <p className="contact_form_paragraph_error" style={{ color: 'red' }}>
//             {error}
//           </p>
//         )}
//         <div className={`dialog ${showDialog ? 'show' : ''}`}>
//           <div className="dialog-content">
//             <span onClick={handleDialogClose} className="close">
//               &times;
//             </span>
//             <p style={{ color: notification.isSuccess ? 'green' : 'red' }}>
//               {notification.message}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Addfirstcard;

import React, { useState, useEffect } from 'react';
import Sservice from '../selection/Sservice';
import Splan from '../selection/Splan';
import Slanguage from '../selection/Slanguage';
import TimezoneSelector from '../selection/TimeZoneselector';
import {
  addDoc,
  collection,
  getDocs,
  where,
  query,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import './addcard.css';
import { useContext } from 'react';
import { AuthContext } from '../../../contextr/AuthContext';

const Addfirstcard = () => {
  const [formData, setFormData] = useState({
    service: '',
    plan: '',
    assistants: '',
    period: '',
    roleTitle: '',
    timezone: '',
    language: '',
    roleRequirements: '',
    totalCost: 0,
    deadline: '', // New deadline field
  });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({ message: '', isSuccess: false });
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [totalCanceled, setTotalCanceled] = useState(0);
  const {state} = useContext(AuthContext)

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const sanitizedValue = name === 'deadline' ? value : value < 0 ? 0 : value;

    // Update the form data
    setFormData({
      ...formData,
      [name]: sanitizedValue,
    });
  };

  useEffect(() => {
    const assistants = parseInt(formData.assistants);
    const period = parseInt(formData.period);
    const plan = parseInt(formData.plan);

    if (!isNaN(assistants) && !isNaN(period) && !isNaN(plan)) {
      const totalCost = assistants * period * plan;
      setFormData({
        ...formData,
        totalCost,
      });
    }
  }, [formData.assistants, formData.period, formData.plan]);

  const onTimezoneChange = (selectedTimezone) => {
    setFormData({
      ...formData,
      timezone: selectedTimezone,
    });
  };

  const handleServiceChange = (selectedServices) => {
    setFormData({
      ...formData,
      service: selectedServices,
    });
  };

  const handleLanguangeChange = (selectedLanguage) => {
    setFormData({
      ...formData,
      language: selectedLanguage,
    });
  };

  const handlePlanChange = (selectedPlan) => {
    setFormData({
      ...formData,
      plan: selectedPlan,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const accountBalance = totalAmount - formData.totalCost;

      if (accountBalance <= 0) {
        throw new Error('Your account balance is limited. Please add funds to your account.');
      }

      const documentData = {
        ...formData,
        status: 'pending',
        accountBalance,
        timestamp: serverTimestamp(),
        remainingBalance,
        user_id: state.user.uid,
        bidders: [],
        vas:[],
      };

      await addDoc(collection(db, 'serviced'), documentData);

      setFormData({
        service: '',
        plan: '',
        assistants: '',
        period: '',
        roleTitle: '',
        timezone: '',
        language: '',
        roleRequirements: '',
        totalCost: 0,
        deadline: '', // Clear the deadline after submission
      });

      setNotification({ message: 'Application submitted successfully!', isSuccess: true });
      setShowDialog(true);
    } catch (error) {
      setError(error.message || 'Error submitting application. Please try again.');
      setShowDialog(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    if (notification.isSuccess) {
      navigate('/dashboard');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const banksCollection = query(collection(db, 'banks'), where("user_id", "==", state.user.uid));
      const querySnapshot = await getDocs(banksCollection);

      let total = 0;

      querySnapshot.forEach((doc) => {
        const amountString = doc.data().amount;
        const amountFloat = parseFloat(amountString);

        if (!isNaN(amountFloat)) {
          total += amountFloat;
        }
      });

      setTotalAmount(total);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const banksCollection = query(collection(db, 'serviced'), where("user_id", "==", state.user.uid));
      const querySnapshot = await getDocs(banksCollection);

      let total = 0;

      querySnapshot.forEach((doc) => {
        const amountString = doc.data().totalCost;
        const amountFloat = parseFloat(amountString);

        if (!isNaN(amountFloat)) {
          total += amountFloat;
        }
      });

      setTotalCost(total);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const banksCollection = collection(db, 'serviced');
      const q = query(banksCollection, where('status', '==', 'canceled'), where("user_id", "==", state.user.uid));
      const querySnapshot = await getDocs(q);

      let total = 0;

      querySnapshot.forEach((doc) => {
        const amountString = doc.data().totalCost;
        const amountFloat = parseFloat(amountString);

        if (!isNaN(amountFloat)) {
          total += amountFloat;
        }
      });

      setTotalCanceled(total);
    };

    fetchData();
  }, []);

  const remainingBalance = totalAmount - totalCost + totalCanceled - formData.totalCost;

  const isAccountBalanceLimited = remainingBalance <= 0;

  return (
    <div className='afcontactform'>
      <div className='ascontactimg'></div>
      <form className='service_main_content' onSubmit={handleSubmit}>
        <div>
          <div className='add_contact_form'>
            <p className='ascontfrmpara'>Finish the hiring process</p>
            <div className='ascontactinputfield'>
              <p className='aspcontfrmpara_top'>Service</p>
              <div className='application_components'>
                <Sservice selectedServices={formData.service} onChange={handleServiceChange} />
              </div>
              <p className='aspcontfrmpara'>Plan</p>
              <div className='application_components'>
                <Splan selectedPlan={formData.plan} onChange={handlePlanChange} />
              </div>
            </div>
            <div className='ascontactinputfield'>
              <p className='aspcontfrmpara'>Assistants</p>
              <input
                placeholder={`Enter number of virtual assistants ${formData.assistants}`}
                type='number'
                required
                name='assistants'
                value={formData.assistants}
                onChange={handleInputChange}
                min='0'
              />
              <p className='aspcontfrmpara'>Period</p>
              <input
                placeholder={`Enter period of hire in months ${formData.period}`}
                type='number'
                name='period'
                value={formData.period}
                onChange={handleInputChange}
                required
                min='0'
              />

              <p className='aspcontfrmpara'>Role Title</p>
              <input
                placeholder="Enter the virtual assistant's position"
                type='text'
                name='roleTitle'
                value={formData.roleTitle}
                onChange={handleInputChange}
                required
              />
              {/* New deadline input field */}
              <p className='aspcontfrmpara'>Application deadline</p>
              <input
                placeholder='Enter the application deadline'
                type='date'
                name='deadline'
                value={formData.deadline}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        <div>
          <div className='add_contact_form'>
            <div className='ascontactinputfield'>
              <p className='aspcontfrmpara'>Time Zone</p>
              <div className='application_components'>
                <TimezoneSelector selectedTimezone={formData.timezone} onTimezoneChange={onTimezoneChange} />
              </div>
              <p className='aspcontfrmpara'>Language</p>
              <div className='application_components'>
                <Slanguage selectedLanguage={formData.language} onChange={handleLanguangeChange} />
              </div>
            </div>
            <div className='ascontactinputfield'>
              <p className='aspcontfrmpara'>Role Requirements</p>
              <div className='ascontacttext'>
                <textarea
                  placeholder='Write/Past role requirements'
                  className='textarea_role_input'
                  name='roleRequirements'
                  value={formData.roleRequirements}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className='ascost'>
                <p>
                  Total Cost: <span>${formData.totalCost}</span>
                </p>
                <p>
                  Account Balance: <span>${remainingBalance}</span>
                  {isAccountBalanceLimited && <span style={{ color: 'red' }}></span>}
                </p>
              </div>
              <div className='ascontabutton'>
                <button className='ton tin' type='submit' disabled={isLoading || isAccountBalanceLimited}>
                  {isLoading
                    ? 'Submitting...'
                    : isAccountBalanceLimited
                    ? 'Add funds to your account'
                    : 'Submit Application'}
                </button>
                {isLoading && (
                  <p style={{ color: 'green' }} className='contact_form_paragraph_loading'>
                    Application in progress...
                  </p>
                )}
              </div>
              {isAccountBalanceLimited && (
                <p style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>
                  Your account balance is limited. Please recharge your account.
                </p>
              )}
            </div>
          </div>
        </div>
      </form>
      <div>
        {error && (
          <p className='contact_form_paragraph_error' style={{ color: 'red' }}>
            {error}
          </p>
        )}
        <div className={`dialog ${showDialog ? 'show' : ''}`}>
          <div className='dialog-content'>
            <span onClick={handleDialogClose} className='close'>
              &times;
            </span>
            <p style={{ color: notification.isSuccess ? 'green' : 'red' }}>{notification.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addfirstcard;



