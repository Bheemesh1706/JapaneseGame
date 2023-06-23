import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { BlueRobo } from "./BlueRobo";

export const BlueRoboController = () => {

    return (<group >
        <RigidBody colliders={false} scale={[0.5, 0.5, 0.5]}>
            <CapsuleCollider args={[0.8,0.4]} position={[0,0,0]}/>
            <BlueRobo />
        </RigidBody>

    </group>)

}