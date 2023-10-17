import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Data() {
  const [randomData, setRandomData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/back/dataview'); // Replace with your actual API endpoint
        setRandomData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty array [] ensures that the effect runs only once, similar to componentDidMount

  return (
    <div>
      <h1>Random Data</h1>
      <ul>
        {randomData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Data;