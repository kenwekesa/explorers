import React, { useState, useEffect } from 'react';
import "./Contacform.css"

function CountrySelector() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();

        // Sort the countries alphabetically by name
        const sortedCountries = data
          .sort((a, b) => a.name.common.localeCompare(b.name.common));

        setCountries(sortedCountries);
      } catch (error) {
        console.error('Error fetching countries data:', error);
      }
    }

    fetchCountries();
  }, []);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className='contactcountryo'>
      {/* <label htmlFor="country-select">Select a Country:</label> */}
      <select
        id="country-select"
        value={selectedCountry}
        onChange={handleCountryChange}
        className='contactinputselect'
      >
        <option value="">Select a country...</option>
        {countries.map((country) => (
          <option key={country.name.common} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>
      {selectedCountry && (
        <div>
          {/* <h2>Selected Country:</h2>
          <p>{selectedCountry}</p> */}
        </div>
      )}
    </div>
  );
}

export default CountrySelector;