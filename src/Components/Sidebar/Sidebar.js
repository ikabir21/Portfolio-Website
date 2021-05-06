import React from 'react';
import AppsIcon from '@material-ui/icons/Apps';

const Sidebar = () => {
  return (
    <nav className="position-fixed bgColor-1 flex-column align-center justify-sb" style={{width: "80px", height: "100%"}}>
      <ul>
        <li style={{marginTop: "2.5rem"}}>a</li>
        <li className="mt-5">b</li>
        <li className="mt-5">c</li>
        <li className="mt-5">c</li>
        <li className="mt-5">c</li>
      </ul>
      <ul><li className="mb-3"><AppsIcon fontSize="large" /></li></ul>
    </nav>
  )
}

export default Sidebar;
