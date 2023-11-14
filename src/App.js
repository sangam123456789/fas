import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";


function App() {

  const initialOrdering = localStorage.getItem("ordering") || "Priority";
  const initialGrouping = localStorage.getItem("grouping") || "Status";

  const [data, setData] = useState(null);
  const [ordering, setOrdering] = useState(initialOrdering);
  const [grouping, setGrouping] = useState(initialGrouping);

  let StatusValues = data ? [...new Set(data.tickets.map(ticket => ticket.status))] : null;
  let PriorityValues = data ? [...new Set(data.tickets.map(ticket => ticket.priority))]: null;
  let UserIdValues = data ? [...new Set(data.tickets.map(ticket => ticket.userId))]: null;
  if(PriorityValues) PriorityValues.sort((a, b) => b - a)

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
    .then((res) => res.json()).then((data) => setData(data))
  }, [data]) 
  
  const handleOrderingChange = (e) => {
    const newOrdering = e.target.outerText;
    setOrdering(newOrdering);
    // Store ordering in localStorage
    localStorage.setItem("ordering", newOrdering);
  }

  const handleGroupingChange = (e) => {
    const newGrouping = e.target.outerText;
    setGrouping(newGrouping);
    // Store grouping in localStorage
    localStorage.setItem("grouping", newGrouping);
  }
  return (
  <div style={{
    minHeight: "700px",
    //height: "250%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: '#edecec'
  }}>
    
    <Header
         handleOrderingChange = {handleOrderingChange}
         handleGroupingChange = {handleGroupingChange}/>

    {data ? <MainContainer UserIdValues = {UserIdValues}PriorityValues = {PriorityValues} StatusValues = {StatusValues} data = {data} ordering = {ordering} grouping = {grouping}/>: 
     null}
  </div>)
  
}

export default App;
