import React from "react";

function Citaat(props) {
  return (
    <div
      style={{ position: "sticky", top: "300px" }}
      className="Wrapper"
      id="Citaat"
    >
      <h1>{props.tekst.split("/")[0]}</h1>

      <h3>{props.tekst.split("/")[1]}</h3>
    </div>
  );
}

export default Citaat;
