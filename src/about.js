import React from "react";
import './about.css';
import chloe from "./about/images/chloe.png"
import Bujo from "./about/bujo"
import PW2 from "./about/pw2"
import Research from "./about/research"
import PW1 from "./about/pw1"
import KWK from "./about/kwk"
import Designs from "./about/designs"

function About() {
  return (
    <div class="container1">
      <div class="content">
        <div class="grid-container1">
          <p class="text top-left">ABOUT</p>
          <div class="middle1">
            <br></br>
            <br></br>
            <div class="section">
              <div class="horizontal-box">
                <div class="image-box">
                  <img src={chloe} class="image0" />
                </div>
                <div class="other-box">
                  <p class="text no-margin1 body-text">Hi! I'm Chloe, a first-year student at Cornell with interests in design and programming.
                    After immersing myself in a variety of STEM-related areas, I found myself particularly enjoying both creative-right and analytical-left sided
                    fields— especially computer science. I also love exploring nature, photography, and videography.
                  </p>
                  <br></br>
                  <p class="text no-margin1 body-text">I'm a self-starter looking into new opportunities and projects related to software engineering, product design, and product
                    management— please feel free to <a class="link1" href="mailto:cac499@cornell.edu">reach out</a>!</p>
                  <br></br>
                  <br></br>
                  <p class="text no-margin1">currently, i am:</p>
                  <div class="box3">
                    <a class="text">✶ learning ocaml</a>
                    <a class="text">✶ exploring 3D modelling</a>
                    <p class="text no-margin1">✶ <a class="link1" href="https://www.youtube.com/@chloechan7661">making videos</a></p>
                  </div>
                  <br></br>
                </div>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div class="box3 centered">
                <p class="text no-margin1">previous experiences + work</p>
                <p class="text no-margin1">↓</p>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <PW2 />
              <br></br>
              <br></br>

              <KWK />
              <br></br>
              <br></br>
              <Designs />
              <br></br>
              <br></br>
              <PW1 />
              <br></br>
              <br></br>
              <Research />
              <br></br>
              <br></br>
              <Bujo />
              <br></br>
              <p class="text no-margin no-margin1">* = click to navigate to linked source for more information</p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div >
  );
}

export default About;