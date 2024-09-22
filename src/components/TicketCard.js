import React from 'react';
import './TicketCard.css';

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
    <p>{ticket.id}</p>
      <h3>{ticket.title}</h3>
      <p><strong>Priority:</strong> {ticket.priority}</p>
      <p><strong>Status:</strong> {ticket.status}</p>
    </div>
  );
};

export default TicketCard;
