import React from 'react'
import IssuesContainerLeft from './IssuesContainerLeft/IssuesContainerLeft'
import IssuesContainerRight from './IssuesContainerRight/IssuesContainerRight'
import "./MainIssuesContainer.css"
import ShowIssues from './ShowIssues'

function MainIssuesContainer() {
  return (
    <div className='main-issues-container'>
        <div className='main-issues-nav'>
            <IssuesContainerLeft/>
            <IssuesContainerRight/>
        </div>
        <div className='main-issues-display'>
            <ShowIssues/>
        </div>
    </div>
  )
}

export default MainIssuesContainer