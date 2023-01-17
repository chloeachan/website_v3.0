import React from "react";
import image from './images/pw1.png';
import { useState } from 'react';


function PW1() {
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
        <p class="main-text2 no-margin1">Personal Website v1.0</p>
        <p class="text no-margin1">December 2021</p>
      </a>
      {isShown &&
        <div class="container">
          <img class="horiz" src={image} />
        </div>
      }
    </div>

  );
}

export default PW1;