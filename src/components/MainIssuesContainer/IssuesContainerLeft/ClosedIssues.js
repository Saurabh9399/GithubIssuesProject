import React from 'react'
import "./ClosedIssues.css"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function ClosedIssues() {
  return (
    <div className='closed-issues'>
        <div className='closed-issues-icon'><CheckCircleOutlineIcon id="closed-issues-icon"/></div>
        <div className='closed-issues-name'>Closed Issues</div>
    </div>
  )
}

export default ClosedIssues