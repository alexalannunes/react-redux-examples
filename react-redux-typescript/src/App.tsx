import "./App.css";
import Counter from "./components/counter";
import Todos from "./components/todos";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>TypeScript</h1>
        <Counter />
        <Todos />
      </header>
    </div>
  );
}

export default App;
