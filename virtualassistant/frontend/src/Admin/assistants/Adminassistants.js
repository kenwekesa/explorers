import React, { useState } from 'react'
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import "./orderhistory.css"
import './orderhistory.scss'
import eye from "../../images/eye.png"
import VAData from './assistantcard/VAData';

function Adminassistants() {
  const data = [
    { id: 1, service: 'Kris Mele',plan:"Krismele@gmail.com",assistants:+25471174909, period: 'UK', time_zone: 'Masters', amount:'Programmer', date:'12/3/23',status:'Completed'},
    { id: 1, service: 'Tim Dalote',plan:"timdalote@gmail.com",assistants:+19920993200, period: 'Russia', time_zone: 'Degree', amount:'Doctor', date:'12/3/23',status:'Completed'},
    { id: 1, service: 'Peter Osese',plan:"peterosese@gmail.com",assistants:+23992920092, period: 'Ghana', time_zone: 'Diploma', amount:'Nurse', date:'12/3/23',status:'Completed'},
    { id: 1, service: 'John Doe',plan:"johndoe@gmail.com",assistants:+93902900192, period: 'India', time_zone: 'Certificate', amount:'Engineer', date:'12/3/23',status:'Completed'},
    { id: 1, service: 'Samson Kalenje',plan:"samsonkalenje@gmail.com",assistants:+29190293901, period: 'Azarbarjania', time_zone: 'Phd', amount:'Tutor', date:'12/3/23',status:'Completed'},
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

  const [isPayPalDialogOpen, setPayPalIsDialogOpen] = useState(false); // Open Edit dialog
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

  // Fuctions to open and close the edit page
  const openPayPalDialog = () => {
    setPayPalIsDialogOpen(true);
  };

  const closePayPalDialog = () => {
    setPayPalIsDialogOpen(false);
  };


  return (
    <div className='orderhistory'>
      {/* <Navbar className='orderhistory_navbar'/> */}
      <div className='admin_clients_navbar'>
        <Navbar />
      </div>
       <div className="orderhistory-content assistant_orderhistory-content">
        <div className="topContainer orderTopContainer">
          {/* <h1 className="title">Order History</h1> */}
          <div className="buttonsBar">
            {/* <div className="placeorder_btn">
              Place Order
            </div> */}
            {/* <h1>Assistants</h1> */}
            <p className='addnewplan'>Assi<span>stants</span></p>
            <div className="links_group order_links_group order_links_group_content">
              <span className='link'>All</span>
              <span className='link'>Doctors </span>
              <span className='link'>Engineers </span>
              {/* <span className='link'>Programmers </span> */}
              <span className='link'>Nurses </span>
              <span className='link'>Others </span>
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
              <th>Name</th>
              <th>Email</th>
              <th>Contanct</th>
              <th>Location</th>
              <th>Education</th>
              <th>Specialization</th>
              {/* <th>Date</th>
              <th>Status</th> */}
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
                <td className='admin_btn_view'>{item.amount} <img src={eye} alt='logo' onClick={openPayPalDialog} />
                  <VAData 
                     isOpen={isPayPalDialogOpen}
                    onClose={closePayPalDialog} 
                  />
                </td>
                {/* <td>{item.date}</td>
                <td>{item.status}</td> */}
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

export default Adminassistants;