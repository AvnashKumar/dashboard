import React, { useState } from 'react';
import './GroupingOptions.css'
const GroupingOptions = ({ setGroupingOption, setSortOption }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDropdowns = () => {
    setIsVisible(!isVisible); // Toggle the state
  };

  return (
    <div>
      <button onClick={toggleDropdowns}>Display</button>

      {isVisible && (
        <div>
          <div className="grouping-options">
            <label htmlFor="grouping">Group by: </label>
            <select id="grouping" onChange={(e) => setGroupingOption(e.target.value)}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          <div className="sorting-options">
            <label htmlFor="sorting">Sort by: </label>
            <select id="sorting" onChange={(e) => setSortOption(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupingOptions;
