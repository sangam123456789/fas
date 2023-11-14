import React from 'react'
import PlusIcon from "../utilities/assets/plus-solid.svg"
import MoreInfo from "../utilities/assets/more-info.svg"
import inprogress from "../utilities/assets/inprogress.jpg"
import done from "../utilities/assets/done.png"
import canceled from "../utilities/assets/cancelled.png"
import backlog from "../utilities/assets/backlog.jpg"
import todo from "../utilities/assets/todo.png"
import high from "../utilities/assets/priority/high.jpg"
import low from "../utilities/assets/priority/low.jpg"
import medium from "../utilities/assets/priority/medium.jpg"
import no_priority from "../utilities/assets/priority/no_priority.jpg"
import urgent from "../utilities/assets/priority/urgent.jpg"
import my from "../utilities/assets/userimages/second.jpg"
const nametoicon = {}
//Status
nametoicon["In progress"] = inprogress
nametoicon["Done"] = done
nametoicon["Canceled"] = canceled
nametoicon["Backlog"] = backlog
nametoicon["Todo"] = todo
//Priority
nametoicon["3"] = high
nametoicon["1"] = low
nametoicon["2"] = medium
nametoicon["0"] = no_priority
nametoicon["4"] = urgent
//priority name
const ch = {}
ch["4"] = "Urgent"
ch["3"] = "High"
ch["2"] = "Medium"
ch["1"] = "Low"
ch["0"] = "No priority"

function GroupContainer({TicketsArray, ContainerName}) {
  if(nametoicon[ContainerName] == null)nametoicon[ContainerName]=my
  let x = ch[ContainerName]
  if(x == null)x = ContainerName
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      marginLeft: "2rem",
      padding: "1rem"
    }}>

      <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>

        <div style={{
        display: "flex"
        }}>

          <img style={{width:"15px",borderRadius:"50%",height: "15px" , margin: "5px 10px 0px 0px"}} src={nametoicon[ContainerName]} alt="" />
          
          <p style={{
            fontWeight: "500"
          }}>{x}
          </p>

          <p style={{
            marginLeft: "1rem",
            color: "grey" 
          }}>
            {TicketsArray.length}
          </p>

        </div>
        
        <div style={{
          marginLeft: "-1rem",
          display: "flex"
        }}>
          <img style={{height: "15px" ,marginRight: "1rem"}} src={PlusIcon} alt="" />
          <img style={{height: "15px"}} src={MoreInfo} alt="" />
        </div>

      </div>

      <div>
        {TicketsArray} 
      </div>
      
    </div>
  )
}
export {nametoicon}
export default GroupContainer
