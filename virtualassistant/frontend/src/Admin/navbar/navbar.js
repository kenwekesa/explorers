import React from 'react'
import "./Navbar.css"
import headset from "../../images/headset.png"
import user from "../../images/users.png"
import wallet from "../../images/wallets.png"
import dashboard from "../../images/dashboard.png"
import message from "../../images/customer.png"
import assistants from "../../images/orderhistory.png"
import cash from "../../images/todolist.png"
import clients from "../../images/clients.png"
import pending from "../../images/pending.png"
import plans from "../../images/coins.png"
import admin from "../../images/help.png"
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ClientNavbar = () => {
    // State to track the visibility of the list
  const [isListVisible, setListVisible] = useState(false);

    // Function to toggle the list visibility
  const toggleListVisibility = () => {
    setListVisible(!isListVisible);
  };
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
          <div className="logo toggle-btn" onClick={toggleListVisibility}>
            <p className='adminuser' ><img src={user} loading="lazy" alt="Logo" /><span>John Doe</span></p>
                  </div>
          <div className='toggle-nav-btn'>
          {isListVisible && (
                <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                </ul>
                      )}
           </div>
           </div>    
          </div>
          <div className='adminnavbarbottom'>
            {/* <div className="logo">
            <p className='adminnavusers' ><img src={user} loading="lazy" alt="Logo" /><span>John Doe</span></p>
              </div> */}
            <div className="logo adminlogo">
            <Link to="/Dashboard" className='adminlink'><p className='adminuser' ><img src={dashboard} loading="lazy" alt="Logo" /><span>Dashboard</span></p></Link>
              </div>
            <div className="logo adminlogo">
            <Link to="/newplan" className='adminlink'><p className='adminuser' ><img src={plans} loading="lazy" alt="Logo" /><span>New Plan</span></p></Link>
              </div>
            <div className="logo adminlogo">
            <Link to="/orderhistory" className='adminlink'><p className='adminuser' ><img src={assistants} loading="lazy" alt="Logo" /><span>Order History</span></p></Link>
              </div>
            <div className="logo adminlogo">
            <Link to="/addfunds" className='adminlink'><p className='adminuser' ><img src={plans} loading="lazy" alt="Logo" /><span>Add Funds</span></p></Link>
              </div>
            <div className="logo adminlogo">
            <Link to="/support" className='adminlink'><p className='adminuser' ><img src={message} loading="lazy" alt="Logo" /><span>Support</span></p></Link>
              </div>
            <div className="logo adminlogo">
            <Link to='/servicelist' className='adminlink'><p className='adminuser' ><img src={cash} loading="lazy" alt="Logo" /><span>Service List</span></p></Link>
              </div>
            <div className="logo adminlogo">
            <Link to="/FAQS" className='adminlink'><p className='adminuser adminuserlast' ><img src={admin} loading="lazy" alt="Logo" /><span>Faqs</span></p></Link>
              </div>
            {/* <div className="logo adminlogo">
            <Link to="/updates" className='adminlink'><p className='adminuser' ><img src={pending} loading="lazy" alt="Logo" /><span>Updates</span></p></Link>
              </div> */}
              {/* <div className="logo">
            <p className='adminuser' ><img src={user} loading="lazy" alt="Logo" /><span>John Doe</span></p>
          </div> */}
          </div>
      </div>
  )
}

export default ClientNavbar