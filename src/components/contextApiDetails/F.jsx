import React from "react";
import { useMyContext } from "../../MyContext";

const F = () => {
  const { count } = useMyContext();

  return (
    <div style={{ background: "orange", padding: "10px", width: "200px" }}>
      <h1>Count in F {count}</h1>
    </div>
  );
};

export default F;
