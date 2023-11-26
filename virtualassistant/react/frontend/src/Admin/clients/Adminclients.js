// import React, { useState, useEffect } from 'react';
// import Footer from '../../Admin/footer/Footer';
// import Navbar from '../navbar/Navbar';
// import './orderhistory.css';
// import './orderhistory.scss';
// import eye from '../../images/eye.png';
// import { collection, getDocs, query, where } from "firebase/firestore";
// import { db } from '../../firebase/firebase';
// import { useNavigate } from 'react-router-dom';
// import ClientsData from "./clientscards/ClientsData"
// import { useContext } from 'react';
// import { AuthContext } from '../../contextr/AuthContext';


// function Adminclients() {
//   const [data, setData] = useState([]);
//   const [perPage, setPerPage] = useState(5);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchText, setSearchText] = useState('');
//   const [isLoading, setIsLoading] = useState(true);
//   const [selectedStatus, setSelectedStatus] = useState(''); // Default to 'All'
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const navigate = useNavigate()
//   const {state} = useContext(AuthContext)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setIsLoading(true);
//         let queryRef = collection(db, "users");
        
//         // Modify the query to initially fetch data where usertype is "admin"
//         queryRef = query(queryRef, where('usertype', '==', 'client'));

//         if (selectedStatus !== '') {
//           queryRef = query(queryRef, where('status', '==', selectedStatus));
//         }

//         const querySnapshot = await getDocs(queryRef);
//         const items = [];
//         querySnapshot.forEach((doc) => {
//           items.push({ id: doc.id, ...doc.data() });
//         });
//         setData(items);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [selectedStatus]);

//   const filteredData = data.filter((item) =>
//     item.service.toLowerCase().includes(searchText.toLowerCase())
//   );

//   const totalItems = filteredData.length;
//   const totalPages = Math.ceil(totalItems / perPage);

//   const paginatedData = filteredData.slice(
//     (currentPage - 1) * perPage,
//     currentPage * perPage
//   );

//   const handleStatusClick = (status) => {
//     setSelectedStatus(status);
//     setCurrentPage(1); // Reset to the first page when a status is selected
//   };

//   const openPayPalDialog = (item) => {
//     setSelectedItem(item);
//   };

//   const closePayPalDialog = () => {
//     setSelectedItem(null);
//   };

//   const closeSuccessMessage = () => {
//     // Close the success message
//     setShowSuccessMessage(false);

//     // Navigate to "/dashboard" after success message is closed
//     navigate('/admin_dashboard')
//   };

//   return (
//     <div className='orderhistory'>
//       <div className='admin_clients_navbar'>
//         <Navbar />
//       </div>
//       <div className="orderhistory-content">
//         <div className="topContainer orderTopContainer">
//           <div className="buttonsBar">
//             <p className='addnewplan'>Cl<span>ients</span></p>
//             <div className="links_group order_links_group order_links_group_content">
//               <span
//                 className={`link ${selectedStatus === '' ? 'active' : ''}`}
//                 onClick={() => handleStatusClick('')}
//               >
//                 All
//               </span>
//               <span
//                 className={`link ${selectedStatus === 'Small business solutions' ? 'active' : ''}`}
//                 onClick={() => handleStatusClick('Small business solutions')}
//               >
//                 Logistic
//               </span>
//               <span
//                 className={`link ${selectedStatus === 'Small business solutions' ? 'active' : ''}`}
//                 onClick={() => handleStatusClick('Small business solutions')}
//               >
//                 Health
//               </span>
//               <span
//                 className={`link ${selectedStatus === 'Small business solutions' ? 'active' : ''}`}
//                 onClick={() => handleStatusClick('Small business solutions')}
//               >
//                 Business
//               </span>
//             </div>
//           </div>
//         </div>
//          <div className="tableContainer">
//           <div className="filter-search">
//             <div className="filter">
//               <label>Show:</label>
//               <select onChange={(e) => setPerPage(Number(e.target.value))}>
//                 <option value="5">5</option>
//                 <option value="10">10</option>
//                 <option value="20">20</option>
//               </select>
//               entries
//             </div>
//             <div className="search">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 value={searchText}
//                 onChange={(e) => setSearchText(e.target.value)}
//               />
//             </div>
//           </div>
//           <table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Service</th>
//                 <th>Name</th>
//                 <th>Contact</th>
//                 <th>Location</th>
//                 <th>Action</th>
//                 {/* <th>Status</th> */}
//               </tr>
//             </thead>
//             <tbody>
//               {isLoading ? (
//                 <tr>
//                   <td colSpan="6">Loading...</td>
//                 </tr>
//               ) : totalItems === 0 ? (
//                 <tr>
//                   <td colSpan="6">No clients available, please come back later!</td>
//                 </tr>
//               ) : (
//                 paginatedData.map((item, i) => (
//                   <tr key={item.id}>
//                     <td>{i + 1}</td>
//                     <td className='role_title_orderhistory_first'>{item.service}</td>
//                     <td className='role_title_orderhistory_first'>{item.firstname} {item.lastname}</td>
//                     <td className='role_title_orderhistory_first'>{item.contact}</td>
//                     <td>{item.location}</td>
//                     <td className="admin_btn_view">
//                       <img
//                         src={eye}
//                         alt="view"
//                         onClick={() => openPayPalDialog(item)}
//                       />
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//           <div className="pagination">
//             <div className="pagination-info">
//               Showing {perPage * (currentPage - 1) + 1} - {perPage * currentPage} of {totalItems} entries
//             </div>
//             <div className="pagination-buttons">
//               <button
//                 disabled={currentPage === 1}
//                 onClick={() => setCurrentPage(currentPage - 1)}
//               >
//                 Previous
//               </button>
//               <button
//                 disabled={currentPage === totalPages}
//                 onClick={() => setCurrentPage(currentPage + 1)}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//       {selectedItem && (
//         <ClientsData
//           isOpen={true}
//           onClose={closePayPalDialog}
//           service={selectedItem.service}
//           id={selectedItem.user_id}
//           firstname={selectedItem.firstName}
//           lastname={selectedItem.lastName}
//           email={selectedItem.email}
//           usercontact={selectedItem.contact}
//           about={selectedItem.about}
//           org_name={selectedItem.org_name}
//           location={selectedItem.location}
//         />
//       )}
//     </div>
//   );
// }

