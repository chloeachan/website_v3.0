import React from "react";
import image from './images/pw2.png';
import { useState } from 'react';


function PW2() {
  const [isShown, setIsShown] = useState(false);

  const handleMouseOver = () => {
    setIsShown(true);
  }

  const handleMouseOut = () => {
    setIsShown(false);
  }

  return (
    <div class="section">
      <a class="hovered-design link" href="https://chloeachan.tech" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <p class="main-text4 no-margin1">Personal Website v2.0*</p>
        <p class="text2 no-margin1">September 2022</p>
      </a>
      {isShown &&
        <div class="container">
          <img class="horiz" src={image} />
        </div>
      }
    </div>

  );
}

export default PW2;