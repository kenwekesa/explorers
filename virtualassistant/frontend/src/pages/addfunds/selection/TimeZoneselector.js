import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import './Scountry.css';

function TimezoneSelector({ selectedTimezone, onTimezoneChange }) {
  const [timezones, setTimezones] = useState([]);

  useEffect(() => {
    const allTimezones = moment.tz.names();
    setTimezones(allTimezones);
  }, []);

  const handleTimezoneChange = (e) => {
    const selectedTimezone = e.target.value;
    onTimezoneChange(selectedTimezone);
  };

  return (
    <div className="timezone-container">
      <select
        id="timezone-select"
        value={selectedTimezone}
        onChange={handleTimezoneChange}
        className="timezone-select"
      >
        <option value="" className="select_options">Select a time zone...</option>
        {timezones.map((tz) => (
          <option key={tz} value={tz}>
            {tz}
          </option>
        ))}
      </select>
      {selectedTimezone && (
        <div>
          {/* You can display information about the selected timezone here */}
        </div>
      )}
    </div>
  );
}

export default TimezoneSelector;
