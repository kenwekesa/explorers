// import React, { useState } from 'react';
// import {
//   Dashboard,
//   DesignServices,
//   History,
//   Money,
//   NewReleases,
//   Person,
//   QuestionMark,
//   ShoppingBag,
//   SubscriptOutlined,
//   Support,
//   Menu, // Import the menu icon
// } from '@mui/icons-material';

// import './navbar.scss';

// function Navbar() {
//   // Create state to track the menu's open/closed state
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Toggle the menu state when the menu icon is clicked
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className='dashnavbar'>
//       <div className='navtop'>
//         <div className='logo'>LOGO</div>
//         <div className='rightdiv'>
//           <div className='subdiv'>
//             <ShoppingBag /> <span>0.00</span>
//           </div>
//           <div className='subdiv'>
//             <Person />
//             <span>John Doe Mwangi</span>
//           </div>
//         </div>
//         {/* Render the menu icon */}
//         <div className='menu-icon' onClick={toggleMenu}>
//           <Menu />
//         </div>
//       </div>
//       {/* Conditionally render the navigation menu based on the menu state */}
//       {isMenuOpen && (
//         <div className='navbottom'>
//               <div className="navlink">
//                 <Dashboard/>
//                 <span>Dashboard</span>
//             </div>
//             <div className="navlink">
//                 <NewReleases/>
//                 <span>New Plan</span>
//             </div>
//             <div className="navlink">
//                 <History/>
//                 <span>Order History</span>
//             </div>
//             <div className="navlink">
//                 <SubscriptOutlined/>
//                 <span>Subscriptions</span>
//             </div>
//             <div className="navlink">
//                 <Money />
//                 <span>Add Funds</span>
//             </div>
//             <div className="navlink">
//                 <Support/>
//                 <span>Support</span>
//             </div>
//             <div className="navlink">
                
//                 <DesignServices/>
//                 <span>Service List</span>
//             </div>
//             <div className="navlink">
                
//                 <QuestionMark/>
//                 <span>FAQs</span>
//             </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;







// import React from 'react';
// import {
//   Dashboard,
//   DesignServices,
//   History,
//   Money,
//   NewReleases,
//   Person,
//   QuestionMark,
//   ShoppingBag,
//   SubscriptOutlined,
//   Support,
//   VerifiedUserRounded,
//   Menu, // Import the menu icon
// } from '@mui/icons-material';

// import './navbar.scss';

// function Navbar() {
//   return (
//     <div className='dashnavbar'>
     

//       <div className='navtop'>
//         <div className='logo'>LOGO</div>
//         <div className='rightdiv'>
//           <div className='subdiv'>
//             <ShoppingBag /> <span>0.00</span>
//           </div>
//           <div className='subdiv'>
//             <Person />
//             <span>John Doe Mwangi</span>
//           </div>
//         </div>
//       </div>

//       {/* Conditionally render the menu icon on small screens */}
//       <div className='menu-icon'>
//         <Menu />
//       </div>

//       {/* Always render the navigation menu on large screens */}
//       <div className='navbottom'>
//         {/* ...your navigation links */}
//         <div className="navlink">
//                 <Dashboard/>
//                 <span>Dashboard</span>
//             </div>
//             <div className="navlink">
//                 <NewReleases/>
//                 <span>New Plan</span>
//             </div>
//             <div className="navlink">
//                 <History/>
//                 <span>Order History</span>
//             </div>
//             <div className="navlink">
//                 <SubscriptOutlined/>
//                 <span>Subscriptions</span>
//             </div>
//             <div className="navlink">
//                 <Money />
//                 <span>Add Funds</span>
//             </div>
//             <div className="navlink">
//                 <Support/>
//                 <span>Support</span>
//             </div>
//             <div className="navlink">
                
//                 <DesignServices/>
//                 <span>Service List</span>
//             </div>
//             <div className="navlink">
                
//                 <QuestionMark/>
//                 <span>FAQs</span>
//             </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;



import React, { useState } from 'react';
import {
  Dashboard,
  DesignServices,
  History,
  Money,
  NewReleases,
  Person,
  QuestionMark,
  ShoppingBag,
  SubscriptOutlined,
  Support,
  VerifiedUserRounded,
  Menu, // Import the menu icon
} from '@mui/icons-material';

import './navbar.scss';
import './navbar.scss'
import "./navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='dashnavbar'>
      {/* Render the menu icon */}
      <div className='menu-icon' onClick={toggleMenu}>
        <Menu />
      </div>

      <div className={`navtop ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className='logo'>LOGO</div>
        <div className='rightdiv'>
          <div className='subdiv'>
            <ShoppingBag /> <span>0.00</span>
          </div>
          <div className='subdiv'>
            <Person />
            <span>John Doe Mwangi</span>
          </div>
        </div>
      </div>

      {/* Conditionally render the navigation menu */}
      {isMenuOpen && (
        <div className='navbottom'>
          {/* ...your navigation links */}

          <div className="navlink">
                <Dashboard/>
                <span>Dashboard</span>
            </div>
            <div className="navlink">
                <Link to="/newplan"><NewReleases/>
                <span>New Plan</span></Link>
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
                <Link to="/addfunds"> <Money />
                <span>Add Funds</span> </Link>
            </div>
            <div className="navlink">
                <Link to="/support"><Support/>
                <span>Support</span></Link>
            </div>
            <div className="navlink">
                
                <Link to="/servicelist"> <DesignServices/>
                <span>Service List</span></Link>
            </div>
            <div className="navlink">
                
                <QuestionMark/>
                <span>FAQs</span>
            </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
