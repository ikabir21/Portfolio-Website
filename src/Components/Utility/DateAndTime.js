import React from 'react';


const DateAndTime = () => {
  const getCurrentDate = new Date().toDateString().slice(4, 10);
  const getCurrentTime = new Date().getHours() + ":" + new Date().getMinutes();
  return (
      <div>
        <span className="fw-300 ml-2 mr-2 fs-xs">{getCurrentDate}&nbsp;{getCurrentTime}</span>
        <hr style={{border: "1px solid #f70", marginTop: "1px"}} />
      </div>
  )
}

export default DateAndTime;
