import { CapsuleCollider, RigidBody, vec3 } from "@react-three/rapier";
import { BlueRobo } from "./BlueRobo";
import { useKeyboardControls } from "@react-three/drei";
import { Controls } from "../App";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGameStore } from "../store";

const JUMP_FORCE = .75;
const MOVEMENT_SPEED = .1;
const MAX_VEL = 3;

export const BlueRoboController = () => {
  const jumpPressed = useKeyboardControls((state) => state[Controls.jump]);
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const forwardPressed = useKeyboardControls((state) => state[Controls.forward]);
  const backPressed = useKeyboardControls((state) => state[Controls.back]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);
  const { currentKana, touchedKana, nextStage, currentStage,startGame } = useGameStore((state) => ({
    currentKana: state.currentKana,
    touchedKana: state.touchedKana,
    nextStage: state.nextStage,
    currentStage: state.currentStage,
    startGame:state.startGame
  }));

  useEffect(() => {
    if (touchedKana && currentKana && currentKana === touchedKana) {
      if (currentStage < 3) {
        nextStage();
      }
      if(currentStage===3)
      {
        console.log("You won")
       
      }
      
    }
  }, [touchedKana]);

  const rigidBody = useRef();
  const robo = useRef();
  const isOnFloor = useRef(true);

  const resetPosition = () => {

    rigidBody.current.setTranslation(vec3({ x: 0, y: 0, z: 0 }));
  }

  useFrame(() => {
    const impluse = { x: 0, y: 0, z: 0 };
    if (jumpPressed && isOnFloor.current) {
      console.log("jump")
      impluse.y += JUMP_FORCE;
      isOnFloor.current = false;
    }

    const linvel = rigidBody.current.linvel();
    let changeRotation = false;

    if (rightPressed && linvel.x < MAX_VEL) {
      impluse.x += MOVEMENT_SPEED;
      changeRotation = true;
    }

    if (leftPressed && linvel.x > - MAX_VEL) {
      impluse.x -= MOVEMENT_SPEED;
      changeRotation = true;
    }

    if (backPressed && linvel.z < MAX_VEL) {
      impluse.z += MOVEMENT_SPEED;
      changeRotation = true;
    }
    if (forwardPressed && linvel.z > -MAX_VEL) {
      impluse.z -= MOVEMENT_SPEED;
      changeRotation = true;
    }

    rigidBody.current.applyImpulse(impluse, true);
    if (changeRotation) {
      const angle = Math.atan2(linvel.x, linvel.z);
      robo.current.rotation.y = angle;
    }
  });

  return (<group>
    <RigidBody
      ref={rigidBody}
      colliders={false}
      scale={[0.5, 0.5, 0.5]}
      enabledRotations={[false, false, false]}
      onCollisionEnter={() => {
        isOnFloor.current = true;
      }}
      onIntersectionEnter={({ other }) => {
        if (other.rigidBodyObject.name === "void") {
          resetPosition();
        }
      }}
    >
      <CapsuleCollider args={[0.8, 0.4]} position={[0, 0, 0]} />
      <group ref={robo}>
        <BlueRobo />
      </group>
    </RigidBody>
  </group>)

}