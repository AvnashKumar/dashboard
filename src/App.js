import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import GroupingOptions from './components/GroupingOptions';
import SortingOptions from './components/SortingOptions';
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortOption, setSortOption] = useState('priority');

  // Fetch data from API on component mount
  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => {
        setTickets(data.tickets);
        setUsers(data.users);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Save state in localStorage
  useEffect(() => {
    localStorage.setItem('groupingOption', groupingOption);
    localStorage.setItem('sortOption', sortOption);
  }, [groupingOption, sortOption]);

  return (
    <div className="App">
      <GroupingOptions setGroupingOption={setGroupingOption} setSortOption={setSortOption}/>
      <KanbanBoard
        tickets={tickets}
        users={users}
        groupingOption={groupingOption}
        sortOption={sortOption}
      />
    </div>
  );
};

export default App;
