import React, { useEffect } from 'react'
import "./OpenedIssues.css"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function OpenedIssues({ setOpenIssues,handleOpenClick }) {

  // const [openIssues,setOpenIssues] = useState([]);

  useEffect(() => {
    fetchData();
  },[])
  
  const fetchData = async () => {
      await fetch("https://api.github.com/repos/pallets/click/issues?state=open")
        .then((res) => res.json())
        .then((data) => setOpenIssues(data))
        .catch((err) => {
          console.log(err);
        });
  };

  // console.log("data",data);

  return (
    <div className='opened-issues'>
        <div className='opened-issues-icon'><ArrowCircleRightIcon id="opened-issues-icon"/></div>
        <div className='opened-issues-name' onClick={handleOpenClick}>Opened Issues</div>
    </div>
  )
}

export default OpenedIssues