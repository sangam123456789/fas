import React, {useEffect, useState} from 'react'
import GroupContainer from './GroupContainer'
import TicketCart from './TicketCart'

function MainContainer({StatusValues,   PriorityValues, UserIdValues, data, ordering, grouping}) {

    const idtouser = {}
    data.users.map((user) => {
        idtouser[user.id] = user.name
    })
    if(ordering == "Priority"){
        data.tickets.sort((a, b) => b.priority - a.priority)
    }
    if(ordering == "Title"){
        data.tickets.sort((a, b) => a.title.localeCompare(b.title))
    }
    let GroupContainerArray = []

if(grouping == "Status"){

    GroupContainerArray = StatusValues.map((groupVal) => {
        
        let TicketsArray = data.tickets.map((ticket) => {
            if(ticket.status == groupVal)
            {
                return <TicketCart
                ticketInfo = {ticket} Grouping = {grouping}/>
            }
            else return null
        })

        TicketsArray = TicketsArray.filter((ticket) => ticket != null)
        return <GroupContainer TicketsArray = {TicketsArray} ContainerName = {groupVal} />
    }) 
}

if(grouping == "Priority"){
  
    GroupContainerArray = PriorityValues.map((groupVal) => {
        let TicketsArray = data.tickets.map((ticket) => {
            if(ticket.priority == groupVal)
            {
                return <TicketCart
                ticketInfo = {ticket} Grouping = {grouping}/>
            }
            else return null
        })

        TicketsArray = TicketsArray.filter((ticket) => ticket != null)
        return <GroupContainer TicketsArray = {TicketsArray}  ContainerName = {groupVal}/>
    }) 
}

if(grouping == "User"){
    GroupContainerArray = UserIdValues.map((groupVal) => {
        let TicketsArray = data.tickets.map((ticket) => {
            if(ticket.userId == groupVal)
            {
                return <TicketCart
                ticketInfo = {ticket} Grouping = {grouping}/>
            }
            else return null
        })
        
        TicketsArray = TicketsArray.filter((ticket) => ticket != null) 
        return <GroupContainer TicketsArray = {TicketsArray}  ContainerName = {idtouser[groupVal]}/>
    }) 
}

  return (
    <div style={{
        flexGrow: "1",
        display: "flex",
        width: "100%",
        overflow: "auto"
    }}>
      {GroupContainerArray}
    </div>
  )
}

export default MainContainer
