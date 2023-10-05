import "./App.css";
import { ActionMenu, GameTextArea } from "./components";

function App() {
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
