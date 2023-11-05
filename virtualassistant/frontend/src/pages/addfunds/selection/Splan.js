import React, { useState } from 'react';
import './Scountry.css';

const Splan = ({ selectedPlan, onChange }) => {
  // Define a state variable to hold the selected option
  const [selectedOption, setSelectedOption] = useState(selectedPlan); // Use the selectedAbout prop as the initial state

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
        <option value="0">Select a plan...</option>
        <option value="300">Enterpreneur $300 /month</option>
        <option value="600">Starter $600 /month</option>
        <option value="800">Professional $800 /month</option>
        <option value="900">Teams $900 /month</option>
        <option value="1200">Top Enterpreneurs $1200 /month</option>
        <option value="1400">Top Professional $1400 /month</option>
      </select>
    </div>
  );
}

export default Splan;
