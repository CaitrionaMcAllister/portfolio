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
              href="http://localhost:3000/PlasticVortex"
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
          </div>

          <div>
            <a
              href="http://localhost:3000/PlasticVortex"
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
          </div>

          <div>
            <a
              href="http://localhost:3000/PlasticVortex"
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
              href="http://localhost:3000/PlasticVortex"
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
              href="http://localhost:3000/PlasticVortex"
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
