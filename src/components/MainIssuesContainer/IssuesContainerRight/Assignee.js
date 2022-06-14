import React from 'react'
import "./Assignee.css"

function Assignee({openIssues}) {
  console.log("openIssues assignee", openIssues);
  return (
    <div className='assignee'>
      <label for="assignee">Assignee:</label>
      <select name="assignee" id="assignee">
        {
              openIssues.map((item) => {
              const newLabelArr = item.assignees;
              console.log("newLabel",newLabelArr);
              return newLabelArr.map((label) => {
                return <option>{label.login}</option>
            })
            }
            )}
      </select>
    </div>
  )
}

export default Assignee