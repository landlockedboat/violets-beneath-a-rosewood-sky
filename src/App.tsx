import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import store from "./store/store";
import { ActionMenu, GameTextArea } from "./components";

function App() {
  console.log("asdasd");

  return (
    <div className="App">
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "2rem",
        }}
      >
        <GameTextArea />
        <ActionMenu />
      </div>
    </div>
  );
}

export default App;
