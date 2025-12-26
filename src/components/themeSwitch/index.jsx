import React from "react";

import "./style.css";
import useLocalStorage from "./useLocalStorage";

const SwitchTheme = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World!</p>
        <button onClick={handleToggleTheme}>Switch theme</button>
      </div>
    </div>
  );
};

export default SwitchTheme;
