import React from 'react'
import { useGLTF } from '@react-three/drei'

import modelGltf from '../assets/3d/tshirt.glb'
// import modelGltf from '../assets/3d/shirt_baked.glb'

const Tshirt = () => {
  const { nodes, materials } = useGLTF(modelGltf)
  return (
    <group scale={10} dispose={null}>
      {/* <mesh
        castShadow
        receiveShadow
        name='tshirt'
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
      /> */}
      <mesh
        castShadow
        receiveShadow
        name='tshirt'
        geometry={nodes.tshirt.geometry}
        material={materials.color}
      />
    </group>
  )
}

export default Tshirt
