import React, { useEffect } from 'react'
import "./ClosedIssues.css"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function ClosedIssues({ setClosedIssues }) {
  useEffect(() => {
    fetchData();
  },[])
  
  const fetchData = async () => {
      await fetch("https://api.github.com/repos/pallets/click/issues?state=closed")
        .then((res) => res.json())
        .then((data) => setClosedIssues(data))
        .catch((err) => {
          console.log(err);
        });
  };
  return (
    <div className='closed-issues'>
        <div className='closed-issues-icon'><CheckCircleOutlineIcon id="closed-issues-icon"/></div>
        <div className='closed-issues-name'>Closed Issues</div>
    </div>
  )
}

export default ClosedIssues