import "./App.css";
import Accordian from "./components/accordian";
import ToDoApp from "./components/todolist";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "5px",
      }}
    >
      <Accordian />
      <ToDoApp />
    </div>
  );
}

export default App;
