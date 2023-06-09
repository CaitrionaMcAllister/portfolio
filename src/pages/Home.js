import React from "react";
import { Header } from "../Overlay.js";
import * as THREE from "three";
import "../App.css";
import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useIntersect, Image, ScrollControls, Scroll } from "@react-three/drei";

function Item({ url, scale, ...props }) {
  const visible = useRef(false);
  const [hovered, hover] = useState(false);
  const ref = useIntersect((isVisible) => (visible.current = isVisible));
  const { height } = useThree((state) => state.viewport);
  useFrame((state, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(
      ref.current.position.y,
      visible.current ? 0 : -height / 2 + 1,
      4,
      delta
    );
    ref.current.material.zoom = THREE.MathUtils.damp(
      ref.current.material.zoom,
      visible.current ? 1 : 1.5,
      4,
      delta
    );
    ref.current.material.grayscale = THREE.MathUtils.damp(
      ref.current.material.grayscale,
      hovered ? 0 : 1,
      4,
      delta
    );
  });
  return (
    <group {...props}>
      <Image
        ref={ref}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        scale={scale}
        url={url}
      />
    </group>
  );
}

function Items() {
  const { width: w, height: h } = useThree((state) => state.viewport);
  return (
    <Scroll>
      <Item
        url="./websiteImagesHome/1.png"
        href="/Enter"
        scale={[w / 3, w / 3, 1]}
        position={[-w / 6, 0, 0]}
      />
      <Item
        url="./websiteImagesHome/10.png"
        scale={[2, w / 3, 1]}
        position={[w / 30, -h, 0]}
      />
      <Item
        url="./websiteImagesHome/3.png"
        scale={[w / 3, w / 5, 1]}
        position={[-w / 4, -h * 1, 0]}
      />
      <Item
        url="./websiteImagesHome/4.png"
        scale={[w / 5, w / 5, 1]}
        position={[w / 4, -h * 1.2, 0]}
      />
      <Item
        url="./websiteImagesHome/5.png"
        scale={[w / 5, w / 5, 1]}
        position={[w / 10, -h * 1.75, 0]}
      />
      <Item
        url="./websiteImagesHome/6.png"
        scale={[w / 3, w / 3, 1]}
        position={[-w / 4, -h * 2, 0]}
      />
      <Item
        url="./websiteImagesHome/7.png"
        scale={[w / 3, w / 5, 1]}
        position={[-w / 4, -h * 2.6, 0]}
      />
      <Item
        url="./websiteImagesHome/8.png"
        scale={[w / 2, w / 2, 1]}
        position={[w / 4, -h * 3.1, 0]}
      />
      <Item
        url="./websiteImagesHome/9.png"
        scale={[w / 2.5, w / 2, 1]}
        position={[-w / 6, -h * 4.1, 0]}
      />
    </Scroll>
  );
}

export const Home = () => (
  <>
    <Canvas orthographic camera={{ zoom: 80 }}>
      <color attach="background" args={["#E9E9E9"]} />
      <ScrollControls damping={0.5} pages={5}>
        <Items />
        <Scroll html style={{ width: "100%" }}>
          <h1
            style={{
              position: "absolute",
              top: `50vh`,
              right: "20vw",
              fontSize: "25em",
              transform: `translate3d(0,-100%,0)`,
            }}
          >
            CMCA
          </h1>
          <h1 style={{ position: "absolute", top: "180vh", left: "10vw" }}>
            CREATIVE CODING
          </h1>
          <h1 style={{ position: "absolute", top: "260vh", right: "10vw" }}>
            DATA
          </h1>
          <h1 style={{ position: "absolute", top: "350vh", left: "10vw" }}>
            BRANDING
          </h1>
          <h1 style={{ position: "absolute", top: "450vh", right: "10vw" }}>
            GRAPHIC DESIGN
          </h1>
        </Scroll>
      </ScrollControls>
    </Canvas>
    <Header />
  </>
);
