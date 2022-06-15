import React from 'react'
import "./LeftHeader.css"

function LeftHeader() {
  return (
    <div className='left-header'>
      <div className='github-logo'>Github</div>
      <div className='header-search-box'><input type="text" placeholder='Search or jump to...'/></div>
      <div className='header-tags'>Pull Requests</div>
      <div className='header-tags'>Issues</div>
      <div className='header-tags'>Market Place</div>
      <div className='header-tags'>Explore</div>

    </div>
  )
}

export default LeftHeader