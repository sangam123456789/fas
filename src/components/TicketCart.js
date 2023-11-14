import React from 'react'
import icon from "../utilities/assets/more-info.svg"
import userphoto from "../utilities/assets/userimages/user.jpg"
import my from "../utilities/assets/userimages/my.jpg"
import { nametoicon } from './GroupContainer'

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
        
            {Grouping != "User" && (<img src={my} style={{
              //backgroundColor: "black",
              width: "20px",
              height: "20px",
              borderRadius: "50%"
            }}/>)} 
      </div>
      <div style={{display:"flex"}}>
      {(Grouping == "User" || Grouping == "Priority") && (<img src={nametoicon[ticketInfo.status]} style={{
              //backgroundColor: "black",
              marginTop: "5px",
              marginRight: "1px",
              width: "13px",
              height: "13px",
              borderRadius: "50%"
            }}/>)}
      <div style={{
        fontWeight: "500"
      }}>
        {ticketInfo.title}
      </div>
      </div>
      <div style={{
        display: "flex"
      }}>
        <img style = {{color: "grey",margin: "5px 5px 2px 0px", height: "20px", padding: "2px", border: "2px solid rgba(128, 128, 128, 0.1)"}}src={icon} alt="" />
        <div style={{color: "grey",
            height: "20px",
            padding: "0px 2px 2px 5px",
            border: "2px solid rgba(128, 128, 128, 0.1)",
            display: "flex",
            alignItems: "center",
            fontSize: "12px",
            margin: "5px 5px 2px 5px"}}>

            <div style={{
              backgroundColor: "grey",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              margin: "4px 4px 2px -4px"
            }}>
            
            </div>  
          {ticketInfo.tag.map((tagVal) =>
          <div> {tagVal} </div> )}
  
        </div>
        
      </div>
    </div>
    
  )
}

export default TicketCart
