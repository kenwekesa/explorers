import React, { useState } from 'react'
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import "./orderhistory.css"
import './orderhistory.scss'
import eye from "../../images/eye.png"

function Activeplan() {
  const data = [
    { id: 1, service: 'Virtual Assistant',plan:"Top Professional",assistants:2, period: '1 year', time_zone: 'EAT', amount:'10000', date:'12/3/23',status:'Completed'},
    { id: 1, service: 'Item 1',plan:"Starter",assistants:2, period: '1 year', time_zone: 'EAT', amount:'10000', date:'12/3/23',status:'Completed'},
    { id: 1, service: 'Item 1',plan:"Starter",assistants:2, period: '1 year', time_zone: 'EAT', amount:'10000', date:'12/3/23',status:'Completed'},
    { id: 1, service: 'Thomlo',plan:"Starter",assistants:2, period: '1 year', time_zone: 'EAT', amount:'10000', date:'12/3/23',status:'Completed'},
    { id: 1, service: 'Item 1',plan:"Starter",assistants:2, period: '1 year', time_zone: 'EAT', amount:'10000', date:'12/3/23',status:'Completed'},
    { id: 1, service: 'Item 1',plan:"Starter",assistants:2, period: '1 year', time_zone: 'EAT', amount:'10000', date:'12/3/23',status:'Completed'},
    { id: 1, service: 'Item 1',plan:"Starter",assistants:2, period: '1 year', time_zone: 'EAT', amount:'10000', date:'12/3/23',status:'Completed'},
    { id: 1, service: 'Item 1',plan:"Starter",assistants:2, period: '1 year', time_zone: 'EAT', amount:'10000', date:'12/3/23',status:'Completed'},
    { id: 1, service: 'Item 1',plan:"Starter",assistants:2, period: '1 year', time_zone: 'EAT', amount:'10000', date:'12/3/23',status:'Completed'},
    { id: 1, service: 'Item 1',plan:"Starter",assistants:2, period: '1 year', time_zone: 'EAT', amount:'10000', date:'12/3/23',status:'Completed'},
    { id: 1, service: 'Item 1',plan:"Starter",assistants:2, period: '1 year', time_zone: 'EAT', amount:'10000', date:'12/3/23',status:'Completed'},
    { id: 1, service: 'Item 1',plan:"Starter",assistants:2, period: '1 year', time_zone: 'EAT', amount:'10000', date:'12/3/23',status:'Completed'},
    { id: 1, service: 'Thomlo',plan:"Starter",assistants:2, period: '1 year', time_zone: 'EAT', amount:'10000', date:'12/3/23',status:'Completed'},
    { id: 1, service: 'Item 1',plan:"Starter",assistants:2, period: '1 year', time_zone: 'EAT', amount:'10000', date:'12/3/23',status:'Completed'},
    { id: 1, service: 'Item 1',plan:"Starter",assistants:2, period: '1 year', time_zone: 'EAT', amount:'10000', date:'12/3/23',status:'Completed'},
    { id: 1, service: 'Item 1',plan:"Starter",assistants:2, period: '1 year', time_zone: 'EAT', amount:'10000', date:'12/3/23',status:'Completed'},
    { id: 1, service: 'Item 1',plan:"Starter",assistants:2, period: '1 year', time_zone: 'EAT', amount:'10000', date:'12/3/23',status:'Completed'},
    { id: 1, service: 'Item 1',plan:"Starter",assistants:2, period: '1 year', time_zone: 'EAT', amount:'10000', date:'12/3/23',status:'Completed'},

    // ... more data
  ];

  
  const [perPage, setPerPage] = useState(5); // Number of items per page
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [searchText, setSearchText] = useState(''); // Search input
  const filteredData = data.filter((item) =>
    item.service.toLowerCase().includes(searchText.toLowerCase())
  );

  // Calculate pagination values
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / perPage);

  // Function to paginate the data
  const paginatedData = filteredData.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );
  return (
    <div className='orderhistory'>
      {/* <Navbar className='orderhistory_navbar'/> */}
      <div className='admin_clients_navbar'>
        <Navbar />
      </div>
       <div className="orderhistory-content active-orderhistory-content">
        <div className="topContainer orderTopContainer">
          {/* <h1 className="title">Order History</h1> */}
          <div className="buttonsBar">
            {/* <div className="placeorder_btn">
              Place Order
            </div> */}
            <h1>Active Plans</h1>
            <div>
              {/* <span className='link'>All</span>
              <span className='link'>Pending </span>
              <span className='link'>Active </span>
              <span className='link'>Completed </span>
              <span className='link'>Referended </span>
              <span className='link'>Canceled </span> */}
            </div>
          </div>
        </div>
        <div className="tableContainer">

        {/* Filter and Search */}
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

        {/* Table */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Service</th>
              <th>Plan</th>
              <th>Assistants</th>
              <th>Period</th>
              <th>Time zone</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item,i) => (
              <tr key={item.id}>
                <td>{i+1}</td>
                <td>{item.service}</td>
                <td>{item.plan}</td>
                <td>{item.assistants}</td>
                <td>{item.period}</td>
                <td>{item.time_zone}</td>
                <td>{item.amount} </td>
                <td>{item.date}</td>
                <td className='admin_btn_view'>{item.status}<img src={eye} alt='logo'/></td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination">
          <div className="pagination-info">
            Showing {perPage * (currentPage - 1) + 1} -{' '}
            {perPage * currentPage} of {totalItems} entries
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
      {/* <Footer className="orderhistory_footer" /> */}
    </div>
  );
}

export default Activeplan;