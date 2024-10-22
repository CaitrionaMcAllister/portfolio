import React from "react";
import "../App.css";
import { Canvas } from "@react-three/fiber";
import { Sparkles, CameraShake } from "@react-three/drei";
import { Overlay } from "../Overlay.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

function Model() {
  const model = useLoader(GLTFLoader, "./models/scene.glb");
  return <primitive object={model.scene} scale={0.03} position={[0, -7, 0]} />;
}

export default function Enter({ ready }) {
  return (
    <>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 6, 20], fov: 40 }}>
        <fog attach="fog" args={["#cc7b32", 0, 500]} />
        <CameraShake
          maxYaw={0.08} // Max amount camera can yaw in either direction
          maxPitch={0.08} // Max amount camera can pitch in either direction
          maxRoll={0.05} // Max amount camera can roll in either direction
          rollFrequency={0.09} // Frequency of the roll rotation
          intensity={1} // initial intensity of the shake
          decayRate={0.2} // if decay = true this is the rate at which intensity will reduce at />
        />
        <Sparkles
          size={20}
          scale={[20,20,20]}
          position-y={1}
          speed={1}
          count={50}
        />
        <Model ready={ready} />
      </Canvas>
      <Overlay />
    </>
  );
}
