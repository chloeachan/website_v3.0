import React from "react";
import image from './images/designs.png';
import { useState } from 'react';


function Designs() {
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
        <p class="main-text4 no-margin1">Various High School Designs</p>
        <p class="text2 no-margin1">March 2022 - May 2022</p>
      </a>
      {isShown &&
        <div class="container">
          <img class="horiz3" src={image} />
        </div>
      }
    </div>

  );
}

export default Designs;