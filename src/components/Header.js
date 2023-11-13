import React from 'react'
import FilterButton from './FilterButton'

function Header({handleGroupingChange, handleOrderingChange}) {
  return (
    <div style={{
        width: "100%",
        height:"10%",
        backgroundColor: 'white',
    }}>
        <FilterButton 
        handleGroupingChange = {handleGroupingChange}
        handleOrderingChange = {handleOrderingChange}
        />
    </div>
  )
}

export default Header
