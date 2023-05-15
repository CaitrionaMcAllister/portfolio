import "./App.css";
import { Background } from "./components/Background";
import { Canvas } from "@react-three/fiber";
import { Sparkles, OrbitControls } from "@react-three/drei";
import { Overlay } from "./Overlay.js";

export default function App() {
  return (
    <>
      <Canvas dpr={[1, 2]}>
        <OrbitControls />
        <ambientLight color="orange" intensity={1} />
        <Sparkles
          size={10}
          scale={[10, 10, 10]}
          position-y={1}
          speed={0.7}
          count={40}
        />
        <Background />
      </Canvas>
      <Overlay />
    </>
  );
}
