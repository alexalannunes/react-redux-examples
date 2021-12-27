import React from "react";
import "./App.css";
import { Stock } from "./features/stock/Stock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Stock />
      </header>
    </div>
  );
}

export default App;
