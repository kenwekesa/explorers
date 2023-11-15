import React, { useState } from 'react';
import './Scountry.css';

const Sservice = ({ selectedServices, onChange }) => {
  // Define a state variable to hold the selected option
  const [selectedOption, setSelectedOption] = useState(selectedServices); // Use the selectedServices prop as the initial state

  // Handle the change event when the user selects a different option
  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Pass the selected value to the parent component using the provided onChange callback
    onChange(selectedValue);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleOptionChange} className="select_options">
        <option value="Select a service...">Select a service...</option>
        <option value="Customer virtual assistant">Customer virtual assistant</option>
        <option value="Social media virtual assistant">Social media virtual assistant</option>
        <option value="Virtual admin assistant">Virtual admin assistant</option>
        <option value="Data entry virtual assistant">Data entry virtual assistant</option>
        <option value="Digital marketing virtual assistant">Digital marketing virtual assistant</option>
        <option value="Content creator services">Content creator services</option>
        <option value="Web development services">Web development services</option>
        <option value="Database management services">Database management services</option>
      </select>
    </div>
  );
}

export default Sservice;
