import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Caitriona's Portfolio Coming Soon!</p>
        <a
          className="App-link"
          href="https://www.instagram.com/catzcollective/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my instagram in the meantime
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/caitrionamcallister"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's chat on LinkedIn
        </a>
      </header>
    </div>
  );
}

export default App;
