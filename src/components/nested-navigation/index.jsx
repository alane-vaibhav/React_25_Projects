import React from "react";
import Menulist from "./menulist";

const NestedNavigation = ({ menu } = []) => {
  return (
    <div className="tree-menu-conatiner">
      <Menulist list={menu} />
    </div>
  );
};

export default NestedNavigation;
