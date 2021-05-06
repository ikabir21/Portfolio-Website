import React from 'react';


const DateAndTime = () => {
  const getCurrentDate = new Date().toDateString().slice(4, 10);
  const getCurrentTime = new Date().getHours() + ":" + new Date().getMinutes();
  return (
    <h5 className="fw-400">{getCurrentDate}&nbsp;{getCurrentTime}</h5>
  )
}

export default DateAndTime;
