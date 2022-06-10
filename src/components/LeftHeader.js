import React from 'react'
import "./LeftHeader.css"

function LeftHeader() {
  return (
    <div className='left-header'>
      <div>Github</div>
      <input placeholder='Search or jump to'/>
      <div>Pull Requests</div>
      <div>Issues</div>
      <div>Market Place</div>
      <div>Explore</div>

    </div>
  )
}

export default LeftHeader