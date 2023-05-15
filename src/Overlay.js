import { Center } from "@react-three/drei";
import "./App.css";

function Overlay({ counter1, counter2 }) {
  return (
    <div
      className="App"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        target: "_blank",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        rel: "noopener noreferrer",
      }}
    >
      <p>Caitriona's Portfolio Coming Soon!</p>
      <a
        className="App-link"
        href="https://www.instagram.com/caitriona_mcallister/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check out my <strong>Instagram</strong> in the meantime
      </a>
      <a
        className="App-link"
        href="https://www.linkedin.com/in/caitrionamcallister"
        target="_blank"
        rel="noopener noreferrer"
      >
        Let's chat on <strong>LinkedIn</strong>
      </a>
    </div>
  );
}

export { Overlay };
