import React, { useState, useEffect, useContext } from 'react';
import "./ClientsData.css";
import "./VAData.css"
import apply from "../../../images/vmainpage.jpg";
import { ChatContext } from '../../../contextr/ChatsContext';
import { AuthContext } from '../../../contextr/AuthContext';
import { findUser } from '../../../services/api/DataApi';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../firebase/firebase';
import { updateDoc, doc } from 'firebase/firestore';
import { storage } from '../../../firebase/firebase';
import { ref, getMetadata, getDownloadURL } from 'firebase/storage';

const VAData = ({ isOpen, onClose, id, service, user_Id, firstname, lastname, location, contact, email, about, org_name, cvURLs, transcriptsURLs, degreeURLs, updateStatus }) => {
  const [userr, setUserr] = useState([]);
  const [currentuser, setCurrentuser] = useState(null);
  const { state } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const navigate = useNavigate();
  const [client, setClient] = useState(null);
  const [writer, setWriter] = useState(null);
  const [unverifying, setUnverifying] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleTakeRole = async () => {
    try {
      // Update the status to "active" in Firestore using the ID prop
      setUnverifying(true);

      const docRef = doc(db, 'users', user_Id);
      await updateDoc(docRef, { status: 'unverified' });

      // Call the parent component's updateStatus function (if needed)
      if (updateStatus) {
        updateStatus('unverified');
      }

      // Set the success notification

      // Close the current dialog
      // onClose();
      navigate("/admin_dashboard");
    } catch (error) {
      console.error('Error updating document:', error);
    } finally {
      setUnverifying(false);
    }
  };

  const handleDelete = async () => {
    try {
      setDeleting(true);

      // Add your logic for deleting here

      // Close the current dialog
      onClose();
    } catch (error) {
      console.error('Error deleting document:', error);
    } finally {
      setDeleting(false);
    }
  };

  const fetchData = async () => {
    try {
      console.log(state.user.uid);
      const res2 = await findUser(id);
      const res = await findUser(state.user.uid);
      setCurrentuser(res[0]);
      setClient(res2[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const startChatClient = async () => {
    if (client) {
      dispatch({ type: 'UPDATE_OTHER_USER', payload: client });
      navigate('/messages');
    } else {
      // Handle the case where client data is not available
      console.error('Client data is undefined');
    }
  };

  const downloadFirestoreFile = async (path, filename) => {
  try {
    const fileRef = ref(storage, path);
    const url = await getDownloadURL(fileRef);

    const linkElement = document.createElement('a');
    linkElement.href = url;
    linkElement.download = filename;
    linkElement.click();
  } catch (error) {
    console.error("Error downloading Firestore file:", error);
  }
  };
  
  const openFirestoreFile = (path, fileName) => {
  // Assuming downloadFirestoreFile is a function that downloads the file
  // You might need to adjust this part based on how you handle file downloads
  downloadFirestoreFile(path, fileName);

  // Open the file in a new window or tab
  window.open(`/path/to/files/${fileName}`, '_blank');
};

  if (!isOpen) return null;

  return (
    <div className="dialog-background vadate_dialog-background">
      <div className="dialog-box box_dialog-background">
        <div className='va_data_main_content'>
          <div className='va_data_main_profile va_data_main_profile_main'>
            <div className='client_va_data_image_pro'>
              <img src={apply} alt='profile'/>
            </div>
            <div className='assistant_va_data_paragraph_title'>
              <p>Virtual Assistant’s Profile</p>
            </div>
            <div className='assistant_va_contact_data'>
              <p>Name:</p>
              <p>{firstname} {lastname}</p>
            </div>
            <div className='assistant_va_contact_hr'>
              <hr></hr>
            </div>
            <div className='assistant_va_contact_data'>
              <p>Email:</p>
              <p>{email}</p>
            </div>
            <div className='assistant_va_contact_hr'>
              <hr></hr>
            </div>
            <div className='assistant_va_contact_data'>
              <p>Country:</p>
              <p>{location}</p>
            </div>
            <div className='assistant_va_contact_hr'>
              <hr></hr>
            </div>
            <div className='assistant_va_contact_data'>
              <p>Contact:</p>
              <p>{contact}</p>
            </div>
            <div className='assistant_va_contact_hr'>
              <hr></hr>
            </div>
            <div className='assistant_va_contact_data'>
                <p>Va Id:</p>
                <p>{id}</p>
              </div>
            <div className='assistant_va_contact_hr'>
              <hr></hr>
            </div>
            <div className='assistant_va_contact_data assistant_va_contact_data_btn'>
              <button className='ton tin ton-tin' onClick={handleTakeRole}>
                {unverifying ? 'Unverifying...' : 'Unverify'}
              </button>
              {<button onClick={() => startChatClient()} className='ton tin ton-tin'>Chat</button>}
              <button className='ton tin ton-tin' onClick={handleDelete}>
                {deleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
          <div className='va_data_main_second'>
            <div className='va_data_main_document va_data_main_document_main'>
              <div className='assistant_va_contact_data assistant_va_contact_data_paragraph_title'>
                <p>Virtual Assistant's Documents</p>
                <p></p>
              </div>
              <div className='assistant_va_contact_hr'>
                <hr></hr>
              </div>
              <div className='assistant_va_contact_data assistant_va_contact_data_paragraph_body'>
                <p>CV:</p>
                {cvURLs && cvURLs.map((cv, index) => {
                  const path = cv; // Remove decodeURI
                  const fileName = path.split('/').pop();
                  return (
                    <button className='ton tin tin-ton file_btn_download' key={index} onClick={() => openFirestoreFile(path, fileName)}>
                      File {index + 1}
                    </button>
                  );
                })}
              </div>
              <div className='assistant_va_contact_data assistant_va_contact_data_paragraph_body'>
                <p>Degree:</p>
                {degreeURLs && degreeURLs.map((degree, index) => {
                  const path = degree; // Remove decodeURI
                  const fileName = path.split('/').pop();
                  return (
                    <button key={index} className='tin ton tin-ton file_btn_download' onClick={() => downloadFirestoreFile(path, fileName)}>
                      File {index + 1}
                    </button>
                  );
                })}
              </div>
              <div className='assistant_va_contact_data assistant_va_contact_data_paragraph_body'>
                <p>Transcripts:</p>
                {transcriptsURLs && transcriptsURLs.map((transcript, index) => {
                  const path = transcript; // Remove decodeURI
                  const fileName = path.split('/').pop();
                  return (
                    <button className='tin ton tin-ton file_btn_download' key={index} onClick={() => downloadFirestoreFile(path, fileName)}>
                      File {index + 1}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className='va_data_main_qualifiction va_data_main_qualifiction_main'>
              <div className='assistant_va_contact_data assistant_va_contact_data_paragraph_title'>
                <p>Virtual Assistant's Qualification</p>
              </div>
              <div className='assistant_va_contact_hr'>
                <hr></hr>
              </div>
              <div className='assistant_va_contact_data assistant_va_contact_data_paragraph_body'>
                <p>Specialization:</p>
                <p>{service}</p>
              </div>
              <div className='assistant_va_contact_data assistant_va_contact_data_paragraph_body'>
                <p>Interest:</p>
                <p>{org_name}</p>
              </div>
              <div className='assistant_va_contact_data assistant_va_contact_data_paragraph_body'>
                <p>How you heard about us:</p>
                <p>{about}</p>
              </div>
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

export default VAData;
