import React from "react";
import image from './images/fonts.png';
import { useState } from 'react';

function Fonts() {
  const [isShown, setIsShown] = useState(false);

  const handleMouseOver = () => {
    setIsShown(true);
  }

  const handleMouseOut = () => {
    setIsShown(false);
  }

  return (
    <div class="section">
      <a class="hovered-design link" href="https://www.behance.net/chloeachan/projects" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <p class="main-text3 no-margin1">03. Curated Fonts*</p>
        <p class="text1 no-margin1">Typography | February 2022 - Present</p>
      </a>
      {isShown &&
        <div class="container">
          <img class="image4" src={image} />
        </div>
      }
    </div>

  );
}

export default Fonts;