// export default Adminclients;

import React, { useState, useEffect } from 'react';
import Footer from '../../Admin/footer/Footer';
import Navbar from '../navbar/Navbar';
import './orderhistory.css';
import './orderhistory.scss';
import eye from '../../images/eye.png';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import ClientsData from "./clientscards/ClientsData"
import { useContext } from 'react';
import { AuthContext } from '../../contextr/AuthContext';

function Adminclients() {
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState(''); // Default to 'All'
  const [selectedItem, setSelectedItem] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();
  const { state } = useContext(AuthContext);

  const fetchData = async (queryRef) => {
    try {
      setIsLoading(true);

      const querySnapshot = await getDocs(queryRef);
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setData(items);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch with 'client' usertype
    const initialQueryRef = query(collection(db, "users"), where('usertype', '==', 'client'));
    fetchData(initialQueryRef);
  }, [selectedStatus]);

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
    setSearchText(''); // Clear the search text

    // Update the query to fetch data based on the selected status
    const queryRef = query(collection(db, "users"), where('usertype', '==', 'client'), where('status', '==', status));
    
    fetchData(queryRef);
  };

  const handleServiceClick = (service) => {
    setSelectedStatus(''); // Reset the selectedStatus when a service is clicked
    setSearchText(''); // Clear the search text

    // Update the query to fetch data based on the selected service
    const queryRef = query(collection(db, "users"), where('usertype', '==', 'client'), where('service', '==', service));

    fetchData(queryRef);
  };

  const openPayPalDialog = (item) => {
    setSelectedItem(item);
  };

  const closePayPalDialog = () => {
    setSelectedItem(null);
  };

  const closeSuccessMessage = () => {
    // Close the success message
    setShowSuccessMessage(false);

    // Navigate to "/dashboard" after success message is closed
    navigate('/admin_dashboard');
  };

  const filteredData = data.filter((item) =>
    item.service.toLowerCase().includes(searchText.toLowerCase())
  );

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / perPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <div className='orderhistory'>
      <div className='admin_clients_navbar'>
        <Navbar />
      </div>
      <div className="orderhistory-content">
        <div className="topContainer orderTopContainer">
          <div className="buttonsBar">
            <p className='addnewplan'>Cl<span>ients</span></p>
            <div></div>
            {/* <div className="links_group order_links_group order_links_group_content">
              <span
                className={`link ${selectedStatus === '' ? 'active' : ''}`}
                onClick={() => handleStatusClick('')}
              >
                All
              </span>
              <span
                className={`link ${selectedStatus === 'Logistic' ? 'active' : ''}`}
                onClick={() => handleStatusClick('Logistic')}
              >
                Logistic
              </span>
              <span
                className={`link ${selectedStatus === 'Health' ? 'active' : ''}`}
                onClick={() => handleStatusClick('Health')}
              >
                Health
              </span>
              <span
                className={`link ${selectedStatus === 'Business' ? 'active' : ''}`}
                onClick={() => handleStatusClick('Business')}
              >
                Business
              </span>
              <span
                className={`link ${selectedStatus === 'Small business solutions' ? 'active' : ''}`}
                onClick={() => handleServiceClick('Small business solutions')}
              >
                Small Business Solutions
              </span>
            </div> */}
          </div>
        </div>
         <div className="tableContainer">
          <div className="filter-search">
            <div className="filter">
              <label>Show:</label>
              <select onChange={(e) => setPerPage(Number(e.target.value))}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
              entries
            </div>
            <div className="search">
              <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Service</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="6">Loading...</td>
                </tr>
              ) : totalItems === 0 ? (
                <tr>
                  {/* <td colSpan="6">No clients available, please come back later!</td> */}
                </tr>
              ) : (
                paginatedData.map((item, i) => (
                  <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td className='role_title_orderhistory_first'>{item.service}</td>
                    <td className='role_title_orderhistory_first'>{item.firstname} {item.lastname}</td>
                    <td className='role_title_orderhistory_first'>{item.contact}</td>
                    <td>{item.location}</td>
                    <td className="admin_btn_view">
                      <img
                        src={eye}
                        alt="view"
                        onClick={() => openPayPalDialog(item)}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <div className="pagination">
            <div className="pagination-info">
              Showing {perPage * (currentPage - 1) + 1} - {perPage * currentPage} of {totalItems} entries
            </div>
            <div className="pagination-buttons">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {selectedItem && (
        <ClientsData
          isOpen={true}
          onClose={closePayPalDialog}
          service={selectedItem.service}
          id={selectedItem.user_id}
          firstname={selectedItem.firstname}
          lastname={selectedItem.lastname}
          email={selectedItem.email}
          usercontact={selectedItem.contact}
          about={selectedItem.about}
          org_name={selectedItem.org_name}
          location={selectedItem.location}
        />
      )}
    </div>
  );
}

export default Adminclients;

