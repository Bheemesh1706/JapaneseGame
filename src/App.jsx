import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Physics } from "@react-three/rapier";
function App() {
  return (
    <Canvas shadows camera={{ position: [0, 6, 14], fov: 42 }}>
      <color attach="background" args={["#dbecfb"]} />
      <Physics>
        <Experience />
      </Physics>

    </Canvas>
  );
}

export default App;
