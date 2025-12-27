import React from "react";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/randomColor";
import StarRating from "./components/starRating";
import ToDoApp from "./components/todolist";
import Carousal from "./components/carousal";
import LoadMoreButton from "./components/loadMore";
import NestedNavigation from "./components/nested-navigation";
import sideMenu from "./components/nested-navigation/data";
import QRCodeGenerator from "./components/qrCodegenrator";
import SwitchTheme from "./components/themeSwitch";
import CustomScrollIndicator from "./components/custom-scroll-indicator";
import A from "./components/contextApiDetails/A";
import B from "./components/contextApiDetails/B";
import { MyContextProvider } from "./MyContext";

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
      <MyContextProvider>
        <A />
        <B />
      </MyContextProvider>

      <CustomScrollIndicator />
      <SwitchTheme />
      <QRCodeGenerator />
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
      <NestedNavigation menu={sideMenu} />
    </>
  );
}

export default App;
