import React, { useState, useEffect } from 'react';
import Footer from '../../Admin/footer/Footer';
import Navbar from '../navbar/Navbar';
import './orderhistory.css';
import './orderhistory.scss';
import eye from '../../images/eye.png';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { getDownloadURL, ref } from 'firebase/storage'; // Corrected import
import { storage } from '../../firebase/firebase';
import VAData from './assistantcard/VAData';
import VADatas from './assistantcard/VADatas';

function Adminassistants() {
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState(''); // Default to 'All'
  const [selectedItem, setSelectedItem] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();

  // Define state for PDF URLs
  const [degreeURLs, setDegreeURLs] = useState({});
  const [transcriptURLs, setTranscriptURLs] = useState({});
  const [cvURLs, setCVURLs] = useState({});

  useEffect(() => {
  const fetchData = async () => {
    try {
      setIsLoading(true);
      let queryRef = collection(db, "users");

      // Modify the query to initially fetch data where usertype is "assistant"
      queryRef = query(queryRef, where('usertype', '==', 'va')); // Update 'client' to 'assistant'

      if (selectedStatus !== '') {
        queryRef = query(queryRef, where('status', '==', selectedStatus));
      }

      const querySnapshot = await getDocs(queryRef);
      const items = {};

      // Iterate through the snapshot and fetch data for each user
      for (const doc of querySnapshot.docs) {
        const userData = { id: doc.id, ...doc.data() };
        items[doc.id] = userData;

        // Fetch PDF URLs
        const degreeFileURLs = await Promise.all(
          userData.degreeURL.map(async (degree, index) => {
            const url = await getDownloadURL(ref(storage, degree));
            return url;
          })
        );

        const transcriptFileURLs = await Promise.all(
          userData.transcriptURLs.map(async (transcript, index) => {
            const url = await getDownloadURL(ref(storage, transcript));
            return url;
          })
        );

        const cvFileURLs = await Promise.all(
          userData.cvURL.map(async (cv, index) => {
            const url = await getDownloadURL(ref(storage, cv));
            return url;
          })
        );

        setDegreeURLs((prev) => ({ ...prev, [doc.id]: degreeFileURLs }));
        setTranscriptURLs((prev) => ({ ...prev, [doc.id]: transcriptFileURLs }));
        setCVURLs((prev) => ({ ...prev, [doc.id]: cvFileURLs }));
      }

      setData(items);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  fetchData();
}, [selectedStatus]);

  const filteredData = Object.values(data).filter((item) =>
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

    // Navigate to "/admin_dashboard" after success message is closed
    navigate('/admin_dashboard');
  };

  return (
    <div className='orderhistory'>
      <div className='admin_clients_navbar'>
        <Navbar />
      </div>
      <div className="orderhistory-content">
        <div className="topContainer orderTopContainer">
          <div className="buttonsBar">
            <p className='addnewplan'>Assi<span>stants</span></p>
            <div className="links_group order_links_group order_links_group_content">
              <span
                className={`link ${selectedStatus === '' ? 'active' : ''}`}
                onClick={() => handleStatusClick('')}
              >
                All
              </span>
              <span
                className={`link ${selectedStatus === 'verified' ? 'active' : ''}`}
                onClick={() => handleStatusClick('verified')}
              >
                Verified
              </span>
              <span
                className={`link ${selectedStatus === 'unverified' ? 'active' : ''}`}
                onClick={() => handleStatusClick('unverified')}
              >
                Unverified
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
                <th>Industry</th>
                <th>Name</th>
                <th>Contact</th>
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
                  <td colSpan="7">No assistants available, please come back later!</td>
                </tr>
              ) : (
                paginatedData.map((item, i) => (
                  <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td className='role_title_orderhistory_first'>{item.service}</td>
                    <td className='role_title_orderhistory_first'>{item.firstname} {item.lastname}</td>
                    <td className='role_title_orderhistory_first'>{item.contact}</td>
                    <td className='role_title_orderhistory_first'>{item.status}</td>
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
      {selectedItem && selectedItem.status === 'verified' && (
         <VAData
          selectedItem={selectedItem}
          isOpen={true}
          onClose={closePayPalDialog}
          service={selectedItem.service}
          id={selectedItem.user_id}
          user_Id={selectedItem.id}
          firstname={selectedItem.firstname}
          lastname={selectedItem.lastname}
          email={selectedItem.email}
          contact={selectedItem.contact}
          about={selectedItem.about}
          location={selectedItem.location}
          org_name={selectedItem.org_name}
          degreeURLs={degreeURLs[selectedItem.id] || []}
          transcriptsURLs={transcriptURLs[selectedItem.id] || []}
          cvURLs={cvURLs[selectedItem.id] || []}
        />
      )}
      {selectedItem && selectedItem.status === 'unverified' && (
         <VADatas
          selectedItem={selectedItem}
          isOpen={true}
          onClose={closePayPalDialog}
          service={selectedItem.service}
          id={selectedItem.user_id}
          user_Id={selectedItem.id}
          firstname={selectedItem.firstname}
          lastname={selectedItem.lastname}
          email={selectedItem.email}
          contact={selectedItem.contact}
          about={selectedItem.about}
          location={selectedItem.location}
          org_name={selectedItem.org_name}
          degreeURLs={degreeURLs[selectedItem.id] || []}
          transcriptsURLs={transcriptURLs[selectedItem.id] || []}
          cvURLs={cvURLs[selectedItem.id] || []}
        />
      )}
    </div>
  );
}


export default Adminassistants;