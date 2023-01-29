import './App.css';
import Work from './work';
import About from './about';
import React from 'react';
import Contact from './contact';
import { useRef } from "react";

function App() {
  const work = useRef(null);
  const about = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div class="whole-app1">
      <div class="container3">
        <div class="content1">
          <div class="row">
            <p class="text1 top-left">
              CHLOE CHAN</p>
            <p class="text1 top-right"><a onClick={() => scrollToSection(about)} className="link">about</a><br></br></p>
          </div>


          <p class="main-text3">Hi! I’m Chloe, a first-year at <a class="link" href="https://www.cornell.edu/">Cornell University*</a> studying computer science and math. I’m driven to create a bridge between design and engineering to facilitate a better means of user experience and interaction with technology.</p>
          <p class="main-text3 no-margin">Feel free to connect with me on <a class="link" href="https://www.linkedin.com/in/chloeachann/">Linkedin*</a> or email me at <a class="link" href="mailto:cac499@gmail.com">cac499@cornell.edu*</a> to learn more!</p>
          <p class="text1 no-margin">* = click on text for more information</p>
          <p class="text1 bottom-left"><br></br><a onClick={() => scrollToSection(work)} className="link">↓ selected work<br></br></a></p>
          <br></br>
        </div>
      </div>
      <div ref={work} className="work">
        <Work />
      </div>
      <div ref={about} className="about">
        <About />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;