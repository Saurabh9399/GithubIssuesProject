import React, { useEffect } from 'react'
import "./ClosedIssues.css"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function ClosedIssues({ onChangeState }) {
  // useEffect(() => {
  //   fetchData();
  // },[])
  
  // const fetchData = async () => {
  //     await fetch("https://api.github.com/repos/pallets/click/issues?per_page=150&state=closed")
  //       .then((res) => res.json())
  //       .then((data) => setClosedIssues(data))
  //       .catch((err) => {
  //         console.log(err);
  //       });
  // };

  const handleCloseClick = (e) => {
    e.preventDefault();

    onChangeState(e.target.id);
    
  }

  return (
    <div className='closed-issues'>
        <div className='closed-issues-icon'><CheckCircleOutlineIcon id="closed-issues-icon"/></div>
        <div className='closed-issues-name' onClick={handleCloseClick} id='closed'>Closed Issues</div>
    </div>
  )
}

export default ClosedIssues