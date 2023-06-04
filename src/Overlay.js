// import { Center } from "@react-three/drei";
import "./App.css";

function Overlay() {
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
      <p className="App-enter">ENTER</p>
      <a
        className="App-link"
        href="https://www.instagram.com/caitriona_mcallister/"
        target="_blank"
        rel="noopener noreferrer"
      >
        CAITRIONA'S PORTFOLIO
      </a>
    </div>
  );
}

export { Overlay };
