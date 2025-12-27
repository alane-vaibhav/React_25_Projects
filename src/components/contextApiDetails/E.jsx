import React from "react";
import { useMyContext } from "../../MyContext";

const E = () => {
  const { setCount } = useMyContext();

  return (
    <div style={{ background: "pink", padding: "10px", width: "200px" }}>
      E<button onClick={() => setCount((p) => p + 1)}>Count +</button>
    </div>
  );
};

export default E;
