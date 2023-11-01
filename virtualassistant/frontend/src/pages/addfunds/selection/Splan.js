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
        <option value="option0">Select a plan...</option>
        <option value="option1">Enterpreneur $300 /month</option>
        <option value="option2">Starter $600 /month</option>
        <option value="option3">Professional $800 /month</option>
        <option value="option4">Teams $900 /month</option>
        <option value="option5">Top Enterpreneurs $1200 /month</option>
        <option value="option6">Top Professional $1400 /month</option>
      </select>
    </div>
  );
}

export default Splan;
