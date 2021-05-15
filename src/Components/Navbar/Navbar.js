import React from 'react';
import DateAndTime from '../Utility/DateAndTime';
import { MdSignalWifi3Bar,  MdBattery90, MdBrightness2, MdVolumeUp, MdArrowDropDown} from "react-icons/md";


const Navbar = () => {
  return (
    <nav className="position-fixed bgColor-1 justify-sb align-center" style={{height: "25px", width: "100%", zIndex: "2"}}>
      <div>
        <span className="ml-2 mr-2 fw-400 fs-small">Activities</span>
        <hr style={{border: "1px solid #f70", marginTop: "1px"}} />
      </div>
      <DateAndTime/>
      <div>
      <ul className="align-center" style={{cursor: 'pointer'}}>
        <li className="mr-3 ml-2"><MdBrightness2/></li>
        <li className="mr-3"><MdSignalWifi3Bar/></li>
        <li className="mr-3"><MdVolumeUp/></li>
        <li><MdBattery90/></li>
        <li className="mr-2"><MdArrowDropDown size="1.2rem"/></li>
      </ul>
      <hr style={{border: "1px solid #f70"}} />
      </div>
    </nav>
  )
}

export default Navbar
