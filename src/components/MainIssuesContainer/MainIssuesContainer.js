import React from 'react'
import IssuesContainerLeft from './IssuesContainerLeft'
import IssuesContainerRight from './IssuesContainerRight'
import "./MainIssuesContainer.css"

function MainIssuesContainer() {
  return (
    <div className='main-issues-container'>
        <IssuesContainerLeft/>
        <IssuesContainerRight/>
    </div>
  )
}

export default MainIssuesContainer