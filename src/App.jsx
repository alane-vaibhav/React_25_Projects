import React from "react";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/randomColor";
import StarRating from "./components/starRating";
import ToDoApp from "./components/todolist";
import Carousal from "./components/carousal";
import LoadMoreButton from "./components/loadMore";

export const PracticeContext = React.createContext();

function App() {
  let color = {
    color1: "pink",
    color2: "red",
    color3: "green",
    color4: "blue",
    color5: "orange",
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "5px",
        }}
      >
        <Accordian />
        <ToDoApp />
        <PracticeContext.Provider value={color}>
          <RandomColor />
        </PracticeContext.Provider>
        <StarRating noOfStars={10} />
      </div>
      <Carousal url={"https://picsum.photos/v2/list"} limit={10} />
      <LoadMoreButton />
    </>
  );
}

export default App;
