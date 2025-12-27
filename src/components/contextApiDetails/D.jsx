import React from "react";
import { useMyContext } from "../../MyContext";

const D = () => {
  const { count } = useMyContext();
  return (
    <div style={{ background: "green", padding: "10px", width: "200px" }}>
      D<h1>Count in B-{count}</h1>
    </div>
  );
};

export default D;
