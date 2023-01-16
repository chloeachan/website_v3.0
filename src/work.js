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
            <div class="section">
              <p class="main-text1 no-margin1">01. GET App Case Study*</p>
              <p class="text no-margin1">UX Design | October 2022 - December 2022</p>
            </div>
            <br></br>
            <br></br>
            <div class="section">
              <p class="main-text1 no-margin1">02. Avo Website Redesign*</p>
              <p class="text no-margin1">Web + Visual Design | January 2023</p>
            </div>
            <br></br>
            <br></br>
            <Fonts />
            <br></br>
            <br></br>
            <Sleep />
            <br></br>
            <br></br>
            <SlopeDay />
            {/* <div class="section">
              <p class="main-text1 no-margin1">05. Slope Day Poster Submission</p>
              <p class="text no-margin1">Graphic Design | November 2022</p>
            </div> */}
            <br></br>
            <br></br>
            <Comics />
            {/* <div class="section">
              <p class="main-text1 no-margin1">06. Graphic Novels in Medicine*</p>
              <p class="text no-margin1">Visual Design | September 2022 - December 2022</p>
            </div> */}
            <br></br>
            <br></br>
            <Boba />
            <br></br>
            <br></br>
            <TakeCare />
            {/* <div class="section">
              <p class="main-text1 no-margin1">08. Take Care of Yourself</p>
              <p class="text no-margin1">Graphic/Visual Design | August 2022</p>
            </div> */}
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