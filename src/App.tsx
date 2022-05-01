import "./App.css";
import { ReactComponent as ReactSVG } from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactSVG className="App-logo" width={200} height={200} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
