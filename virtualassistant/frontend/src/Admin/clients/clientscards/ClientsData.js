import React, { useState, useEffect } from 'react';
import "./ClientsData.css"
import apply from "../../../images/vmainpage.jpg"
import { ChatContext } from '../../../contextr/ChatsContext';
import { AuthContext } from '../../../contextr/AuthContext';
import { findUser } from '../../../services/api/DataApi';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

const ClientsData = ({ isOpen, onClose, id, service, firstname, lastname, usercontact, email, about, org_name, location, timezone, assistants, updateStatus }) => {

  

     const [userr, setUserr] = useState([])
      const [currentuser, setCurrentuser] = useState(null)
      const {state} = useContext(AuthContext)
      const {dispatch} = useContext(ChatContext)
    
      const navigate = useNavigate()
    
      const [client, setClient] =useState(null)
      const [writer, setWriter] = useState(null)
  

  const fetchData = async () => {
        
        try{
          
         console.log(state.user.uid)
        //const res = await findOne(state.user.uid)
    
        const res2 = await findUser(id)
        const res = await findUser(state.user.uid)
    
    
        //setUsers([...res])
        setCurrentuser(res[0])
        setClient(res2[0])
        console.log(res)
        }
        catch(error)
        {
          console.log(error)
        }
        
    }
    
    useEffect(() => {
        fetchData()
    }, [])
  
   const startChatClient = async() => 
    {
    
      dispatch({ type: 'UPDATE_OTHER_USER', payload: client });
      navigate('/messages')
      
      //const start_chat = await createCollection("chats", temp)
    }

  if (!isOpen) return null;
  
  return (
    <div className="dialog-background vadate_dialog-background">
      <div className="dialog-box box_dialog-background">
        <div className='va_data_main_content'>
          <div className='va_data_main_profile'>
            <div className='client_va_data_image'>
              <img src={apply} alt='profile'/>
            </div>
            <div className='assistant_va_data_paragraph_title'>
              <p>Admin’s Profile</p>
            </div>
            <div className='assistant_va_contact_data'>
              <p>Name:</p>
              <p>{firstname} { lastname}</p>
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
              <p>Country: </p>
              <p>{location}</p>
            </div>
            <div className='assistant_va_contact_hr'>
              <hr></hr>
            </div>
            <div className='assistant_va_contact_data assistant_va_contact_data_btn'>
              <div></div>
              {/* <button className='ton tin ton-tin'>Verify</button> */}
              <button className='ton tin ton-tin'>Delete client</button>
              {<button onClick={() => startChatClient()} className='ton tin ton-tin'>Initate chat</button>}
              {/* <button className='ton tin ton-tin'>Disable</button> */}
              <div></div>
            </div>
          </div>
          <div className='va_data_main_second'>
            <div className='va_data_main_document'>
              <div className='assistant_va_contact_data assistant_va_contact_data_paragraph_title'>
              <p>Organization's Details</p>
              <p></p>
            </div>
            <div className='assistant_va_contact_hr'>
              <hr></hr>
              </div>
            <div className='assistant_va_contact_data assistant_va_contact_data_paragraph_body'>
              <p>Industry:</p>
                <p>{ org_name}</p>
            </div>
            <div className='assistant_va_contact_data assistant_va_contact_data_paragraph_body'>
              
              <p>Service:</p>
                <p>{ service}</p>
            </div>
            {/* <div className='assistant_va_contact_data assistant_va_contact_data_paragraph_body'>
              <p>Transcripts:</p>
              <p></p>
            </div> */}
            </div>
            <div className='va_data_main_qualifiction'>
              <div className='assistant_va_contact_data assistant_va_contact_data_paragraph_title'>
              <p>Client's Contact</p>
              <p></p>
            </div>
            <div className='assistant_va_contact_hr'>
              <hr></hr>
              </div>
            <div className='assistant_va_contact_data assistant_va_contact_data_paragraph_body'>
              <p>Contact:</p>
                <p>{ usercontact}</p>
            </div>
            <div className='assistant_va_contact_data assistant_va_contact_data_paragraph_body'>
              <p>How heard about us:</p>
                <p>{ about}</p>
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

export default ClientsData