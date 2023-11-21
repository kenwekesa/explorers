import React from 'react'
import Footer from '../../Admin/footer/Footer'
import Navbar from '../navbar/navbar/Navbar'
import "./Support.css"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contextr/AuthContext'
import { useContext } from 'react'
import Chats from '../../pages/chats/Chats'

const VASupport = () => {

  const navigate = useNavigate()

  const RequireAuth =({children}) => 
  {
    const {state} = useContext(AuthContext)
     return state !=null && state.user? children: navigate('/login')
  }

  return (
    <div className='virtual-support'>
          <div className='virtual_support_navbar'>
              <Navbar />
          </div>
      <div>
        <div className='client_dashboard_title_paragraph admin_inqueries'>
          <p>Inqu<span>eries</span></p>
        </div>
        <RequireAuth><Chats /></RequireAuth>
          </div>
          <div>
        <Footer />
        {/* <VaFooter /> */}
          </div>
      </div>
  )
}

export default VASupport