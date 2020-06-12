import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import "../src/Styling/App.css";
import Wat from "./Pages/Wat is weef";
import Geschiedenis from "./Pages/Geschiedenis";
import Kunstenaars from "./Pages/Kunstenaars";
import Programma from "./Pages/Programma";
import Contact from "./Pages/Contact";
import Citaat from "./Components/Citaat";
import Landing from "./Pages/Landing";

import logo from "../src/Assets/WEEF.svg";
import borduur from "../src/Assets/borduursel.svg";
import citaten from "../src/Assets/Tekst/citaten.json";
import GeschiedenisY from "./Pages/GeschiedenisY";

function App() {
  const parRef = useRef();
  return (
    <div className="App">
      <div id="bg"></div>
      <main>
        <Parallax ref={parRef} pages={14}>
          <ParallaxLayer offset={13} speed={0.5}>
            <div id="backContact"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={4.5} speed={0.4}>
            <div id="backGeschiedenis"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.8}>
            <div id="backWat"></div>
          </ParallaxLayer>
          {/* <ParallaxLayer offset={6} speed={0.8}>
            <div id="backGal"></div>
          </ParallaxLayer> */}
          <ParallaxLayer offset={0} speed={0.0} factor={1}>
            <div id="balken">
              <div id="balk1"></div>
              <div id="balk2"></div>
              <div id="balk3"></div>
              <div id="balk4"></div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.0} factor={1}>
            <Landing></Landing>
          </ParallaxLayer>
          <ParallaxLayer offset={1.2} speed={0.1} factor={1}>
            <Citaat tekst={citaten.wat}></Citaat>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.1}>
            <Wat></Wat>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.5} factor={1}>
            <Citaat tekst={citaten.geschiedenis}></Citaat>
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.0} factor={1}>
            <Geschiedenis></Geschiedenis>
          </ParallaxLayer>
          <ParallaxLayer offset={5} speed={0.3} factor={1}>
            <Citaat tekst={citaten.geschiedenis2}></Citaat>
          </ParallaxLayer>
          <ParallaxLayer offset={6} speed={0.0} factor={1}>
            <GeschiedenisY></GeschiedenisY>
          </ParallaxLayer>
          <ParallaxLayer offset={7} speed={0.3} factor={1}>
            <Citaat tekst={citaten.kunstenaars}></Citaat>
          </ParallaxLayer>
          <ParallaxLayer offset={8} speed={0.0} factor={1}>
            <Kunstenaars></Kunstenaars>
          </ParallaxLayer>
          <ParallaxLayer offset={10} speed={0.3} factor={1}>
            <Citaat tekst={citaten.Programma}></Citaat>
          </ParallaxLayer>
          <ParallaxLayer offset={11} speed={0.0} factor={1}>
            <Programma></Programma>
          </ParallaxLayer>
          <ParallaxLayer offset={12} speed={0.3} factor={1}>
            <Citaat tekst={citaten.contact}></Citaat>
          </ParallaxLayer>
          <ParallaxLayer offset={13} speed={0.0} factor={1}>
            <Contact></Contact>
          </ParallaxLayer>
        </Parallax>
      </main>

      <footer></footer>
      <div id="navBar">
        <img
          id="logo"
          src={logo}
          alt="logo"
          onClick={() => parRef.current.scrollTo(0)}
        ></img>
        <ul id="menu">
          <li onClick={() => parRef.current.scrollTo(2)}>
            Wat&nbsp;is&nbsp;weef
          </li>
          <li onClick={() => parRef.current.scrollTo(3)}>
            <img src={borduur} alt="logo" width="150px"></img>
          </li>
          <li onClick={() => parRef.current.scrollTo(4)}>Geschiedenis</li>
          <li onClick={() => parRef.current.scrollTo(5)}>
            <img src={borduur} alt="logo" width="150px"></img>
          </li>
          <li onClick={() => parRef.current.scrollTo(8)}>Kunstenaars</li>
          <li onClick={() => parRef.current.scrollTo(9)}>
            <img src={borduur} alt="logo" width="150px"></img>
          </li>
          <li onClick={() => parRef.current.scrollTo(10)}>Programma</li>
          <li onClick={() => parRef.current.scrollTo(11)}>
            <img src={borduur} alt="logo" width="150px"></img>
          </li>
          <li onClick={() => parRef.current.scrollTo(13)}>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
