import React from 'react';

const bgImg = "./assets/bg-images/Focal-Fossa-Gray.jpeg";


const Desktop = () => {
  // const bgImg = "./Focal-Fossa-Gray.jpeg";
  return (
    <div className="fullSize" style={{backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPositionX: "center" }}>
    </div>
  )
}

export default Desktop;
