import React, { useState } from 'react';
import { IoSearch, IoApps } from 'react-icons/io5';
import "./appScreen.scss";


const AppScreen = (bgImg) => {
  const [active, setActive] = useState(true);

  const handleClick = (e) => {
    // console.log(e.target.lastElementChild);
    active ? setActive(false) : setActive(true)
  }


  return (
    <div className="flex-column align-center justify-sb app_screen pb-2 textColor-1" style={{ backgroundImage: `url(${bgImg})` }}>
      <input className="searchBar ptb-1 plr-3" placeholder="Type to search" type="search" />
      <div className="apps_container flex-column">
        <div className="justify-sb row">
          <div className="col flex-center"><IoApps size="6rem" /></div>
          <div className="col flex-center"><IoApps size="6rem" /></div>
          <div className="col flex-center"><IoApps size="6rem" /></div>
          <div className="col flex-center"><IoApps size="6rem" /></div>
          <div className="col flex-center"><IoApps size="6rem" /></div>
          <div className="col flex-center"><IoApps size="6rem" /></div>
        </div>
        <div className="justify-sb row">
          <div className="col flex-center"><IoApps size="6rem" /></div>
          <div className="col flex-center"><IoApps size="6rem" /></div>
          <div className="col flex-center"><IoApps size="6rem" /></div>
          <div className="col flex-center"><IoApps size="6rem" /></div>
          <div className="col flex-center"><IoApps size="6rem" /></div>
          <div className="col flex-center"><IoApps size="6rem" /></div>
        </div>
        <div className="justify-sb row">
          <div className="col flex-center"><IoApps size="6rem" /></div>
          <div className="col flex-center"><IoApps size="6rem" /></div>
          <div className="col flex-center"><IoApps size="6rem" /></div>
          <div className="col flex-center"><IoApps size="6rem" /></div>
          <div className="col flex-center"><IoApps size="6rem" /></div>
          <div className="col flex-center"><IoApps size="6rem" /></div>
        </div>
        <div className="justify-sb row">
          <div className="col flex-center"><IoApps size="6rem" /></div>
          <div className="col flex-center"><IoApps size="6rem" /></div>
          <div className="col flex-center"><IoApps size="6rem" /></div>
          <div className="col flex-center"><IoApps size="6rem" /></div>
          <div className="col flex-center"><IoApps size="6rem" /></div>
          <div className="col flex-center"><IoApps size="6rem" /></div>
        </div>
      </div>
      <div className="flex-row footer">
        <div onClick={(e) => handleClick(e)} className="flex-column text-center">
          <h6 className="fs-sm">Frequent</h6>
          <hr className={active && "active"} />
        </div>
        <span className="mlr-1"></span>
        <div onClick={(e) => handleClick(e)} className="flex-column text-center">
          <h6 className="fs-sm">All</h6>
          <hr className={!active && "active"} />
        </div>
      </div>
    </div>
  )
}

export default AppScreen;
