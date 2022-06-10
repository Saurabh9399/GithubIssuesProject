import React from 'react'
import "./PullRequests.css"
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

function PullRequests() {
  return (
    <div className='pull-requests'>
        <CompareArrowsIcon/>
        <span>Pull Requests</span>
    </div>
  )
}

export default PullRequests