import React from 'react'
import "./OpenedIssues.css"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function OpenedIssues() {
  return (
    <div className='opened-issues'>
        <div className='opened-issues-name'>Opened Issues</div>
        <div className='opened-issues-icon'><ArrowCircleRightIcon id="opened-issues-icon"/></div>
    </div>
  )
}

export default OpenedIssues