import { Center, Cylinder } from "@react-three/drei";
import { useGameStore } from "../store";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { Text3D } from "@react-three/drei";

export const KanaSpots = () => {
    const { level, currentKana, currentStage, mode,currentTouch } = useGameStore((state) => ({
        level: state.level,
        currentKana: state.currentKana,
        touchedKana:state.touchedKana,
        currentStage: state.currentStage,
        mode: state.mode,
        currentTouch:state.currentTouch
    }));

    if (!level) {
        return null;
    }

    return level[currentStage].map((kana, index) => (
        <group key={kana.name} rotation-y={(index / level[currentStage].length) * Math.PI * 2}>
            <group position-x={4} position-z={3.5} position-y={0} >
                <RigidBody colliders={false} type="fixed" onCollisionEnter={() => {
                    currentTouch({touchedKana:kana});
                }}>
                    <CylinderCollider args={[0.25 / 2, 1]} />
                    <Cylinder scale={[1, 0.25, 1]}>
                        <meshStandardMaterial color="white" />
                    </Cylinder>
                </RigidBody>
                <Center position-y={0.8}>
                    <Text3D font={"./font/Noto_JP_ExtraBold_Regular.json"} size={1} rotation-y={-(index / level[currentStage].length) * Math.PI * 2}>
                        {mode === "hiragana" ? kana.character.hiragana : kana.character.katakana}
                        <meshNormalMaterial />
                    </Text3D>
                </Center>
            </group>
        </group>
    ))
}