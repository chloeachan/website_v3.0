import React from "react";
import './work.css';
import { useState } from 'react';


import Boba from './work/boba';
import ThreeD from './work/3d';
import Fonts from './work/fonts';
import SlopeDay from './work/slope_day';
import TakeCare from './work/take_care';
import Sleep from './work/sleep';
import Comics from './work/comics';
import Avo from './work/avo';
import Get from './work/get';

function Work() {
  const [isShown, setIsShown] = useState(false);

  // sleep infographic
  const handleMouseOver = () => {
    setIsShown(true);
  }

  const handleMouseOut = () => {
    setIsShown(false);
  }

  return (
    <div class="container1">
      <div class="content">
        <div class="grid-container1">
          <p class="text top-left">WORK<br></br><br></br></p>
          <div class="middle1">
            <br></br>
            <br></br>
            <Get />
            <br></br>
            <br></br>
            <Avo />
            <br></br>
            <br></br>
            <Fonts />
            <br></br>
            <br></br>
            <Sleep />
            <br></br>
            <br></br>
            <SlopeDay />
            <br></br>
            <br></br>
            <Comics />
            <br></br>
            <br></br>
            <Boba />
            <br></br>
            <br></br>
            <TakeCare />
            <br></br>
            <br></br>
            <ThreeD />
            <br></br>
            <p class="text no-margin no-margin1">* = click to navigate to linked source for more information</p>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
        <br></br>
      </div>
    </div>
  );
}

export default Work;