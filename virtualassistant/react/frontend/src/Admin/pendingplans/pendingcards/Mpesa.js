import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import "./PlansData.css";

const Bids = ({ isOpen, onClose, id, status }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [vas, setVas] = useState([]);
  const [submittingBidder, setSubmittingBidder] = useState(null); // Track the bidder being processed
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        if (id) {
          const orderDocRef = doc(db, 'serviced', id);
          const orderDocSnapshot = await getDoc(orderDocRef);

          if (orderDocSnapshot.exists()) {
            const bidders = orderDocSnapshot.data().bidders || [];
            const items = [];

            for (const bidderId of bidders) {
              items.push({ id: bidderId });
            }

            setData(items);
          } else {
            console.error('Order with ID not found:', id);
          }
        } else {
          console.error('Invalid or missing ID:', id);
        }
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
  }, [isOpen, id]);

  const handleAssignPlan = async (bidderId) => {
    try {
      setSubmittingBidder(bidderId); // Set the bidder being processed

      const orderDocRef = doc(db, 'serviced', id);
      await updateDoc(orderDocRef, {
        status: 'active',
        vas: [...vas, bidderId],
      });

      setSuccessMessage('Plan assigned successfully!');
      setErrorMessage('');
      navigate('/admin_dashboard');
    } catch (error) {
      console.error('Error assigning plan:', error);
      setErrorMessage('Error assigning plan. Please try again.');
    } finally {
      setSubmittingBidder(null); // Reset submittingBidder once processing is done
    }
  };
  
  if (!isOpen) return null;

  return (
    <div className="dialog-background">
      <div className="dialog-box dialog-box-elevation dialog-box-elevation_assign">
        <h3>Assign <span>plan!</span></h3>
        <hr />
        {isLoading ? (
          <p>Loading...</p>
        ) : data.length === 0 ? (
          <p>No bidder available, come back later!</p>
        ) : (
          <>
            <ol>
              {data.map((bidder) => (
                <li key={bidder.id}>
                  {`Bidder ID: ${bidder.id}`}
                  <button
                    className='tin ton tin-ton'
                    onClick={() => handleAssignPlan(bidder.id)}
                    disabled={submittingBidder === bidder.id}
                  >
                    {submittingBidder === bidder.id ? 'Submitting...' : 'Assign plan'}
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

export default Bids;




