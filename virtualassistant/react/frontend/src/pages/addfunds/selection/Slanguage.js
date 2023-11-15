import React, { useState } from 'react';
import './Scountry.css';

const Slanguage = ({ selectedLanguage, onChange }) => {
  // Define a state variable to hold the selected option
  const [selectedOption, setSelectedOption] = useState(selectedLanguage); // Use the selectedAbout prop as the initial state

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
        <option value="Select a language...">Select a language...</option>
        <option value="American English (United States)">American English (United States)</option>
        <option value="British English (United Kingdom)">British English (United Kingdom)</option>
        <option value="Australian English (Australia)">Australian English (Australia)</option>
        <option value="Canadian English (Canada)">Canadian English (Canada)</option>
        <option value="Irish English (Ireland)">Irish English (Ireland)</option>
        <option value="English as a Second Language (ESL)">English as a Second Language (ESL)</option>
        <option value="English as a Foreign Language (EFL)">English as a Foreign Language (EFL)</option>
        </select>
    </div>
  );
}

export default Slanguage;
