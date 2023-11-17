import React, { useState, useEffect } from 'react';
import Footer from '../../Admin/footer/Footer';
import Navbar from '../navbar/Navbar';
import './orderhistory.css';
import './orderhistory.scss';
import eye from '../../images/eye.png';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import EmailsData from './emailscards/EmailsData';

const Emailplan = () => {
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const q = query(collection(db, 'emails'));
        const querySnapshot = await getDocs(q);
        const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setData(items);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) => {
    const email = item?.email?.toLowerCase() || '';
    return email.includes(searchText.toLowerCase());
  });

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / perPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const openPayPalDialog = (item) => {
    setSelectedItem(item);
  };

  const closePayPalDialog = () => {
    setSelectedItem(null);
  };

  const closeSuccessMessage = () => {
    setShowSuccessMessage(false);
    navigate('/mydashboard');
  };

  return (
    <div className="orderhistory">
      <div className="admin_clients_navbar">
        <Navbar />
      </div>
      <div className="orderhistory-content">
        <div className="topContainer orderTopContainer">
          <p className="addnewplan">
            Em<span>ails</span>
          </p>
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
                <th>Subject</th>
                <th>Contact</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                // Show loading indicator if loading is true
                <tr>
                  <td colSpan="5">Loading...</td>
                </tr>
              ) : totalItems === 0 ? (
                // Show "No data from the database" if no data
                <tr>
                  <td colSpan="5">
                    No active order available, please come back later!
                  </td>
                </tr>
              ) : (
                paginatedData.map((item, i) => (
                  <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td className="services_pending_plan_main">
                      {item.email}
                    </td>
                    <td>{item.subject}</td>
                    <td>{item.contact}</td>
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
      {showSuccessMessage && (
        <div className="success-dialog">
          <div className="success-dialog-content">
            <p>Role taken successfully</p>
            <button onClick={closeSuccessMessage}>Close</button>
          </div>
        </div>
      )}
      <Footer />
      {selectedItem && (
        <EmailsData
          isOpen={true}
          onClose={closePayPalDialog}
          // Pass the properties that actually exist in your data
          email={selectedItem.email}
          lastName={selectedItem.lastName}
          firstName={selectedItem.firstName}
          message={selectedItem.message}
          country={selectedItem.country}
          subject={selectedItem.subject}
          contact={selectedItem.contact}
        />
      )}
    </div>
  );
};

export default Emailplan;