import React, { useEffect, useState } from 'react'
import "./Assignee.css"

function Assignee({onChangeAssignee}) {
  // console.log("openIssues assignee", openIssues);
  const [assigneesArray,setAssigneesArray] = useState([]);
  // console.log("label array",labelArray);

  useEffect(() => {
    fetchData();
  },[])
  
  const fetchData = async () => {
      await fetch("https://api.github.com/repos/pallets/click/assignees")
        .then((res) => res.json())
        .then((data) => setAssigneesArray(data))
        .catch((err) => {
          console.log(err);
        });
  };

  const handleChangeAssignee = (e) => {
    e.preventDefault();
    onChangeAssignee(e.target.value);
  }

  return (
    <div className='assignee'>
      <label for="assignee">Assignee:</label>
      <select name="assignee" id="assignee" onChange={handleChangeAssignee}>
      {
          assigneesArray.map((item) => {
            
              return <option value={item.login}>{item.login}</option>
          
          })}
      </select>
    </div>
  )
}

export default Assignee