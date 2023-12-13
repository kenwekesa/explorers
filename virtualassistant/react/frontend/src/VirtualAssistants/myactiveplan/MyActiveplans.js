import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Admin/footer/Footer';
import Navbar from '../navbar/navbar/Navbar';
import eye from '../../images/eye.png';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import MyActivePlanData from './myactiveplancards/MyActivePlanData';
import { useContext } from 'react';
import { AuthContext } from '../../contextr/AuthContext';

function MyActiveplan() {
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const {state} = useContext(AuthContext)
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     const q = query(collection(db, 'serviced'), where('status', '==', 'active'), where("user_id", "==", state.user.uid));
  //     const querySnapshot = await getDocs(q);
  //     const items = [];
  //     querySnapshot.forEach((doc) => {
  //       items.push({ id: doc.id, ...doc.data() });
  //     });
  //     setData(items);
  //     setIsLoading(false);
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
  const fetchData = async () => {
    setIsLoading(true);

    try {
      const q = query(collection(db, 'serviced'), where('status', '==', 'active'));
      const querySnapshot = await getDocs(q);
      const items = [];

      const { user } = state; // Assuming that `state` contains the user information
      const userId = user.uid;

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const { vas } = data;

        if (vas && vas.includes(userId)) {
          items.push({ id: doc.id, ...data });
        }
      });

      setData(items);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  fetchData();
 }, [state]);

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

  return (
    <div className="orderhistory">
      <div className="admin_clients_navbar">
        <Navbar />
      </div>
      <div className="orderhistory-content">
        <div className="topContainer orderTopContainer">
          <p className="addnewplan">
            Active <span>orders</span>
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
              <tr className='plans-headers'>
                <th>ID</th>
                <th>Service</th>
                <th>Plan</th>
                <th>Period</th>
                <th>Amount</th>
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
                  <td colSpan="6">
                    No active orders available at the moment.
                  </td>
                </tr>
              ) : (
                paginatedData.map((item, i) => (
                  <tr className='plans-headers' key={item.id}>
                    <td>{i + 1}</td>
                    <td className="services_pending_plan_main">{item.service}</td>
                    <td>${item.plan /  2} / month</td>
                    <td>{item.period} months</td>
                    <td>${item.totalCost / (item.assistants * 2)}</td>
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
        <MyActivePlanData
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

export default MyActiveplan;
