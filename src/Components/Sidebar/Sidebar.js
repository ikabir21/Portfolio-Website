import React, { useEffect, useState } from 'react';
import { VscCircleFilled } from "react-icons/vsc";
import { IoApps } from "react-icons/io5";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./styles.scss";
import apps from './data';

const Sidebar = () => {
  const history = useHistory();
  const location = useLocation();
  const [active, setActive] = useState(true);
  const [isAtHome, setAtHome] = useState(true);
  useEffect(() => {
    setActive(false);
  });

  const toggleApp2Desktop = () => {
    if (location.pathname==="/") history.push("/apps");
    else if (location.pathname==="/apps") history.push("/");
  }

  return (
    <div className="position-fixed flex-column bgColor-2 flex-column align-center justify-sb" style={{ height: "100%" }}>
      <ul className="sidebar plr-1 mt-5">
        {apps.map(app => (
          <li className="flex-center" key={app.id}><VscCircleFilled style={{ visibility: active ? "visible" : "hidden", color: "#ff423e" }} size="0.8rem" />{app.icon}<VscCircleFilled style={{ visibility: "hidden" }} size="0.8rem" /></li>
        ))}
      </ul>
      <ul className="sidebar mb-1" component={Link} to="/" onClick={toggleApp2Desktop}><li className="flex-center"><IoApps size="2.5rem" /></li></ul>
    </div>
  )
}

export default Sidebar;
