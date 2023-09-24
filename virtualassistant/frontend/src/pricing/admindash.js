import React from 'react'
import './admindash.css'
import img3 from "../../src/images/In Progress.png"
import img4 from "../../src/images/Cancel.png"
import img5 from "../../src/images/Checkmark.png"
import img6 from "../../src/images/Cash in Hand.png"
import img7 from "../../src/images/Message.png"
import img8 from "../../src/images/Technical Support.png"


const Admindash = () => {
  return (
    <div className='dashhead'>
      <h1>Dashboard</h1>

      <div className='dashp'>
        <div className='dashcard'>
          <p>Active plans</p>
          <img src={img3} alt='logo'/>
        </div>
        <div className='dashcard'>
          <p>Cancelled Plans</p>
          <img src={img4} alt='logo'/>
        </div>
        <div className='dashcard'>
          <p>Completed plans</p>
          <img src={img5} alt='logo'/>
        </div>
        <div className='dashcard'>
          <p>Available funds</p>
          <img src={img6} alt='logo'/>
        </div>
        <div className='dashcard'>
          <p>New Messages</p>
          <img src={img7} alt='logo'/>
        </div>
        <div className='dashcard'>
          <p>Support Tickets</p>
          <img src={img8} alt='logo'/>
        </div>
      </div>

      <div className='dashcard0'>
        <h3>Admin Notifications</h3>
      </div>
    </div>
  )
}

export default Admindash