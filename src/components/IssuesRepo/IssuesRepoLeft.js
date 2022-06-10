import React from 'react'
import "./IssuesRepoLeft.css"
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';

function IssuesRepoLeft() {
  return (
    <div className='issues-repo-left'>
      <i><MoveToInboxIcon className='issues-repo-left-icon'/></i>
      <span className='issues-repo-left-name'>pallets</span>
      <span>/</span> 
      <span className='issues-repo-left-title'>jinja</span> 

    </div>
  )
}

export default IssuesRepoLeft