import React from 'react'
import Chats from '../../pages/chats/Chats'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import "./Adminmessages.css"
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contextr/AuthContext'

const Adminmessages = () => {

  const navigate = useNavigate()

  const RequireAuth =({children}) => 
  {
    const {state} = useContext(AuthContext)
     return state !=null && state.user? children: navigate('/login')
  }

  return (
    <div className='admindashboard'>
          <div className="dashboardnav">
            <Navbar/>
          </div>
          <div>
          <div className='admin_messages'>
          <RequireAuth><Chats /></RequireAuth>
          </div>
            <Footer />
          </div>
      </div>
  )
}

export default Adminmessages