import React from 'react'
import icon from "../utilities/assets/more-info.svg"

function TicketCart({ticketInfo , Grouping}) {
  return (
    <div style={{
      backgroundColor: "white",
      margin: "10px 0px 10px 0px",
      minWidth: "20rem",
      maxWidth: "20rem",
      borderRadius: "6px",
      padding: "10px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
    }}>
      
      <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
        
        <div style={{
          color: "grey",
          fontWeight: "400",
          fontSize: "12px"
        }}>
          {ticketInfo.id}
        </div>
        
            <img src={icon} style={{
              //backgroundColor: "black",
              width: "20px",
              height: "20px",
              borderRadius: "50%"
            }}/> 
      </div>
      <div style={{
        fontWeight: "500"
      }}>
        {ticketInfo.title}
      </div>
      <div style={{
        display: "flex"
      }}>
        <img style = {{color: "grey",margin: "5px 5px 2px 0px", height: "20px", padding: "2px", border: "2px solid rgba(128, 128, 128, 0.1)"}}src={icon} alt="" />
        {ticketInfo.tag.map((tagVal) =><div style = 
        {{color: "grey",
          height: "20px",
          padding: "0px 2px 2px 5px",
          border: "2px solid rgba(128, 128, 128, 0.1)",
          display: "flex",
          alignItems: "center",
          fontSize: "12px",
          margin: "5px 5px 2px 5px"
          }}> {tagVal} </div> )}
        
      </div>
    </div>
    
  )
}

export default TicketCart
