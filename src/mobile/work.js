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
    <div class="container3">
      <div class="content1">
        <p class="text1 top-left">WORK</p>
        <br></br>
        <Get />
        <br></br>
        <Avo />
        <br></br>
        <Fonts />
        <br></br>
        <Sleep />
        <br></br>
        <SlopeDay />
        <br></br>
        <Comics />
        <br></br>
        <Boba />
        <br></br>
        <TakeCare />
        <br></br>
        <ThreeD />
        <br></br>
        <p class="text1 no-margin no-margin1">* = click to navigate to linked source for more information</p>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default Work;