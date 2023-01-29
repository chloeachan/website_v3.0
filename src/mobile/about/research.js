import React from "react";
import image from './images/research.png';
import { useState } from 'react';


function Research() {
  const [isShown, setIsShown] = useState(false);

  const handleMouseOver = () => {
    setIsShown(true);
  }

  const handleMouseOut = () => {
    setIsShown(false);
  }

  return (
    <div class="section">
      <a class="hovered-design link" href="https://docs.google.com/document/d/1D4y-e4zFVr14y71A0flG73uYFOLmdAhCtbigJbiljcA/edit?usp=sharing" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <p class="main-text4 no-margin1">Research Intern @ MIT's Gabrieli Lab*</p>
        <p class="text2 no-margin1">June 2021 - August 2021</p>
      </a>
      {isShown &&
        <div class="container">
          <img class="horiz4" src={image} />
        </div>
      }
    </div>

  );
}

export default Research;