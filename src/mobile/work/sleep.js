import React from "react";
import sleep from './images/sleep.png'
import { useState } from 'react';

function Sleep() {
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
        <p class="main-text3 no-margin1">04. Sleep Infographic</p>
        <p class="text1 no-margin1">Graphic/Visual Design | March 2022</p>
      </a>
      {isShown && <div class="images">
        <img class="centered image1" src={sleep} />
      </div>}
    </div>
  );
}

export default Sleep;