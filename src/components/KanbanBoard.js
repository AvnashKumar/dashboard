import React from 'react';
import TicketCard from './TicketCard';
import { groupTickets, sortTickets } from '../utils/helpers';

const KanbanBoard = ({ tickets, users, groupingOption, sortOption }) => {
  const groupedTickets = groupTickets(tickets, users, groupingOption);
  const sortedTickets = sortTickets(groupedTickets, sortOption);

  return (
    <div className="kanban-board">
      {Object.keys(sortedTickets).map(group => (
        <div key={group} className="kanban-column">
          <h2>{group}</h2>
          {sortedTickets[group].map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
