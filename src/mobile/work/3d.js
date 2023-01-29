import React from "react";
import image from './images/3d-candles.png';
import { useState } from 'react';

function ThreeD() {
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
        <p class="main-text3 no-margin1">09. Glimpse into 3D Art</p>
        <p class="text1 no-margin1">3D Modelling | December 2022 - Present</p>
      </a>
      {isShown &&
        <div class="container">
          <img class="image2" src={image} />
        </div>
      }
    </div>

  );
}

export default ThreeD;