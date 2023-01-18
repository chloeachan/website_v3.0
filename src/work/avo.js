import React from "react";
import image from './images/avo.gif';
import { useState } from 'react';


function Avo() {
  const [isShown, setIsShown] = useState(false);

  const handleMouseOver = () => {
    setIsShown(true);
  }

  const handleMouseOut = () => {
    setIsShown(false);
  }

  return (
    <div class="section">
      <a class="hovered-design link" href="https://medium.com/@cac499/avo-case-study-re-designed-website-eedfcca4212b" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <p class="main-text1 no-margin1">02. Avo Website Redesign*</p>
        <p class="text no-margin1">Web + Visual Design | January 2023</p>
      </a>
      {isShown &&
        <div class="container">
          <img class="horiz" src={image} />
        </div>
      }
    </div>

  );
}

export default Avo;