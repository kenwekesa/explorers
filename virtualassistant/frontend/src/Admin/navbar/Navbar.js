import React from 'react'
import "./Navbar.css"
import headset from "../../images/headset.png"
import user from "../../images/users.png"
import wallet from "../../images/wallets.png"
import dashboard from "../../images/dashboard.png"
import message from "../../images/messages.png"
import assistants from "../../images/assistants.png"
import cash from "../../images/cash.png"
import clients from "../../images/clients.png"
import pending from "../../images/pending.png"
import plans from "../../images/newplans.png"
import admin from "../../images/admin.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div className='adminnavbar'>
          <div className='adminnavbartop'>
          <div className="logo">
            <a className='navlogo'><img src={headset} loading="lazy" alt="Logo" />VA</a>
              </div>
            <div className='adminnavbartopleft'>
            <div className="logo">
             <p className='adminuser'><img src={wallet} loading="lazy" alt="Logo" /><span>$100.00</span></p>
              </div>
            <div className="logo">
            <p className='adminuser' ><img src={user} loading="lazy" alt="Logo" /><span>John Doe</span></p>
          </div>
           </div>    
          </div>
          <div className='adminnavbarbottom'>
            {/* <div className="logo">
            <p className='adminnavusers' ><img src={user} loading="lazy" alt="Logo" /><span>John Doe</span></p>
              </div> */}
            <div className="logo adminlogo">
            <Link to="/dashboard" className='adminlink'><p className='adminuser' ><img src={dashboard} loading="lazy" alt="Logo" /><span>Dashboard</span></p></Link>
              </div>
            <div className="logo adminlogo">
            <Link to="/clients" className='adminlink'><p className='adminuser' ><img src={clients} loading="lazy" alt="Logo" /><span>Clients</span></p></Link>
              </div>
            <div className="logo adminlogo">
            <Link to="/assistants" className='adminlink'><p className='adminuser' ><img src={assistants} loading="lazy" alt="Logo" /><span>Assistants</span></p></Link>
              </div>
            <div className="logo adminlogo">
            <Link to="/plans" className='adminlink'><p className='adminuser' ><img src={plans} loading="lazy" alt="Logo" /><span>Plans</span></p></Link>
              </div>
            <div className="logo adminlogo">
            <Link to="/messages" className='adminlink'><p className='adminuser' ><img src={message} loading="lazy" alt="Logo" /><span>Messages</span></p></Link>
              </div>
            <div className="logo adminlogo">
            <Link to='/funds' className='adminlink'><p className='adminuser' ><img src={cash} loading="lazy" alt="Logo" /><span>Funds</span></p></Link>
              </div>
            <div className="logo adminlogo">
            <Link to="/register" className='adminlink'><p className='adminuser' ><img src={admin} loading="lazy" alt="Logo" /><span>Register</span></p></Link>
              </div>
            <div className="logo adminlogo">
            <Link to="/updates" className='adminlink'><p className='adminuser' ><img src={pending} loading="lazy" alt="Logo" /><span>Updates</span></p></Link>
              </div>
              {/* <div className="logo">
            <p className='adminuser' ><img src={user} loading="lazy" alt="Logo" /><span>John Doe</span></p>
          </div> */}
          </div>
      </div>
  )
}

export default Navbar