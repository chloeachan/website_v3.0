import React from "react";
import image from './images/kwk.png';
import { useState } from 'react';


function KWK() {
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
        <p class="main-text4 no-margin1">Kode with Klossy Program Scholar</p>
        <p class="text2 no-margin1">July 2022</p>
      </a>
      {isShown &&
        <div class="container">
          <img class="horiz1" src={image} />
        </div>
      }
    </div>

  );
}

export default KWK;