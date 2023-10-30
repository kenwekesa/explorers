import React, { useState } from 'react';

const Shear = ({ selectedAbout, onChange }) => {
  // Define a state variable to hold the selected option
  const [selectedOption, setSelectedOption] = useState(selectedAbout); // Use the selectedAbout prop as the initial state

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
        <option value="option0">Select a medium...</option>
        <option value="option1">Online</option>
        <option value="option2">Friend</option>
        <option value="option3">Advertisment</option>
        <option value="option4">Search</option>
        <option value="option5">Social Media</option>
        <option value="option6">Event</option>
      </select>
    </div>
  );
}

export default Shear;
