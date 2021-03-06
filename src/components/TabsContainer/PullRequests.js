import React from 'react'
import "./PullRequests.css"
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

function PullRequests() {
  return (
    <div className='pull-requests'>
        <CompareArrowsIcon id="pull-icon"/>
        <span>Pull Requests</span>
    </div>
  )
}

export default PullRequests