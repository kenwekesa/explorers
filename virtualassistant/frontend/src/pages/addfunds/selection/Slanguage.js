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
        <option value="option0">Select a language...</option>
        <option value="option1">American English (United States)</option>
        <option value="option2">British English (United Kingdom)</option>
        <option value="option3">Australian English (Australia)</option>
        <option value="option4">Canadian English (Canada)</option>
        <option value="option5">Irish English (Ireland)</option>
        <option value="option6">English as a Second Language (ESL)</option>
        <option value="option7">English as a Foreign Language (EFL)</option>
        </select>
    </div>
  );
}

export default Slanguage;
