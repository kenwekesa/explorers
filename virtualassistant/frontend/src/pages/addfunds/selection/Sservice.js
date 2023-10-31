import React, { useState } from 'react';

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
      <select value={selectedOption} onChange={handleOptionChange} className="Sselectoptions">
        <option value="option0">Select a service...</option>
        <option value="option1">Customer virtual assistant</option>
        <option value="option2">Social media virtual assistant</option>
        <option value="option3">Virtual admin assistant</option>
        <option value="option4">Data entry virtual assistant</option>
        <option value="option5">Digital marketing virtual assistant</option>
        <option value="option6">Content creator services</option>
        <option value="option7">Web development services</option>
        <option value="option8">Database management services</option>
      </select>
    </div>
  );
}

export default Sservice;
