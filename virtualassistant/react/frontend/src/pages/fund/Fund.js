import React, { useState, useEffect } from 'react';
import Footer from '../../Admin/footer/Footer';
import ClientNavbar from '../../Admin/navbar/ClientNavbar';
import './orderhistory.css';
import './orderhistory.scss';
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from '../../firebase/firebase';

function Fund() {
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  const fetchData = async () => {
    setIsLoading(true); // Set loading to true when fetching data
    const q = query(collection(db, "banks"), orderBy("timestamp", "desc")); // Assuming "date" is the field you want to order by
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

  const formatDate = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleString(); // Adjust the format as needed
  };

  const filteredData = data.filter((item) =>
    (item.given_name || '').toLowerCase().includes(searchText.toLowerCase())
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
        <ClientNavbar />
      </div>
      <div className="orderhistory-content">
        <div className="topContainer orderTopContainer">
          <p className='addnewplan'>My <span>transactions</span></p>
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
                <th>Order ID</th>
                <th>Payment Date</th>
                <th>Payer Name</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? ( // Show loading indicator if loading is true
                <tr>
                  <td colSpan="5">Loading...</td>
                </tr>
              ) : totalItems === 0 ? ( // Show "No data from the database" if no data
                <tr>
                  <td colSpan="5">No funds available please come back later!</td>
                </tr>
              ) : (
                paginatedData.map((item, i) => (
                  <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td>{item.id}</td>
                    <td>{formatDate(item.timestamp)}</td>
                    <td>{item.given_name}</td>
                    <td>${item.amount}</td>
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

export default Fund;
