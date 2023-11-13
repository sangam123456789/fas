import React from 'react'
import PlusIcon from "../utilities/assets/plus-solid.svg"
import MoreInfo from "../utilities/assets/more-info.svg"

function GroupContainer({TicketsArray, ContainerName}) {
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
          <img style={{height: "15px" , margin: "5px 1rem 0px 0px"}} src={MoreInfo} alt="" />
          <p style={{
            fontWeight: "500"
          }}>{ContainerName}
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

export default GroupContainer
