import { Cylinder, MeshReflectorMaterial, OrbitControls, Text3D } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { Tori } from "./ToriGate";
import { kanas } from "../constants";
export const Experience = () => {
  return (
    <>
      <OrbitControls />


      {/*Lights*/}
      <ambientLight intensity={1} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        castShadow
        color={"9e69da"}
      />

      {/**Background */}

      <mesh position={[0, -3.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[400, 400]}
          resolution={1024}
          mixBlur={1}
          mixStrength={15}
          depthScale={1}
          minDepthThreshold={.85}
          color={"dbecfb"}
          metalness={0.6}
          roughness={1}
        />
      </mesh>

      <Tori scale={[16, 16, 16]} position={[0, 0, -22]} rotation-y={1.25 * Math.PI} />
      <Tori scale={[16, 16, 16]} position={[-8, 0, -20]} rotation-y={1.4 * Math.PI} />
      <Tori scale={[16, 16, 16]} position={[8, 0, -20]} rotation-y={Math.PI} />

      {/*Kana*/}
      <Text3D font={"./font/japaneseFont.json"} size={1}>
       {kanas[0].characters.hiragana}
      </Text3D>
      {/*Stage*/}
      <group position-y={-2.5}>
        <RigidBody colliders={false} type="fixed" position-y={-0.5}>
          <CylinderCollider args={[1 / 2, 5]} />
          <Cylinder scale={[5, 1, 5]} receiveShadow>
            <meshStandardMaterial color={"white"} />
          </Cylinder>
        </RigidBody>
      </group>
    </>
  );
};

