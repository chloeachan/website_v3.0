import React from "react";
import image from './images/comics.png';
import { useState } from 'react';

function Comics() {
  const [isShown, setIsShown] = useState(false);

  const handleMouseOver = () => {
    setIsShown(true);
  }

  const handleMouseOut = () => {
    setIsShown(false);
  }
  // image and link
  return (
    <div class="section">
      <a class="hovered-design link" href="https://drive.google.com/drive/folders/1SI_HUSMDqFB08pKxnX7XwPSzkrSN4m9N?usp=sharing" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <p class="main-text1 no-margin1">06. Graphic Novels in Medicine*</p>
        <p class="text no-margin1">Visual Design, Illustration | September 2022 - December 2022</p>
      </a>
      {isShown &&
        <div class="container">
          <img class="image3" src={image} />
        </div>
      }
    </div>

  );
}

export default Comics;