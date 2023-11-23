import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase/firebase';
import { getDocs, collection, where, query, doc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import "./PlansData.css";

const Bidding = ({ isOpen, onClose, id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [vas, setVas] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const usersCollectionRef = collection(db, 'users');
        const usersQuery = query(usersCollectionRef, where('usertype', '==', 'va'));
        const usersSnapshot = await getDocs(usersQuery);

        const items = [];

        usersSnapshot.forEach((userDoc) => {
          // Access the user_id directly from userDoc
          items.push({ id: userDoc.id, name: userDoc.data().firstname });
        });

        setData(items);
      } catch (error) {
        console.error('Error fetching data:', error);
        setErrorMessage('Error fetching data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    if (isOpen) {
      fetchData();
    }
  }, [isOpen]);

  const handleAssignPlan = async (userId) => {
    try {
      setSubmitting(true);

      // Update the status to "active" and add userId to vas in the order document
      const orderDocRef = doc(db, 'serviced', id); // Use prop id as the document ID
      await updateDoc(orderDocRef, {
        status: 'active',
        vas: [...vas, userId], // Add userId to the existing vas array
      });

      setSuccessMessage('Plan assigned successfully!');
      setErrorMessage(''); // Reset error message
      // Redirect to "/admin_dashboard"
      navigate('/admin_dashboard');

      // Handle any other logic or state updates as needed
    } catch (error) {
      console.error('Error assigning plan:', error);
      setErrorMessage('Error assigning plan. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="dialog-background">
      <div className="dialog-box dialog-box-elevation dialog-box-elevation_assign">
        <h3>Assign <span>plan!</span></h3>
        <hr />
        {/* Render the retrieved data or loading indicator based on your needs */}
        {isLoading ? (
          <p>Loading...</p>
        ) : data.length === 0 ? (
          <p>No users available with status "va".</p>
        ) : (
          <>
            <ol>
              {data.map((user) => (
                <li key={user.id}>
                  {`User Name: ${user.name}, User ID: ${user.id}`}
                  <button className='tin ton tin-ton' onClick={() => handleAssignPlan(user.id)}>
                    Assign plan
                  </button>
                </li>
              ))}
            </ol>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </>
        )}
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Bidding;
