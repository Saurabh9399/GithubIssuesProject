import React, { useEffect, useState } from 'react'
import "./Label.css"

function Label() {
  const [labelArray,setLabelArray] = useState([]);
  // console.log("label array",labelArray);

  useEffect(() => {
    fetchData();
  },[])
  
  const fetchData = async () => {
      await fetch("https://api.github.com/repos/pallets/click/labels")
        .then((res) => res.json())
        .then((data) => setLabelArray(data))
        .catch((err) => {
          console.log(err);
        });
  };

  return (
    <div className='label'>
        <label for="labels">Labels:</label>
        {/* <select name="cars" id="cars">
        <option value="volvo">{"sssdd"}</option>
        </select> */}
        
        <select name="labels" id="labels">
        
          {
            labelArray.map((item) => {
            
              return <option>{item.name}</option>
          
          })}


        </select>

        
    </div>
  )
}

export default Label