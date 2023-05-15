import { Environment, Sky, Cloud } from "@react-three/drei";

function Background() {
  return (
    <group>
      <Sky />
      <Environment preset="sunset" />
      <Cloud position={[-10, -6, -15]} speed={0.2} opacity={0.4} />
      <Cloud position={[10, 6, -15]} speed={0.2} opacity={0.25} />
      <Cloud position={[0, 10, -15]} speed={0.2} opacity={0.2} />
      <Cloud position={[0, -10, -15]} speed={0.2} opacity={0.2} />
      <Cloud position={[-20, -10, 10]} speed={0.2} opacity={0.3} />
      <Cloud position={[10, 6, 5]} speed={0.2} opacity={0.25} />
      <Cloud position={[-15, 10, 10]} speed={0.2} opacity={0.2} />
      <Cloud position={[0, -10, -20]} speed={0.2} opacity={0.2} />
      <Cloud position={[-10, -6, 5]} speed={0.2} opacity={0.3} />
      <Cloud position={[10, 6, 10]} speed={0.2} opacity={0.25} />
    </group>
  );
}

export { Background };

//https://discourse.threejs.org/t/updates-to-color-management-in-three-js-r152/50791
