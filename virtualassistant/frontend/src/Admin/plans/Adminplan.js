import React, { useState, useEffect } from 'react';
import Footer from '../../Admin/footer/Footer';
import Navbar from '../navbar/Navbar';
import './orderhistory.css';
import './orderhistory.scss';
import eye from "../../images/eye.png"
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import PlansData from './planscards/PlansData';

function Adminplan() {
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState(''); // Default to 'All'
  const [selectedItem, setSelectedItem] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let queryRef = collection(db, "serviced");

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

  return (
    <div className='orderhistory'>
      <div className='admin_clients_navbar'>
        <Navbar />
      </div>
      <div className="orderhistory-content">
        <div className="topContainer orderTopContainer">
          <div className="buttonsBar">
            <p className='addnewplan'>Pl<span>ans</span></p>
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
                Active
              </span>
              <span
                className={`link ${selectedStatus === 'completed' ? 'active' : ''}`}
                onClick={() => handleStatusClick('completed')}
              >
                Completed
              </span>
              <span
                className={`link ${selectedStatus === 'canceled' ? 'active' : ''}`}
                onClick={() => handleStatusClick('canceled')}
              >
                Canceled
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
                <th>Service</th>
                <th>Plan</th>
                <th>Period</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="7">Loading...</td>
                </tr>
              ) : totalItems === 0 ? (
                <tr>
                  <td colSpan="7">No plans available, please come back later!</td>
                </tr>
              ) : (
                paginatedData.map((item, i) => (
                  <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td className='role_title_orderhistory_first'>{item.service}</td>
                    <td>${item.plan / 2} /month</td>
                    <td>{item.period} months</td>
                    <td>${item.totalCost / 2}</td>
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
      <Footer />
      {selectedItem && (
        <PlansData
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

export default Adminplan;