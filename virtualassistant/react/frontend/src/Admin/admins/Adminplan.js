import React, { useState, useEffect } from 'react';
import Footer from '../../Admin/footer/Footer';
import Navbar from '../navbar/Navbar';
import './orderhistory.css';
import './orderhistory.scss';
import eye from '../../images/eye.png';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import PendingData from './adminscards/PlansData';

function Adminsplan() {
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState(''); // Default to 'All'
  const [selectedItem, setSelectedItem] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        let queryRef = collection(db, "users");
        
        // Modify the query to initially fetch data where usertype is "admin"
        queryRef = query(queryRef, where('usertype', '==', 'admin'));

        if (selectedStatus !== '') {
          queryRef = query(queryRef, where('status', '==', selectedStatus));
        }

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

    fetchData();
  }, [selectedStatus]);

  const filteredData = data.filter((item) =>
    item.service.toLowerCase().includes(searchText.toLowerCase())
  );

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / perPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
    setCurrentPage(1); // Reset to the first page when a status is selected
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
    navigate('/admin_dashboard')
  };

  return (
    <div className='orderhistory'>
      <div className='admin_clients_navbar'>
        <Navbar />
      </div>
      <div className="orderhistory-content">
        <div className="topContainer orderTopContainer">
          <div className="buttonsBar">
            <p className='addnewplan'>Admin<span>istrators</span></p>
            <div className="links_group order_links_group order_links_group_content">
              <span
                className={`link ${selectedStatus === '' ? 'active' : ''}`}
                onClick={() => handleStatusClick('')}
              >
                All
              </span>
              <span
                className={`link ${selectedStatus === 'active' ? 'active' : ''}`}
                onClick={() => handleStatusClick('active')}
              >
                Logistic
              </span>
              <span
                className={`link ${selectedStatus === 'completed' ? 'active' : ''}`}
                onClick={() => handleStatusClick('completed')}
              >
                Health
              </span>
              <span
                className={`link ${selectedStatus === 'canceled' ? 'active' : ''}`}
                onClick={() => handleStatusClick('canceled')}
              >
                Business
              </span>
            </div>
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
                <th>Name</th>
                <th>Service</th>
                <th>Contact</th>
                <th>Action</th>
                {/* <th>Status</th> */}
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="6">Loading...</td>
                </tr>
              ) : totalItems === 0 ? (
                <tr>
                  <td colSpan="6">No administrators available, please come back later!</td>
                </tr>
              ) : (
                paginatedData.map((item, i) => (
                  <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td className='role_title_orderhistory_first'>{item.service}</td>
                    <td className='role_title_orderhistory_first'>{item.firstname} {item.lastname}</td>
                    <td className='role_title_orderhistory_first'>{item.usercontact}</td>
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
        <PendingData
          isOpen={true}
          onClose={closePayPalDialog}
          service={selectedItem.service}
          id={selectedItem.id}
          firstname={selectedItem.firstname}
          lastname={selectedItem.lastname}
          email={selectedItem.email}
          usercontact={selectedItem.usercontact}
        />
      )}
    </div>
  );
}

export default Adminsplan;
