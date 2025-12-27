import React from "react";
import C from "./C";
import D from "./D";

const A = () => {
  return (
    <div style={{ background: "red", padding: "10px", width: "400px" }}>
      A
      <C />
      <D />
    </div>
  );
};

export default A;
