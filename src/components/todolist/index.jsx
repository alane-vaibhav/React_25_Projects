import React, { useState } from "react";

const ToDoApp = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleAddition = () => {
    setList([...list, item]);
    setItem("");
  };

  const handleRemove = (id) => {
    let newList = [...list];
    newList.splice(id, 1);
    setList(newList);
  };
  return (
    <div style={{ height: "auto", marginBottom: "20px" }}>
      <h2>To do App</h2>

      <div>
        <input
          type="text"
          placeholder="add item..."
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={handleAddition}>Add item</button>
      </div>
      {list.map((el, index) => (
        <>
          <h4>{el}</h4>
          <button onClick={() => handleRemove(index)}>Remove item</button>
        </>
      ))}
    </div>
  );
};

export default ToDoApp;
