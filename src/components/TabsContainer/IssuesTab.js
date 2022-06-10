import React from 'react'
import "./IssuesTab.css"
import BugReportIcon from '@mui/icons-material/BugReport';


function IssuesTab() {
  return (
    <div className='issues-tab'>
        <BugReportIcon/>
        <p>Issues</p>
    </div>
  )
}

export default IssuesTab