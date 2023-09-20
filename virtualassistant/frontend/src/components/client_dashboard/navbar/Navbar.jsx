import React from 'react'
import {Dashboard, DesignServices, History, Money, NewReleases, Person, QuestionMark, ShoppingBag, SubscriptOutlined, Support, VerifiedUserRounded} from '@mui/icons-material'

import './navbar.scss'

function Navbar() {
  return (
    <div className='dashnavbar'>

        <div className="navtop">
            <div className="logo">LOGO</div>
            <div className="rightdiv">
                <div className='subdiv'><ShoppingBag/> <span>0.00</span></div>
                <div className='subdiv'><Person/><span>John Doe Mwangi</span></div>

            </div>
        </div>
        <div className="navbottom">
            <div className="navlink">
                <Dashboard/>
                <span>Dashboard</span>
            </div>
            <div className="navlink">
                <NewReleases/>
                <span>New Plan</span>
            </div>
            <div className="navlink">
                <History/>
                <span>Order History</span>
            </div>
            <div className="navlink">
                <SubscriptOutlined/>
                <span>Subscriptions</span>
            </div>
            <div className="navlink">
                <Money />
                <span>Add Funds</span>
            </div>
            <div className="navlink">
                <Support/>
                <span>Support</span>
            </div>
            <div className="navlink">
                
                <DesignServices/>
                <span>Service List</span>
            </div>
            <div className="navlink">
                
                <QuestionMark/>
                <span>FAQs</span>
            </div>
        </div>

    </div>
  )
}

export default Navbar