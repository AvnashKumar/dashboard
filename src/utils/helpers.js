export const groupTickets = (tickets, users, groupBy) => {
    if (groupBy === 'status') {
      return tickets.reduce((acc, ticket) => {
        const key = ticket.status;
        if (!acc[key]) acc[key] = [];
        acc[key].push(ticket);
        return acc;
      }, {});
    } else if (groupBy === 'user') {
      return tickets.reduce((acc, ticket) => {
        const user = users.find(user => user.id === ticket.userId)?.name || 'Unknown';
        if (!acc[user]) acc[user] = [];
        acc[user].push(ticket);
        return acc;
      }, {});
    } else if (groupBy === 'priority') {
      return tickets.reduce((acc, ticket) => {
        const key = ticket.priority;
        if (!acc[key]) acc[key] = [];
        acc[key].push(ticket);
        return acc;
      }, {});
    }
  };
  
  export const sortTickets = (groupedTickets, sortBy) => {
    const sorted = {};
    Object.keys(groupedTickets).forEach(group => {
      sorted[group] = [...groupedTickets[group]].sort((a, b) => {
        if (sortBy === 'priority') return b.priority - a.priority;
        if (sortBy === 'title') return a.title.localeCompare(b.title);
        return 0;
      });
    });
    return sorted;
  };
  