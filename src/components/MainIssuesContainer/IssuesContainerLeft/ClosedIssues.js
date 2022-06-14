import React, { useEffect } from 'react'
import "./ClosedIssues.css"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function ClosedIssues({ setClosedIssues,handleOpenClick }) {
  useEffect(() => {
    fetchData();
  },[])
  
  const fetchData = async () => {
      await fetch("https://api.github.com/repos/pallets/click/issues?per_page=150&state=closed")
        .then((res) => res.json())
        .then((data) => setClosedIssues(data))
        .catch((err) => {
          console.log(err);
        });
  };
  return (
    <div className='closed-issues'>
        <div className='closed-issues-icon'><CheckCircleOutlineIcon id="closed-issues-icon"/></div>
        <div className='closed-issues-name' onClick={handleOpenClick}>Closed Issues</div>
    </div>
  )
}

export default ClosedIssues