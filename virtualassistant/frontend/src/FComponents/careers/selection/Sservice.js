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
        <option value="option0">Select an Industry...</option>
        <option value="option1">Insurance solutions</option>
        <option value="option2">Health care solutions</option>
        <option value="option3">Real estate solutions</option>
        <option value="option4">E-commerce business solutions</option>
        <option value="option5">Small business solutions</option>
        <option value="option6">Logistic support services</option>
        <option value="option7">Educational support services</option>
        <option value="option8">Web design and development</option>
      </select>
    </div>
  );
}

export default Sservice;
