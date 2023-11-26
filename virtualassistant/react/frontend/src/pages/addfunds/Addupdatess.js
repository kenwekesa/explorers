import React, { useState, useEffect } from 'react';
import Addadmincard from './Addadmincard';
import { collection, query, where, orderBy, getDocs, limit } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import './Addupdates.css';

function Addupdatess() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [updates, setUpdates] = useState([]);
  const [selectedUpdate, setSelectedUpdate] = useState({ title: '', content: '' });

  const openDialog = (update) => {
    setSelectedUpdate(update);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(db, 'updates'),
          where('status', '==', 'assistant'),
          // orderBy('timestamp', 'desc'),
          limit(1)
        );

        const querySnapshot = await getDocs(q);
        const updateList = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          updateList.push({ id: doc.id, title: data.title, content: data.content });
        });

        setUpdates(updateList);
      } catch (error) {
        console.error('Error fetching updates:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='addupdates'>
      <h1>Important Updates</h1>
      <div className='cardupdates'>
        {updates.map((update) => (
          <div key={update.id}>
            <p className='paragraph-word-limit'>{update.content}</p>
            <button className='ton tin tun' onClick={() => openDialog(update)}>
              Read Update
            </button>
          </div>
        ))}
      </div>
      {isDialogOpen && (
        <Addadmincard
          isOpen={isDialogOpen}
          onClose={closeDialog}
          title={selectedUpdate.title}
          content={selectedUpdate.content}
        />
      )}
    </div>
  );
}

export default Addupdatess