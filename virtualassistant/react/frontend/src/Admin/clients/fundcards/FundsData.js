import React, { useState, useEffect } from 'react';
import "./fundsData.css"
import apply from "../../../images/vmainpage.jpg"
import { ChatContext } from '../../../contextr/ChatsContext';
import { AuthContext } from '../../../contextr/AuthContext';
import { findUser } from '../../../services/api/DataApi';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

const FundsData = ({ isOpen, onClose, id, service, firstname, lastname, usercontact, email, about, org_name, location, timezone, assistants, updateStatus }) => {

  

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
              <button className='ton tin ton-tin'>Delete</button>
              {<button onClick={() => startChatClient()} className='ton tin ton-tin'>Chat</button>}
              <button className='ton tin ton-tin'>Funds</button>
              
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

export default FundsData