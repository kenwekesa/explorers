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
        <option value="Select a medium...">Select a medium...</option>
        <option value="Online">Online</option>
        <option value="Friend">Friend</option>
        <option value="Advertisment">Advertisment</option>
        <option value="Search">Search</option>
        <option value="Social Media">Social Media</option>
        <option value="Event">Event</option>
      </select>
    </div>
  );
}

export default Shear;
