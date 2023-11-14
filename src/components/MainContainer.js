import React from 'react';
import GroupContainer from './GroupContainer';
import TicketCart from './TicketCart';

function MainContainer({ StatusValues, PriorityValues, UserIdValues, data, ordering, grouping }) {
  const idtouser = {};
  data.users.forEach((user) => {
    idtouser[user.id] = user.name;
  });

  const grouptovalue = {
    Status: StatusValues,
    Priority: PriorityValues,
    User: UserIdValues,
  };

  
    if (ordering === 'Priority') {
      data.tickets.sort((a, b) => b.priority - a.priority);
    }
    if (ordering === 'Title') {
      data.tickets.sort((a, b) => a.title.localeCompare(b.title));
    }
  

  const mapTicketsArray = (groupVal, key) =>
    grouptovalue[grouping].map((val) => {
      const TicketsArray = data.tickets
        .map((ticket) => {
          if ((grouping === 'Status' && ticket.status === val) || (grouping === 'Priority' && ticket.priority === val) || (grouping === 'User' && ticket.userId === val)) {
            return <TicketCart ticketInfo={ticket} Grouping={grouping}/>;
          }
          return null;
        })
        .filter(Boolean);

      return <GroupContainer TicketsArray={TicketsArray} ContainerName={key(val)}/>;
    });

  const keyFunctions = {
    Status: (val) => val,
    Priority: (val) => val,
    User: (val) => idtouser[val],
  };

  //sortTickets();

  return (
    <div
      style={{
        flexGrow: '1',
        display: 'flex',
        width: '100%',
        overflow: 'auto',
      }}
    >
      {grouping && mapTicketsArray(grouping, keyFunctions[grouping])}
    </div>
  );
}

export default MainContainer;
