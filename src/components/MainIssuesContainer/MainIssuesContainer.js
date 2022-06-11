import React from 'react'
import IssuesContainerLeft from './IssuesContainerLeft/IssuesContainerLeft'
import IssuesContainerRight from './IssuesContainerRight/IssuesContainerRight'

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