import React from 'react'

export default function BackgroundImage() {
    const bg_images = {
        "wall-1": "../Desktop/Focal-Fossa-Gray.jpeg",
        "wall-2": "./images/wallpapers/wall-2.png",
        "wall-3": "./images/wallpapers/wall-3.jpg",
        "wall-4": "./images/wallpapers/wall-4.jpg",
        "wall-5": "./images/wallpapers/wall-5.jpg",
        "wall-6": "./images/wallpapers/wall-6.png",
        "wall-7": "./images/wallpapers/wall-7.png",
        "wall-8": "./images/wallpapers/wall-8.jpg",
    };
    return (
        <div style={{ backgroundImage: `url(https://picsum.photos/200/300)`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPositionX: "center" }} className="bg-ubuntu-img absolute -z-10 top-0 right-0 overflow-hidden h-full w-full">ddd
        </div>
    )
}