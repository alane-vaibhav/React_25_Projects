import React from "react";
import { useMyContext } from "../../MyContext";

const C = () => {
  const { setCount } = useMyContext();
  return (
    <div style={{ background: "grey", padding: "10px", width: "200px" }}>
      <button onClick={() => setCount((p) => p + 1)}>+ Count</button>
    </div>
  );
};

export default C;
