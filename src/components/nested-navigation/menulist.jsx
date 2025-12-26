import React from "react";
import Menuitem from "./menuitem";
import "./style.css";

const Menulist = ({ list }) => {
  return (
    <ul className="list-menu-conatiner">
      {list && list.length
        ? list.map((item) => <Menuitem item={item} />)
        : null}
    </ul>
  );
};

export default Menulist;
