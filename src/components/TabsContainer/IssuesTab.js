import React from 'react'
import "./IssuesTab.css"
import BugReportIcon from '@mui/icons-material/BugReport';


function IssuesTab() {
  return (
    <div className='issues-tab'>
        <BugReportIcon/>
        <span>Issues</span>
    </div>
  )
}

export default IssuesTab