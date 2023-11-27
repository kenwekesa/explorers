import React, { useState, useEffect, useContext } from 'react';
import "./ClientsData.css";
import "./VAData.css"
import apply from "../../../images/vmainpage.jpg";
import { ChatContext } from '../../../contextr/ChatsContext';
import { AuthContext } from '../../../contextr/AuthContext';
import { findUser } from '../../../services/api/DataApi';
import { useNavigate } from 'react-router-dom';
import { db, storage } from '../../../firebase/firebase';
import { ref, getMetadata, getDownloadURL } from 'firebase/storage';
import { updateDoc, doc } from 'firebase/firestore';

const VADatas = ({ isOpen, onClose, id, service, user_Id, firstname, lastname, location, contact, email, about, org_name, cvURLs, transcriptsURLs, degreeURLs, updateStatus }) => {
  const [userr, setUserr] = useState([]);
  const [currentuser, setCurrentuser] = useState(null);
  const { state } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const navigate = useNavigate();
  const [client, setClient] = useState(null);
  const [writer, setWriter] = useState(null);
  const [verifying, setVerifying] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleTakeRole = async () => {
    try {
      // Check if user_Id is defined
      if (!user_Id) {
        console.log(user_Id)
        console.error('user_Id is undefined');
        return;
      }

      // Update the status to "active" in Firestore using the ID prop
      setVerifying(true);

      const docRef = doc(db, 'users', user_Id);
      await updateDoc(docRef, { status: 'verified' });

      // Call the parent component's updateStatus function (if needed)
      if (updateStatus) {
        updateStatus('verified');
      }

      // Set the success notification

      // Close the current dialog
      // onClose();
      navigate("/admin_dashboard");
    } catch (error) {
      console.error('Error updating document:', error);
    } finally {
      setVerifying(false);
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
            <div className='assistant_va_contact_data assistant_va_contact_data_btn'>
              <button className='ton tin ton-tin' onClick={handleTakeRole}>
                {verifying ? 'Verifying...' : 'Verify'}
              </button>
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
                    <button key={index} className='file_btn_download' onClick={() => downloadFirestoreFile(path, fileName)}>
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
                    <button key={index} className='file_btn_download' onClick={() => downloadFirestoreFile(path, fileName)}>
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
                    <button key={index} className='file_btn_download' onClick={() => downloadFirestoreFile(path, fileName)}>
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
              <div className='assistant_va_contact_data assistant_va_contact_data_paragraph_body'>
                <p>Va Id:</p>
                <p>{id}</p>
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

export default VADatas;




