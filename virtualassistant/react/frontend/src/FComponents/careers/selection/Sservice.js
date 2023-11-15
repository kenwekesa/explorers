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
        <option value="Select an Industry...">Select an Industry...</option>
        <option value="Insurance solutions">Insurance solutions</option>
        <option value="Health care solutions">Health care solutions</option>
        <option value="Real estate solutions">Real estate solutions</option>
        <option value="E-commerce business solutions">E-commerce business solutions</option>
        <option value="Small business solutions">Small business solutions</option>
        <option value="Logistic support services">Logistic support services</option>
        <option value="Educational support services">Educational support services</option>
        <option value="Web design and development">Web design and development</option>
      </select>
    </div>
  );
}

export default Sservice;
