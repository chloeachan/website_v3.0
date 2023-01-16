import React from "react";
import image from './images/take-care.png';
import { useState } from 'react';

function TakeCare() {
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
        <p class="main-text1 no-margin1">08. Take Care of Yourself</p>
        <p class="text no-margin1">Graphic/Visual Design | August 2022</p>
      </a>
      {isShown &&
        <div class="container">
          <img class="image2" src={image} />
        </div>
      }
    </div>

  );
}

export default TakeCare;