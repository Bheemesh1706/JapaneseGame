import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
function App() {
  return (
    <Canvas shadows camera={{ position: [0, 6, 14], fov: 42 }}>
      <color attach="background" args={["#dbecfb"]} />
      <fog attach={"fog"} args={["#dbecfb",30,40]}/>
      <Suspense>
      <Physics>
        <Experience />
      </Physics>
      </Suspense>
    </Canvas>
  );
}

export default App;
