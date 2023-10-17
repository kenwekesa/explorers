// import React, { useState } from 'react';

// const Shear = () => {
 

//   // Define a state variable to hold the selected option
//   const [selectedOption, setSelectedOption] = useState('option1'); // Default option

//   // Handle the change event when the user selects a different option
//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <div>
//       {/* <h2>Select an Option:</h2> */}
//       <select value={selectedOption} onChange={handleOptionChange} className="Sselectoptions">
//         <option value="option1">Option 1</option>
//         <option value="option2">Option 2</option>
//         <option value="option3">Option 3</option>
//         <option value="option4">Option 4</option>
//       </select>
//       {/* <p>Selected Option: {selectedOption}</p> */}
//     </div>
//   );
// }

// export default Shear

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
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
      </select>
    </div>
  );
}

export default Shear;
