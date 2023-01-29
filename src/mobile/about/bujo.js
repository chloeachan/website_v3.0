import React from "react";
import bujo from './images/bujo.png';
import { useState } from 'react';


function Bujo() {
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
        <p class="main-text4 no-margin1">Bullet Journal and Calligraphy Content Creator</p>
        <p class="text2 no-margin1">April 2020 - March 2021</p>
      </a>
      {isShown &&
        <div class="container">
          <img class="horiz2" src={bujo} />
        </div>
      }
    </div>

  );
}

export default Bujo;