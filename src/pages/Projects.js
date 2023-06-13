import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Header } from "../Overlay.js";

export const Projects = () => (
  <>
    <Canvas
      orthographic
      camera={{ zoom: 80 }}
      gl={{ alpha: false, antialias: false, stencil: false, depth: false }}
      dpr={[1, 1.5]}
    >
      <color attach="background" args={["#E9E9E9"]} />
      <ScrollControls damping={1} pages={1}>
        <Scroll html style={{ width: "100%" }}>
          <div>
            <a
              href="/PlasticVortex"
              style={{
                position: "absolute",
                top: `15vh`,
                left: "10vw",
                fontSize: "30",
                color: "#ff0040",
              }}
            >
              Plastic Vortex
            </a>
            <a
              href="https://youtu.be/eZFFE6rRdx4"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "absolute",
                top: `17vh`,
                left: "15vw",
                scale: "0.7",
                color: "#ff0040",
              }}
            >
              Video Summary
            </a>
          </div>

          <div>
            <a
              href="/TheMarioMethod"
              style={{
                position: "absolute",
                top: `30vh`,
                left: "10vw",
                fontSize: "30",
                fontFamily: "halyard-display",
                color: "#ff0040",
              }}
            >
              The Mario Method
            </a>
            <a
              href="https://youtu.be/GekQMljEEqw"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "absolute",
                top: `32vh`,
                left: "16vw",
                scale: "0.7",
                color: "#ff0040",
                fontFamily: "halyard-display",
              }}
            >
              Video Summary
            </a>
          </div>

          <div>
            <a
              href="/ByteMe"
              style={{
                position: "absolute",
                top: `45vh`,
                left: "10vw",
                fontSize: "30",
                // fontFamily: "halyard-display",
                color: "#ff0040",
              }}
            >
              Byte Me
            </a>
          </div>

          <div>
            <a
              href="/HomeHeatMap"
              style={{
                position: "absolute",
                top: `60vh`,
                left: "10vw",
                fontSize: "30",
                fontFamily: "halyard-display",
                color: "#ff0040",
              }}
            >
              Home Heat Map
            </a>
          </div>

          <div>
            <a
              href="/Chill"
              style={{
                position: "absolute",
                top: `75vh`,
                left: "10vw",
                fontSize: "30",
                // fontFamily: "halyard-display",
                color: "#ff0040",
              }}
            >
              Chill
            </a>
          </div>
        </Scroll>
      </ScrollControls>
    </Canvas>
    <Header />
  </>
);
