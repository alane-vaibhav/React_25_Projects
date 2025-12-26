import React, { useState } from "react";
import Menulist from "./menulist";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./style.css";

const Menuitem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleChildrenToggle = (currentLabel) => {
    return setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [currentLabel]: !displayCurrentChildren[currentLabel],
    });
  };

  return (
    <li>
      <div className="item-menu-container">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleChildrenToggle(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="#fff" size={20} />
            ) : (
              <FaPlus color="#fff" size={20} />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item?.children &&
      item?.children?.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <Menulist list={item?.children} />
      ) : null}
    </li>
  );
};

export default Menuitem;
