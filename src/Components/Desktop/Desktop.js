import React, { useState, useEffect } from 'react';
import ContextMenu from '../Utility/contextmenu/ContextMenu';
import { data } from "./contextData";
import { IoChevronForwardSharp, IoChevronBackSharp, IoCaretDown, IoHomeOutline, IoStar, IoPersonOutline, IoBookOutline } from 'react-icons/io5';
import { MdWork } from 'react-icons/md';
import { GiSkills } from 'react-icons/gi';

import "./desktop.scss";


const Desktop = (bgImg) => {
  const [showContextMenu, setContextMenu] = useState(false);
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
  const [card, setCard] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault();
    !showContextMenu ? setContextMenu(true) : setContextMenu(false);
    const x = e.clientX;
    const y = e.clientY;
    console.log(x, y);
    let _coordinate = { x, y };
    if (x + 223.825 > window.innerWidth) _coordinate = { x: x - 223.825, y };
    if (y + 268 > window.innerHeight) _coordinate = { x, y: y - 268 };
    if (x + 223.825 > window.innerWidth && y + 268 > window.innerHeight) _coordinate = { x: x - 223.825, y: y - 268 };
    setCoordinate(_coordinate);
  };

  const handleClick = () => {
    showContextMenu && setContextMenu(false);
  };

  const handleDoubleClick = (e) => {
    e.preventDefault();
    setCard(true);
    console.log(e.target);
  }

  return (
    <div onClick={handleClick} onContextMenu={(e) => handleContextMenu(e)} className="fullSize desktop_container" style={{ backgroundImage: `url(${bgImg})`}}>
      { card && <FolderCard card={card} setCard={setCard} class="min"/>}
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
      { showContextMenu && <ContextMenu coordinate={coordinate} contextItem={data} />}
    </div>
  )
}


const FolderCard = (props) => {
  const [isMax, setMax] = useState(false);
  const [folderClass, setFolderCard] = useState("folderCardContainer")
  console.log(props);
  useEffect(() => {
    isMax ? setFolderCard("max folderCardContainer") : setFolderCard("min folderCardContainer");
  }, [isMax])
  return (
    <div className={folderClass}>
      <div className="folderNavbar align-center">
        <div className="folderNavbar__left flex-center align-center">
          <IoChevronBackSharp />
          <span className="mr-1"></span>
          <IoChevronForwardSharp />
          <button className="flex-center fw-300">
            <IoHomeOutline />
            <span>Home</span>
            <IoCaretDown />
          </button>
        </div>
        <div className="folderNavbar__right flex-center">
          <img onClick={() => !props.card ? props.setCard(true) : props.setCard(false)} src="./assets/svg-icons/min.svg" alt="min" />
          <img onClick={() => !isMax ? setMax(true) : setMax(false)} className="mr-1 ml-1" src="./assets/svg-icons/maximize.svg" alt="max" />
          <img onClick={() => !props.card ? props.setCard(true) : props.setCard(false)} src="./assets/svg-icons/close.svg" alt="close" />
        </div>
      </div>
      <div className="folderSideBar1 textColor-1 text-center">
        <p className="mt-2"><IoStar /></p>
        <p className="mt-2"><IoPersonOutline /></p>
        <p className="mt-2"><IoBookOutline /></p>
        <p className="mt-2"><MdWork /></p>
        <p className="mt-2"><GiSkills /></p>
      </div>
      <div className="folderSideBar2 textColor-1">
        <p className="mt-2 ml-2 text-start">Starred</p>
        <p className="mt-2 ml-2 text-start">About</p>
        <p className="mt-2 ml-2 text-start">Education</p>
        <p className="mt-2 ml-2 text-start">Experience</p>
        <p className="mt-2 ml-2 text-start">Skills</p>
      </div>
    </div>
  )
}

export default Desktop;
