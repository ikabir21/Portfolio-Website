import React, { useState } from 'react';
import ContextMenu from '../Utility/contextmenu/ContextMenu';
import { data } from "./contextData";
import { IoChevronForwardSharp, IoChevronBackSharp, IoCaretDown, IoHomeOutline } from 'react-icons/io5';

import "./desktop.scss";
const bgImg = "./assets/bg-images/Focal-Fossa-Gray.jpeg";


const Desktop = () => {
  const [showContextMenu, setContextMenu] = useState(false);
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
  const [showFolderCard, setFolderCard] = useState(true);

  const handleContextMenu = (e) => {
    e.preventDefault();
    !showContextMenu ? setContextMenu(true) : setContextMenu(false);
    const x = e.clientX;
    const y = e.clientY;
    let _coordinate = { x, y };
    if (x + 132 > window.innerWidth) _coordinate = { x: x - 132, y };
    if (y + 137 > window.innerHeight) _coordinate = { x, y: y - 137 };
    if (x + 132 > window.innerWidth && y + 137 > window.innerHeight) _coordinate = { x: x - 132, y: y - 137 };
    setCoordinate(_coordinate);
  };

  const handleClick = () => {
    showContextMenu && setContextMenu(false);
  };

  const handleDoubleClick = (e) => {
    e.preventDefault();
    setFolderCard(true)
    console.log(e.target);
  }

  return (
    <div onClick={handleClick} onContextMenu={(e) => handleContextMenu(e)} className="fullSize desktop_container" style={{backgroundImage: `url(${bgImg})`}}>
      { showFolderCard && <FolderCard /> }
      <div className="desktop_apps">
        <div className="flex-column text-center" onDoubleClick={(e) => handleDoubleClick(e)}>
          <img src="./assets/svg-icons/folder_home.svg" alt="home" />
          <p className="textColor-1">ikabir</p>
        </div>
        <div className="flex-column text-center" onDoubleClick={(e) => handleDoubleClick(e)}>
          <img src="./assets/svg-icons/trash.svg" alt="trash" />
          <p className="textColor-1">Trash</p>
        </div>
      </div>
      { showContextMenu && <ContextMenu coordinate={coordinate} contextItem={[data.rename, data.copy, data.delete]} /> }
    </div>
  )
}


const FolderCard = (props) =>{
  return(
    <div className="folderCardContainer">
      <div className="folderNavbar">
        <div className="folderNavbar__left flex-center">
          <IoChevronBackSharp />
          <span className="mr-1"></span>
          <IoChevronForwardSharp />
          <button className="flex-center fw-300">
            <IoHomeOutline/>
            <span>Home</span>
            <IoCaretDown/>
          </button>
        </div>
        <div className="folderNavbar__right flex-center">
          <img src="./assets/svg-icons/min.svg" alt="min" />
          <img className="mr-1 ml-1" src="./assets/svg-icons/maximize.svg" alt="max" />
          <img src="./assets/svg-icons/close.svg" alt="close" />
        </div>
      </div>
      <div className="folderSideBar1">

      </div>
      <div className="folderSideBar2">

      </div>
    </div>
  )
}

export default Desktop;
