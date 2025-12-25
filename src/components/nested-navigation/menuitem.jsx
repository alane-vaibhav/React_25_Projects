import React from "react";
import Menulist from "./menulist";

const Menuitem = ({ item }) => {
  console.log("item.children", item?.children);
  return (
    <li className="item-menu-container">
      <p>{item.label}</p>

      {item && item?.children && item?.children?.length > 0 ? (
        <Menulist list={item?.children} />
      ) : null}
    </li>
  );
};

export default Menuitem;
