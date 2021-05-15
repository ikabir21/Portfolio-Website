import React from 'react';
import { IoApps } from 'react-icons/io5';
import "./styles.scss";

const Sidebar = () => {
  return (
    <div className="position-fixed bgColor-2 flex-column align-center justify-sb" style={{ width: "60px", height: "100%"}}>
      <ul className="sidebar mt-5">
        <li className="flex-center"><IoApps size="2.5rem"/></li>
        <li className="flex-center"><IoApps size="2.5rem"/></li>
        <li className="flex-center"><IoApps size="2.5rem"/></li>
        <li className="flex-center"><IoApps size="2.5rem"/></li>
        <li className="flex-center"><IoApps size="2.5rem"/></li>
      </ul>
      <ul className="sidebar mb-1"><li className="flex-center"><IoApps size="2.5rem"/></li></ul>
    </div>
  )
}

export default Sidebar;
