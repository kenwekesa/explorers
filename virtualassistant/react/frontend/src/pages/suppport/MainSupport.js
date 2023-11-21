import React from 'react'
import Footer from '../../Admin/footer/Footer'
import ClientNavbar from '../../Admin/navbar/ClientNavbar'
import Chats from '../chats/Chats'
import "./MainSupport.css"
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contextr/AuthContext'

const MainSupport = () => {

  const navigate = useNavigate()

  const RequireAuth =({children}) => 
  {
    const {state} = useContext(AuthContext)
     return state !=null && state.user? children: navigate('/login')
  }

  return (
      <div className='MainSupport'>
        <div className='MainSupportNavbar'>
        {/* <ClientNavbar /> */}
        <ClientNavbar />
      </div>
      <div className='client_dashboard_title_paragraph admin_inqueries'>
          <p>Inq<span>ueries</span></p>
        </div>
       <div>
        <RequireAuth><Chats /></RequireAuth>
       </div>
        <Footer />
      </div>
  )
}

export default MainSupport