import React, { useState, useEffect } from 'react';
import Footer from '../../Admin/footer/Footer';
import Navbar from '../navbar/navbar/Navbar';
import './orderhistory.css';
import './orderhistory.scss';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../firebase/firebase';

function Myfunds() {
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState(''); // Default to 'All'

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

  return (
    <div className='orderhistory'>
      <div className='admin_clients_navbar'>
        <Navbar />
      </div>
      <div className="orderhistory-content">
        <div className="topContainer orderTopContainer">
          <div className="buttonsBar">
            <p className='addnewplan'>My <span>funds</span></p>
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
                paid
              </span>
              <span
                className={`link ${selectedStatus === 'completed' ? 'active' : ''}`}
                onClick={() => handleStatusClick('completed')}
              >
                pending
              </span>
              <span
                className={`link ${selectedStatus === 'canceled' ? 'active' : ''}`}
                onClick={() => handleStatusClick('canceled')}
              >
                Refunded
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
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="6">Loading...</td>
                </tr>
              ) : totalItems === 0 ? (
                <tr>
                  <td colSpan="6">No plans available, please come back later!</td>
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
    </div>
  );
}

export default Myfunds;