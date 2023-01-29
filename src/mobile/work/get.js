import React from "react";
import image from './images/get.gif';
import { useState } from 'react';


function Get() {
  const [isShown, setIsShown] = useState(false);

  const handleMouseOver = () => {
    setIsShown(true);
  }

  const handleMouseOut = () => {
    setIsShown(false);
  }

  return (
    <div class="section">
      <a class="hovered-design link" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <p class="main-text3 no-margin1">01. GET App Case Study</p>
        <p class="text1 no-margin1">UX Design | October 2022 - December 2022</p>
      </a>
      {isShown &&
        <div class="container">
          <img class="image1" src={image} />
        </div>
      }
    </div>

  );
}

export default Get;