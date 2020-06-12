import React, { useState, useEffect } from "react";
import kunstenaars from "../Assets/Tekst/kunstenaars.json";
import Bio from "../Components/Bio";
import { animated, config, useTransition } from "react-spring";
import Hester from "../Assets/Pics/kapelhuis.jpg";
import Bart from "../Assets/Pics/bart.png";
import PJ from "../Assets/Pics/Voor.jpg";
import Marijke from "../Assets/Pics/worn.jpg";
import Roy from "../Assets/Pics/bart.png";
import Corine from "../Assets/Pics/withoos.jpg";
const slides = [
  {
    id: 0,
    naam: "Hester Haarsma",
    url: Hester,
  },
  {
    id: 1,
    naam: "Bart Lunenburg",
    url: Bart,
  },
  {
    id: 2,
    naam: "PJ Roggeband",
    url: PJ,
  },
  { id: 3, naam: "Marijke Schurink", url: Corine },
  { id: 4, naam: "Roy Vastenburg", url: Marijke },
  { id: 5, naam: "Corine Zomer", url: Roy },
];

function Kunstenaars() {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], (item) => item.id, {
    // from: { opacity: 0 },
    // enter: { opacity: 1 },
    // leave: { opacity: 0 },
    from: { transform: "translateX(-50%) ", opacity: 0 },
    enter: { transform: "translateX(0%) ", opacity: 1 },
    leave: { transform: "translateX (50%) ", opacity: 0 },

    config: config.slow,
  });
  useEffect(
    () => void setInterval(() => set((state) => (state + 1) % 6), 5000),
    []
  );

  return (
    <div className="Wrapper" id="Kunstenaars">
      <div id="tekst">
        <h1 className="pageTitle">Kunstenaars</h1>

        {transitions.map(({ item, props, key }) => (
          <div id="image">
            <animated.div
              id="foto"
              key={key}
              class="bg"
              style={{
                ...props,
                backgroundImage: `url(${item.url})`,
              }}
            />
            <animated.h6 style={{ ...props }}>
              {item.naam}
              <br />
              Proces WEEF!
            </animated.h6>
          </div>
        ))}
      </div>
      <ul id="bios">
        {kunstenaars.map((kunstenaar) => (
          <Bio
            naam={kunstenaar.naam}
            bio={kunstenaar.bio}
            stylo={kunstenaar.id % 2}
          ></Bio>
        ))}
      </ul>
    </div>
  );
}

export default Kunstenaars;
