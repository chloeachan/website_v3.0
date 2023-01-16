import React from "react";
import boba from './images/boba.png';
import { useState } from 'react';


function Boba() {
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
        <p class="main-text1 no-margin1">07. Lauren Martin Inspired Bubble Tea</p>
        <p class="text no-margin1">Illustration | October 2022 - December 2022</p>
      </a>
      {isShown &&
        <div class="container">
          <img class="image5" src={boba} />
        </div>
      }
    </div>

  );
}

export default Boba;