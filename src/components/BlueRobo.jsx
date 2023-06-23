/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 ./public/models/blueRobo.glb
Author: Leonth (https://sketchfab.com/leonth)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/blue-the-minimalistic-robot-e0187dedf5dc4464b31b9a051e029230
Title: Blue the minimalistic robot
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function BlueRobo(props) {
  const { nodes, materials } = useGLTF('./models/blueRobo.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials['default']} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials['default']} />
          <mesh geometry={nodes.defaultMaterial_2.geometry} material={materials['default']} />
          <mesh geometry={nodes.defaultMaterial_3.geometry} material={materials['default']} />
          <mesh geometry={nodes.defaultMaterial_4.geometry} material={materials['default']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/blueRobo.glb')