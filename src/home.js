import React from "react";
import './home.css';

function Home() {
  return (
    <div class="container">
      <div class="content">
        <div class="grid-container">
          <p class="text top-left">CHLOE CHAN<br></br></p>
          <p class="text top-right">about<br></br></p>
          <div class="middle">
            <br></br>
            <br></br>
            <p class="main-text">Hi! I’m Chloe, a first-year at <a class="link" href="https://www.cornell.edu/">Cornell University*</a> studying computer science and math. I’m driven to create a bridge between design and engineering to facilitate a better means of user experience and interaction with technology.</p>
            <p class="main-text no-margin">Feel free to connect with me on <a class="link" href="https://www.linkedin.com/in/chloeachann/">Linkedin*</a> or email me at <a class="link" href="mailto:cac499@gmail.com">cac499@cornell.edu*</a> to learn more!</p>
            <p class="text no-margin">* = hover over text for more information</p>
            <br></br>
            <br></br>
            <br></br>
          </div>
          <p class="text bottom-left"><br></br>↓ selected work<br></br></p>
          <p class="text bottom-right"><br></br>made with <a class="link" href="https://reactjs.org/">react!</a><br></br></p>
        </div>
        <br></br>
      </div>
    </div>
  );
}

export default Home;