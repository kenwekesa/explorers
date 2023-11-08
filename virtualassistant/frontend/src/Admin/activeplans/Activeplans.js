import React, { useState, useEffect } from 'react';
import Footer from '../../Admin/footer/Footer';
import Navbar from '../navbar/Navbar';
import './orderhistory.css';
import './orderhistory.scss';
import eye from '../../images/eye.png';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import PendingData from './activecards/PlansData';

function Activeplan() {
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading to true when fetching data
      const q = query(collection(db, 'serviced'), where('status', '==', 'pending'));
      const querySnapshot = await getDocs(q);
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setData(items);
      setIsLoading(false); // Set loading to false after data is retrieved
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.service.toLowerCase().includes(searchText.toLowerCase())
  );

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
    // Close the success message
    setShowSuccessMessage(false);

    // Navigate to "/dashboard" after success message is closed
    navigate('/mydashboard')
  };

  return (
    <div className="orderhistory">
      <div className="admin_clients_navbar">
        <Navbar />
      </div>
      <div className="orderhistory-content">
        <div className="topContainer orderTopContainer">
          <p className="addnewplan">
            Active <span>plans</span>
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
                <th>Service</th>
                <th>Plan</th>
                <th>Assistants</th>
                <th>Period</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                // Show loading indicator if loading is true
                <tr>
                  <td colSpan="8">Loading...</td>
                </tr>
              ) : totalItems === 0 ? (
                // Show "No data from the database" if no data
                <tr>
                  <td colSpan="8">
                    No active order available, please come back later!
                  </td>
                </tr>
              ) : (
                paginatedData.map((item, i) => (
                  <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td className="services_pending_plan_main">{item.service}</td>
                    <td>${item.plan / 2} / month</td>
                    <td>{item.assistants}</td>
                    <td>{item.period} months</td>
                    <td>${item.totalCost /2 }</td>
                    <td>{item.status}</td>
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
        <PendingData
          isOpen={true}
          onClose={closePayPalDialog}
          service={selectedItem.service}
          id={selectedItem.id}
          plan={selectedItem.plan}
          period={selectedItem.period}
          cost={selectedItem.totalCost}
          status={selectedItem.status}
          language={selectedItem.language}
          roleTitle={selectedItem.roleTitle}
          timezone={selectedItem.timezone}
          assistants={selectedItem.assistants}
          roleRequirements={selectedItem.roleRequirements}
        />
      )}
    </div>
  );
}

export default Activeplan;