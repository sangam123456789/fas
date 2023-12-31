import React, { useState, useEffect } from 'react';
import FilterIcon from "../utilities/assets/1.png";
import DropDownIcon from "../utilities/assets/2.png";
import "../App.css";

function FilterButton({ handleGroupingChange, handleOrderingChange }) {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  const [isOpenGroupDropDown, setIsOpenGroupDropDown] = useState(false);
  const [isOpenOrderingDropDown, setIsOrderingOpenDropDown] = useState(false);

  const [groupingLabel, setGroupingLabel] = useState("Status");
  const [orderingLabel, setOrderingLabel] = useState("Priority");

  const handleClickHandler = () => {
    const buttonRect = document.getElementById('button').getBoundingClientRect();
    setPopupPosition({ top: buttonRect.bottom, left: buttonRect.left });
    setIsOpenDropDown(!isOpenDropDown);
  };

  const handleGroupClickHandler = () => {
    const buttonRect = document.getElementById('GroupingButton').getBoundingClientRect();
    setIsOpenGroupDropDown(!isOpenGroupDropDown);
    setIsOrderingOpenDropDown(false);
  };

  const handleOrderingClickHandler = () => {
    const buttonRect = document.getElementById('OrderingButton').getBoundingClientRect();
    setIsOpenGroupDropDown(false);
    setIsOrderingOpenDropDown(!isOpenOrderingDropDown);
  };

  const handleGroupChangeUtil = (e) => {
    const newGrouping = e.target.outerText;
    setGroupingLabel(newGrouping);
    handleGroupingChange(e);
    setIsOpenGroupDropDown(false);
    // Store grouping in localStorage
    localStorage.setItem("groupingLabel", newGrouping);
  };

  const handleOrderChangeUtil = (e) => {
    const newOrdering = e.target.outerText;
    setOrderingLabel(newOrdering);
    handleOrderingChange(e);
    setIsOrderingOpenDropDown(false);
    // Store ordering in localStorage
    localStorage.setItem("orderingLabel", newOrdering);
  };

  useEffect(() => {// handling the dropbox closing when clicking outside dropbox 
    const handleOutsideClick = (e) => {
      if (
        isOpenDropDown &&
        !e.target.closest('.dropdown') &&
        e.target.id !== 'button' &&
        e.target.id !== 'GroupingButton' &&
        e.target.id !== 'OrderingButton'
      ) {
        setIsOpenDropDown(false);
        setIsOpenGroupDropDown(false);
        setIsOrderingOpenDropDown(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpenDropDown]);

  useEffect(() => {
    // Retrieve grouping and ordering labels from localStorage on component mount
    const storedGroupingLabel = localStorage.getItem("groupingLabel");
    const storedOrderingLabel = localStorage.getItem("orderingLabel");

    if (storedGroupingLabel) {
      setGroupingLabel(storedGroupingLabel);
    }

    if (storedOrderingLabel) {
      setOrderingLabel(storedOrderingLabel);
    }
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="dropdown" style={{ margin: "1rem 35px" }}>
      <button
        id="button"
        onClick={handleClickHandler}
        style={{
          display: 'flex',
          backgroundColor: "white",
          border: "3px solid #d5d5d570",
          borderRadius: "5px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)"
        }}
      >
        <img src={FilterIcon} alt="" style={{ height: "21px", margin: "3px 3px" }} />
        <span style={{ marginTop: "2px" }}><b>Display</b></span>
        <img src={DropDownIcon} alt="" style={{ height: "30px" }} />
      </button>
      {isOpenDropDown && (
        <div
          style={{
            position: "absolute",
            //top: popupPosition.top,
            //left: popupPosition.left,
            border: '1px solid #edeaea',
            marginTop: '5px',
            padding: '10px',
            zIndex: 1,
            width: "280px",
            backgroundColor: "#f5f3f3",
            borderRadius: "5px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)"
          }}
        ><div style={{display: "flex", justifyContent: "space-between", margin: "4px"}}>
        <div style={{color:"gray"}}>
          Grouping
        </div>
        <button id = "GroupingButton" onClick={handleGroupClickHandler} style={{ display: "flex", justifyContent:"space-between",minWidth: "50%",display: 'flex', backgroundColor: "white", border: "3px solid #d5d5d570", borderRadius:"5px", boxshadow: "0px 4px 8px rgba(0, 0, 0, 0.15)"}}>
            <span style={{marginTop: "2px"}}><b>{groupingLabel}</b></span>
            <img src={DropDownIcon} alt="" style={{
            height: "30px"
          }}/>
        </button>
        {isOpenGroupDropDown && (<div  style={{
         position: "absolute",
         top: "50px",
         left: "124px",
         border: '1px solid #ccc',
         padding: '10px',
         zIndex: 3,
         width: "250px",
         backgroundColor: "white",
         border: "3px solid #d5d5d570",
         borderRadius:"5px", 
         boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)"
       }}>
          <div className="makeblue" style = {{cursor: "pointer"}} onClick={(e) => handleGroupChangeUtil(e)}>
            Priority
          </div>
          <div className='makeblue' style = {{cursor: "pointer"}} onClick={(e) => handleGroupChangeUtil(e)}>
            Status
          </div>
          
          <div className='makeblue' style = {{cursor: "pointer"}} onClick={(e) => handleGroupChangeUtil(e)}>
            User
          </div>   
       </div>)}
       
      </div>
      <div style={{display: "flex", justifyContent: "space-between", margin: "4px"}}>
          <div style={{color:"gray"}}>
            Ordering
          </div>
              <button id = "OrderingButton" onClick={handleOrderingClickHandler} style={{display: "flex", justifyContent:"space-between",minWidth: "50%",display: 'flex', backgroundColor: "white", border: "3px solid #d5d5d570", borderRadius:"5px", boxshadow: "0px 4px 8px rgba(0, 0, 0, 0.15)"}}>
                  <span style={{marginTop: "2px"}}><b>{orderingLabel}</b></span>
                  <img src={DropDownIcon} alt="" style={{
                  height: "30px"
                }}/>
              </button>
              {
                isOpenOrderingDropDown && <div  style={{
                  position: "absolute",
                  top: "90px",
                  left: "124px",
                  border: '1px solid #ccc',
                  padding: '10px',
                  zIndex: 2,
                  width: "250px",
                  backgroundColor: "white",
                  border: "3px solid #d5d5d570",
                  borderRadius:"5px", 
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)"
                  }}>
                     <div className='makeblue' style = {{cursor: "pointer"}} onClick={(e) => handleOrderChangeUtil(e)}>
                        Priority
                      </div>
                      <div className='makeblue' style = {{cursor: "pointer"}} onClick={(e) => handleOrderChangeUtil(e)}>
                        Title
                      </div>  
                  </div>
              }
       
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterButton;
