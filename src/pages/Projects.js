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
        url="./websiteImagesHome/img1.jpg"
        href="https://caitrionamcallister/Enter"
        scale={[w / 3, w / 3, 1]}
        position={[-w / 6, 0, 0]}
      />
      <Item
        url="./websiteImagesHome/img2.jpg"
        scale={[2, w / 3, 1]}
        position={[w / 30, -h, 0]}
      />
      <Item
        url="./websiteImagesHome/img3.jpg"
        scale={[w / 3, w / 5, 1]}
        position={[-w / 4, -h * 1, 0]}
      />
      <Item
        url="./websiteImagesHome/img4.png"
        scale={[w / 5, w / 5, 1]}
        position={[w / 4, -h * 1.2, 0]}
      />
      <Item
        url="./websiteImagesHome/img5.png"
        scale={[w / 5, w / 5, 1]}
        position={[w / 10, -h * 1.75, 0]}
      />
      <Item
        url="./websiteImagesHome/img6.png"
        scale={[w / 3, w / 3, 1]}
        position={[-w / 4, -h * 2, 0]}
      />
      <Item
        url="./websiteImagesHome/img7.png"
        scale={[w / 3, w / 5, 1]}
        position={[-w / 4, -h * 2.6, 0]}
      />
      <Item
        url="./websiteImagesHome/img8.png"
        scale={[w / 2, w / 2, 1]}
        position={[w / 4, -h * 3.1, 0]}
      />
      <Item
        url="./websiteImagesHome/img9.png"
        scale={[w / 2.5, w / 2, 1]}
        position={[-w / 6, -h * 4.1, 0]}
      />
    </Scroll>
  );
}

export const Projects = () => (
  <>
    <Canvas orthographic camera={{ zoom: 80 }}>
      <color attach="background" args={["#f0f0f0"]} />
      <ScrollControls damping={0} pages={5}>
        <Items />
        <Scroll html style={{ width: "100%" }}>
          {/* <a href="#chill">MM</a> */}
          <div id="plasticvortex">
            <h1
              style={{
                position: "absolute",
                top: "50vh",
                left: "10vw",
                color: "#444444",
              }}
            >
              Plastic Vortex
            </h1>
            <p style={{ position: "absolute", top: "57vh", left: "10vw" }}>
              Plastic Vortex takes a deep dive into ocean plastics and marine
              debris caused by human negligence. The project is inspired by a
              NASA satellite data that tracks the movement of micro-plastics in
              a densely polluted area of the Pacific Ocean, also known as the
              ‘Great Pacific Garbage Patch’. <br />
              This series of interactive visuals include an audio and motion
              reactive installation piece, supporting editorial and augmented
              reality animation.
            </p>
          </div>

          <div id="mariomethod">
            <h1 style={{ position: "absolute", top: "180vh", left: "10vw" }}>
              Mario Method
            </h1>
            <p style={{ position: "absolute", top: "187vh", left: "10vw" }}>
              The Mario Method is an interactive 3D website that explores
              digital landscapes, immersion, and gamification. Developed using
              React Three Fiber, this platform provides an immersive experience
              for users to interact and navigate. <br />
              The Mario Method combines nostalgia, innovative technology, and a
              gamified approach to redefine the concept of interactive websites.
              The website invites users to contemplate the notion of digital
              environments as tangible and interactive spaces.
            </p>
          </div>

          <div id="byteme">
            <h1 style={{ position: "absolute", top: "260vh", right: "10vw" }}>
              ByteMe
            </h1>
            <p style={{ position: "absolute", top: "267vh", left: "10vw" }}>
              ByteMe is an empowering festival designed to spark young womens
              coding careers. With a commitment to breaking down barriers and
              fostering inclusivity, ByteMe encourages young women to fearlessly
              enter a male-dominated industry and explore a new realm of
              possibilities.
            </p>
          </div>

          <div id="homeheatmap">
            <h1 style={{ position: "absolute", top: "350vh", left: "10vw" }}>
              Home Heat Map
            </h1>
            <p style={{ position: "absolute", top: "357vh", left: "10vw" }}>
              The Home Heat Map project combines web development, interaction
              design, and 3D design using WebGL to create an immersive web
              experience. It visualizes live data on a dynamic 3D globe,
              enabling users to explore and analyze global data trends in
              real-time. <br />
              The 3D globe visualises the popularity of remote working before,
              during and after the Covid pandemic.
            </p>
          </div>

          <div id="chill">
            <h1 style={{ position: "absolute", top: "450vh", right: "10vw" }}>
              Chill
            </h1>
            <p style={{ position: "absolute", top: "457vh", left: "10vw" }}>
              ‘Chill’ establishes an environmentally friendly and sustainable
              flavoured water company with natural ingredients, eco-friendly
              practices, and a focus on health-conscious consumers. <br />
              The colorful branding inspired by nature, natural fruit flavors,
              and environmental responsibility.
            </p>
          </div>
        </Scroll>
      </ScrollControls>
    </Canvas>
    <Header />
  </>
);
