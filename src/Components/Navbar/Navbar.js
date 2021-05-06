import React from 'react';
import SignalWifi3BarIcon from '@material-ui/icons/SignalWifi3Bar';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import BatteryCharging90Icon from '@material-ui/icons/BatteryCharging90';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DateAndTime from '../Utility/DateAndTime';

const Navbar = () => {
  return (
    <nav className="position-fixed bgColor-1 justify-sb align-center" style={{height: "30px", width: "100%", zIndex: "2"}}>
      <div><h5 className="ml-3 fw-400">Activities</h5></div>
      <div><DateAndTime/></div>
      <ul className="align-center" style={{cursor: 'pointer'}}>
        <li className="mr-3 align-center"><Brightness2Icon/></li>
        <li className="mr-3 align-center"><SignalWifi3BarIcon/></li>
        <li className="mr-3 align-center"><VolumeUpIcon/></li>
        <li className="align-center"><BatteryCharging90Icon/></li>
        <li className="mr-3 align-center"><ArrowDropDownIcon/></li>
      </ul>
    </nav>
  )
}

export default Navbar
