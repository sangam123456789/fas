import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import { Audio } from 'react-loader-spinner'

function App() {
  const [data, setData] = useState(null)
  const [ordering, setOrdering] = useState("Priority")
  const [grouping, setGrouping] = useState("Status")

  let StatusValues = data ? [...new Set(data.tickets.map(ticket => ticket.status))] : null;
  let PriorityValues = data ? [...new Set(data.tickets.map(ticket => ticket.priority))]: null;
  let UserIdValues = data ? [...new Set(data.tickets.map(ticket => ticket.userId))]: null;
  if(PriorityValues) PriorityValues.sort((a, b) => b - a)

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
    .then((res) => res.json()).then((data) => setData(data))
  }, [data]) 
  
  const handleOrderingChange = (e) => {
    console.log(e)
    setOrdering(e.target.outerText)
  }

  const handleGroupingChange = (e) => {
    console.log(e)
    setGrouping(e.target.outerText)
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
     <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />}
  </div>)
  
}

export default App;
