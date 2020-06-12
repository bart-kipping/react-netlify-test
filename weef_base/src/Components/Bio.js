import React from "react";
import { useSpring, a } from "react-spring";
import { useState } from "react";

function Bio(props) {
  const [more, setMore] = useState(false);
  const bioStijl = useSpring({
    height: more ? "50vh" : "16vh",
    border: props.stylo ? "solid $green 5px" : "none",
    backgroundColor: props.stylo ? "none" : "rgb(189, 236, 189)",
  });

  const pStijl = useSpring({
    maxHeight: more ? "110pt" : "33pt",
    config: { duration: 750 },
    delay: 300,
  });
  return (
    <a.div className="bio" style={bioStijl}>
      <h3>{props.naam}</h3>
      <a.p style={pStijl}>{props.bio}</a.p>
      <button
        onClick={() => {
          setMore(!more);
          console.log("moooree");
        }}
      >
        lees meer
      </button>
    </a.div>
  );
}

export default Bio;
