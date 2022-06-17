import React from 'react'
import "./OneIssue.css"
import StarBorderIcon from '@mui/icons-material/StarBorder';

function OneIssue(props) {
  // const {data} = props;
  // console.log("item",data.item);

  function dateFormat(inputDate, format) {
    //parse the input date
    const date = new Date(inputDate);

    //extract the parts of the date
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();    

    //replace the month
    format = format.replace("MM", month.toString().padStart(2,"0"));        

    //replace the year
    if (format.indexOf("yyyy") > -1) {
        format = format.replace("yyyy", year.toString());
    } else if (format.indexOf("yy") > -1) {
        format = format.replace("yy", year.toString().substr(2,2));
    }

    //replace the day
    format = format.replace("dd", day.toString().padStart(2,"0"));

    return format;
}

// console.log('Converted date: '+ dateFormat('2021-12-10', 'MM-dd-yyyy'));

  return (
    <div className='one-issue'>
        <div className='one-issue-title-icon'>
             <div className='one-issue-icon'><StarBorderIcon id="one-issue-icon"/></div>
             <div className='one-issue-title'>{props.data.title}</div>
        </div>
        <div className='one-issue-description'>
            <p><span className='one-issue-id'>{props.data.state}</span> opened on <span className='one-issue-date'>{dateFormat(props.data.created_at,'MM-dd-yyyy')}</span> by <span>{props.data.user.login}</span></p>

        </div>
    </div>
  )
}

export default OneIssue