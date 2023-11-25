import React, { useState, useEffect } from 'react';
import { ChatContext } from '../../../contextr/ChatsContext';
import { AuthContext } from '../../../contextr/AuthContext';
import { findUser } from '../../../services/api/DataApi';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { db } from '../../../firebase/firebase'; // Import 'db' from your Firebase configuration
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'; // Import necessary Firestore functions
import "./fundsData.css";
import apply from "../../../images/vmainpage.jpg";

const FundsDataas = ({ isOpen, onClose, id, user_id }) => {
  const [userr, setUserr] = useState([]);
  const [currentuser, setCurrentuser] = useState(null);
  const { state } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  const navigate = useNavigate();

  const [client, setClient] = useState(null);
  const [writer, setWriter] = useState(null);

  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [orderID, setOrderID] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const [location, setLocation] = useState('');

  const fetchData = async () => {
    try {
      console.log(state.user.uid);
      const res2 = await findUser(id);
      const res = await findUser(state.user.uid);

      setCurrentuser(res[0]);
      setClient(res2[0]);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddFunds = async () => {
    try {
      setIsLoading(true); // Set loading state to true

      // console.log(user_id)
      // console.log(id)
      // console.log(state.user.uid)
      // Add funds to Firestore
      const fundsCollection = collection(db, 'banks');
      const fundsData = {
        amount: amount,
        email_address: email,
        given_name: firstname,
        name: lastname,
        orderID: orderID,
        timestamp: serverTimestamp(),
        user_id: id, // Using the default user_id
      };

      await addDoc(fundsCollection, fundsData);

      // Display "Adding..." to the user
      console.log('Adding...');

      // Navigate to "/admin_dashboard"
      navigate('/admin_dashboard');
    } catch (error) {
      console.error('Error adding funds to Firestore:', error);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  if (!isOpen) return null;

  return (
    <div className="dialog-background vadate_dialog-background">
      <div className="dialog-box box_dialog-background">
        <div className='va_data_main_content'>
          <div className='va_data_main_profile'>
            <div className='assistant_va_data_paragraph_title'>
              <p>Add funds to client's account</p>
            </div>
            <div className='assistant_va_contact_hr'>
              <hr></hr>
            </div>
            <div className='admin_addufunds_inputs'>
              <input type="number" required placeholder='Enter Amount in $' value={amount} onChange={(e) => setAmount(e.target.value)} />
              <input type="email" required placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="text" required placeholder='Enter First Name' value={firstname} onChange={(e) => setFirstname(e.target.value)} />
              <input type="text" required placeholder='Enter Last Name' value={lastname} onChange={(e) => setLastname(e.target.value)} />
              <input type="text" required placeholder='Enter Order ID' value={orderID} onChange={(e) => setOrderID(e.target.value)} />
            </div>
            <div className='assistant_va_contact_data assistant_va_contact_data_btn'>
              <div></div>
              <button className='ton tin ton-tin' onClick={handleAddFunds}>
                {isLoading ? 'Adding...' : 'Add Funds'}
              </button>
              <div></div>
            </div>
          </div>
        </div>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default FundsDataas;
