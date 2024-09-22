import React from 'react';

const SortingOptions = ({ setSortOption }) => {
  return (
    <div className="sorting-options">
      <button onClick={() => setSortOption('priority')}>Sort by Priority</button>
      <button onClick={() => setSortOption('title')}>Sort by Title</button>
    </div>
  );
};

export default SortingOptions;
