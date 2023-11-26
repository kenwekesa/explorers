import React, { useState, useEffect } from 'react';
import "./Scountry.css"

const Scounntry = ({ selectedLocation, onChange }) => {
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
    const selectedValue = e.target.value;
    setSelectedCountry(selectedValue);

    // Pass the selected value to the parent component using the provided onChange callback
    onChange(selectedValue);
  };

  return (
    <div>
      <select
        id="country-select"
        value={selectedLocation} // Use selectedLocation from props
        onChange={handleCountryChange}
        className='Sselectoptions'
      >
        <option value="">Select a country...</option>
        {countries.map((country) => (
          <option key={country.name.common} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Scounntry;
