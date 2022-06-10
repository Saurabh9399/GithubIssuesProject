import React from 'react'
import "./IssuesRepo.css"
import IssuesRepoLeft from './IssuesRepoLeft'
import IssuesRepoRight from './IssuesRepoRight'


function IssuesRepo() {
  return (
    <div className='issuesrepo'>
        <IssuesRepoLeft/>
        <IssuesRepoRight/>

    </div>
  )
}

export default IssuesRepo